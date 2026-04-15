import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const naverMapKey = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
console.log("NAVER KEY:", JSON.stringify(naverMapKey));
export const metadata: Metadata = {
  title: "국제자문번역행정사사무소 | 분당 판교 번역·공증·아포스티유·대사관 인증",
  description:
    "분당 판교 번역행정사 사무소. 일반번역·기업번역·공증·아포스티유·대사관 인증 서비스를 제공합니다.",
  openGraph: {
    title: "국제자문번역행정사사무소",
    description:
      "분당 판교 번역행정사 사무소. 일반번역·기업번역·공증·아포스티유·대사관 인증 서비스를 제공합니다.",
    url: "https://kjtranslate.com",
    siteName: "국제자문번역행정사사무소",
    images: [
      {
        url: "https://kjtranslate.com/opengraph2.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const naverMapKey =
    process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID?.trim() ?? "";

  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />

        {naverMapKey && (
          <Script
            src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${naverMapKey}`}
            strategy="beforeInteractive"
          />
        )}

        {children}
        <Footer />
      </body>
    </html>
  );
}