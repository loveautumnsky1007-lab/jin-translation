import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Footer from "../components/Footer"; // 경로 맞게 수정

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "국제자문번역행정사사무소 | 분당 판교 번역·공증·아포스티유·대사관 인증",
  description:
    "분당 판교 번역행정사 사무소. 일반번역·기업번역·공증·아포스티유·대사관 인증 서비스를 제공합니다.",

  openGraph: {
    title: "국제자문번역행정사사무소",
    description:"분당 판교 번역행정사 사무소. 일반번역·기업번역·공증·아포스티유·대사관 인증 서비스를 제공합니다.",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
            <Analytics />
      <body className="min-h-full flex flex-col">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "국제자문번역행정사사무소",
      url: "https://kjtranslate.com",
      image: "https://kjtranslate.com/opengraph2.png",
      logo: "https://kjtranslate.com/kj-logo.png",
      description:
        "분당 판교 영문 번역, 국문 번역확인 증명서, 기업번역, 법원통번역, 아포스티유, 대사관 인증 서비스를 제공합니다.",
    }),
  }}
/>
        
        {children}
        
      <Footer />
      </body>
    </html>
  );
}
