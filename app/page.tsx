"use client";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [openModal, setOpenModal] = useState<"terms" | "privacy" | null>(null);


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
      <footer className="bg-[#f4f4f4] text-[#333] mt-20 border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 text-center text-sm text-gray-600 leading-6">
          <p className="font-semibold text-gray-800">
            국제자문번역행정사사무소
          </p>

          <p>
            상호 : 국제자문번역행정사사무소 | 대표 : 이호진
          </p>

          <p>
            주소 : 경기도 성남시 분당구 황새울로 351번길 10, 401-B12 (서현동, 여암빌딩)
          </p>

          <p>
            전화 : 010-6261-9885 | 메일 : skytruthlee@naver.com
          </p>

          <p>
            사업자번호 : 404-40-00718
          </p>
<div className="mt-3 flex items-center justify-center gap-2 text-xs">
  <button
    type="button"
    onClick={() => setOpenModal("terms")}
    className="rounded px-2 py-1 text-gray-500 transition hover:bg-gray-200 hover:text-[#2f3a63] cursor-pointer"
  >
    이용약관
  </button>

  <span className="text-gray-300">|</span>

  <button
    type="button"
    onClick={() => setOpenModal("privacy")}
    className="rounded px-2 py-1 text-gray-500 transition hover:bg-gray-200 hover:text-[#2f3a63] cursor-pointer"
  >
    개인정보처리방침
  </button>
</div>

          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} 국제자문번역행정사사무소. All Rights Reserved.
          </p>
        </div>
      </footer>
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