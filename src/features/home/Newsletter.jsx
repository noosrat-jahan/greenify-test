import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Newsletter() {
  return (
    <div className=" text-center flex flex-col items-center w-full px-5 p-10 lg:p-20 font-montserrat newsletter text-[#333333] gap-10 relative ">
      <div className="bg-black w-full h-full left-0 top-0 absolute opacity-70 z-0"></div>

      <div className="w-[95%] lg:w-[80%] mx-auto bg-white rounded-[20px] flex flex-col-reverse lg:flex-row justify-between z-10">
        <Image
          src="/images/newsletter.png"
          alt="Product 1"
          width={350}
          height={600}
          className="h-full"
        />

        <div className="flex flex-col items-center gap-7 p-5  justify-center">
          <h1 className="text-xl font-bold">"Subscribe to our Newsletter"</h1>
          <p>
            Join our green community and receive exclusive offers and insightful
            content straight to your inbox!
          </p>
          <input type="text" name="" id="" placeholder="Enter your name"  className="border border-[#333333]  w-[70%] text-sm border-b  p-3 placeholder-black rounded-lg"/>
          <input type="email" name="" id="" placeholder="Enter your email" className="border border-[#333333] w-[70%] text-sm border-b  p-3 placeholder-black rounded-lg" />

          <Link href="">
              <ShopButton buttonText="SUBSCRIBE"></ShopButton>
            </Link>
        </div>
      </div>
    </div>
  );
}
