import React from "react";
import Slider from "react-slick";
import Card from "../card";
import food1 from "../../public/images/food1.svg";

const index: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
    ],
  };
  return (
    <section className="my-[5vh] text-center  mx-auto w-[80%] ">
      <h2 className="text-[#00412B] text-3xl font-bold">Trending Dishes</h2>
      <div className="text-center">
        <Slider {...settings}>
          {[...Array(7)].map((_, j) => (
            <div className="p-5 mx-5" key={j}>
              <Card
                name="Hamburger with fast food (street style)"
                price={300}
                img={food1}
                isMenu={false}
                id={j}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default index;
