import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="md:mt-20 pt-10 text-center flex flex-col items-center w-full  lg:p-20 font-montserrat about text-[#333333] gap-10 relative ">
      {/* mobile version  */}
      <Image
        src="/images/butterfly.png"
        alt="Greenify Hero"
        width={61}
        height={54}
        className="absolute top-[-25px] right-[30px] z-20"
      />
      <div className="bg-white w-full h-full left-0 top-0 absolute opacity-90 z-0"></div>

      <div className=" z-20 w-full flex flex-col items-center gap-10">
        <h1 className="text-2xl font-bold">About us</h1>
        <div className="bg-white py-1 px-4 flex justify-center rounded-lg w-[50%] md:w-[40%] lg:w-[20%]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={500}
            height={100}
            className=""
          />
        </div>
        <div className="space-y-5">
          <p>
            At Greenify, we are more than just an e-commerce website; we are a
            passionate community dedicated to fostering a sustainable and
            eco-friendly lifestyle. Our mission is to empower environmentally
            conscious consumers by offering a curated selection of high-quality,
            sustainable products that inspire positive change and make a
            difference in the world.
          </p>
          <h3 className="font-bold text-lg">Mission Statement</h3>
          <p>
            "To be the leading platform for sustainable living, providing
            eco-friendly products and fostering a green community that promotes
            conscious consumption and environmental responsibility."
          </p>
          <h3 className="font-bold text-lg">Vision Statement</h3>
          <p>
            "To create a greener future for generations to come, where every
            choice matters, and sustainability is at the core of everyday
            living. We envision a world where eco-friendly practices are the
            norm, and together, we can make a significant impact on the health
            of our planet."
          </p>
        </div>

        <Link href="">
          <ShopButton buttonText="READ MORE"></ShopButton>
        </Link>
      </div>

      <Image
        src="/images/arrows.png"
        alt="Logo"
        width={200}
        height={100}
        className="absolute left-5 -bottom-8 w-16 h-16 md:w-36 md:h-36 lg:w-44 lg:h-40"
      />
      <Image
        src="/images/leaves.png"
        alt="Logo"
        width={200}
        height={100}
        className="absolute right-2 -bottom-8 w-20 h-20 md:w-36 md:h-36 lg:w-40 lg:h-40"
      />
    </div>
  );
}
