import React from "react";
import Card from "../card";
import food1 from "../../public/images/food1.svg";

const btnArr = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Beavrages"];
const index: React.FC = () => {
  return (
    <section className="w-full my-[8vh] mx-auto bg-[#E9F9F3] px-[1em] md:px-[3em] py-5">
      <h2 className="text-[#00412B] text-3xl font-bold">Our Menu</h2>
      <div className="flex flex-wrap gap-4 py-5">
        {btnArr.map((i) => (
          <button
            key={i}
            className="my-3 rounded-full border border-[#488A74] text-[#488A74] hover:bg-[#488A74] hover:text-white min-w-[5em]	px-2 py-[.2em] my-0"
          >
            {i}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap p-5 gap-5">
        <Card
          name="Hamburger with fast food (street style)

          fast food (street style)"
          price={300}
          img={food1}
          color="#FFFFFF"
        />
        <Card
          name="Hamburger with fast food (street style)"
          price={300}
          img={food1}
          color="#FFFFFF"
        />
        <Card
          name="Hamburger with fast food (street style)"
          price={300}
          img={food1}
          color="#FFFFFF"
        />
        <Card
          name="Hamburger with fast food (street style)"
          price={300}
          img={food1}
          color="#FFFFFF"
        />
        <Card
          name="Hamburger with fast food (street style)"
          price={300}
          img={food1}
          color="#FFFFFF"
        />
        <Card
          name="Hamburger with fast food (street style)"
          price={300}
          img={food1}
          color="#FFFFFF"
        />
      </div>
    </section>
  );
};

export default index;
