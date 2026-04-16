"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const menuItems = [
    {
      title: "영문 번역 / 사실확인서",
      link: isMobile
        ? "https://m.blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22"
        : "https://blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22",
      mobileHint: "사실 확인서 관련 실제 번역 사례를 블로그에서 확인하실 수 있습니다.",
      children: [
        {
          name: "가족 / 기본 / 혼인 증명서",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EA%B0%80%EC%A1%B1"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EA%B0%80%EC%A1%B1&orderBy=date&range=all",
        },
        {
          name: "생활기록부 / 성적증명서",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%83%9D%ED%99%9C"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%83%9D%ED%99%9C&orderBy=date&range=all",
        },
        {
          name: "납세증명 / 금융거래내역 자료",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EA%B8%88%EC%9C%B5"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EA%B8%88%EC%9C%B5&orderBy=date&range=all",
        },
        {
          name: "아포스티유 서류",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%95%84%ED%8F%AC%EC%8A%A4%ED%8B%B0%EC%9C%A0"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%95%84%ED%8F%AC%EC%8A%A4%ED%8B%B0%EC%9C%A0&orderBy=date&range=all",
        },
      ],
    },
    {
      title: "국문 번역확인 증명서",
      link: isMobile
        ? "https://m.blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22"
        : "https://blog.naver.com/PostList.nhn?blogId=skytruthlee&from=postList&categoryNo=22",
      mobileHint: "국문 확인증명서 관련 실제 번역 사례를 블로그에서 확인하실 수 있습니다.",
      children: [
        {
          name: "해외 아포스티유 서류",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%95%84%ED%8F%AC%EC%8A%A4%ED%8B%B0%EC%9C%A0"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%95%84%ED%8F%AC%EC%8A%A4%ED%8B%B0%EC%9C%A0&orderBy=date&range=all",
        },
        {
          name: "해외 학위증",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%ED%95%99%EC%9C%84"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%ED%95%99%EC%9C%84&orderBy=date&range=all",
        },
        {
          name: "해외 출생증명서 / 사망증명서",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%B6%9C%EC%83%9D"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%B6%9C%EC%83%9D&orderBy=date&range=all",
        },
        {
          name: "해외세무 자료 / 해외법률 자료",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EB%B2%95%EB%A5%A0"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EB%B2%95%EB%A5%A0&orderBy=date&range=all",
        },
      ],
    },
    {
      title: "기업번역",
      link: isMobile
        ? "https://m.blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=10"
        : "https://blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=10",
      mobileHint: "기업 문서 관련 실제 번역 사례를 블로그에서 확인하실 수 있습니다.",
      children: [
        {
          name: "재무제표 / 감사보고서",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%9E%AC%EB%AC%B4%EC%A0%9C%ED%91%9C"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%9E%AC%EB%AC%B4%EC%A0%9C%ED%91%9C&orderBy=date&range=all",
        },
        {
          name: "법률 계약서",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EA%B3%84%EC%95%BD"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EA%B3%84%EC%95%BD&orderBy=date&range=all",
        },
        {
          name: "법인등기부등본",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EB%93%B1%EA%B8%B0%EB%B6%80%EB%93%B1%EB%B3%B8"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EB%93%B1%EA%B8%B0%EB%B6%80%EB%93%B1%EB%B3%B8&orderBy=date&range=all",
        },
        {
          name: "정관 / 이사회의사록 / 사업계획",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%A0%95%EA%B4%80"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%A0%95%EA%B4%80&orderBy=date&range=all",
        },
      ],
    },
    {
      title: "법원통번역 / 아포스티유",
      link: isMobile
        ? "https://m.blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=27"
        : "https://blog.naver.com/PostList.naver?blogId=skytruthlee&from=postList&categoryNo=27",
      mobileHint: "법원 문서, 공증 관련 실제 번역 사례를 블로그에서 확인하실 수 있습니다.",
      children: [
        {
          name: "판결문 / 소장 / 법원문서 번역",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option.periodType=all&searchText=%EB%B2%95%EC%9B%90"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EB%B2%95%EC%9B%90&orderBy=date&range=all",
        },
        {
          name: "아포스티유 / 영사확인 / 대사관인증 대행",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option&periodType=all&searchText=%EC%95%84%ED%8F%AC%EC%8A%A4%ED%8B%B0%EC%9C%A0"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EC%95%84%ED%8F%AC%EC%8A%A4%ED%8B%B0%EC%9C%A0&orderBy=date&range=all",
        },
        {
          name: "번역공증 대행",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option.periodType=all&searchText=%EA%B3%B5%EC%A6%9D"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%EA%B3%B5%EC%A6%9D&orderBy=date&range=all",
        },
        {
          name: "각종 일반 문서 번역 및 비즈니스 일반 통역",
          link: isMobile
            ? "https://m.blog.naver.com/PostSearchList.naver?blogId=skytruthlee&orderType=date&pageAccess=option.periodType=all&searchText=%ED%86%B5%EC%97%AD"
            : "https://blog.naver.com/PostSearchList.naver?blogId=skytruthlee&categoryNo=0&SearchText=%ED%86%B5%EC%97%AD&orderBy=date&range=all",
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur relative">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
      <Link
  href="/"
  className="flex items-center gap-2"
  onClick={() => {
    setMobileOpen(false);
    setOpenMobileMenu(null);
  }}
>
          <Image
            src="/kj-logo.png"
            alt="KJ 로고"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-bold tracking-tight text-[#2f3a63] sm:text-2xl">
            국제자문번역행정사사무소
          </span>
        </Link>


        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1 py-3 text-[15px] font-semibold text-[#33415f] transition hover:text-[#3f4b74]"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>

          {menuItems.map((menu) => (
            <div key={menu.title} className="group relative">
              <div className="flex cursor-default items-center py-3 text-[15px] font-semibold text-[#33415f] transition group-hover:text-[#3f4b74]">
                {menu.title}
              </div>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100">
                <div className="whitespace-nowrap rounded-md bg-[#2f3a63] px-3 py-1.5 text-xs text-white shadow-lg">
                  실제 사례 블로그로 이동합니다
                </div>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-full opacity-0 transition group-hover:opacity-100">
                <div className="mb-2 rounded-md bg-[#2f3a63] px-3 py-1.5 text-xs text-white shadow-lg">
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>

              <div className="invisible absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-xl">
                  <div className="bg-[#3f4b74] px-5 py-4 text-base font-bold text-white">
                    {menu.title}
                  </div>
                  <ul className="space-y-1 px-4 py-4">
                    {menu.children.map((child) => (
                      <li key={child.name}>
                        <a
                          href={child.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-sm leading-6 text-slate-700 transition hover:bg-[#f1f4fb] hover:text-[#2f3a63]"
                        >
                          <span>{child.name}</span>
                          <span className="text-[11px] text-slate-400">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/about-us"
            className={`block py-3 text-[15px] font-semibold transition ${pathname === "/about-us"
                ? "border-b-2 border-[#3f4b74] text-[#3f4b74]"
                : "text-[#33415f] hover:text-[#3f4b74]"
              }`}
          >
            About Us
          </Link>

          <Link
            href="/apply"
            className={`relative hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white transition lg:inline-flex ${pathname === "/apply"
                ? "bg-[#2f3a63]"
                : "bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf]"
              }`}
          >
            견적문의

            {pathname === "/apply" && (
              <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-white"></span>
            )}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => {
            setMobileOpen((prev) => {
              const next = !prev;
              if (!next) setOpenMobileMenu(null);
              return next;
            });
          }}
          className={`inline-flex items-center justify-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition lg:hidden ${mobileOpen
              ? "bg-[#3f4b74] text-white"
              : "border border-slate-300 text-[#33415f]"
            }`}
        >
          {mobileOpen ? "✕ 닫기" : "☰ 메뉴"}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-40 border-t border-slate-200 bg-white lg:hidden">
          <div className="h-[calc(100dvh-73px)] overflow-y-auto">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <Link
                    href="/about-us"
                    className="block bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf] px-4 py-3 text-center text-sm font-bold text-white shadow-md transition active:scale-[0.98]"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenMobileMenu(null);
                    }}
                  >
                    About Us
                  </Link>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <Link
                    href="/apply"
                    className="block bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf] px-4 py-3 text-center text-sm font-bold text-white shadow-md transition active:scale-[0.98]"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenMobileMenu(null);
                    }}
                  >
                    견적 문의하기
                  </Link>
                </div>

                {menuItems.map((menu) => (
                  <div key={menu.title} className="rounded-2xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileMenu((prev) =>
                          prev === menu.title ? null : menu.title
                        )
                      }
                      className={`flex w-full items-center justify-center gap-2 px-4 py-3 text-white ${openMobileMenu === menu.title
                          ? "rounded-t-2xl bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf]"
                          : "rounded-2xl bg-gradient-to-r from-[#3f4b74] to-[#5a6bbf]"
                        }`}
                    >
                      <div className="flex-1 text-center">
                        <div className="text-sm font-bold">{menu.title}</div>
                        <p className="mt-1 text-[11px] leading-5 text-slate-200">
                          {menu.mobileHint}
                        </p>
                      </div>

                      <span
                        className={`text-lg font-bold text-white transition-transform duration-200 ${openMobileMenu === menu.title ? "rotate-180" : ""
                          }`}
                      >
                        ▾
                      </span>
                    </button>

                    {openMobileMenu === menu.title && (
                      <ul className="space-y-1 px-3 py-3">
                        {menu.children.map((child) => (
                          <li key={child.name}>
                            <a
                              href={child.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-center text-sm text-slate-700 hover:bg-[#f1f4fb]"
                              onClick={() => {
                                setMobileOpen(false);
                                setOpenMobileMenu(null);
                              }}
                            >
                              <span>{child.name}</span>
                              <span className="text-xs text-slate-400">↗</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

<div className="overflow-hidden rounded-2xl border border-slate-200">
  <a
    href="https://open.kakao.com/me/love_autumnsky"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-2xl bg-[#FEE500] px-4 py-3 text-center text-sm font-bold text-black shadow-md transition active:scale-[0.98]"
    onClick={() => {
      setMobileOpen(false);
      setOpenMobileMenu(null);
    }}
  >
    카카오톡 문의하기
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
