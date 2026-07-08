import "./globals.css";

export const metadata = {
  title: "IRIS Device & Health",
  description: "FDA 医疗器械合规服务",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
