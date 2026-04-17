import Link from "next/link";
import Header from "../../../components/Header";
import { posts } from "../../data/posts";
import { notFound } from "next/navigation";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ detail: string }>;
}) {
  const { detail } = await params;
  const post = posts.find((p) => p.detail === detail);

  if (!post) notFound();

  const currentIndex = posts.findIndex((p) => p.detail === detail);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="bg-[#eef1fb]">
          <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
            <p className="text-sm text-slate-500">
              <Link href="/" className="hover:text-[#3f4b74]">홈</Link>
              <span className="mx-2">/</span>
              <Link href="/posts" className="hover:text-[#3f4b74]">번역 · 인증 정보</Link>
              <span className="mx-2">/</span>
              <span>{post.category}</span>
            </p>

            <p className="mt-5 inline-flex rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#3f4b74]">
              {post.category}
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-[#2f3a63] sm:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 text-sm text-slate-400">
              {post.date}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
          <article className="rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
            <div className="whitespace-pre-line text-[15px] leading-8 text-slate-700 sm:text-base">
              {post.content}
            </div>
          </article>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold text-slate-400">이전 글</p>
              {prevPost ? (
                <Link
                  href={`/posts/${prevPost.detail}`}
                  className="text-sm font-semibold text-[#2f3a63] hover:text-[#3f4b74]"
                >
                  {prevPost.title}
                </Link>
              ) : (
                <p className="text-sm text-slate-400">이전 글이 없습니다.</p>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-2 text-xs font-semibold text-slate-400">다음 글</p>
              {nextPost ? (
                <Link
                  href={`/posts/${nextPost.detail}`}
                  className="text-sm font-semibold text-[#2f3a63] hover:text-[#3f4b74]"
                >
                  {nextPost.title}
                </Link>
              ) : (
                <p className="text-sm text-slate-400">다음 글이 없습니다.</p>
              )}
            </div>
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-gradient-to-br from-white via-[#f8faff] to-[#eef2ff] px-6 py-8 shadow-sm sm:px-8">
            <h2 className="text-2xl font-bold text-[#2f3a63]">
              번역 및 인증 상담이 필요하신가요?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              문서 종류와 제출 국가에 따라 필요한 절차가 달라질 수 있습니다.
              견적 문의 또는 카카오톡 상담으로 빠르게 안내해드립니다.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
              >
                견적 문의하기
              </Link>

              <a
                href="https://open.kakao.com/me/love_autumnsky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#FEE500] px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-95"
              >
                카카오톡 상담
              </a>

              <Link
                href="/posts"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#3f4b74] transition hover:bg-[#f8faff]"
              >
                목록으로
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}