import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#333333] p-5 lg:p-20 text-white flex flex-col lg:flex-row justify-between gap-10 lato relative">

       <Image
            src="/images/globe.png"
            alt="Logo"
            width={300}
            height={100}
            className="absolute right-8 -top-36 z-10 w-28 h-28 md:w-44 md:h-44 lg:w-80 lg:h-80"
          />
      <div className="space-y-5">
        <div className="bg-white py-1 px-4 flex justify-center rounded-lg w-[50%] md:w-[20%] lg:w-[30%]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={500}
            height={100}
            className=" "
          />
        </div>
        <p>Pages</p>
        <div className="font-lato  gap-8 text-lg font-medium  items-center hidden lg:flex">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories" className="flex items-center">
            Categories <i className="ri-arrow-drop-down-fill text-3xl"></i>
          </Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        <div className="flex items-center gap-3">
          <i class="ri-facebook-fill bg-white  flex justify-center items-center p-4 rounded-full text-black w-5 h-5"></i>
          <i class="ri-instagram-line bg-white flex justify-center items-center p-4  rounded-full text-black w-5 h-5"></i>
          <i class="ri-linkedin-fill bg-white  flex justify-center items-center p-4 rounded-full text-black w-5 h-5"></i>
          <i class="ri-twitter-fill bg-white  flex justify-center items-center p-4 rounded-full text-black w-5 h-5"></i>
        </div>
        <p>terms & services</p>
        <p>Greenify @ all right reserved 2023</p>
      </div>

      <div className="flex flex-col justify-end gap-5">
        <h2 className="text-lg font-bold">Contact us</h2>
        <div className="flex items-center gap-3">
          <i class="ri-phone-line"></i>
          <span>+91 123456789</span>
        </div>
        <div className="flex items-center gap-3">
          <i class="ri-mail-line"></i>
          <span>info@greenify.com</span>
        </div>
        <div className="flex items-center gap-3">
          <i class="ri-map-pin-line"></i>
          <span>102-Complex, Xyz Road City name, State, 136458</span>
        </div>
      </div>
    </div>
  );
}
