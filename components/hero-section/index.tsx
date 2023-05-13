import Image from "next/image";
import React from "react";
import HeroImg from "../../public/images/hero_img.svg";

const index: React.FC = () => {
  return (
    <main className="w-[90%] bg-[#E9F9F3] mx-auto rounded-lg p-5 flex justify-between mt-3">
      <div className="md:w-[50%] my-auto">
        <h1 className="font-extrabold text-3xl md:text-5xl text-[#00412B] capitalize leading-[1.2em]">
          Order delicious food at your doorsteps with convenience
        </h1>
        <div className="text-center mt-5">
          <div className="flex gap-4 items-center my-3">
            <input
              className="h-[3em] w-[70%] rounded-full px-5"
              type="text"
              placeholder="Enter your pincode..."
            />
            <button className="h-[2.7em] w-[30%] rounded-full bg-[#488A74] text-white hover:font-bold text-md md:text-lg">
              Deliver
            </button>
          </div>
          <p className=" text-[#488A74] font-bold text-lg my-3">or</p>
          <button className="my-3 h-[2.7em] w-[30%] rounded-full font-extrabold border-2 border-[#488A74] text-[#488A74] hover:bg-[#488A74] hover:text-white">
            Pickup
          </button>
        </div>
      </div>
      <div className="hidden md:w-[40%] md:flex lg:w-[50%] lg:flex items-center">
        <Image src={HeroImg} alt="the hero image" />
      </div>
    </main>
  );
};

export default index;
