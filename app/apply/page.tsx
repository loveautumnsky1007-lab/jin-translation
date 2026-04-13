import Header from "../../components/Header";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="bg-[#eef1fb]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
            <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-medium text-[#3f4b74] shadow-sm">
              신청폼
            </p>

            <h1 className="text-3xl font-bold leading-tight text-[#2f3a63] sm:text-4xl lg:text-5xl">
              번역 / 인증 신청 접수
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              아래 내용을 입력해주시면 확인 후 메일 또는 연락처로 안내드립니다.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <div className="rounded-[28px] bg-white p-8 shadow-sm">
            <form
              action="https://formsubmit.co/skytruthlee@naver.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="[홈페이지 신청폼] 신규 문의" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://kjtranslate.com/apply?success=1"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                    성함
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                    placeholder="성함을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                    연락처
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                    placeholder="연락처를 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                  placeholder="이메일을 입력해주세요"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                    서비스 종류
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                  >
                    <option>영문 번역 / 사실확인서 발급</option>
                    <option>국문 번역확인 증명서 발급</option>
                    <option>기업번역 서비스</option>
                    <option>법원통번역 / 아포스티유 / 대사관인증</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                    제출 국가
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                    placeholder="예: 미국, 호주, 중국"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                  문서 종류
                </label>
                <input
                  type="text"
                  name="document_type"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                  placeholder="예: 가족관계증명서, 졸업증명서, 법인서류"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#2f3a63]">
                  요청 내용
                </label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-[#3f4b74]"
                  placeholder="상세 요청 내용을 입력해주세요"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-slate-500">
                  접수 후 확인하여 순차적으로 안내드립니다.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#2f3a63] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  신청하기
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}