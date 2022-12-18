import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import locationOnOutlineRounded from "@iconify/icons-material-symbols/location-on-outline-rounded";
import myLocation from "@iconify/icons-material-symbols/my-location";
import flightClass from "@iconify/icons-material-symbols/flight-class";
import calendarTodayOutline from "@iconify/icons-material-symbols/calendar-today-outline";
import searchRounded from "@iconify/icons-material-symbols/search-rounded";

const Header = () => {
  const Card = ({ title, detail, iconType }) => {
    return (
      <div className="flex items-center border-2 border-transparent hover:border-slate-300 hover:cursor-pointer">
        <Icon icon={iconType} width="20" height="20" />
        <div className="mx-7">
          <p className="text-slate-900 font-medium">{title}</p>
          <p className="text-slate-500 text-lg">{detail}</p>
        </div>
        <Icon icon={myLocation} color="blue" />
      </div>
    );
  };

  return (
    <>
      <div className="h-[580px] relative flex justify-end">
        <Image
          src={"/beachImage.jpg"}
          alt="background"
          width={600}
          height={600}
          className=""
        />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] bg-slate-100 bg-transparent">
          <p className="font-bold text-[52px] w-[509px] text-slate-900">
            Find The Best Place to Stress Release
          </p>
          <p className="text-[16px] w-[350px] text-slate-600">
            A new way to travel by air the easy and fast way. Try it now by
            filling out the form below!
          </p>
          <div className=" mt-14 flex flex-col w-[1160px]">
            <div className="w-[200px] flex">
              <div className="basis-1/2 text-center font-medium bg-[#3258E8] rounded-tl-xl py-3  text-white hover:cursor-pointer">
                Flight
              </div>
              <div className="basis-1/2 text-center font-medium py-3 text-[#0046FF] hover:cursor-pointer">
                Hotel
              </div>
            </div>
            <div className="flex justify-around py-6 bg-white rounded-xl shadow-md">
              <Card
                title="NTB, Lombok"
                detail="Select the location"
                iconType={locationOnOutlineRounded}
              />
              <Card
                title="17 Desember 2022"
                detail="Choose Flight Date"
                iconType={calendarTodayOutline}
              />
              <Card
                title="Economy"
                detail="Choose Flight Type"
                iconType={flightClass}
              />
              <div className="flex justify-center items-center bg-[#3258E8] px-7 rounded-xl hover:cursor-pointer">
                <Icon
                  icon={searchRounded}
                  width="20"
                  height="20"
                  color="white"
                  className="mr-2"
                />
                <p className="font-medium text-white">Search Flight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
