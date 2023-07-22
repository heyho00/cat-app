"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./ResultPage.css";

import { cat_names } from "@/public/const/const";
const ResultPage = () => {
  const [typedText, setTypedText] = useState(""); // 타이핑되는 텍스트를 저장하는 상태
  const [showResult, setShowResult] = useState(false); // 결과 텍스트를 보여줄지 여부를 저장하는 상태
  const [dotVisible, setDotVisible] = useState(false); // 점이 깜빡이는 상태를 저장하는 상태
  const [displayName, setDisplayName] = useState("");
  const [catName, setCatName] = useState("");

  const getRandomName = () => {
    const names = cat_names; // 여기에 랜덤으로 노출할 이름들을 추가합니다.
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  useEffect(() => {
    setDisplayName(getRandomName());
  }, []);

  useEffect(() => {
    const targetText = "당신의 고양이 이름은"; // 타이핑할 문구
    let currentIndex = 0; // 현재 타이핑한 글자 인덱스

    const typingInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        // 타이핑 중인 텍스트가 타겟 텍스트보다 작을 경우에만 실행
        setTypedText(targetText.slice(0, currentIndex)); // 현재 글자까지만 상태에 저장
        currentIndex++;
      } else {
        clearInterval(typingInterval); // 타이핑 완료 후 인터벌 종료
        setTimeout(() => {
          setShowResult(true); // 결과 텍스트를 보여주도록 상태 업데이트
        }, 4000);
      }
    }, 200); // 타이핑 간격(ms)

    const dotInterval = setInterval(() => {
      setDotVisible((prevVisible) => !prevVisible); // 점 깜빡이는 상태를 토글
    }, 500); // 점 깜빡이는 간격(ms)

    return () => {
      clearInterval(typingInterval); // 컴포넌트 언마운트 시 인터벌 정리
      clearInterval(dotInterval);
    };
  }, []);

  useEffect(() => {
    if (showResult) {
      // 결과가 노출된 후, 3초 후에 점 깜빡임 인터벌 정리
      const resultDotInterval = setInterval(() => {
        setDotVisible(false); // 점 깜빡이는 상태를 false로 변경하여 깜빡이는 효과 중지
        clearInterval(resultDotInterval);
      }, 3000);

      // axios
      //   .post("/get-recommendation", {
      //     answers: ["얌전해", "상남자", "english", "오렌지 컬러"],
      //   })
      //   .then((response) => {
      //     // 서버에서 받은 추천된 텍스트를 displayName 상태로 설정
      //     setDisplayName(response.data.recommendedText);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }
  }, [showResult]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow w-[30rem]">
        <h1 className="text-4xl mb-4">고양이 이름 결과 !!</h1>

        <div className="profile-image flex items-center">
          <Image
            src="/images/logo-face.png"
            width={100}
            height={100}
            alt="프로필 사진"
            className="rounded-full w-16 h-16"
          />
          <div className="ml-4">catPT</div>
        </div>

        <div className="bg-slate-200 w-max p-2 rounded-lg shadow mt-10 text-4xl">
          {typedText}
          {showResult ? "" : dotVisible && "."}{" "}
          {/* 결과 노출 후에는 점을 보여주지 않음 */}
        </div>

        {showResult && ( // 결과 텍스트를 보여줄 때에만 아래 텍스트 노출
          <>
            <div className="bg-slate-200 w-max p-2 rounded-lg shadow mt-4 text-4xl">
              {catName || displayName} 어때요 !?{" "}
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <Image
                src="/images/logo.png"
                width={300}
                height={300}
                alt="logo"
                className="rounded-full w-80 mt-10 logo-image"
              />

              {/* 네이버 블로그 링크 추가 */}
              <div className="mt-4">
                <a
                  href="https://blog.naver.com/golgol_tambourines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-bold underline"
                >
                  네이버 블로그 방문하기
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
