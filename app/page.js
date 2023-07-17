import Link from 'next/link';
import React from 'react';

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4 text-xl">CatPT의 고양이 이름 추천 !</div>
      <Link href="/chat">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          GO
        </button>
      </Link>
    </div>
  );
};

export default IndexPage;