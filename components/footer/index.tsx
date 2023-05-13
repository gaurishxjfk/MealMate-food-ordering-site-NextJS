import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.svg";

const index: React.FC = () => {
  return (
    <div className="h-[20vh] w-full bg-[#F0FFF9] flex flex-col justify-center items-center font-bold">
      <p className="ml-[-1.5em] my-2">Follow us on social media</p>
      <div className="text-sm flex">
        <p>Copyright @ 2023</p>
        <Image src={logo} alt="logo" className="h-[1.5em] ml-[-1.5em]" />
      </div>
    </div>
  );
};

export default index;
