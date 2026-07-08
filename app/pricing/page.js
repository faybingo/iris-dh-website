import LegacyPage from "../components/LegacyPage";

export const metadata = {
  title: "定价 | IRIS Device & Health",
};

const html = "<div class=\"home-nav-strip\">\n    <a href=\"/\"><img class=\"home-logo\" src=\"/assets/logo-large.png\" alt=\"IRIS Device & Health\" /></a>\n    <div class=\"home-nav-links\" aria-label=\"主导航\">\n      <a class=\"home-nav-link\" href=\"/\">首页</a>\n      <a class=\"home-nav-link\" href=\"/services\">服务</a>\n      <a class=\"home-nav-link\" href=\"/how-it-works\">流程</a>\n      <a class=\"home-nav-link\" href=\"/resources\">资源</a>\n      <a class=\"home-nav-link\" href=\"/pricing\" style=\"color:var(--iris-blue);font-weight:800;\">定价</a>\n      <a class=\"home-nav-link\" href=\"/contact\">联系</a>\n    </div>\n    <div></div>\n  </div>\n\n  <div class=\"home-section\">\n    <div class=\"home-section-inner\">\n      <div class=\"section-kicker\">定价</div>\n      <h2 class=\"section-title\">Amazon / 平台链接下架与 FDA 文件支持</h2>\n      <div class=\"pricing-table\" aria-label=\"服务价格表\">\n        <div class=\"pricing-row\"><div class=\"pricing-service\">Amazon要求FDA文件怎么办？</div><div class=\"pricing-price\">$199</div></div>\n        <div class=\"pricing-row\"><div class=\"pricing-service\">Amazon邮件分析</div><div class=\"pricing-price\">$199</div></div>\n        <div class=\"pricing-row\"><div class=\"pricing-service\">Listing下架原因分析</div><div class=\"pricing-price\">$399</div></div>\n        <div class=\"pricing-row\"><div class=\"pricing-service\">申诉信专家审核</div><div class=\"pricing-price\">$699</div></div>\n        <div class=\"pricing-row\"><div class=\"pricing-service\">申述服务全套</div><div class=\"pricing-price\">from $999</div></div>\n      </div>\n    </div>\n  </div>";
const scripts = [];

export default function Page() {
  return <LegacyPage html={html} scripts={scripts} />;
}
