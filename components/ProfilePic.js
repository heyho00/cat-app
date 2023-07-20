import Image from "next/image";

const ProfilePic = () => {
  return (
    <div className="profile-image flex items-center">
      <Image
        width={100}
        height={100}
        src="/images/cat-ai.png"
        alt="프로필 사진"
        className="rounded-full w-16 h-16"
      />
      <div className="ml-4">catPT</div>
    </div>
  );
};

export default ProfilePic;
