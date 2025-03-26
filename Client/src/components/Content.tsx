import React from "react";

const Content: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            2025.03/25 ~ 2025.04/25
            <br />
            <span className="text-lg font-normal">
              오늘: 2025.03/25 | 남은 일수: 31일
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 고정지출 */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">고정지출</h2>
            <p className="text-3xl font-semibold">₩1,200,000</p>
          </div>

          {/* 지금까지 쓴 금액 */}
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">지금까지 쓴 금액</h2>
            <p className="text-3xl font-semibold">₩450,000</p>
          </div>

          {/* 다음 월급까지 */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">다음 월급까지</h2>
            <p className="text-3xl font-semibold">29일 13시간 09초</p>
          </div>

          {/* 절약 */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              오늘은 얼마를 절약했을까?
            </h2>
            <p className="text-3xl font-semibold">₩450,000</p>
          </div>

          {/* 절약 */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">남은 대출금</h2>
            <p className="text-3xl font-semibold">₩450,000</p>
          </div>

          {/* 절약 */}
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">빌려준 돈</h2>
            <p className="text-3xl font-semibold">₩450,000</p>
          </div>
        </div>

        {/* 구독 서비스 */}
        <div className="mt-10 bg-purple-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">이용 중인 구독 서비스</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* 구독 서비스 카드 */}
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-40">
              <img
                src="https://via.placeholder.com/100"
                alt="서비스 이미지"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Netflix</h3>
              <p className="text-lg">₩15,000/월</p>
            </div>

            <div className="bg-white text-black p-4 rounded-lg shadow-md w-40">
              <img
                src="https://via.placeholder.com/100"
                alt="서비스 이미지"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Spotify</h3>
              <p className="text-lg">₩10,000/월</p>
            </div>

            <div className="bg-white text-black p-4 rounded-lg shadow-md w-40">
              <img
                src="https://via.placeholder.com/100"
                alt="서비스 이미지"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">YouTube Premium</h3>
              <p className="text-lg">₩15,000/월</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-40">
              <img
                src="https://via.placeholder.com/100"
                alt="서비스 이미지"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">YouTube Premium</h3>
              <p className="text-lg">₩15,000/월</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-40">
              <img
                src="https://via.placeholder.com/100"
                alt="서비스 이미지"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">YouTube Premium</h3>
              <p className="text-lg">₩15,000/월</p>
            </div>
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-40">
              <img
                src="https://via.placeholder.com/100"
                alt="서비스 이미지"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">YouTube Premium</h3>
              <p className="text-lg">₩15,000/월</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
