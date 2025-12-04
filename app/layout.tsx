import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企業服務媒合平台 - Dave App Store",
  description: "專業的企業服務媒合平台，提供企業服務上架、評價、點數管理等功能",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
}

