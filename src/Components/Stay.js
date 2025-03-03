import React from "react";
import Frame from "../assets/images/Frame.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-regular-svg-icons";

const Stay = () => {
  return (
    <div className="bg-light rounded-xl m-3 text-center space-y-2 xl:space-y-5 p-3 lg:flex">
      {/* first div  */}
      <div className="flex justify-center lg:w-6/12 p-5">
        <img src={Frame} className="" />
      </div>
      {/* second div  */}
      <div className="flex flex-col justify-center  lg:w-6/12 lg:text-start">
        <div className="flex flex-col space-y-2 justify-center lg:text-start  lg:ml-10 lg:space-y-5">
          <h1 className="text-dark text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold ">
            Stay Connected
          </h1>
          <p className="text-lg sm:text-2xl lg:text-xs 2xl:text-sm lg:w-11/12 xl:pr-28 2xl:pr-44  ">
            Join our community of students and parents! Subscribe to our
            newsletter for the latest updates, promotions, and tips on
            maximizing your school experience.
          </p>
          <div className="relative flex flex-col justify-center items-center mt-3 lg:w-11/12 xl:w-10/12">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute text-gray-400 m-4 ml-14 sm:m-5 sm:ml-24 md:ml-28 xl:m-6 text-lg sm:text-2xl lg:text-md lg:m-4 top-0 left-0"
            />
            <input
              type="email"
              placeholder="    Enter your email address"
              className="focus:outline-none  py-2 px-4 xl:py-6 sm:py-4 rounded-lg text-lg sm:text-2xl lg:text-lg w-3/4 pl-12 lg:w-full"
            />
            <button className="bg-yellow mt-4 py-2 px-4 xl:py-6 font-semibold sm:py-4 lg:py-3 lg:px-8 rounded-lg  text-lg sm:text-2xl lg:text-sm w-3/4 lg:w-full">
              Sign Up Now
              <FontAwesomeIcon icon={faBell} className="pl-2 lg:text-md" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
