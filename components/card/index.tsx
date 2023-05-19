import React from "react";
import { motion } from "framer-motion";
import greenHeart_icon from "../../public/images/heart_icon_coloured.svg";
import Image from "next/image";
import { useAppStore } from "../../lib/store";

type Props = {
  id: number;
  name: string;
  price: number;
  img: string;
  isMenu: boolean;
};

const index: React.FC<Props> = ({ id, name, price, img, isMenu }) => {
  const addToCart = useAppStore(state => state.addToCart)
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.25)] mx-2 ${
        isMenu ? "bg-white w-[19em] h-[16.5em] " : `bg-[#E9F9F3] h-[13em]`
      } my-2 hover:scale-105	transition-all duration-500	`}
    >
      <div className="flex justify-between">
        <button className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center m-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]">
          <Image src={greenHeart_icon} alt="regular img" />
        </button>
        <div className="mt-[-1em] mx-5 drop-shadow-[-5px_10px_10px_rgba(0,0,0,0.35)]">
          <Image src={img} alt="regular img" />
        </div>
      </div>
      <div className="mx-3 h-[4.5em]   ">
        <h1 className="text-md sm:text-lg font-bold text-left">{name}</h1>
        <p className="text-sm sm:text-md text-left text-gray-600 ">{name}</p>
      </div>

      <div
        className={`flex justify-between items-center mt-5 ${
          isMenu ? "block" : "hidden"
        }`}
      >
        <p className="text-md md:text-lg font-bold mx-3 text-left">₹ {price}</p>
        <motion.button
          className="rounded-full border border-[#488A74] text-[#488A74] px-2 py-1 hover:bg-[#488A74] hover:text-white mx-5"
          whileTap={{ scale: 0.7 }}
          onClick={(e) => addToCart({id, name, price, qty: 1})}
        >
          Add to cart
        </motion.button>
      </div>
    </div>
  );
};

export default index;
