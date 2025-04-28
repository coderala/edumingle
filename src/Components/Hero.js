import React from "react";
import Hero_img from "../assets/images/Hero_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* parent div  */}
      <div className="bg-light  rounded-s-lg rounded-r-lg mt-3 lg:mt-7 text-center lg:text-start lg:flex py-6 px-5 lg:p-5 2xl:p-10">
        {/* first Div */}
        <div className="lg:w-2/4 lg:my-auto font-poppins md:p-10 space-y-4 sm:space-y-6 ">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold 2xl:space-y-10 ">
            Unlock Your Potential with EduMingle
          </h1>
          <p className=" text-lg sm:text-2xl lg:text-xs 2xl:text-sm lg:w-4/6 xl:pr-20 ">
            Your one-stop shop for innovative and stylish school accessories.
          </p>

          <button className="bg-yellow py-2 px-4 lg:py-3 lg:px-8 rounded-full font-semibold text-lg sm:text-2xl lg:text-sm ">
            Sign Up Now <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
          </button>
        </div>
        {/* second Div */}
        <div className="lg:w-2/4 d-flex justify-center items-center  lg:py-10 mt-5">
          <img className="w-3/4 lg:w-auto m-auto" src={Hero_img} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
