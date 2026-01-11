import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Herosection() {
  return (
    <div className="lg:mt-8 lg:pl-20 mt-5 ">
      <div className=" flex flex-col lg:flex-row justify-between gap-[52px] md:gap-0 lg:gap-24 items-center ">
        <div
          className=" flex flex-col items-center lg:items-start text-center lg:text-left  
        px-7 md:p-14 lg:p-0"
        >
          <h1 className="font-montserrat text-[#000000] leading-[50px] md:leading-[60px] lg:leading-[80px] text-[28px] md:text-5xl">
            <span className=" font-bold ">
              Welcome to Greenify
            </span>{" "}
            <br />
            <span className="font-medium text-[32px]">Your Sustainable</span>{" "}
            <br />
            <span className=" font-black text-[#55B76B] hidden lg:inline">
              Shopping <br /> Destination
            </span>
            <span className=" font-black text-[#55B76B] inline lg:hidden ">
              Shopping Destination
            </span>
          </h1>
          <p className="text-sm md:text-base font-normal mt-5 font-lato">
            "Discover Sustainability. Embrace Greenify. <br /> Your Eco-Friendly
            Haven for Conscious Shopping."
          </p>

          <div className="mt-[30px] md:mt-12 text-base font-lato relative">
            <Link href="/pages/allproducts">
              <ShopButton buttonText="SHOP NOW"></ShopButton>
            </Link>
          </div>

          {/* laptop version  */}
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={90}
            height={800}
            className="absolute -top-20 -right-7 hidden lg:block"
          />

          {/* tablet version  */}
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={90}
            height={800}
            className="absolute top-[345px] right-7  hidden md:block lg:hidden"
          />

          {/* mobile version  */}
          <Image
            src="/images/butterfly.png"
            alt="Greenify Hero"
            width={45}
            height={38}
            className="absolute top-[341px] right-[34px] block md:hidden"
          />

          {/* laptop version  */}
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={55}
            height={40}
            className="absolute top-[380px] left-48 hidden lg:block"
          />

          {/* tablet version  */}
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={55}
            height={40}
            className="absolute top-[490px] left-32 hidden md:block lg:hidden"
          />

          {/* mobile version  */}
          <Image
            src="/images/minifly.png"
            alt="Greenify Hero"
            width={35}
            height={30}
            className="absolute top-[376px] left-[57px] block md:hidden"
          />
        </div>

        <div className="flex items-end w-full gap-[15px] lg:w-auto justify-between ">
          <Image
            src="/images/bulb.png"
            alt="Greenify Hero"
            width={400}
            height={500}
            className="w-[75] h-[88] md:w-[160] md:h-[200]   md:ml-24 ml-6
            inline lg:hidden"
          />
          <div className="w-[277px] h-[347px] right-[66px] md:w-[400] md:h-[500] lg:w-[550px] lg:h-[630px] ">

            <Image
              src="/images/hero.png"
              alt="Greenify Hero"
              width={2260}
              height={2728}
              draggable={false}
              className="w-ful h-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#000000]/50 rounded-[100px] h-1 w-[40%] mx-auto my-[47px]  lg:hidden"></div>
    </div>
  );
}
