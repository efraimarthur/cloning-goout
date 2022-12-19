import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#232631] w-full h-96 text-slate-50 flex relative">
        <div className="mt-24 ml-20 flex gap-x-16">
          <div className="">
            <Image
              alt="footer"
              width={80}
              height={80}
              src={"/footerGoout.jpg"}
              quality={100}
            />
            <p className="w-[150px] mt-3">
              Copyright © 2022. All Rights Reserved.
            </p>
          </div>
          <div>
            <p className="font-medium">Page Menus</p>
            <div className="text-slate-500">
              <p>Home</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>My Account</p>
            </div>
          </div>
          <div>
            <p className="font-medium">Our Product</p>
            <div className="text-slate-500">
              <p>Booking Flight</p>
              <p>Booking Hotels</p>
              <p>Strip Package</p>
            </div>
          </div>
          <div>
            <p className="font-medium">Social Media</p>
            <div className="text-slate-500">
              <p>Twitter</p>
              <p>Tiktok</p>
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>
        <Image
          alt="footer"
          width={278}
          height={314}
          src={"/logoFooter.jpg"}
          quality={100}
          className="absolute right-10 top-10"
        />
      </div>
    </>
  );
};

export default Footer;
