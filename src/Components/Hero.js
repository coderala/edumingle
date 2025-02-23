import React from "react";
import Hero_img from "../assets/images/Hero_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section className="container mx-auto">
      {/* parent div  */}
      <div className="bg-light  rounded-s-lg rounded-r-lg mt-1  text-center">
        {/* first Div */}
        <div className="lg:w-2/4 font-poppins p-4 md:p-10 space-y-2 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-prompt font-extrabold">
            Unlock Your Potential with EduMingle
          </h1>
          <p className=" text-lg sm:text-2xl lg:text-sm">
            Your one-stop shop for innovative and stylish school accessories.
          </p>

          <button className="bg-yellow py-2 px-4 rounded-full font-semibold text-lg sm:text-2xl lg:text-sm">
            Sign Up Now <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
          </button>
        </div>
        {/* second Div */}
        <div className="lg:w-2/4  ">
          <img className="w-3/4 m-auto" src={Hero_img} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
