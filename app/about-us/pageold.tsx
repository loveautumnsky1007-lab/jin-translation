import Header from "../../components/Header";
import Image from "next/image";
export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="bg-[#eef1fb]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <p className="mb-4 inline-block rounded-full bg-[#ccd4eb] px-6 py-1 text-sm font-medium text-[#3f4b74] shadow-sm">
                About Us
              </p>
           <div className="flex items-center gap-3">
  <Image
    src="/kj-logo.png"
    alt="KJ 로고"
    width={40}
    height={40}
    className="rounded"
  />
  <h1 className="text-3xl font-bold leading-tight text-[#2f3a63] sm:text-4xl lg:text-5xl">
    국제자문번역행정사사무소 소개
  </h1>
</div>

            <p className="mt-6 max-w-9xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              영문 번역, 국문 번역확인 증명서, 기업번역, 법원통번역, 아포스티유 및 대사관 인증까지
              정확하고 신속하게 안내하는 전문 번역 행정사 사무소입니다. 
               <br/><br/>제출 목적과 문서 종류에 따라 필요한 번역, 확인서 발급, 인증 절차가 달라질 수 있습니다.
              <br/>견적문의하기 또는 카카오톡으로 문의해주시면 빠르게 안내해드립니다.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#2f3a63]">전문 자격 및 경력</h2>

              <div className="mt-6 space-y-3 leading-7 text-slate-600">
                <p>· 외국어(영어) 번역 행정사</p>
                <p>· 미국공인회계사 (AICPA)</p>
                <p>· 미국 주립대 석사 (MBA)</p>
                <p>· 법원 통·번역인</p>
                <p>· 조선소·제조업·금융기관 근무 경력</p>
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#2f3a63]">업무 범위</h2>

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
  <div className="rounded-[28px] bg-white p-8 shadow-sm">
    <h2 className="text-2xl font-bold text-[#2f3a63]">명함</h2>
    
{/* PC (lg 이상) → 합쳐진 명함 */}
<div className="hidden lg:flex justify-center mt-8">
  <div className="w-full lg:max-w-4xl p-2">
    <img
      src="/business_card_lee_kim.png"
      alt="명함"
      className="w-full object-contain"
    />
  </div>
</div>

{/* 모바일 (lg 미만) → 명함 2개 */}
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

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="rounded-[28px] bg-[#3f4b74] px-8 py-10 text-white shadow-lg">
              <h2 className="text-2xl font-bold">상담 및 신청 안내</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
                제출 목적과 문서 종류에 따라 필요한 번역, 확인서 발급, 인증 절차가 달라질 수 있습니다.
                신청폼 또는 카카오톡으로 문의해주시면 빠르게 안내해드립니다.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2f3a63] transition hover:opacity-90"
                >
                  견적 문의하기
                </a>

                <a
                  href="https://open.kakao.com/me/love_autumnsky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#FEE500] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
                >
                  카카오톡 문의하기
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}