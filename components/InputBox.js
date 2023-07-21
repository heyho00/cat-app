import Link from "next/link";

const InputBox = ({ inputValue, handleChange, submit, answer }) => {
  return (
    <div className="flex flex-col space-y-3 mt-7">
      <div className="flex space-x-3">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <Link
          href={{
            pathname: "/result",
            query: { answer },
          }}
        >
          <button
            onClick={() => {
              submit(inputValue);
            }}
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded"
            style={{ minWidth: "200px" }} // 버튼 최소 가로 폭을 지정합니다.
          >
            결과보기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InputBox;
