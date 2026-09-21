export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 네비게이션 */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-700">인베스트아카데미</div>
          <nav className="flex gap-6 text-sm text-gray-700">
            <a href="#courses">강의</a>
            <a href="#about">소개</a>
            <a href="#login">로그인</a>
          </nav>
        </div>
      </header>

      {/* 메인 히어로 영역 */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          부동산·경제 재테크, 제대로 배우다
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          부동산 경매부터 경제 흐름까지, 전문가 강의로 자산을 키우는 방법을 배워보세요.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
          강의 둘러보기
        </button>
      </section>

      {/* 강의 목록 (샘플) */}
      <section id="courses" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">인기 강의</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "부동산 경매 기초반", price: "150,000원" },
            { title: "경제 지표 읽는 법", price: "120,000원" },
            { title: "실전 자산 포트폴리오", price: "200,000원" },
          ].map((course) => (
            <div key={course.title} className="border border-gray-200 rounded-lg p-6">
              <div className="w-full h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
                영상 썸네일
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-blue-700 font-bold">{course.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}