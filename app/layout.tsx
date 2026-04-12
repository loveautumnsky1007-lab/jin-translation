import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "분당 판교 영문 번역, 국문 번역확인 증명서, 기업번역, 법원통번역, 아포스티유, 대사관 인증 서비스를 제공합니다.",

  openGraph: {
    title: "국제자문번역행정사사무소",
    description: "정확하고 신속한 번역/인증 서비스를 제공합니다",
    url: "https://skytruthlee.vercel.app",
    siteName: "국제자문번역행정사사무소",
    images: [
      {
        url: "https://skytruthlee.vercel.app/hero-bgs-thumbnail.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
