import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import locationOnOutlineRounded from "@iconify/icons-material-symbols/location-on-outline-rounded";

const Explore = () => {
  const Card = ({ img, title, location, price }) => {
    return (
      <>
        <div className="relative h-[440px] w-[287px] rounded-3xl shadow-xl shadow-slate-200 basis-1/4 hover:bg-slate-300 transition-all duration-100 group py-3 group">
          <div className="relative w-[286px] h-[286px] mx-auto overflow-hidden rounded-3xl">
            <Image
              alt="picture"
              height={286}
              width={286}
              src={img}
              className="rounded-3xl object-cover absolute duration-300 group-hover:scale-110"
              quality={100}
            />
            <div className="absolute right-4 top-4 bg-black text-slate-50 bg-opacity-10 px-3 py-1 rounded-3xl backdrop-blur-sm flex items-center">
              <Icon
                icon="material-symbols:star"
                color="orange"
                className="inline text-xl"
              />
              5.0
            </div>
          </div>
          <div className="flex flex-col items-start mt-5 ml-3">
            <p className="font-semibold text-lg text-slate-900">{title}</p>
            <p className="flex items-center text-[16px] text-slate-600 ">
              <Icon
                icon={locationOnOutlineRounded}
                width="20"
                height="20"
                className="mr-1"
              />
              {location}
            </p>
          </div>
          <div className="flex justify-between px-4 mt-3">
            <div>
              <span className="text-lg font-semibold group-hover:text-rose-600">
                {price}
              </span>
              <span className="text-slate-600"> /person</span>
            </div>
            <div className="rounded-xl bg-blue-700 text-slate-50 py-2 px-6 text-[16px] hover:border-blue-700 hover:bg-rose-800 hover:cursor-pointer">
              Book
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="text-center">
        <p className="text-4xl font-semibold text-slate-900 mb-8">
          Explore Natural Destination
        </p>
        <p className="w-[360px] mx-auto">
          A new way to travel by air the easy and fast way. Try it now by
          filling out the form below!
        </p>
      </div>
      <div className="mt-9 text-center flex flex-wrap gap-y-10">
        <Card
          img="/waterfall.jpg"
          title="Waterfall Haven"
          location="selajan, iceland"
          price="$9"
        />
        <Card
          img="/greatestMountain.jpg"
          title="Greatest Mountain"
          location="Wildsee, Italy"
          price="$12"
        />
        <Card
          img="/coconutTree.jpg"
          title="Coconut Tree River"
          location="Lombok, Indonesia"
          price="$6"
        />
        <Card
          img="/circleBeach.jpg"
          title="Circle Beach Pray"
          location="Lombok, Indonesia"
          price="$5"
        />
        <Card
          img="/highGround.jpg"
          title="High Ground"
          location="Bali, Indonesia"
          price="$49"
        />
        <Card
          img="/dinosaurLand.jpg"
          title="Dinosaur Land"
          location="Bali, Indonesia"
          price="$5"
        />
        <Card
          img="/turttleLand.jpg"
          title="Turttle Land"
          location="Bali, Indonesia"
          price="$5"
        />
        <Card
          img="/theCliffside.jpg"
          title="The Cliffside Beach"
          location="Bali, Indonesia"
          price="$5"
        />
      </div>
      <div className="flex text-slate-500 ">
        <div className="mt-16 rounded-3xl border-[1.5px] border-slate-500 text-center px-4 py-2 mx-auto hover:bg-slate-600 hover:text-white hover:cursor-pointer">
          View more
        </div>
      </div>
    </>
  );
};

export default Explore;
