import React, { useState, useRef } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
  const items = [
    {
      image: Sliderf,
      title: "Backpacks",
      description: "Durable and stylish backpacks to carry your essentials.",
    },
    {
      image: Sliders,
      title: "Stationery",
      description:
        "Quality pens, notebooks, and organizers to keep you organized.",
    },
    {
      image: Slidert,
      title: "Tech Accessories",
      description: "Protective sleeves and chargers for your devices.",
    },
  ];
  const [index, setindex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const touchway = (e) => {
    return e.touches ? e.touches[0].clientX : e.clientX;
  };
  const startX = useRef(0);
  // const offset = useRef(0);

  const Prev = () => {
    setindex((i) => (i === 0 ? items.length - 1 : i - 1));
  };

  const Next = () => {
    setindex((i) => (i === items.length - 1 ? 0 : i + 1));
  };

  const Down = (e) => {
    setDragging(true);
    startX.current = touchway(e);
  };

  const Move = (e) => {
    if (!dragging) return;

    let moveX = touchway(e) - startX.current;

    if (moveX > 100) {
      Prev();
      setDragging(false);
    } else if (moveX < -100) {
      Next();
      setDragging(false);
    }
  };

  const Up = () => {
    setDragging(false);
  };

  return (
    <div className="bg-second_yellow lg:flex justify-center items-center py-6 px-3">
      {/* fisrt */}
      <div className="lg:w-2/5 lg:my-auto font-poppins md:p-10 space-y-4 sm:space-y-6 ">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold 2xl:space-y-10 text-dark">
          Explore Our Collection
        </h1>
        <p className=" text-lg sm:text-2xl lg:text-xs 2xl:text-sm lg:w-4/6 xl:pr-20 ">
          Designed for Every student
        </p>
        <button className=" text-black py-2 px-4 lg:py-3 lg:px-8 rounded-full font-semibold text-lg sm:text-2xl lg:text-sm bg-white">
          Browse All Product
          <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
        </button>
      </div>
      {/* second */}
      <div className="mt-4 flex  overflow-hidden">
        {index !== 0 && (
          <button onClick={Prev}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="p-2 sm:p-3 sm:text-2xl bg-dark text-white rounded-s-full lg:rounded-full"
            />
          </button>
        )}

        <div
          className="overflow-hidden  align-items-center "
          onMouseDown={Down}
          onMouseMove={Move}
          onMouseUp={Up}
          onTouchStart={Down}
          onTouchMove={Move}
          onTouchEnd={Up}
        >
          <div
            className="w-[120%] flex   space-x-10 justify-between my-2 "
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((i) => (
              <div className="shrink-0 lg:shrink  text-center bg-light rounded-lg p-3 lg:p-3 sm:p-6 md:w-6/12">
                <img
                  src={i.image}
                  className="bg-low_light   h-64 sm:h-96 lg:h-40  w-full m-auto rounded-md p-4"
                />
                <h2 className=" mt-2 text-2xl sm:text-5xl md:text-6xl lg:text-2xl  2xl:text-4xl font-prompt font-extrabold 2xl:space-y-10 ">
                  {i.title}
                </h2>
                <p className=" text-lg sm:text-2xl lg:text-xs 2xl:text-sm  ">
                  {i.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {index !== items.length - 1 && (
          <button onClick={Next}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="p-2 sm:p-3 sm:text-2xl bg-dark text-white rounded-e-full  lg:rounded-full"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Slider;
