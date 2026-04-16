"use client";
import Header from "../components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import NaverMap from "../components/NaverMap";

export default function Home() {
  const [openModal, setOpenModal] = useState<"terms" | "privacy" | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="hero-bg relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[420px] sm:min-h-[500px]">
<div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/85 via-white/10 to-transparent" />      
    <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="max-w-9xl">
            
              <p className="mb-4 inline-block rounded-full bg-gradient-to-r from-[#3f4b74] to-[#6c7bd9] px-5 py-1.5 text-xs font-medium tracking-wide text-white shadow-md backdrop-blur transition hover:shadow-lg">
                 행정안전부 공인 · 대한외국어번역행정사협회
              </p>
              <h1 className="text-3xl font-semibold leading-[1.3] tracking-tight text-[#2f3a63] sm:text-4xl lg:text-5xl">
                정확성과 신속성을 갖춘 <br />
                전문 번역 · 인증 서비스

              </h1><p className="mt-6 space-y-2 text-base text-[#1f2a44] leading-7 font-semibold">
  개인 문서부터 기업 문서까지 <br />제출 목적에 맞는 번역과 확인서 발급,  <br />아포스티유 및 대사관 인증을 한 번에 제공합니다.
</p>

<div className="mt-6 space-y-2 text-base text-[#1f2a44] leading-7 font-semibold"> 
   <p>- 외국어(영어) 번역 행정사</p>
  <p>- 미국공인회계사 (AICPA)</p>
  <p>- 미국 주립대 석사 (MBA)</p>
  <p>- 법원 통·번역인</p>
  <p>- 조선소·제조업·금융기관 근무</p>
  <p>- 당일번역 · 급행번역 · 익일수령</p>
</div>
              <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">


                  <Link
                    href="/apply"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:scale-[1.03] hover:shadow-lg active:scale-[0.98] lg:w-[190px] lg:text-sm"                  >
                    견적 문의하기
                  </Link>

                  <a
                    href={
                      isMobile
                        ? "https://m.blog.naver.com/PostList.naver?blogId=skytruthlee"
                        : "https://blog.naver.com/PostList.naver?blogId=skytruthlee"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full border border-[#d6dcf5] bg-[#eef2ff] px-6 py-3 text-base font-semibold text-[#3f4b74] transition hover:bg-[#e4eafe] hover:border-[#c7d0f0] lg:w-[190px] lg:text-sm"
                  >
                    사례 보기 ↗
                  </a>
                </div>
                <div className="flex flex-col gap-3 lg:items-end">


                  <a
                    href="https://open.kakao.com/me/love_autumnsky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-full bg-[#FEE500] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:brightness-95 lg:w-[190px] lg:py-3 lg:text-sm"
                  >
                    <img
                      src="/kakao.png"
                      alt="카카오톡"
                      className="mr-2 h-4 w-4 object-contain"
                    />
                    카카오톡 상담
                  </a>

                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f5f7fc] py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#2f3a63]">주요 서비스</h2>
              <p className="mt-3 text-sm text-slate-500 sm:text-base">
                제출 목적에 맞는 전문 번역 및 인증 서비스를 제공합니다.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  no: "01",
                  title: "공문서 번역 및 확인서 발급",
                  desc: {
                    mobile: "가족관계증명서, 혼인증명서, 생활기록부 등\n개인 제출용 각종 증명서 번역 및 확인서 발급 서비스를 제공합니다.",
                    pc: "가족관계증명서, 혼인증명서, 생활기록부 등 개인 제출용 각종 증명서 번역 및 확인서 발급 서비스를 제공합니다.",
                  },
                  link: isMobile
                    ? "https://m.blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22"
                    : "https://blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22",
                },
                {
                  no: "02",
                  title: "국문 번역확인 증명서",
                  desc: {
                    mobile: "해외 아포스티유, 해외 세무자료, 해외 학위증명서 등\n해외 서류의 국내 제출을 위한 번역확인 증명서를 발급합니다.",
                    pc: "해외 아포스티유, 해외 세무자료, 해외 학위증명서 등 해외 서류의 국내 제출을 위한 번역확인 증명서를 발급합니다.",
                  },
                  link: isMobile
                    ? "https://m.blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22"
                    : "https://blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22",
                },
                {
                  no: "03",
                  title: "기업 문서 번역",
                  desc: {
                    mobile: "재무제표, 감사보고서, 법률계약서, 법인 서류, 계약서 등\n기업 및 법인 문서 번역을 전문적으로 수행합니다.",
                    pc: "재무제표, 감사보고서, 법률계약서, 법인 서류, 계약서 등 기업 및 법인 문서 번역을 전문적으로 수행합니다.",
                  },
                  link: isMobile
                    ? "https://m.blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=10"
                    : "https://blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=10",
                },
                {
                  no: "04",
                  title: "법원통번역 / 대사관인증",
                  desc: {
                    mobile: "아포스티유, 판결문, 소장, 인증 대행,\n번역공증 대행 및 비즈니스 통역을 지원합니다.",
                    pc: "아포스티유, 판결문, 소장, 인증 대행, 번역공증 대행 및 비즈니스 통역을 지원합니다.",
                  },
                  link: isMobile
                    ? "https://m.blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=27"
                    : "https://blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=27",
                },
              ].map((item) => (
                <a
                  key={item.no}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#cfd6ea] hover:bg-[#fbfcff] hover:shadow-xl"
                >
                  <div className="h-8.5 w-full bg-gradient-to-r from-[#3f4b74] to-[#6c7bd9]" />

                  <div className="px-3 py-2 sm:px-6 sm:py-8 lg:py-10">
                    <div className="mb-3 flex justify-center">
                      <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#3f4b74] text-sm sm:text-base font-bold text-white shadow-sm">
                        {item.no}
                      </div>
                    </div>

<h3 className="text-center text-base sm:text-xl font-bold leading-snug text-[#2f3a63] lg:mb-4">                      {item.title}
                    </h3>

                    <p className="mt-3 text-center lg:text-left text-xs sm:text-sm leading-6 text-slate-600 lg:min-h-[110px] break-keep whitespace-pre-line">
                      {isMobile ? item.desc.mobile : item.desc.pc}
                    </p>
                    <div className="mt-auto pt-4 sm:pt-6 flex justify-center">
                      <span className="inline-flex items-center rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-semibold text-[#3f4b74] transition group-hover:bg-[#e4eafe]">
                        실제 사례 보기 ↗
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      <section className="bg-white py-14">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center lg:mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-[#2f3a63]">
        오시는 길
      </h2>
      <p className="mt-3 text-sm text-slate-500 sm:text-base">
        서현동 사무실 위치와 방문 안내를 확인하실 수 있습니다.
      </p>
    </div>

    <div className="rounded-[28px] border border-slate-200 bg-[#f8faff] p-4 shadow-sm sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* 지도 */}
<div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm h-[300px] sm:h-[380px] lg:h-[450px]">
    <NaverMap
    lat={37.3859}
    lng={127.1233}
    title="국제자문번역행정사사무소"
  />
</div>
        {/* 정보 */}
<div className="hidden lg:flex flex-col justify-center rounded-[24px] bg-white px-5 py-6 shadow-sm sm:px-6 lg:px-8">
            <div className="inline-flex w-fit rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#3f4b74]">
            OFFICE INFO
          </div>

          <h3 className="mt-4 text-2xl font-bold text-[#2f3a63]">
            국제자문번역행정사사무소
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            경기도 성남시 분당구 황새울로 351번길 10, 401-B12
            <br />
            (서현동, 여암빌딩)
          </p>

          <div className="my-6 h-px w-full bg-slate-200" />

          <div className="space-y-3 text-sm leading-7 text-slate-600">
          <div className="space-y-3 text-sm leading-7 text-slate-600">
  <p className="flex items-center gap-2">
    판교 테크노밸리 창조경제 혁신센터 사무실에 이어 서현동 사무실을 신규 오픈했습니다.
  </p>

  <p className="flex items-center gap-2">
    서현점 주차는 풍림아이원에서 2시간 무료 등록 가능합니다.
  </p>

  <p className="flex items-center gap-2">
    방문 전에는 미리 연락주세요.
  </p>
</div>
          </div>

          <a
            href="https://map.naver.com/p/search/%EA%B5%AD%EC%A0%9C%EC%9E%90%EB%AC%B8%EB%B2%88%EC%97%AD%ED%96%89%EC%A0%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C/place/1786107100?c=15.00,0,0,0,dh&isCorrectAnswer=true&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604130300&locale=ko&svcName=map_pcv5&searchText=%EA%B5%AD%EC%A0%9C%EC%9E%90%EB%AC%B8%EB%B2%88%EC%97%AD%ED%96%89%EC%A0%95%EC%82%AC%EC%82%AC%EB%AC%B4%EC%86%8C"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#03C75A] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            <img
              src="/naver_map.png"
              alt="지도"
              className="mr-2 h-4 w-4 object-contain"
            />
            네이버 지도에서 보기
          </a>
        </div>
      </div>
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

      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
          <div className="relative max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 rounded-full border px-3 py-1 text-sm text-gray-600 hover:bg-gray-100"
            >
              닫기
            </button>

            {openModal === "terms" && (
              <div className="pr-6">
                <h2 className="mb-4 text-2xl font-bold text-[#2f3a63]">이용약관</h2>

                <div className="space-y-4 text-sm leading-7 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900">제1조 목적</h3>
                    <p>
                      본 약관은 국제자문번역행정사사무소 홈페이지에서 제공하는 서비스의 이용과 관련하여
                      필요한 기본적인 사항을 정하는 것을 목적으로 합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">제2조 서비스 내용</h3>
                    <p>
                      본 사이트는 번역, 공증, 아포스티유, 대사관 인증, 상담 문의 및 관련 정보 제공 서비스를
                      제공합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">제3조 이용자의 의무</h3>
                    <p>
                      이용자는 관계 법령 및 본 약관을 준수하여야 하며, 허위 정보 입력이나 타인의 권리를 침해하는
                      행위를 하여서는 안 됩니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">제4조 저작권</h3>
                    <p>
                      본 사이트에 게시된 텍스트, 이미지, 자료 등의 저작권은 국제자문번역행정사사무소에 있으며,
                      사전 동의 없이 무단 복제, 배포, 전송할 수 없습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">제5조 면책사항</h3>
                    <p>
                      본 사이트에 게시된 정보는 일반적인 안내를 위한 것이며, 개별 사안에 따라 실제 절차 및 요구
                      서류가 달라질 수 있습니다. 구체적인 진행은 별도 상담을 통해 확인해주시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {openModal === "privacy" && (
              <div className="pr-6">
                <h2 className="mb-4 text-2xl font-bold text-[#2f3a63]">개인정보처리방침</h2>

                <div className="space-y-4 text-sm leading-7 text-gray-700">
                  <div>
                    <h3 className="font-semibold text-gray-900">1. 수집하는 개인정보 항목</h3>
                    <p>
                      국제자문번역행정사사무소는 상담 문의 과정에서 이름, 연락처, 이메일, 문의 내용 등을 수집할 수
                      있습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">2. 개인정보 수집 및 이용 목적</h3>
                    <p>
                      수집한 개인정보는 상담 응대, 서비스 안내, 문의 회신, 진행 가능 여부 확인을 위해 사용됩니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">3. 개인정보 보유 및 이용 기간</h3>
                    <p>
                      개인정보는 수집 및 이용 목적이 달성된 후 지체 없이 파기하는 것을 원칙으로 합니다. 다만,
                      관계 법령에 따라 일정 기간 보관이 필요한 경우 해당 기간 동안 보관할 수 있습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">4. 개인정보의 제3자 제공</h3>
                    <p>
                      국제자문번역행정사사무소는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 다만 법령에
                      근거가 있는 경우는 예외로 합니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">5. 이용자의 권리</h3>
                    <p>
                      이용자는 본인의 개인정보에 대해 열람, 정정, 삭제를 요청할 수 있으며, 관련 문의는 아래 연락처로
                      요청하실 수 있습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">6. 문의처</h3>
                    <p>전화 : 010-6261-9885</p>
                    <p>이메일 : skytruthlee@naver.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>

  );
}