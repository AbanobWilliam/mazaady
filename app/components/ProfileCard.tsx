import Image from "next/image";
import Following from "./icons/Following";
import Followers from "./icons/Followers";
import Rate from "./icons/Rate";
import Numbers from "./Numbers";
import Button from "./Button";

const numbers = [
  {
    id: 1,
    icon: <Following />,
    number: "5",
    text: "Following",
    extraText: "",
  },
  {
    id: 2,
    icon: <Followers />,
    number: "20",
    text: "Following",
    extraText: "",
  },
  {
    id: 3,
    icon: <Rate />,
    number: "4.2",
    text: "Rate",
    extraText: " ( 15 )",
  },
];

function ProfileCard() {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-[21px]">
      <Image
        src="/profile.png"
        alt="profile image"
        width={100}
        height={100}
        className="hidden lg:block"
      />
      <Image
        src="/profile.png"
        alt="profile image"
        width={80}
        height={80}
        className="lg:hidden"
      />
      <h2 className="text-lg mt-2 mb-1 lg:mt-4 lg:text-2xl lg:mb-3 font-bold">
        Hala Ahmed
      </h2>
      <p className="text-[#4F4F4F] text-sm">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
      <div className="flex gap-x-1.5 mt-4 lg:gap-x-4 lg:mt-6">
        {numbers.map((number) => {
          return (
            <Numbers
              number={number.number}
              text={number.text}
              extraText={number.extraText}
              key={number.id}
            >
              {number.icon}
            </Numbers>
          );
        })}
      </div>
      <Button
        classes="w-full py-3 flex items-center justify-center mt-6 rounded-2xl"
        showIcon={false}
      >
        Follow
      </Button>
    </div>
  );
}

export default ProfileCard;
