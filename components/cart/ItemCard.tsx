import Image from "next/image";
import React, { useState } from "react";
import FoodImg from "../../public/images/food1.svg";
import { Trash2 } from "react-feather";
import { appStore } from "../../lib/store";
import { motion } from "framer-motion";
import { cartItemProps } from "../../types/types";

const ItemCard: React.FC<cartItemProps> = ({ item }) => {
  const { id, name, price, qty } = item;
  // let [ref] = useAnimate();

  const { increaseQty, decreaseQty, removeItemCart } = appStore(
    (state) => state
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <motion.div className="w-[85%] flex justify-between items-center mx-auto bg-[#F0FFF9] text-[#00412B] my-3 p-3 gap-5">
      <div className="w-[20%]">
        <Image src={FoodImg} alt="food Image" height={70} />
      </div>
      <div className="w-[70%] ">
        <h1 className="mb-2  font-bold">{name}</h1>
        <div className="flex justify-between">
          <div className="flex">
            <button
              className="px-2 border border-gray-500 rounded cursor-pointer"
              onClick={() => decreaseQty(id)}
              disabled={qty <= 1 ? true : false}
            >
              -
            </button>
            <p className="px-2 ">{qty}</p>
            <button
              className="px-2 border border-gray-500 rounded cursor-pointer"
              onClick={() => increaseQty(id)}
            >
              +
            </button>
          </div>
          <div>
            <p>₹ {price * qty}</p>
            <i data-feather="circle"></i>
          </div>
        </div>
      </div>
      <motion.div
        role="button"
        className="w-[10%] pl-2"
        onClick={() => removeItemCart(id)}
        whileHover={{
          rotate: [0, -20, 20, 0],
          transition: { duration: 0.5 },
        }}
      >
        <Trash2
          size={24}
          color={isHovered ? "#ff0000" : "#fa2d2d"}
          strokeWidth={isHovered ? 2 : 1}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </motion.div>
    </motion.div>
  );
};

export default ItemCard;
