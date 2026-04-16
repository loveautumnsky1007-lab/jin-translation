"use client";

import Header from "../../components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutUsPage() {
  
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 640);
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="bg-[#eef1fb]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
             <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#3f4b74] to-[#6c7bd9] px-5 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur transition hover:shadow-lg">
  Professional Translation Service
</p>

            <div className="flex items-center gap-3">
              <Image
                src="/kj-logo.png"
                alt="KJ 로고"
                width={36}
                height={36}
                className="rounded"
              />
              <h1 className="text-3xl font-bold leading-tight text-[#2f3a63] sm:text-4xl lg:text-5xl">
                국제자문번역행정사사무소 소개
              </h1>
            </div>

            <p className="mt-6 max-w-5xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
  영문 번역, 국문 번역확인 증명서, 기업번역, 법원통번역,
  아포스티유 및 대사관 인증까지{" "}
  <br className="hidden sm:block" />
  정확하고 신속하게 안내하는 전문 번역 행정사 사무소입니다.
  <br />
  <br />

  제출 목적과 문서 종류에 따라 필요한 번역, 확인서 발급,
  인증 절차가 달라질 수 있으며{" "}
  <br className="hidden sm:block" />
  각 서류의 성격에 맞춘 실무 중심의 안내와 번역 서비스를 제공합니다.
</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
<div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white to-[#f6f8ff] p-8 shadow-[0_8px_24px_rgba(47,58,99,0.06)]">              <h2 className="text-2xl font-bold text-[#2f3a63]">
                전문 자격 및 경력
              </h2>

              <div className="mt-6 space-y-3 leading-7 text-slate-600">
                <p>◈ 외국어(영어)번역행정사</p>
                <p>◈ 미국공인회계사 (AICPA)</p>
                <p>◈ 미국주립대 석사 (MBA)</p>
                <p>◈ 조선소, 제조업, 금융기관 등 근무</p>
                <p>◈ 법원 통번역인</p>
              </div>
            </div>

<div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white to-[#f6f8ff] p-8 shadow-[0_8px_24px_rgba(47,58,99,0.06)]">              <h2 className="text-2xl font-bold text-[#2f3a63]">업무 범위</h2>

              <div className="mt-6 space-y-3 leading-7 text-slate-600">
                <p>· 영문 번역 / 사실확인서 발급</p>
                <p>· 국문 번역확인 증명서 발급</p>
                <p>· 기업번역 서비스</p>
                <p>· 법원통번역 / 아포스티유 / 대사관인증</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
  <div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-[#f8faff] to-[#eef2ff] p-8 shadow-[0_10px_30px_rgba(47,58,99,0.08)]">
<div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      
  <div className="flex flex-col justify-center">
    

    <h2 className="mt-4 text-2xl font-bold text-[#2f3a63]">
      전문성과 신뢰를 바탕으로
    </h2>

    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
      국제자문번역행정사사무소는 <br />번역 행정 실무뿐 아니라 <br />회계, 경영, 산업 현장 경험을 바탕으로 <br />다양한 문서의 성격과 제출 목적을 <br />정확하게 이해하고 안내합니다.
      <br /><br />
      개인 서류부터 기업 문서, <br />법원 관련 문서까지 폭넓게 대응하며 <br />단순 번역을 넘어 실제 제출과 활용까지 고려한<br /> 실무형 서비스를 제공합니다.<br /><br />
      각 기관 및 제출처의 요구사항과 절차를 충분히 고려하여 <br /> 
불필요한 수정이나 지연 없이 원활하게 진행될 수 있도록 안내드립니다.  
    </p>
  </div>

      <div className="flex justify-center lg:justify-end">
        <div className="rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <img
            src="/certificate.png"
            alt="행정사 자격증"
            className="w-full max-w-[360px] rounded-xl object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

        <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-[28px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#2f3a63]">명함</h2>

            <div className="mt-8 hidden justify-center lg:flex">
  <div className="w-full max-w-5xl">
    <img
      src="/business_card_lee_kim.png"
      alt="명함"
      className="w-full object-contain rounded-xl shadow-md"
    />
  </div>
</div>

            <div className="mt-8 flex flex-col gap-4 lg:hidden">
              <img
                src="/business_card_lee.png"
                alt="이호진 명함"
                className="w-full object-contain"
              />
              <img
                src="/business_card_kim.png"
                alt="김다솜 명함"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
    <div className="rounded-[26px] bg-[#3f4b74] px-6 py-8 text-white shadow-lg sm:px-8 lg:px-10 lg:py-10">
      <div className="max-w-xl">
        <h2 className="text-xl font-bold sm:text-2xl">
          빠른 상담 안내
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-200">
          제출 목적과 문서 종류에 따라 필요한 번역, 확인서 발급, 인증 절차가 달라질 수 있습니다. <br/>
          견적문의하기 또는 카카오톡으로 문의해주시면 빠르게 안내해드립니다.
        </p>
      </div>

     <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
{isMobile ? (
  <a
    href="tel:01062619885"
    className="flex items-center justify-center rounded-xl border border-white/15 bg-[#54618d] px-4 py-3 text-sm font-medium text-white shadow-sm"
  >
    전화 상담 : 010-6261-9885
  </a>
) : (
  <div className="flex items-center justify-center rounded-xl border border-white/15 bg-[#54618d] px-4 py-3 text-sm font-medium text-white shadow-sm">
    전화 상담 : 010-6261-9885
  </div>
)}
{isMobile ? (
  <a
    href="/apply"
    className="flex items-center justify-center rounded-xl border border-white/15 bg-[#54618d] px- py-3 text-sm font-medium text-white shadow-sm"
  >
    견적 문의하기
  </a>
) : (
   <a
    href="/apply"
    className="flex items-center justify-center rounded-xl border border-white/15 bg-[#54618d] px- py-3 text-sm font-medium text-white shadow-sm"
  >
    견적 문의하기
  </a>
)}

  <a
    href="https://open.kakao.com/me/love_autumnsky"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-4 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-95"
  >
    <img src="/kakao.png" className="h-4 w-4" alt="카카오톡" />
    카카오톡 상담
  </a>

  <a
    href={
      isMobile
        ? "https://m.blog.naver.com/PostList.naver?blogId=skytruthlee"
        : "https://blog.naver.com/PostList.naver?blogId=skytruthlee"
    }
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-xl bg-[#03C75A] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
  >
    <img src="/naver.png" className="h-4 w-4" alt="블로그 방문" />
    블로그 방문
  </a>
</div>
    </div>
  </div>
</section>
      </main>
    </div>
  );
}