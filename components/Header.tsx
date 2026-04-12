const menuItems = [
  {
    title: "영문 번역/사실확인서",
    children: [
      "가족/기본/혼인 증명서",
      "생활기록부/성적증명서",
      "납세증명/금융거래내역 자료",
      "아포스티유 서류",
    ],
  },
  {
    title: "국문 번역확인 증명서",
    children: [
      "해외아포스티유 서류",
      "해외 학위증",
      "해외 출생증명서/사망증명서",
      "해외세무 자료/해외법률 자료",
    ],
  },
  {
    title: "기업번역",
    children: [
      "재무제표/감사보고서/주주총회영업보고서",
      "법률 계약서",
      "법인등기부등본",
      "정관/이사회의사록/사업계획",
    ],
  },
  {
    title: "법원통번역/아포스티유",
    children: [
      "판결문/소장/법원문서 번역",
      "아포스티유/영사확인/대사관인증 대행",
      "번역공증 대행",
      "각종 일반 문서 번역 및 비즈니스 일반 통역",
    ],
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="text-2xl font-bold tracking-tight text-[#2f3a63]">
          국제자문 번역행정사사무소
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {menuItems.map((menu) => (
            <div key={menu.title} className="group relative">
              <button className="py-3 text-[15px] font-semibold text-[#33415f] transition hover:text-[#3f4b74]">
                {menu.title}
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-xl">
                  <div className="bg-[#3f4b74] px-5 py-4 text-base font-bold text-white">
                    {menu.title}
                  </div>
                  <ul className="space-y-1 px-4 py-4">
                    {menu.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#services"
                          className="block rounded-xl px-3 py-3 text-sm leading-6 text-slate-700 transition hover:bg-[#f1f4fb] hover:text-[#2f3a63]"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#3f4b74] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 lg:inline-flex"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}