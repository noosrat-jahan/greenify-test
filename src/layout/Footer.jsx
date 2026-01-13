import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#333333] px-5 py-10 lg:py-[60px] lg:px-20 text-white flex flex-col md:flex-row justify-between gap-10 font-lato ">
      <Image
        src="/images/globe.png"
        alt="Logo"
        width={500}
        height={500}
        className="absolute right-0 top-[11300px]  w-[148px] h-[148px] md:w-[221px] md:h-[221px] lg:w-[240px] lg:h-[240px] md:top-[7650px] lg:top-[5570px] lg:right-8 z-10 "
      />
      <Image
        src="/images/leaf3.png"
        alt="Logo"
        width={500}
        height={500}
        className="absolute left-0 top-[11340px] z-0  w-[61px] h-[57px] md:w-[111px] md:h-[103px] md:top-[7670px] lg:top-[5650px]  lg:w-[118px] lg:h-[109px]"
      />
      <div className="space-y-5">
        <div className="bg-white md:w-[232px] py-1 md:py-2 px-[23px] md:px-[47px] flex justify-center rounded-[5px] ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={500}
            height={200}
            className="w-[86px] h-[32px] md:w-[171px] md:h-[63px]"
          />
        </div>
        <p className="md:text-[24px]">Pages</p>
        <div className="font-lato  gap-8 text-lg md:text-xl font-medium  items-center hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories" className="flex items-center">
            Categories <i className="ri-arrow-drop-down-fill text-3xl"></i>
          </Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          
        </div>

        <div className="flex items-center gap-3">
          <i class="ri-facebook-fill bg-white  flex justify-center items-center p-4 rounded-full text-black w-5 h-5 hover:scale-90 transition-all duration-500 ease-in-out"></i>
          <i class="ri-instagram-line bg-white flex justify-center items-center p-4  rounded-full text-black w-5 h-5 hover:scale-90 transition-all duration-500 ease-in-out"></i>
          <i class="ri-linkedin-fill bg-white  flex justify-center items-center p-4 rounded-full text-black w-5 h-5 hover:scale-90 transition-all duration-500 ease-in-out"></i>
          <i class="ri-twitter-fill bg-white  flex justify-center items-center p-4 rounded-full text-black w-5 h-5 hover:scale-90 transition-all duration-500 ease-in-out"></i>
        </div>
        <p className="pt-[50px]">terms & services</p>
        <p>Greenify @ all right reserved 2023</p>
      </div>

      <div className="flex flex-col justify-end gap-5 ">
        <h2 className="text-lg md:text-[24px] font-bold ">Contact us</h2>
        <div className="flex items-center gap-3">
          <i class="ri-phone-line md:text-[24px]"></i>
          <span className="md:text-[24px]">+91 123456789</span>
        </div>
        <div className="flex items-center gap-3">
          <i class="ri-mail-line md:text-[24px]"></i>
          <span className="md:text-[24px]">info@greenify.com</span>
        </div>
        <div className="flex items-center gap-3">
          <i class="ri-map-pin-line md:text-[24px]"></i>
          <span className="md:text-[24px]">102-Complex, Xyz Road <br /> City name, State, 136458</span>
        </div>
      </div>
    </div>
  );
}
