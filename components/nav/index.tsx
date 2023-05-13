import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.svg";
import heart_icon from "../../public/images/heart-icon.svg";
import cart_icon from "../../public/images/cart-icon.svg";

const index: React.FC = () => {
  return (
    <nav className="flex justify-between w-full h-[3.5em] bg-gray">
      <div className="mx-5 my-3">
        <Image src={Logo} width={150} height={50} alt="MealMate Logo" />
      </div>
      <div className="flex gap-5 mx-5 my-3">
        <div className="w-[2em] h-[2em] bg-[#488A74] rounded-full flex items-center justify-center">
          <Image src={heart_icon} alt="bookmark icon"/>
        </div>
        <div className="w-[2em] h-[2em] bg-[#488A74] rounded-full flex items-center justify-center">
          <Image src={cart_icon} alt="cart icon"/>
        </div>
      </div>
    </nav>
  );
};

export default index;
