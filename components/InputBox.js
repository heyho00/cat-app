import Link from "next/link";

const InputBox = ({ inputValue, handleChange, submit, answer }) => {
  const handleResultClick = () => {
    if (inputValue.length >= 2) {
      // 텍스트가 2자 이상일 경우에만 결과페이지로 이동
      submit(inputValue);
    } else {
      // 2자 미만일 경우 알림을 띄움
      alert("키워드를 입력하세요.");
    }
  };

  return (
    <div className="flex flex-col space-y-3 mt-7">
      <div className="flex space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        {inputValue.length >= 2 ? ( // 텍스트가 2자 이상이면 결과페이지로 이동하는 버튼을 렌더링
          <Link
            href={{
              pathname: "/result",
              query: { 0: answer[0], 1: answer[1], 2: answer[2], 3: answer[3] },
            }}
          >
            <button
              onClick={handleResultClick}
              className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
              style={{ minWidth: "120px", maxWidth: "130px" }} // 버튼 최소 가로 폭 및 최대 가로 폭을 지정합니다.
            >
              결과보기
            </button>
          </Link>
        ) : (
          // 텍스트가 2자 미만이면 결과페이지로 이동하지 않고 알림을 띄우는 버튼을 렌더링
          <button
            onClick={handleResultClick}
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
            style={{ minWidth: "120px", maxWidth: "130px" }} // 버튼 최소 가로 폭 및 최대 가로 폭을 지정합니다.
          >
            결과보기
          </button>
        )}
      </div>
    </div>
  );
};

export default InputBox;
