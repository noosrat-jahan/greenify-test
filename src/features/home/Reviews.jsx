"use client";
import { useRef } from "react";

import Image from "next/image";
import React from "react";

export default function Reviews() {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollPrev = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const goTo = (index) => {
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
  };
  return (
    <div className="  px-5 lg:px-20 pt-10 lg:pt-[60px] pb-[52px] text-center w-full  font-montserrat  text-[#333333] ">
      <h1 className="text-[24px]  md:text-4xl font-bold">Customer Reviews</h1>

      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 */}
      <div
        ref={scrollRef}
        className="  flex gap-5  mt-10 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar
"
      >
        {/* review 1  */}

        <div className="border-2 border-[#55B76B] rounded-[20px] flex flex-col items-end p-[15px] h-max snap-center shrink-0 w-[90%] md:w-[342px] lg:w-[360px]">
          <div className="w-6 h-6 rounded-full bg-[#55B76B] "></div>
          <div className="flex flex-col items-center gap-5 font-lato">
            <Image
              src="/images/review1.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[97px] h-[97px]"
            />
            <h1 className="font-semibold text-2xl">Sarah Johnson</h1>
            <p className="text-[14px] md:text-base font-normal px-4">
              {" "}
              "I absolutely love my Organic Cotton Tote Bag from Greenify! It's
              not only stylish but also eco-friendly. Knowing that I'm making a
              positive impact on the environment with my purchase makes me feel
              great. Highly recommend this sustainable accessory!"
            </p>

            <div className="flex justify-between items-center text-xl md:text-[22px] w-full mt-[45px] ">
              <div>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
              </div>
              <i class="ri-emotion-happy-line w-6 h-6 text-[#55B76B] border-dotted"></i>
            </div>
          </div>
        </div>

        {/* review 2  */}

        <div className="border-2 border-[#55B76B] rounded-[20px] flex flex-col items-end p-[15px] h-max snap-center shrink-0 w-[90%] md:w-[342px] lg:w-[360px] pr-5 ">
          <div className="w-6 h-6 rounded-full bg-[#55B76B] "></div>
          <div className="flex flex-col items-center gap-5 font-lato">
            <Image
              src="/images/review2.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[97px] h-[97px]"
            />
            <h1 className="font-semibold text-2xl">Mark Anderson</h1>
            <p className="text-[14px] md:text-base font-normal px-4">
              {" "}
              "The Bamboo Toothbrushes from Greenify are a game-changer! The
              quality is outstanding, and I love the fact that they are made
              from renewable bamboo. My oral care routine just got a lot
              greener, and I couldn't be happier. Kudos to Greenify for offering
              such fantastic eco-friendly products!"
            </p>

            <div className="flex justify-between items-center text-xl md:text-[22px] w-full mt-[45px]">
              <div>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
              </div>
              <i class="ri-emotion-happy-line w-6 h-6 text-[#55B76B] border-dotted"></i>
            </div>
          </div>
        </div>

        {/* review 3  */}

        <div className="border-2 border-[#55B76B] rounded-[20px] flex flex-col items-end p-[15px] h-max snap-center shrink-0 w-[90%] md:w-[342px] lg:w-[360px]">
          <div className="w-6 h-6 rounded-full bg-[#55B76B] "></div>
          <div className="flex flex-col items-center gap-5 font-lato">
            <Image
              src="/images/review3.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-[97px] h-[97px]"
            />
            <h1 className="font-semibold text-2xl">Emily Lee</h1>
            <p className="text-[14px] md:text-base font-normal px-4">
              {" "}
              "I recently bought the Hemp Backpack from Greenify, and I must say
              it's a fantastic investment. The durability of the hemp material
              is impressive, and I feel good knowing I'm choosing a sustainable
              alternative. This backpack is perfect for my outdoor adventures
              and daily commutes. Thumbs up for the eco-conscious design!"
            </p>

            <div className="flex justify-between items-center text-xl md:text-[22px] w-full mt-[45px]">
              <div>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
                <i class="ri-star-s-fill text-[#FFCE31]"></i>
              </div>
              <i class="ri-emotion-happy-line w-6 h-6 text-[#55B76B] border-dotted"></i>
            </div>
          </div>
        </div>
      </div>

      {/* arrows */}
      <div className="flex justify-between items-center mt-10">
        <button onClick={scrollPrev} className="px-3 py-2 rounded-lg ">
          <i className="ri-arrow-left-line text-4xl"></i>
        </button>

        {/* dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-3 w-3 rounded-full bg-[#55B76B]"
            />
          ))}
        </div>

        <button onClick={scrollNext} className="px-3 py-2  rounded-lg ">
          <i className="ri-arrow-right-line text-4xl"></i>
        </button>
      </div>
    </div>
  );
}
