import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <div className=" md:mt-10 px-5 pt-10 pb-[52px] text-center w-full  lg:p-10 font-montserrat  text-[#333333] ">
      <h1 className="text-[24px]  md:text-3xl font-bold">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {/* review 1  */}
        <div className="border-2 border-[#55B76B] rounded-[20px] flex flex-col items-end p-[15px]">
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
            <p className="text-[14px] font-normal px-4">
              {" "}
              "I absolutely love my Organic Cotton Tote Bag from Greenify! It's
              not only stylish but also eco-friendly. Knowing that I'm making a
              positive impact on the environment with my purchase makes me feel
              great. Highly recommend this sustainable accessory!"
            </p>

            <div className="flex justify-between items-center text-xl w-full mt-[45px]">
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

        <div className="border-2 border-[#55B76B] rounded-[20px] flex flex-col items-end p-[15px]">
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
            <p className="text-[14px] font-normal px-4">
              {" "}
              "The Bamboo Toothbrushes from Greenify are a game-changer! The
              quality is outstanding, and I love the fact that they are made
              from renewable bamboo. My oral care routine just got a lot
              greener, and I couldn't be happier. Kudos to Greenify for offering
              such fantastic eco-friendly products!"
            </p>

            <div className="flex justify-between items-center text-xl w-full mt-[45px]">
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

        <div className="border-2 border-[#55B76B] rounded-[20px] flex flex-col items-end p-[15px]">
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
            <p className="text-[14px] font-normal px-4">
              {" "}
              "I recently bought the Hemp Backpack from Greenify, and I must say
              it's a fantastic investment. The durability of the hemp material
              is impressive, and I feel good knowing I'm choosing a sustainable
              alternative. This backpack is perfect for my outdoor adventures
              and daily commutes. Thumbs up for the eco-conscious design!"
            </p>

            <div className="flex justify-between items-center text-xl w-full mt-[45px]">
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
    </div>
  );
}
