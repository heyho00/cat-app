const Buttons = ({ submit, one, two }) => {
  return (
    <>
      <div className="flex space-x-3 mt-7">
        <button
          onClick={() => submit(one)}
          className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold w-1/2 rounded"
        >
          {one}
        </button>
        <button
          onClick={() => submit(two)}
          className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold w-1/2 py-2 rounded"
        >
          {two}
        </button>
      </div>
    </>
  );
};

export default Buttons;
