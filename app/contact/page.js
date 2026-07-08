import LegacyPage from "../components/LegacyPage";

export const metadata = {
  title: "联系 | IRIS Device & Health",
};

const html = "<div class=\"home-nav-strip\">\n    <a href=\"/\"><img class=\"home-logo\" src=\"/assets/logo-large.png\" alt=\"IRIS Device & Health\" /></a>\n    <div class=\"home-nav-links\" aria-label=\"主导航\">\n      <a class=\"home-nav-link\" href=\"/\">首页</a>\n      <a class=\"home-nav-link\" href=\"/services\">服务</a>\n      <a class=\"home-nav-link\" href=\"/how-it-works\">流程</a>\n      <a class=\"home-nav-link\" href=\"/resources\">资源</a>\n      <a class=\"home-nav-link\" href=\"/pricing\">定价</a>\n      <a class=\"home-nav-link\" href=\"/contact\" style=\"color:var(--iris-blue);font-weight:800;\">联系</a>\n    </div>\n    <div></div>\n  </div>\n\n  <div class=\"home-band\" style=\"min-height:calc(100vh - 86px);display:flex;align-items:center;\">\n    <div class=\"home-band-inner\">\n      <div>\n        <h2>准备停止猜测 FDA 合规了吗？</h2>\n        <p>从 7 个问题的产品诊断开始，为你的 Amazon、TikTok Shop 或 Shopify 健康产品获得更清晰的路径。</p>\n      </div>\n      <a class=\"btn-primary\" style=\"text-decoration:none;display:inline-flex;align-items:center;justify-content:center;\" href=\"/pricing\">我的产品被下架了 <i class=\"ti ti-arrow-right\"></i></a>\n    </div>\n  </div>";
const scripts = [];

export default function Page() {
  return <LegacyPage html={html} scripts={scripts} />;
}
