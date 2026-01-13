import Image from "next/image";
import React from "react";

export default function Whychoose() {
  return (
    <div className="mt-5 md:mt-10 lg:mt-[30px] text-center  px-[50px] md:px-[103px] lg:px-[85px] py-10 lg:py-[60px] font-montserrat ">
      <Image
        src="/images/bulb.png"
        alt="Greenify Hero"
        width={300}
        height={400}
        className="w-[75px] h-[87px] md:w-[166px] md:h-[194px] lg:absolute top-[800px] left-8
                  lg:block hidden"
      />

      <h1 className="text-[24px] text-[#333333]  md:text-4xl font-bold">
        Why Choose Greenify?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mt-10 lg:mt-[50px] px-[23px] md:px-0">
        <div className="flex flex-col items-center space-y-4 text-[#333333]">
          <Image
            src="/images/pic1.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Sustainable Products</h1>
          <p className="text-base font-lato">
            Explore our carefully curated selection of sustainable products,
            each designed to reduce your carbon footprint
          </p>
        </div>
        <div className="flex flex-col items-center  space-y-4 text-[#333333]">
          <Image
            src="/images/pic2.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Eco-Friendly Choices</h1>
          <p className="text-base font-lato">
            Make conscious choices with our eco-friendly products, knowing that
            your purchases promote ethical sourcing and responsible
            manufacturing practices.
          </p>
        </div>
        <div className="flex flex-col items-center  space-y-4 text-[#333333]">
          <Image
            src="/images/pic3.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">High-Quality Selection</h1>
          <p className="text-base font-lato">
            Invest in long-lasting and reliable products that meet our stringent
            quality standards, ensuring your satisfaction and the longevity of
            your purchases.
          </p>
        </div>
        <div className="flex flex-col items-center  space-y-4 text-[#333333]">
          <Image
            src="/images/pic4.png"
            alt="Why Choose Greenify"
            width={110}
            height={110}
          />
          <h1 className="text-[20px] font-bold">Sustainable Packaging</h1>
          <p className="text-base font-lato">
            Our sustainable packaging ensures that your orders arrive safely
            while minimizing their impact on the planet.
          </p>
        </div>
      </div>

      <Image
        src="/images/pata.png"
        alt="Why Choose Greenify"
        width={2000}
        height={2000}
        className="absolute w-[225px] h-[338px] top-[2150px] left-[165px] md:w-[260px] md:h-[375px] md:top-[1755px] md:left-[483px] lg:top-[1230px] lg:left-[1025px]   -z-10"
      />
    </div>
  );
}
