import React from "react";
import Who_bg_star from "../assets/images/Who_bg_star.png";
import Who_bg_line from "../assets/images/Who_bg_line.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Who = () => {
  return (
    <div className="relative p-10">
      <div className="flex absolute top-20 ">
        <img src={Who_bg_line} className=" h-2 w-15 rotate-45 " />
        <img src={Who_bg_star} className="" />
        <img src={Who_bg_star} className="" />
        <img src={Who_bg_line} className="" />
      </div>
      <div className=" relative text-center">
        {/* <div class="flex justify-center items-center gap-6 mt-4"></div> */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold 2xl:space-y-10 ">
          Who We Are
        </h1>
        <p className=" text-lg sm:text-2xl lg:text-lg xl:text-lg xl:pr-28 2xl:text-2xl ">
          At EduMingle, we believe that every student deserves the tools to
          thrive. Our mission is to provide high-quality, stylish, and
          functional school accessories that enhance the learning experience.
          Whether you’re gearing up for a new school year or looking to upgrade
          your supplies, we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default Who;
