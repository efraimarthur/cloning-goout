import Image from "next/image";
import Link from "next/link";
import React from "react";
import locationOnOutlineRounded from "@iconify/icons-material-symbols/location-on-outline-rounded";
import { Icon } from "@iconify/react";

const Package = () => {
  return (
    <div className=" w-[1083px] mx-auto">
      <div className="flex gap-x-6">
        <div className="basis-[29%] relative h-96 after:bg-gradient-to-t after:from-slate-800 after:inset-x-2 after:inset-y-64 after:bottom-2 after:rounded-b-3xl after:opacity-70 after:absolute border-transparent hover:border-sky-500 border-4 rounded-3xl">
          <Image
            alt="tower image"
            src={"/packTower.jpg"}
            fill
            className="p-2 rounded-3xl -z-10 "
          />
          <div className="text-slate-50 absolute bottom-10 left-10 z-20">
            <p>🔶🔶🔶🔶🔶</p>
            <p className="text-lg font-semibold">Greatest Tower</p>
            <div className="text-[16px] flex items-center">
              <Icon icon={locationOnOutlineRounded} width="20" height="20" />
              <p className="ml-1">Bali, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="basis-[29%] relative after:bg-gradient-to-t after:from-slate-800 after:inset-x-2 after:inset-y-64 after:bottom-2 after:rounded-b-3xl after:opacity-70 after:absolute border-transparent hover:border-sky-500 border-4 rounded-3xl">
          <Image
            alt="tower image"
            src={"/packBeach.jpg"}
            fill
            className="p-2 rounded-3xl -z-10"
          />
          <div className="text-slate-50 absolute bottom-10 left-10 z-20">
            <p>🔶🔶🔶🔶🔶</p>
            <p className="text-lg font-semibold">The Cliffside Beach</p>
            <div className="text-[16px] flex items-center">
              <Icon icon={locationOnOutlineRounded} width="20" height="20" />
              <p className="ml-1">Bali, Indonesia</p>
            </div>
          </div>
        </div>
        <div className="flex-1 pl-4 flex justify-center flex-col">
          <p className="font-semibold text-[16px] text-[#3258E8]">
            Our Package
          </p>
          <p className="font-semibold text-4xl text-slate-800 mt-2">
            Popular Trip Packages
          </p>
          <p className="text-[16px] text-slate-600 mt-5">
            A new way to travel by air the easy and fast way. Try it now by
            filling out the form below!
          </p>
          <div className="flex gap-x-6 mt-6">
            <div>
              <p className="font-semibold text-xl">120+</p>
              <p className="text-slate-600 text-[16px]">Destination</p>
            </div>
            <div>
              <p className="font-semibold text-xl">560+</p>
              <p className="text-slate-600 text-[16px]">Luxury Hotels</p>
            </div>
            <div>
              <p className="font-semibold text-xl">135k+</p>
              <p className="text-slate-600 text-[16px]">Happy Tourists</p>
            </div>
          </div>
          <div className="mt-10 space-x-12 font-medium text-lg">
            <span
              href={""}
              defaultValue
              className="rounded-xl bg-[#3258E8] px-6 py-3 text-slate-50 hover:cursor-pointer hover:opacity-70 "
            >
              Choose Package
            </span>
            <span
              href={""}
              className="text-slate-500 hover:cursor-pointer px-6 py-3 rounded-xl hover:opacity-70 hover:bg-slate-400 hover:text-white"
            >
              View More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
