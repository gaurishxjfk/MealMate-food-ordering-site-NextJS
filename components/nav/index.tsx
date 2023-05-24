import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import React from "react";
import { ShoppingCart, Heart } from "react-feather";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import { UseAppStore } from "../../lib/store";

const index: React.FC = () => {
  const { isCart, toggleCart } = UseAppStore((state) => state);
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 flex justify-between w-full h-[3.5em] bg-white z-40 drop-shadow-[0px_2px_15px_rgba(0,0,0,0.25)]">
      <Link href="/" className="mx-5 my-3">
        <Image src={Logo} width={150} height={50} alt="MealMate Logo" />
      </Link>
      <div className="flex gap-5 mx-5 items-center">
        {session ? (
          <>
          <h1>Signed in as {session.user.email}</h1>
          <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
          <h1>Not signed in</h1>
          <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        <button
          className={` ${
            isCart ? " bg-[#488A74]" : "border-2 border-[#488A74] #ffffff"
          } rounded-full w-[2.2em] h-[2.2em] flex justify-center items-center`}
        >
          <Heart
            size={20}
            color={!isCart ? "#488A74" : "#ffffff"}
            strokeWidth="2"
          />
        </button>
        <button
          onClick={() => toggleCart()}
          className={` ${
            isCart ? " bg-[#488A74]" : "border-2 border-[#488A74] #ffffff"
          } rounded-full w-[2.2em] h-[2.2em] flex justify-center items-center`}
        >
          <ShoppingCart
            size={20}
            color={!isCart ? "#488A74" : "#ffffff"}
            strokeWidth="2"
            fill="#488A74"
          />
        </button>
      </div>
    </nav>
  );
};

export default index;
