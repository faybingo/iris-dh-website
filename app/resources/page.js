import LegacyPage from "../components/LegacyPage";

export const metadata = {
  title: "资源 | IRIS Device & Health",
};

const html = "<div class=\"home-nav-strip\">\n    <a href=\"/\"><img class=\"home-logo\" src=\"/assets/logo-large.png\" alt=\"IRIS Device & Health\" /></a>\n    <div class=\"home-nav-links\" aria-label=\"主导航\">\n      <a class=\"home-nav-link\" href=\"/\">首页</a>\n      <a class=\"home-nav-link\" href=\"/services\">服务</a>\n      <a class=\"home-nav-link\" href=\"/how-it-works\">流程</a>\n      <a class=\"home-nav-link\" href=\"/resources\" style=\"color:var(--iris-blue);font-weight:800;\">资源</a>\n      <a class=\"home-nav-link\" href=\"/pricing\">定价</a>\n      <a class=\"home-nav-link\" href=\"/contact\">联系</a>\n    </div>\n    <div></div>\n  </div>\n\n  <div class=\"home-section\">\n    <div class=\"home-section-inner\">\n      <div class=\"section-kicker\">免费资源</div>\n      <h2 class=\"section-title\">免费下载 FDA 合规准备资料。</h2>\n      <div class=\"resource-grid\">\n        <div class=\"resource-card\">\n          <i class=\"ti ti-file-check\" aria-hidden=\"true\"></i>\n          <h3>FDA 检查与合规准备自查表</h3>\n          <p>一份中文自查表，帮助你在平台审核或法规检查前准备 FDA 检查与基础合规事项。</p>\n          <a class=\"download-link\" href=\"/assets/fda-inspection-compliance-checklist.pdf\" download>免费下载 <i class=\"ti ti-download\" aria-hidden=\"true\"></i></a>\n        </div>\n        <div class=\"resource-card\">\n          <i class=\"ti ti-file-certificate\" aria-hidden=\"true\"></i>\n          <h3>中文 Design Control 指南</h3>\n          <p>一份中文 Design Control 参考资料，适合正在开发健康、Wellness、美容仪或医疗器械产品的团队。</p>\n          <a class=\"download-link\" href=\"/assets/design-control-cn.pdf\" download>免费下载 <i class=\"ti ti-download\" aria-hidden=\"true\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>";
const scripts = [];

export default function Page() {
  return <LegacyPage html={html} scripts={scripts} />;
}
