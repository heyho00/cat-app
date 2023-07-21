const express = require("express");
const axios = require("axios");
const app = express();
const port = 8000;

app.use(express.json());

// ChatGPT API 엔드포인트 설정
const GPT_API_URL =
  "https://api.openai.com/v1/engines/davinci-codex/completions";

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

app.get("/get-recommendation", (req, res) => {
  // 여기에 GET 요청에 대한 처리 로직을 추가하세요.
  res.send("GET 요청을 처리합니다.");
});

app.post("/get-recommendation", async (req, res) => {
  const { answers } = req.body;

  try {
    // answers 배열을 하나의 문자열로 합친 후, ChatGPT API에 요청을 보냅니다.
    const response = await axios.post(
      GPT_API_URL,
      {
        prompt: `${answers.join(" ")} 의 키워드를 이용한 고양이 이름 추천 1개`, // answers 배열을 하나의 문자열로 합침
        max_tokens: 50, // AI 추천의 최대 길이 설정 (숫자를 조정하여 변경 가능)
        temperature: 0.7, // 다양성 조절을 위한 옵션 (0.0에서 1.0 사이의 값, 낮을수록 보수적인 응답)
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`, // ChatGPT API 키 입력
        },
      }
    );

    const recommendedText = response.data;
    res.json({ recommendedText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
