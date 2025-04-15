import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import profilef from "../assets/images/profilef.jpeg";
import profiles from "../assets/images/profiles.jpg";
import profilet from "../assets/images/profilet.jpg";
// bg
import Who_bg_star from "../assets/images/Who_bg_star.png";
import Who_bg_line from "../assets/images/Who_bg_line.png";
// bg
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
  const [index, setindex] = useState(0);
  const Prev = () => {
    setindex((e) => (e === 0 ? 2 : e - 1));
  };
  const Next = () => {
    setindex((e) => (e === 2 ? 0 : e + 1));
  };

  const content = [
    {
      profile: profilef,
      title: "Jamie R",
      star: 5,
      paragraph:
        "EduMingle transformed my school experience.The backpack is not only stylish but also super functional!",
    },
    {
      profile: profiles,
      title: "Jamie R",
      star: 5,
      paragraph:
        "EduMingle transformed my school experience.The backpack is not only stylish but also super functional!",
    },
    {
      profile: profilet,
      title: "Jamie R",
      star: 5,
      paragraph:
        "EduMingle transformed my school experience.The backpack is not only stylish but also super functional!",
    },
  ];
  return (
    <div>
      {/* <h1>What Our Customers Say</h1>
      <div className="w-96 h-96 overflow-hidden ">
        <div style={{ transform: `translateY(-${index * 384}px)` }}>
          {content.map((v, indx) => (
            <div key={indx}>
              <img src={v.profile} />
              <h2>{v.title}</h2>
              {[...Array(v.star)].map((_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  className="text-yellow-400"
                />
              ))}
              <h2>{v.paragraph}</h2>
            </div>
          ))}
        </div>{" "}
      </div>
      <button onClick={Prev}>Prev</button>
      <button onClick={Next}>Next</button>
      {content.map((_, i) => (
        <button
          key={i}
          onClick={() => setindex(i)}
          className={`w-3 h-3 rounded-full ${
            index === i ? "bg-black" : "bg-gray-400"
          }`}
        ></button>
      ))} */}
      {/* background  */}
      <div className="relative p-5 lg:py-20 container mx-auto">
        <div className=" relative text-center z-10 space-y-2 xl:space-y-5  lg:w-4/6 xl:w-9/12 mx-auto  ">
          {/* <div class="flex justify-center items-center gap-6 mt-4"></div> */}
          <div className="">
            <h1 className="text-dark text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold">
              What Our Customers Say
            </h1>
            
            <div className=" h-80 overflow-hidden bg-red-300 mx-auto">
              <div style={{ transform: `translateY(-${index * 384}px)` }}>
              <Carousel> {content.map((v, indx) => (
                  <div key={indx}>
                    <img src={v.profile} className="h-20 w-20 object-cover rounded" />
                    <h2>{v.title}</h2>
                    {[...Array(v.star)].map((_, i) => (
                      <FontAwesomeIcon
                        icon={faStar}
                        key={i}
                        className="text-yellow-400"
                      />
                    ))}
                    <h2>{v.paragraph}</h2>
                  </div>
                ))}</Carousel>
              </div>
            </div>
            <button onClick={Prev}>Prev</button>
            <button onClick={Next}>Next</button>
            {content.map((_, i) => (
              <button
                key={i}
                onClick={() => setindex(i)}
                className={`w-3 h-3 rounded-full ${
                  index === i ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex top-20 ">
          <img
            src={Who_bg_line}
            className="absolute top-12 xl:top-20 lg:left-20 h-2 w-20 rotate-12 xl:rotate-0 "
          />
          <img
            src={Who_bg_star}
            className="absolute top-1/4 lg:top-10 right-0
          xl:top-16 xl:right-60 h-8 w-8 xl:h-6 xl:w-6"
          />
          <img
            src={Who_bg_star}
            className="absolute top-2/4 left-5 lg:right-28 xl:top-24 xl:left-56 xl:h-8 xl:w-8 h-6 w-6 bg"
          />
          <img
            src={Who_bg_line}
            className="absolute right-20 h-2 w-10 -rotate-12 xl:rotate-0 xl:w-20 xl:top-2/4 xl:right-12 2xl:top-36 "
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;