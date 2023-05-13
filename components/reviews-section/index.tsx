import React from "react";
import Image from "next/image";
import Cook from "../../public/images/cook.png";
import ReviewCards from "./ReviewCards";

const index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center h-[40vh] md:h-[55vh] w-full">
      <h1 className="text-[#00412B] text-3xl font-bold text-center mt-[-1.5em]">
        Reviews
      </h1>
      <div className="flex w-full justify-center 	">
        <div className="w-[100%] lg:w-[40%] md:w-[50%] justify-center overflow-visible">
          <ReviewCards />
        </div>
        <div className="hidden md:block lg:w-[40%] md:w-[50%] ">
          <Image
            alt="cook's image"
            src={Cook}
            className="transform  scale-x-[-1] max-h-[45vh] max-w-[30vh] lg:mx-auto md:ml-auto md: mr-5"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
