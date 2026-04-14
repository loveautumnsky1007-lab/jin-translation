export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] text-[#333] mt-0 border-t">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 text-center text-sm text-gray-600 leading-6">
        <p className="font-semibold text-gray-800">
          국제자문번역행정사사무소
        </p>

        <p>상호 : 국제자문번역행정사사무소 | 대표 : 이호진</p>

        <p>
          주소 : 경기도 성남시 분당구 황새울로 351번길 10, 401-B12 (서현동, 여암빌딩)
        </p>

        <p>
          전화 : 010-6261-9885 | 메일 : skytruthlee@naver.com
        </p>

        <p>사업자번호 : 404-40-00718</p>

        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} 국제자문번역행정사사무소. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}