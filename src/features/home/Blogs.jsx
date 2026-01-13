import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <div className=" mt-10 md:mt-0 py-10 lg:py-[60px] px-5 lg:px-20 text-center w-full text-[#333333] font-montserrat bg-[#55B76B] ">
      <Image
        src="/images/wind.png"
        alt="Logo"
        width={100}
        height={100}
        className="absolute md:w-[123px] md:h-[101px] top-[8775px] md:top-[5495px] left-[247px] md:left-[550px]"
      />

      <Image
        src="/images/whitefly.png"
        alt="Logo"
        width={100}
        height={100}
        className="absolute w-[38px] h-[33px] md:w-[62px] md:h-[54px] lg:w-[93px] lg:h-[81px] top-[8880] md:top-[5620px] lg:top-[4490px]  left-[29px] "
      />
      <h1 className="text-[24px]  md:text-4xl font-bold text-white">Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10 font-lato">
        <div className="bg-white rounded-[20px] flex flex-col items-end">
          <div className="flex flex-col items-center font-lato w-full">
            <Image
              src="/images/blog1.png"
              alt="Logo"
              width={600}
              height={600}
              className="w-full rounded-[20px]"
            />
            <h1 className="font-semibold text-xl mt-5">
              Embracing Sustainability
            </h1>
            <p className="text-[14px] mt-10 font-normal">
              The Power of Eco-Friendly Products at Greenify
            </p>

            <Link href="" className="mt-10 mb-5">
              <ShopButton buttonText="READ MORE"></ShopButton>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[20px] flex flex-col items-end">
          <div className="flex flex-col items-center font-lato w-full">
            <Image
              src="/images/blog2.png"
              alt="Logo"
              width={800}
              height={800}
              className="w-full rounded-[20px]"
            />
            <h1 className="font-semibold text-xl mt-5 px-16">
              Sustainable Living Made Simple
            </h1>
            <p className="text-[14px] mt-10 font-normal px-16">
              How Greenify Helps You Make a Difference
            </p>

            <Link href="" className="mt-10 mb-5">
              <ShopButton buttonText="READ MORE"></ShopButton>
            </Link>
          </div>
        </div>

        <div
          className="bg-white rounded-[20px] flex flex-col items-end  md:col-span-2 
           md:justify-self-center 
           md:max-w-[342px]
           lg:col-span-1 
           lg:max-w-none"
        >
          <div className="flex flex-col items-center font-lato w-full">
            <Image
              src="/images/blog3.png"
              alt="Logo"
              width={800}
              height={800}
              className="w-full rounded-[20px]"
            />
            <h1 className="font-semibold text-xl mt-5 px-16">
              Greenify's Guide to Eco-Friendly Shopping
            </h1>
            <p className="text-[14px] mt-10 font-normal px-16">
              Reducing Your Carbon Footprint One Purchase at a Time
            </p>

            <Link href="" className="mt-10 mb-5">
              <ShopButton buttonText="READ MORE"></ShopButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
