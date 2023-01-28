import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Register = () => {
  const FiveStars = () => {
    return (
      <>
        <Icon
          icon="material-symbols:star"
          color="orange"
          className="inline text-xl"
        />
        <Icon
          icon="material-symbols:star"
          color="orange"
          className="inline text-xl"
        />
        <Icon
          icon="material-symbols:star"
          color="orange"
          className="inline text-xl"
        />
        <Icon
          icon="material-symbols:star"
          color="orange"
          className="inline text-xl"
        />
        <Icon
          icon="material-symbols:star"
          color="orange"
          className="inline text-xl"
        />
      </>
    );
  };

  return (
    <>
      <div className="w-[1200px] mx-auto h-[435px] bg-slate-300 relative rounded-tl-[90px] rounded-2xl group ">
        <Image
          alt="background image"
          fill
          // width={50}
          // height={50}
          src={"/register.jpg"}
          className="absolute opacity-50"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[490px] text-center">
          <p className="font-semibold text-base text-[#3258E8]">New User</p>
          <p className="text-4xl font-semibold text-slate-900 mt-2">
            Dont Miss The 50% Discount If You Register Today
          </p>
          <p className="w-[316px] mx-auto text-slate-900 text-base mt-2 mb-9">{`Let's maximize your next holiday with us with the best experience.`}</p>
          <Link
            href={""}
            className="bg-blue-700 text-slate-50 px-6 py-3 rounded-xl font-medium text-lg hover:opacity-75"
          >
            Register Account
          </Link>
        </div>
        <div className="absolute -bottom-11 left-11 rounded-3xl bg-slate-100 p-4">
          <p>
            <FiveStars />
          </p>
          <p className="w-[180px] font-medium">
            Thank you for helping my vacation. Amazing!
          </p>
          <div className="object-center flex mt-7">
            <Image
              alt="profile"
              src="/exploreProfile.jpg"
              width={54}
              height={54}
              className="rounded-full"
              quality={100}
            />
            <div className="flex flex-col ml-3">
              <p className="text-slate-900 font-medium text-base">Sova Nerds</p>
              <p className="text-sm text-slate-900">Backpacker</p>
            </div>
          </div>
        </div>
        <div className="absolute -top-8 -right-10 rounded-full rotate-[25deg] text-3xl bg-slate-50 py-4 px-3 shadow-lg transition-all">
          💖
        </div>
      </div>
    </>
  );
};

export default Register;
