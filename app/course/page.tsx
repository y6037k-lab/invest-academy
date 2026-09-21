export default function CoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 네비게이션 */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <a href="/" className="text-xl font-bold text-blue-700">
            인베스트아카데미
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* 강의 썸네일 */}
        <div className="w-full h-72 bg-gray-100 rounded-lg mb-8 flex items-center justify-center text-gray-400">
          영상 썸네일
        </div>

        {/* 강의 정보 */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          부동산 경매 기초반
        </h1>
        <p className="text-gray-600 mb-6">
          경매 절차부터 낙찰 전략까지, 실전 사례로 배우는 부동산 경매 입문 강의입니다.
        </p>

        <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
          <span className="text-2xl font-bold text-blue-700">150,000원</span>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
            수강 신청하기
          </button>
        </div>

        {/* 커리큘럼 */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">커리큘럼</h2>
        <div className="flex flex-col gap-2">
          {[
            "1강. 부동산 경매란 무엇인가",
            "2강. 경매 물건 검색 및 분석",
            "3강. 권리분석 기초",
            "4강. 입찰 전략과 낙찰 사례",
          ].map((lesson, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700"
            >
              {lesson}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}