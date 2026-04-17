import Link from "next/link";
import Header from "../../components/Header";
import { posts } from "../data/posts";

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <Header />

      <main>
        <section className="bg-gradient-to-b from-[#eef1fb] to-[#f7f8fc]">
          <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8">
            <p className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#3f4b74] to-[#6c7bd9] px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm">
              INFORMATION
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#2f3a63] sm:text-4xl">
              번역 · 인증 정보
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              아포스티유, 번역공증, 제출서류, 실제 사례 등
              번역 및 인증 관련 정보를 안내드립니다.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-10 lg:px-8">
          <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(47,58,99,0.06)]">
            <div className="border-b border-slate-200 bg-gradient-to-r from-[#f8faff] to-white px-6 py-4">
              <h2 className="text-lg font-bold text-[#2f3a63]">전체 글</h2>
            </div>

            <div>
              {posts.map((post, index) => (
                <Link
                  key={post.detail}
                  href={`/posts/${post.detail}`}
                  className={`grid grid-cols-[1fr_110px] items-center gap-4 px-6 py-5 text-sm transition duration-200 hover:bg-[#f8faff] ${
                    index !== posts.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="min-w-0">
<div className="mt-3 mb-3 flex items-center gap-2">                      <span className="inline-flex rounded-full bg-[#eef2ff] px-2.5 py-1 text-[11px] font-semibold text-[#3f4b74]">
                        {post.category}
                      </span>
                    </div>

                    <div className="truncate text-[17px] font-bold text-[#2f3a63] transition hover:text-[#3f4b74] sm:text-lg">
                      {post.title}
                    </div>
                  </div>

                  <div className="shrink-0 text-right text-sm font-medium text-slate-400">
                    {post.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}