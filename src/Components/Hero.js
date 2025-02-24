import React from "react";
import Hero_img from "../assets/images/Hero_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* parent div  */}
      <div className="bg-light  rounded-s-lg rounded-r-lg mt-3 lg:mt-7 text-center lg:text-start lg:flex lg:p-5 2xl:p-10">
        {/* first Div */}
        <div className="lg:w-2/4 font-poppins p-4 md:p-10 space-y-2 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold 2xl:space-y-10 ">
            Unlock Your Potential with EduMingle
          </h1>
          <p className=" text-lg sm:text-2xl lg:text-lg xl:text-lg xl:pr-28 2xl:text-2xl ">
            Your one-stop shop for innovative and stylish school accessories.
          </p>

          <button className="bg-yellow py-2 px-4 lg:py-3 lg:px-10 rounded-full font-semibold text-lg sm:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl">
            Sign Up Now <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
          </button>
        </div>
        {/* second Div */}
        <div className="lg:w-2/4 d-flex justify-center lg:py-10">
          <img className="w-3/4 lg:w-auto" src={Hero_img} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
