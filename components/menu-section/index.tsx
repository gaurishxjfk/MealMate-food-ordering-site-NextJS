import React, { useEffect as appEffect, useState as appState } from "react";
import Link from "next/link";
import Card from "../card";
import food1 from "../../public/images/food1.svg";
import { appStore } from "../../lib/store";

interface menuProps {
  showFullMenu: boolean;
}

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

const btnArr = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"];

const index: React.FC<menuProps> = ({ showFullMenu }) => {

  const [type, setType] = appState("All");
  const { sortMenuItems, sortedMenuItems } = appStore();
  console.log(sortedMenuItems)
  appEffect(() => {
    // Call the initial sorting when the component mounts
    sortMenuItems(type);
  }, [type]);

  return (
    <section className="w-full my-[8vh] mx-auto bg-[#E9F9F3] px-[1em] md:px-[3em] py-5 text-center">
      <h2 className="text-[#00412B] text-3xl font-bold">Our Menu</h2>
      <div className="flex flex-wrap gap-4 py-5 justify-center">
        {btnArr.map((i) => (
          <button
            key={i}
            onClick={() => setType(i)}
            className={`my-3 rounded-full border  ${type === i ? "bg-[#488A74] text-white" : "border-[#488A74] text-[#488A74] hover:bg-[#488A74] hover:text-white" }  min-w-[5em]	px-2 py-[.2em] my-0`}
          >
            {i}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap p-5 gap-5 justify-center">
        {showFullMenu
          ? sortedMenuItems.map((prod) => (
              <Card
                name={prod.name}
                price={prod.price}
                img={food1}
                isMenu={true}
                id={prod.id}
                key={prod.id}
              />
            ))
          : sortedMenuItems
              .slice(0, 8)
              .map((prod) => (
                <Card
                  name={prod.name}
                  price={prod.price}
                  img={food1}
                  isMenu={true}
                  id={prod.id}
                  key={prod.id}
                />
              ))}
      </div>
      <Link href="/menu" className={showFullMenu ? "hidden" : "block"}>
        <button className="rounded bg-[#488A74] text-white hover:font-bold hover:scale-105	transition-all duration-200 px-2 py-[.2em]">
          Show More
        </button>
      </Link>
    </section>
  );
};

export default index;
