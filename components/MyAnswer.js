import Image from "next/image";

const MyAnswer = ({ str }) => {
  return (
    <>
      <div className="profile-image flex justify-end items-center mt-4">
        <div className="mr-4">캔따개</div>
        <Image
          width={100}
          height={100}
          src="/images/can.png"
          alt="can"
          className="rounded-full w-16 h-16 border-2 object-cover"
        />
      </div>
      <div className="flex justify-end">
        <div className="bg-yellow-500 text-white w-max p-2 rounded-lg shadow mt-2">
          {str}
        </div>
      </div>
    </>
  );
};

export default MyAnswer;
