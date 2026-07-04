const OPENAI_API_URL = 'https://api.openai.com/v1/responses';

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 20000) {
        reject(new Error('Request body too large'));
        req.destroy();
      }
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function extractOutputText(data) {
  if (typeof data.output_text === 'string') return data.output_text.trim();
  if (!Array.isArray(data.output)) return '';
  return data.output
    .flatMap(item => Array.isArray(item.content) ? item.content : [])
    .map(part => part.text || '')
    .join('\n')
    .trim();
}

function normalizeAnswers(answers) {
  if (!answers || typeof answers !== 'object') return {};
  return Object.fromEntries(
    Object.entries(answers)
      .map(([key, value]) => [String(key).slice(0, 80), String(value ?? '').slice(0, 500)])
      .filter(([, value]) => value)
  );
}

module.exports = async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'OPENAI_API_KEY is not configured' }));
    return;
  }

  try {
    const rawBody = await readRequestBody(req);
    const payload = rawBody ? JSON.parse(rawBody) : {};
    const answers = normalizeAnswers(payload.answers);

    const openaiResponse = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        max_output_tokens: 900,
        input: [
          {
            role: 'system',
            content: `你是 IRIS Device & Health 的 FDA 医疗器械合规初筛助手。请用中文回答。

任务：根据用户的 7 个问卷答案，生成一个面向 Amazon / TikTok Shop / Shopify 健康产品卖家的免费初步评估。

硬性要求：
1. 第一行必须直接写：初步判断：第 X 类产品 / 或“暂无法判断具体类别”
2. 如果信息不足，不要假装确定；可以写“可能偏向第 I 类/第 II 类方向，需要人工确认”。
3. 不要提供法律意见，不要承诺 FDA 结果，不要写具体 Product Code。
4. 输出结构必须包含：初步判断、风险等级、判断依据、平台风险、建议下一步、免责声明。
5. 语气专业、清晰、适合中国跨境卖家。`
          },
          {
            role: 'user',
            content: `请分析以下免费问卷答案，并生成初步评估：\n${JSON.stringify(answers, null, 2)}`
          }
        ]
      })
    });

    const data = await openaiResponse.json();
    if (!openaiResponse.ok) {
      res.statusCode = openaiResponse.status;
      res.end(JSON.stringify({ error: data.error?.message || 'OpenAI request failed' }));
      return;
    }

    const analysis = extractOutputText(data);
    res.statusCode = 200;
    res.end(JSON.stringify({ analysis }));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: error.message || 'Assessment failed' }));
  }
};
