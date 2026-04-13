import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f8fc] px-6">
      <div className="w-full max-w-2xl rounded-[28px] bg-white px-10 py-14 text-center shadow-xl">
        
        {/* 타이틀 */}
        <h1 className="text-3xl font-bold leading-tight text-[#2f3a63] sm:text-4xl lg:text-4xl">
          문의가 정상적으로 접수되었습니다
        </h1>

        {/* 설명 */}
        <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          입력해주신 내용을 확인 후<br />
          빠르게 연락드리겠습니다.
        </p>

        {/* 보조 안내 */}
        <p className="mt-4 text-sm text-slate-500">
          보통 영업일 기준 1~2시간 이내 회신드립니다.
        </p>

        {/* 버튼 */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex w-full max-w-[220px] items-center justify-center rounded-full bg-[#2f3a63] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90"
          >
            홈으로 이동
          </Link>

          <a
            href="https://open.kakao.com/me/love_autumnsky" // ← 너 카톡 링크 넣어
            target="_blank"
            className="inline-flex w-full max-w-[220px] items-center justify-center rounded-full bg-[#FEE500] px-6 py-3 text-base font-semibold text-black shadow-md transition hover:opacity-90"
          >
            카카오톡 문의
          </a>
        </div>
      </div>
    </div>
  );
}