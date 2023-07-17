'use client'

import Buttons from '@/component/Buttons';
import MyAnswer from '@/component/MyAnswer';
import React, { useState, useEffect } from 'react';

const ChatPage = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [displayedMessages2, setDisplayedMessages2] = useState([]);
  const [displayedMessages3, setDisplayedMessages3] = useState([]);
  const [answer, setAnswer] = useState([]) 

  const submit = (n) => {
    setAnswer([...answer,n])
  };

  useEffect(() => {
    let timer;
    let messages = ['안녕, 난 캣피티.', '죽여주는 고양이 이름을 추천해줄게', '너의 고양이의 성격은 어떠니?']
    if (displayedMessages.length < messages.length) {
      timer = setTimeout(() => {
        setDisplayedMessages(messages.slice(0, displayedMessages.length + 1));
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [displayedMessages]);

  useEffect(() => {
  let timer;
  if (answer.length==1) {
    let messages = [`${answer[0].toString().substring(0,2)}하군요 !`, '숫놈인가요 암놈인가요 !?'];
    if (displayedMessages2.length < messages.length && !!answer[0]) {
      timer = setTimeout(() => {
        setDisplayedMessages2(messages.slice(0, displayedMessages2.length + 1));
      }, 800);
    }
    return () => clearTimeout(timer);
  }
}, [answer, displayedMessages2]);

  useEffect(() => {
    let timer;
    if (answer.length==2) {
      let messages = [`${answer[1]}!`, '기가 막히군요 !?'];
      if (displayedMessages3.length < messages.length && !!answer[0]) {
        timer = setTimeout(() => {
          setDisplayedMessages3(messages.slice(0, displayedMessages3.length + 1));
        }, 800);
      }
      return () => clearTimeout(timer);
    }
  }, [answer, displayedMessages3]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow w-[24rem]">
        <h1 className="text-2xl mb-4">Let's talk !</h1>

        <div className="profile-image flex items-center">
          <img src="/images/cat-ai.png" alt="프로필 사진" className="rounded-full w-16 h-16" />
          <div className="ml-4">catPT</div>
        </div>

        {displayedMessages.map((message, index) => (
          <div key={index} className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2">
            {message}
          </div>
        ))}

        {displayedMessages.length>=3 && !answer[0] &&
          <Buttons submit={submit} one={'발랄해'} two={'얌전해'} />
        }

        {answer[0] &&
        <>
          <MyAnswer str={answer[0]} />
          {displayedMessages2.map((message, index) => (
          <div key={index} className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2">
            {message}
          </div>
        ))}
        </>
        }
        
        {displayedMessages2.length>=2 && !answer[1] &&
          <Buttons submit={submit} one={'상남자'} two={'여자여자'} />
        }

        {answer[1] &&
        <>
          <MyAnswer str={answer[1]} />
          {displayedMessages3.map((message, index) => (
          <div key={index} className="bg-slate-200 w-max p-2 rounded-lg shadow mt-2">
            {message}
          </div>
        ))}
        </>
        }

      </div>
      
    </div>
  );
};

export default ChatPage;