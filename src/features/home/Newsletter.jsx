import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Newsletter() {
  return (
    <div className=" text-center flex flex-col items-center w-full px-5 md:px-[110px] py-10 lg:p-20 font-montserrat newsletter text-[#333333] gap-10 relative ">
      <div className="bg-[#333333] w-full h-full left-0 top-0 absolute opacity-80 z-0"></div>

      <Image
        src="/images/minifly.png"
        alt="Logo"
        width={800}
        height={800}
        className="absolute w-[53px] h-[46px] md:w-[75px] md:h-[65px] top-[-25px] md:top-[-55px] left-[25px] z-20 "
      />
      <Image
        src="/images/leaf2.png"
        alt="Logo"
        width={800}
        height={800}
        className="absolute w-[52px] h-[59px] md:w-[88px] md:h-[99px] opacity-60 top-[-25px] md:top-[-55px] right-[25px] z-20 "
      />
      <div className="w-[95%] lg:w-[80%] mx-auto bg-white rounded-[20px] flex flex-col-reverse lg:flex-row justify-between z-10">
        <Image
          src="/images/newsletter.png"
          alt="newsletter"
          width={700}
          height={700}
          className="h-[292px] md:w-[524px] md:h-[438px] object-cover w-full rounded-[20px]"
        />

        <div className="flex flex-col items-center gap-[30px] px-[25px] md:px-[55px] py-10 justify-center">
          <h1 className="text-2xl font-bold">"Subscribe to our Newsletter"</h1>
          <p className="font-lato font-normal text-[14px] md:text-[16px] text-[#000000]">
            Join our green community and receive exclusive offers and insightful
            content straight to your inbox!
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            className="border border-[#333333]  w-[80%] text-sm border-b  p-3 placeholder-black rounded-lg"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="border border-[#333333] w-[80%] text-sm border-b  p-3 placeholder-black rounded-lg"
          />

          <Link href="" className="md:mt-3">
            <ShopButton buttonText="SUBSCRIBE"></ShopButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
