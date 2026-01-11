import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  return (
    <div className="px-5 py-3 md:py-[14px]  flex items-center justify-between ">
      <div className=" gap-5 lg:gap-0 flex justify-between items-center lg:flex-none">
        <MobileDrawer></MobileDrawer>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={171} height={63} className="w-[100px] h-[37px] md:w-[143px] md:h-[53px] lg:w-[171px]" />
        </Link>
      </div>

      <div className="font-lato  gap-8 text-lg font-medium text-[#000000] items-center hidden lg:flex">
        <Link href="/">Home</Link>
        <Link href="/pages/allproducts">Shop</Link>
        <Link href="/categories" className="flex items-center">
          Categories <i className="ri-arrow-drop-down-fill text-3xl"></i>
        </Link>
        <Link href="/about">About us</Link>
        <Link href="/contact">Contact us</Link>
      </div>

      <div className="flex items-center gap-[18px] relative">
        <i className="ri-shopping-bag-line text-[26px] cursor-pointer"></i>
        <span className="w-[15px] h-[15px]  absolute top-2 right-9 text-[10px] text-white flex items-center justify-center rounded-full bg-red-500">
          2
        </span>

        <Image
          src="/images/profiles.jpg"
          alt=""
          width={24}
          height={24}
          className=" mx-auto rounded-full dark:bg-gray-500 "
        />
      </div>
    </div>
  );
}
