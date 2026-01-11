import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <div className="md:mt-20 text-center w-full px-5 lg:p-16 py-10   font-montserrat bg-[#55B76B] relative">
      <Image
        src="/images/whitefly.png"
        alt="Logo"
        width={100}
        height={100}
        className="absolute top-4 left-5"
      />
      <h1 className="text-[22px]  md:text-3xl font-bold text-white">Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-white rounded-[20px] flex flex-col items-end">
          <div className="flex flex-col items-center gap-7 font-lato w-full pb-5">
            <Image
              src="/images/blog1.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full rounded-[20px]"
            />
            <h1 className="font-bold text-xl">Embracing Sustainability</h1>
            <p className="text-[14px]">
              The Power of Eco-Friendly Products at Greenify
            </p>

            <Link href="">
              <ShopButton buttonText="READ MORE"></ShopButton>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[20px] flex flex-col items-end">
          <div className="flex flex-col items-center gap-7 font-lato w-full pb-5">
            <Image
              src="/images/blog2.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full rounded-[20px]"
            />
            <h1 className="font-bold text-xl">
              Sustainable Living Made Simple
            </h1>
            <p className="text-[14px] px-3">
              How Greenify Helps You Make a Difference
            </p>

            <Link href="">
              <ShopButton buttonText="READ MORE"></ShopButton>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[20px] flex flex-col items-end">
          <div className="flex flex-col items-center gap-7 font-lato w-full pb-5 ">
            <Image
              src="/images/blog3.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-full rounded-[20px]"
            />
            <h1 className="font-bold text-xl">
              Greenify's Guide to Eco-Friendly Shopping
            </h1>
            <p className="text-[14px] px-3">
              Reducing Your Carbon Footprint One Purchase at a Time
            </p>

            <Link href="">
              <ShopButton buttonText="READ MORE"></ShopButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
