import ShopButton from "@/components/ui/ShopButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BestProduct() {
  return (
    <div className="md:mt-20 py-10 text-center w-full px-5 md:px-20 font-montserrat  text-[#333333]">
      <h1 className="text-[24px]  md:text-3xl font-bold">
        Our Best-Selling Sustainable Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">

        {/* product 1  */}
        <div className="flex flex-col items-center gap-5 font-lato">
          <Image
            src="/images/product1.png"
            alt="Product 1"
            width={500}
            height={600}
            className="w-[350px] h-[434px]"
          />
          <div className="text-left w-full  flex flex-col gap-5">
            <h2 className=" text-xl font-semibold">Organic cotton tote bag</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-xl">50 Rs.</span>
                <del className="text-[16.37px] font-bold text-[#767676]">70 Rs.</del>
              </div>
              <p className="text-sm font-normal underline ">235 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        {/* product 2  */}
        <div className="flex flex-col items-center gap-5 font-lato">
          <Image
            src="/images/product2.png"
            alt="Product 1"
            width={500}
            height={600}
            className="w-[350px] h-[434px]"
          />
          <div className="text-left w-full  flex flex-col gap-5">
            <h2 className=" text-xl font-semibold">Hemp backpack</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-xl">999 Rs.</span>
                <del className="text-[16.37px] font-bold text-[#767676]">1199 Rs.</del>
              </div>
              <p className="text-sm font-normal underline ">729 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        {/* product 3  */}

        <div className="flex flex-col items-center gap-5 font-lato">
          <Image
            src="/images/product3.png"
            alt="Product 3"
            width={500}
            height={600}
            className="w-[350px] h-[434px]"
          />
          <div className="text-left w-full  flex flex-col gap-5">
            <h2 className=" text-xl font-semibold">Organic cotton T-shirts</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-xl">499 Rs.</span>
                <del className="text-[16.37px] font-bold text-[#767676]">699 Rs.</del>
              </div>
              <p className="text-sm font-normal underline ">825 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        {/* product 4  */}


        <div className="flex flex-col items-center gap-5 font-lato">
          <Image
            src="/images/product4.png"
            alt="Product 4"
            width={500}
            height={600}
            className="w-[350px] h-[434px]"
          />
          <div className="text-left w-full  flex flex-col gap-5">
            <h2 className=" text-xl font-semibold">Bamboo toothbrush</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-xl">99 Rs.</span>
                <del className="text-[16.37px] font-bold text-[#767676]">149 Rs.</del>
              </div>
              <p className="text-sm font-normal underline ">248 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        {/* product 5  */}

        <div className="flex flex-col items-center gap-5 font-lato">
          <Image
            src="/images/product5.png"
            alt="Product 5"
            width={500}
            height={600}
            className="w-[350px] h-[434px]"
          />
          <div className="text-left w-full  flex flex-col gap-5">
            <h2 className=" text-xl font-semibold">Bamboo pens and pencils</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-xl">49 Rs.</span>
                <del className="text-[16.37px] font-bold text-[#767676]">89 Rs.</del>
              </div>
              <p className="text-sm font-normal underline ">1256 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>

        {/* product 6  */}

        <div className="flex flex-col items-center gap-5 font-lato">
          <Image
            src="/images/product6.png"
            alt="Product 6"
            width={500}
            height={600}
            className="w-[350px] h-[434px]"
          />
          <div className="text-left w-full  flex flex-col gap-5">
            <h2 className=" text-xl font-semibold">Jute grocery bag</h2>
            <div className="flex justify-between ">
              <div>
                <span className="font-extrabold mr-2 text-xl">59 Rs.</span>
                <del className="text-[16.37px] font-bold text-[#767676]">89 Rs.</del>
              </div>
              <p className="text-sm font-normal underline ">895 Reviews</p>
            </div>
          </div>
          <Link href="/pages/productdetails">
            <ShopButton buttonText="BUY NOW"></ShopButton>
          </Link>
        </div>
      </div>

      <Link href="/pages/allproducts">
        <button className="text-white mt-[60px] font-extrabold border-b-4 border-[#55B76B] rounded-md bg-[#333333] py-2 px-9  hover:bg-white hover:text-[#55B76B] hover:shadow-lg shadow-green-400 hover:border-[#55B76B] transition-all duration-500 ease-in-out font-lato">
          EXPLORE MORE
        </button>
      </Link>

       <Image
              src="/images/pata2.png"
              alt="Why Choose Greenify"
              width={900}
              height={1300}
              className="absolute w-[225px] h-[338px] top-[6125px] left-[-10px] -z-10"
            />
    </div>
  );
}
