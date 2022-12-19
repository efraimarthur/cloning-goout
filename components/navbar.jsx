// todo line 10 font poppins

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white text-slate-800 h-[48px] mt-7 ">
      <div className="hover:cursor-pointer">
        <Image
          alt="Logo"
          src={"/logoGoout.jpg"}
          width={106}
          height={106}
          quality={100}
        />
      </div>

      <div className="flex gap-6 text-[16px] text-slate-400">
        <Link href={"/"} className="focus:text-[#466BF3] hover:text-slate-800">
          Home
        </Link>
        <Link href={"/"} className="focus:text-[#466BF3] hover:text-slate-800">
          Flight
        </Link>
        <Link href={"/"} className="focus:text-[#466BF3] hover:text-slate-800">
          Hotel
        </Link>
        <Link href={"/"} className="focus:text-[#466BF3] hover:text-slate-800">
          Travel Package
        </Link>
        <Link href={"/"} className="focus:text-[#466BF3] hover:text-slate-800">
          Contact Us
        </Link>
      </div>

      <Link href={"/"}>
        <div className="text-[#466BF3] bg-blue-50 py-3 px-6 rounded-xl font-medium hover:bg-blue-100 transition-all duration-300">
          <span>My Account</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
