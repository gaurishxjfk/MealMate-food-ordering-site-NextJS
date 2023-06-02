import React, { useEffect as appEffect, useState as appState} from "react";
import { motion } from "framer-motion";
import starRating from "../../public/images/starRating.svg";
import Image from "next/image";
import { reviewCard } from "../../types/types";



const ReviewCards: React.FC = () => {
  const [cards, setCards] = appState <reviewCard[]>([
    { color: "“The food was lovely and will order it again”", rating: 5 },
    {
      color:
        "“The sushi was incredibly fresh and the flavors were perfectly balanced.”",
      rating: 1,
    },
    {
      color:
        "“The pizza had a crispy crust and a delicious combination of toppings.”",
      rating: 2,
    },
    {
      color: "“The salad was fresh and full of vibrant, crunchy vegetables.”",
      rating: 4,
    },
    {
      color: "“The steak was cooked to perfection and melted in my mouth.”",
      rating: 3,
    },
  ]);

  const handleMoveTopToBottom = () => {
    setCards((prevCards) => {
      const [firstCard, ...restCards] = prevCards;
      return [...restCards, firstCard];
    });
  };

  appEffect(() => {
    const intervalID = setInterval(() => handleMoveTopToBottom(), 3000);
    return () => clearInterval(intervalID);
  }, []);

  return (
      <div className="mx-auto">
        <div className="relative ">
        {cards.map((card, index) => (
          <motion.div
            key={card.color}
            animate={{
              zIndex: 2,
              opacity: index === 0 ? 0 : 1,
              scale: index === 0 ? 0 : 1,
              translateY: index === 0 ? 45 : 0,
              skewY: index === 0 ? 90 : 0,
              transition: { duration: 0.5 },
            }}
            className={`absolute h-[12em] w-[70%] rounded 
                          drop-shadow-[-2px_-2px_4px_rgba(0,0,0,0.10)]
                          transition-property="transform, z-index" 
                          transition-all duration-1000 bg-[#F0FFF9] text-center
                          flex flex-col justify-center items-center px-4`}
            style={{
              zIndex: cards.length - index,
              marginTop: index * 15,
              marginLeft: index * 15,
            }}
          >
            <div>
              <h2 className="text-md sm:text-lg md:text-xl font-bold my-2">
                {card.color}
              </h2>
              <div className="flex justify-center my-2 gap-1">
                {[...Array(card.rating)].map((_, j) => (
                  <Image src={starRating} alt="rating" key={j} />
                ))}
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-md font-bold">Rashid Kahn</h4>
                <p className="text-xs sm:text-sm text-gray-500">Bicholim, Goa</p>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
  );
};

export default ReviewCards;
