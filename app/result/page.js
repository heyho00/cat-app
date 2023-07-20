import React from 'react';

const ResultPage = ({ catName }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow w-[30rem]">
        <h1 className="text-4xl mb-4">고양이 이름 결과 !!</h1>

        <div className="profile-image flex items-center">
          <img src="/images/cat-ai.png" alt="프로필 사진" className="rounded-full w-16 h-16" />
          <div className="ml-4">catPT</div>
        </div>

        <div className="bg-slate-200 w-max p-2 rounded-lg shadow mt-10 text-4xl">
            {'당신의 고양이 이름은 ~'}
        </div>
        
        <div className="bg-slate-200 w-max p-2 rounded-lg shadow mt-4 text-4xl">
            {'히히'}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;