import React, { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profilef from "../assets/images/profilef.jpeg";
import profiles from "../assets/images/profiles.jpg";
import profilet from "../assets/images/profilet.jpg";
import Who_bg_star from "../assets/images/Who_bg_star.png";
import Who_bg_line from "../assets/images/Who_bg_line.png";
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
    <div className="relative container mx-auto py-16 px-4 select-none">
      {/* Background Decorations */}
      <img
        src={Who_bg_line}
        className="absolute top-12 xl:top-20 lg:left-20 h-2 w-20 rotate-12 xl:rotate-0"
      />
      <img
        src={Who_bg_star}
        className="absolute top-1/4 lg:top-10 right-0 xl:top-16 xl:right-60 h-8 w-8 xl:h-6 xl:w-6"
      />
      <img
        src={Who_bg_star}
        className="absolute top-2/4 left-5 xl:top-24 xl:left-56 h-6 w-6 xl:h-8 xl:w-8"
      />
      <img
        src={Who_bg_line}
        className="absolute right-20 h-2 w-10 -rotate-12 xl:rotate-0 xl:w-20 xl:top-2/4 xl:right-12"
      />

      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
        What Our Customers Say
      </h2>

      {/* Slider Layout */}
      <div className="flex justify-center items-center gap-6">
        {/* Carousel */}
        <div className="w-full max-w-md min-h-[350px] overflow-hidden">
          <Carousel
            renderArrowPrev={(clickHandler, hasPrev, label) =>
              hasPrev && (
                <button onClick={clickHandler}>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="text-black text-xl"
                  />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, label) =>
              hasNext && (
                <button onClick={clickHandler}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-black text-xl"
                  />
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
                className="flex flex-col items-center justify-center text-center space-y-4 py-6 min-h-[350px]"
              >
                <img
                  src={item.profile}
                  className="h-24 !w-24 object-cover rounded-full border-4 border-yellow-400 mx-auto"
                  alt={item.title}
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <div className="flex justify-center">
                  {[...Array(item.star)].map((_, i) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      key={i}
                      className="text-yellow-400 h-5 w-5"
                    />
                  ))}
                </div>
                <p className="text-gray-600 px-4">{item.paragraph}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
