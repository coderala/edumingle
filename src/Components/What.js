import React from "react";
import Who_bg_star from "../assets/images/Who_bg_star.png";
import Who_bg_line from "../assets/images/Who_bg_line.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Who = () => {
  return (
    <div className="relative p-5 lg:py-20 container mx-auto">
      <div className=" relative text-center z-10 space-y-2 xl:space-y-5  lg:w-4/6 xl:w-9/12 mx-auto  ">
       
       <h1 className="bg-red-500 text-white text-4xl"> after makeing slider</h1>
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
  );
};

export default Who;
