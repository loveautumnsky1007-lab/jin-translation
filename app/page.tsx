import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#eef1fb] to-white">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="max-w-5xl">
               <div className="flex items-center gap-2 mb-4">
    <span className="text-sm text-[#2f3a63] font-semibold">
      행정안전부 공인 · 대한외국어번역행정사협회
    </span>
  </div>
              <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-[#3f4b74] shadow-sm">
                번역 · 공증 · 아포스티유 · 대사관인증
              </p>
              <h1 className="text-4xl font-bold leading-tight text-[#2f3a63] sm:text-5xl">
                정확하고 신속한
                <br />
                번역/인증 서비스를 제공합니다
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                개인 문서부터 기업 문서까지, 제출 목적에 맞는 번역과 확인서 발급,
                아포스티유 및 대사관 인증까지 한 번에 안내해드립니다.
              </p>
<div className="mt-6 space-y-2 text-base text-slate-600">
  <p>-  외국어(영어) 번역 행정사</p>
  <p>-  미국공인회계사 (AICPA)</p>
  <p>-  미국 주립대 석사 (MBA)</p>
  <p>-  법원 통·번역인</p>
  <p>-  조선소·제조업·금융기관 근무</p>
</div>
              <div className="mt-8 flex flex-wrap gap-4">
                
              <a
  href="https://open.kakao.com/me/love_autumnsky"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-[#3f4b74] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
>
  상담 문의하기
</a>

<a
  href="https://blog.naver.com/PostList.naver?blogId=skytruthlee"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-[#3f4b74] px-6 py-3 text-sm font-semibold text-[#3f4b74] transition hover:bg-[#3f4b74] hover:text-white"
>
  사례 보기
</a>

<a
    href="https://open.kakao.com/me/love_autumnsky"
    target="_blank"
    rel="noopener noreferrer"
    className="ml-auto rounded-full bg-[#FEE500] px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:brightness-95"
  >
    카카오톡 문의하기
  </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#2f3a63]">주요 서비스</h2>
            <p className="mt-3 text-slate-600">
              상단 메뉴에 마우스를 올리면 각 서비스 하위 항목을 바로 확인할 수 있도록 구성했습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "영문 번역/사실확인서 발급",
                desc: "가족관계증명서, 기본증명서, 혼인증명서, 생활기록부 등 개인 제출 문서를 안내합니다.",
              },
              {
                title: "국문 번역확인 증명서 발급",
                desc: "해외 서류의 국내 제출용 번역확인 증명서 발급 항목을 안내합니다.",
              },
              {
                title: "기업번역",
                desc: "재무제표, 감사보고서, 법률계약서, 법인 서류 등 기업 문서 번역 서비스를 제공합니다.",
              },
              {
                title: "법원통번역 / 아포스티유 / 대사관인증",
                desc: "판결문, 소장, 인증 대행, 번역공증 대행 및 비즈니스 통역을 지원합니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-full bg-[#e9edf8] px-4 py-1 text-sm font-semibold text-[#3f4b74]">
                  Service
                </div>
                <h3 className="text-xl font-bold text-[#2f3a63]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-[28px] bg-[#3f4b74] px-8 py-10 text-white shadow-lg">
              <h2 className="text-2xl font-bold">빠른 상담 안내</h2>
              <p className="mt-3 text-sm text-slate-200">
                제출 국가, 문서 종류, 희망 일정만 알려주시면 진행 가능 여부를 빠르게 안내해드립니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="rounded-full bg-white/10 px-4 py-2">전화: 010-8240-0000</div>
                <div className="rounded-full bg-white/10 px-4 py-2">이메일: love_autumnsky@naver.com</div>
                 {/* 카카오톡 상담하기 */}
  <a
    href="https://open.kakao.com/me/love_autumnsky"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#FEE500] px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:brightness-95"
  >
    카카오톡 상담하기
  </a>

  {/* 블로그 방문 */}
  <a
    href="https://blog.naver.com/PostList.naver?blogId=skytruthlee"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#03C75A] px-5 py-2 text-sm font-semibold text-black shadow-md transition hover:brightness-90"
  >
    블로그 방문 (사례보기)
  </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}