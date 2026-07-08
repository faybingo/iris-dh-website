import LegacyPage from "../components/LegacyPage";

export const metadata = {
  title: "流程 | IRIS Device & Health",
};

const html = "<div class=\"home-nav-strip\">\n    <a href=\"/\"><img class=\"home-logo\" src=\"/assets/logo-large.png\" alt=\"IRIS Device & Health\" /></a>\n    <div class=\"home-nav-links\" aria-label=\"主导航\">\n      <a class=\"home-nav-link\" href=\"/\">首页</a>\n      <a class=\"home-nav-link\" href=\"/services\">服务</a>\n      <a class=\"home-nav-link\" href=\"/how-it-works\" style=\"color:var(--iris-blue);font-weight:800;\">流程</a>\n      <a class=\"home-nav-link\" href=\"/resources\">资源</a>\n      <a class=\"home-nav-link\" href=\"/pricing\">定价</a>\n      <a class=\"home-nav-link\" href=\"/contact\">联系</a>\n    </div>\n    <div></div>\n  </div>\n\n  <div class=\"home-section\">\n    <div class=\"home-section-inner\">\n      <div class=\"section-kicker\">流程</div>\n      <h2 class=\"section-title\">从产品诊断到平台审核准备方案的五步流程。</h2>\n      <div class=\"steps-grid\">\n        <div class=\"step-card\"><h3>产品诊断</h3><p>回答 7 个引导式问题，涵盖产品功能、开发阶段、人体接触方式、产品声明、软件、生产方式和 FDA 相关历史。</p></div>\n        <div class=\"step-card\"><h3>合规路径</h3><p>梳理可能的 FDA 和平台审核关注点，让你知道优先处理什么。</p></div>\n        <div class=\"step-card\"><h3>材料清单</h3><p>获得需要准备的文件、标签和证明要点清单。</p></div>\n        <div class=\"step-card\"><h3>专家审核</h3><p>专家可审核路径，并指出高风险声明或缺失信息。</p></div>\n        <div class=\"step-card\"><h3>平台审核准备方案</h3><p>用清晰行动方案准备 Amazon、TikTok 或 Shopify 审核材料，减少反复猜测。</p></div>\n      </div>\n    </div>\n  </div>";
const scripts = [];

export default function Page() {
  return <LegacyPage html={html} scripts={scripts} />;
}
