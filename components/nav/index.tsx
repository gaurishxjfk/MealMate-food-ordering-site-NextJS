import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { ShoppingCart, Heart, User } from "react-feather";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import { UseAppStore } from "../../lib/store";
import { useRouter } from "next/router";

const index: React.FC = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  const { changeDialogueType, dialogueType } = UseAppStore((state) => state);
  const { data: session } = useSession();
  // console.log(session.user)
  return (
    <nav className="sticky top-0 flex justify-between w-full h-[3.5em] bg-white z-40 drop-shadow-[0px_2px_15px_rgba(0,0,0,0.25)]">
      <Link href="/" className="mx-5 my-3">
        <Image src={Logo} width={150} height={50} alt="MealMate Logo" />
      </Link>
      <div className="flex gap-5 mx-5 items-center">
        {pathname !== "/dashboard" && (
          <>
            <button
              onClick={() => changeDialogueType("bookmark")}
              className={` ${
                dialogueType === "bookmark"
                  ? " bg-[#488A74]"
                  : "border-2 border-[#488A74] #ffffff"
              } rounded-full w-[2.2em] h-[2.2em] flex justify-center items-center transition-all duration-300`}
            >
              <Heart
                size={20}
                color={dialogueType !== "bookmark" ? "#488A74" : "#ffffff"}
                strokeWidth="2"
              />
            </button>
            <button
              onClick={() => changeDialogueType("cart")}
              className={` ${
                dialogueType === "cart"
                  ? " bg-[#488A74]"
                  : "border-2 border-[#488A74] #ffffff"
              } rounded-full w-[2.2em] h-[2.2em] flex justify-center items-center transition-all duration-300`}
            >
              <ShoppingCart
                size={20}
                color={dialogueType !== "cart" ? "#488A74" : "#ffffff"}
                strokeWidth="2"
                fill="#488A74"
              />
            </button>
          </>
        )}
        <button
          onClick={() => (session ? changeDialogueType("acc") : signIn())}
          className={` ${
            dialogueType === "acc"
              ? " bg-[#488A74]"
              : "border-2 border-[#488A74] text-[#ffffff]"
          } rounded-full w-[2.2em] h-[2.2em] flex justify-center items-center transition-all duration-300`}
        >
          {!session ? (
            <User
              size={20}
              color={dialogueType !== "acc" ? "#488A74" : "#ffffff"}
              strokeWidth="2"
              fill="#488A74"
            />
          ) : (
            <span
              className={`${
                dialogueType === "acc" ? " text-white" : "text-[#488A74]"
              }  font-bold "`}
            >
              {session?.user?.name?.substring(0, 1)}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default index;
