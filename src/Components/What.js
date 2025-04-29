import React, { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profilef from "../assets/images/profilef.jpeg";
import profiles from "../assets/images/profiles.jpg";
import profilet from "../assets/images/profilet.jpg";
import Who_bg_star from "../assets/images/Who_bg_star.png";
import Who_bg_line from "../assets/images/Who_bg_line.png";
import quote from "../assets/images/quote.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const content = [
    {
      profile: profilef,
      title: "Jamie R",
      star: 5,
      paragraph:
        "EduMingle transformed my school experience. The backpack is not only stylish but also super functional!",
    },
    {
      profile: profiles,
      title: "Taylor M",
      star: 4,
      paragraph:
        "High quality and stylish! I love it and use it every day for college.",
    },
    {
      profile: profilet,
      title: "Chris L",
      star: 5,
      paragraph: "Super functional and trendy. It fits all my stuff with ease.",
    },
  ];

  return (
    <div className="relative container  mx-auto py-6 px-3 xl:py-32 bg-white">
      <div className="p-2 bg-white  m-2">
        {/* Background Decorations */}
        <img
          src={Who_bg_line}
          className="absolute top-12 xl:top-20 lg:left-20 h-2 w-20 rotate-12 lg:rotate-0"
        />
        <img
          src={Who_bg_star}
          className="absolute top-1/4 lg:top-10 right-4 xl:top-16 xl:right-60 h-8 w-8 xl:h-6 xl:w-6 md:right-28"
        />
        <img
          src={Who_bg_star}
          className="absolute top-2/4 left-10 xl:top-24 xl:left-56 h-6 w-6 xl:h-8 xl:w-8 lg:top-20 md:left-20"
        />
        <img
          src={Who_bg_line}
          className="absolute right-20 h-2 w-10 md:w-20 -rotate-12 xl:w-20 xl:top-1/4 xl:right-32 lg:rotate-0 sm:top-20 md:right-0"
        />
        <img
          src={quote}
          className="absolute md:left-28 left-12 lg:left-1/4 bottom-1/4 h-10 w-16  md:w-28 md:h-20  xl:w-32 xl:h-20 -rotate-180 xl:left-60"
        />
        <img
          src={quote}
          className="absolute bottom-16 right-24 md:right-24 lg:right-1/4  h-10 w-16  md:w-28  md:h-20 xl:w-32 xl:h-20 xl:bottom-36"
        />

        <h2 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold text-dark">
          What Our Customers Say
        </h2>

        {/* Slider Layout */}
        <div className="flex justify-center items-center ">
          {/* Carousel */}
          <div className=" w-full max-w-md md:max-w-full min-h-[350px] overflow-hidden">
            <Carousel
              renderIndicator={(onClickHandler, isSelected) => {
                return (
                  <span
                    onClick={onClickHandler}
                    className={`inline-block mx-1 cursor-pointer transition-all duration-300 h-1 w-5 md:h-2 md:w-6 rounded-full  ${
                      isSelected ? "bg-[#720e9e]" : "bg-gray-400"
                    }`}
                    // style={{
                    //   width: "20px",
                    //   height: "5px",
                    //   borderRadius: "999px", // makes it pill shaped
                    // }}
                  ></span>
                );
              }}
              renderArrowPrev={(clickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    className="text-white w-7 h-7 md:w-9 md:h-9 mt-8 md:mt-7  items-center rounded-full text-xl top-1/3 rotate-90 bg-dark  right-0 lg:right-28  absolute z-10 -translate-y-1/2"
                    onClick={clickHandler}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    className="text-white w-7 h-7 md:w-9 md:h-9 mb-8 md:mb-7   items-center rounded-full text-center text-xl bottom-1/3 rotate-90 bg-dark right-0 lg:right-28 absolute "
                    onClick={clickHandler}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                )
              }
              ref={carouselRef}
              showThumbs={false}
              showStatus={false}
              showIndicators={true} // Show bullets
              showArrows={true} // Enable next/prev arrows
              emulateTouch={true}
              infiniteLoop
              verticalSwipe="natural"
              axis="vertical"
              swipeable={true}
              selectedItem={selectedIndex}
              onChange={(index) => setSelectedIndex(index)}
              className="carousel-container"
            >
              {content.map((item, i) => (
                <div
                  key={i}
                  className=" flex flex-col items-center justify-center text-center space-y-4 py-6 min-h-[350px] text-Poppins "
                >
                  <img
                    src={item.profile}
                    className="h-24 !w-24 object-cover rounded-full border-4 border-yellow-400 mx-auto "
                    alt={item.title}
                  />
                  <h3 className="text-xl ">{item.title}</h3>
                  <div className="flex justify-center">
                    {[...Array(item.star)].map((_, i) => (
                      <FontAwesomeIcon
                        icon={faStar}
                        key={i}
                        className="text-yellow h-7 w-7"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 px-4 md:w-8/12 lg:w-6/12">
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
