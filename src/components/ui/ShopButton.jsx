import React from "react";

export default function ShopButton({buttonText}) {
  return (
    <div>
      <button  className="text-white font-extrabold border-b-[3px] border-[rgb(51,51,51)] rounded-[5px] bg-[#55B76B] py-2 px-9  hover:bg-white hover:text-[#55B76B] hover:shadow-lg shadow-green-400 hover:border-[#55B76B] transition-all duration-500 ease-in-out font-lato text-base">
        {buttonText}
      </button>
    </div>
  );
}
