import React from "react";
import greenHeart_icon from "../../public/images/heart_icon_coloured.svg";
import Image from "next/image";

type Props = {
  name: string;
  price: number;
  img: string;
  color: string;
};

const index: React.FC<Props> = ({ name, price, img, color }) => {
  console.log(color)
  return (
    <div
      className={`min-w-[15em] max-w-[20em] h-[15em] flex flex-col gap-2 rounded-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] mx-2 ${color === '#FFFFFF' ? 'bg-white' : `bg-[${color}]`} my-2 hover:scale-105	transition-all duration-500	`}
    >
      <div className="flex justify-between">
        <button className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center m-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]">
          <Image src={greenHeart_icon} alt="regular img" />
        </button>
        <div className="mt-[-1em] mx-5 drop-shadow-[-5px_10px_10px_rgba(0,0,0,0.35)]">
          <Image src={img} alt="regular img" />
        </div>
      </div>
      <div className="mx-3 h-[2em]">
        <p className="text-md sm:text-lg font-bold text-left">{name}</p>
      </div>

      <div className="flex justify-between items-center mt-5">
        <p className="text-md md:text-lg font-bold mx-3 text-left">₹ {price}</p>
        <button className="rounded-full border border-[#488A74] text-[#488A74] px-2 py-1 hover:bg-[#488A74] hover:text-white mx-5">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default index;
