"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Buttons from "@/components/Buttons";
import InputBox from "@/components/InputBox";
import MyAnswer from "@/components/MyAnswer";
import ProfilePic from "@/components/ProfilePic";

const ChatPage = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [displayedMessages2, setDisplayedMessages2] = useState([]);
  const [displayedMessages3, setDisplayedMessages3] = useState([]);
  const [displayedMessages4, setDisplayedMessages4] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 20) {
      setInputValue(event.target.value);
    }
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    };

    scrollToBottom();
  }, [
    displayedMessages,
    displayedMessages2,
    displayedMessages3,
    displayedMessages4,
  ]);

  const submit = async (n) => {
    setAnswer([...answer, n]);
  };

  useEffect(() => {
    let timer;
    let messages = [
      "안녕, 난 캣피티.",
      "죽이는 고양이 이름을 추천해줄게",
      "고양이의 성격은 어떠니?",
    ];
    if (displayedMessages.length < messages.length) {
      timer = setTimeout(() => {
        setDisplayedMessages(messages.slice(0, displayedMessages.length + 1));
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [displayedMessages]);

  useEffect(() => {
    let timer;
    if (answer.length === 1) {
      let messages = [
        `${answer[0].toString().substring(0, 2)}하군 !`,
        "수컷이야 암컷이야 !?",
      ];
      if (displayedMessages2.length < messages.length && !!answer[0]) {
        timer = setTimeout(() => {
          setDisplayedMessages2(
            messages.slice(0, displayedMessages2.length + 1)
          );
        }, 800);
      }
      return () => clearTimeout(timer);
    }
  }, [answer, displayedMessages2]);

  useEffect(() => {
    let timer;
    if (answer.length === 2) {
      let messages = [`${answer[1]}!`, "기가 막히네 !", "고양이의 털 색깔은?"];
      if (displayedMessages3.length < messages.length && !!answer[0]) {
        timer = setTimeout(() => {
          setDisplayedMessages3(
            messages.slice(0, displayedMessages3.length + 1)
          );
        }, 800);
      }
      return () => clearTimeout(timer);
    }
  }, [answer, displayedMessages3]);

  useEffect(() => {
    let timer;
    if (answer.length === 3) {
      let messages = [
        `${answer[2]} ?! 그렇구나 ~`,
        "마지막으로 반영하고싶은",
        "고양이의 특징은?",
      ];
      if (displayedMessages4.length < messages.length && !!answer[0]) {
        timer = setTimeout(() => {
          setDisplayedMessages4(
            messages.slice(0, displayedMessages4.length + 1)
          );
        }, 800);
      }
      return () => clearTimeout(timer);
    }
  }, [answer, displayedMessages4]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGetRecommendation = async () => {
    try {
      const response = await axios.post("/get-recommendation", {
        answers: answer,
      });
      const recommendedName = response.data.recommendedText;
      // 추천된 고양이 이름을 사용하는 로직 추가
      console.log("추천된 고양이 이름:", recommendedName);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (answer.length === 4) {
      handleGetRecommendation();
    }
  }, [answer, handleGetRecommendation]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow w-[30rem]">
          <h1 className="text-2xl mb-4">cat naming !</h1>

          <div
            ref={chatContainerRef}
            className="overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <ProfilePic />
            {displayedMessages.map((message, index) => (
              <div
                key={index}
                className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2"
              >
                {message}
              </div>
            ))}

            {displayedMessages.length >= 3 && !answer[0] && (
              <Buttons submit={submit} one={"발랄해"} two={"얌전해"} />
            )}

            {answer[0] && (
              <>
                <MyAnswer str={answer[0]} />
                {!!displayedMessages2.length && <ProfilePic />}
                {displayedMessages2.map((message, index) => (
                  <div
                    key={index}
                    className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2"
                  >
                    {message}
                  </div>
                ))}
              </>
            )}
            {displayedMessages2.length >= 2 && !answer[1] && (
              <Buttons submit={submit} one={"상남자"} two={"여자여자"} />
            )}

            {answer[1] && (
              <>
                <MyAnswer str={answer[1]} />
                {!!displayedMessages3.length && <ProfilePic />}
                {displayedMessages3.map((message, index) => (
                  <div
                    key={index}
                    className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2"
                  >
                    {message}
                  </div>
                ))}
              </>
            )}
            {displayedMessages3.length >= 3 && !answer[2] && (
              <Buttons submit={submit} one={"밝은 편"} two={"어두운 편"} />
            )}
            {answer[2] && (
              <>
                <MyAnswer str={answer[2]} />
                {!!displayedMessages4.length && <ProfilePic />}
                {displayedMessages4.map((message, index) => (
                  <div
                    key={index}
                    className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2"
                  >
                    {message}
                  </div>
                ))}
              </>
            )}
            {displayedMessages4.length >= 2 && !answer[3] && (
              <InputBox
                inputValue={inputValue}
                handleChange={handleChange}
                submit={submit}
                answer={answer}
              />
            )}
          </div>
        </div>
      </div>
      <div className="h-24" />
    </>
  );
};

export default ChatPage;
