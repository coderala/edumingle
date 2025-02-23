import React, { useState } from "react";
// fontawesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
// Images
import vector from "../assets/images/Vector.png";

const Header = () => {
  const [hamburger, sethamburger] = useState(false);
  const toggleMenu = () => {
    sethamburger(!hamburger);
  };
  return (
    <header className="container mx-auto font-poppins font-semibold ">
      {/*close NAV is main div */}
      <nav className="flex flex-wrap justify-between p-2  items-center bg-dark lg:pl-14 lg:pr-20  2xl:py-4 rounded-s-lg rounded-r-lg"> 
        {/* open LOGO and HAMBURGER --parent */}
        <div className="flex justify-between w-full lg:w-auto items-center ">
          <img
            className="w-12 sm:w-16 md:w-1/12 lg:w-3/4 cursor-pointer"
            src={vector}
            alt="Logo"
          />
          <FontAwesomeIcon
            className="text-3xl sm:text-5xl lg:hidden text-white ml-auto cursor-pointer"
            onClick={toggleMenu}
            icon={faBars}
          />
        </div>
        {/* close LOGO and HAMBURGER --parent */}

        {/* open List and BUTTOn div */}
        <div
          className={` bg-light lg:bg-transparent w-full lg:w-4/5 xl:w-9/12 2xl:w-4/6 py-8 mt-2 text-lg sm:text-2xl lg:text-sm space-y-2 sm:space-y-6 rounded-md lg:flex justify-between lg:p-0 lg:mt-0 lg:space-y-0 ${
            hamburger ? "block" : "hidden"
          }`}
        >
          <ul className="text-center space-y-2 sm:space-y-6 lg:flex justify-between lg:space-x-16 items-center lg:space-y-0 xl:pl-12 lg:text-white cursor-pointer">
            <li>ABOUT US</li>
            <li>OUR PRODUCTS</li>
            <li>CONTACT US</li>
          </ul>
          <div className="space-x-10 lg:space-x-5 text-center ">
            <button className="bg-white py-2 px-4 rounded-full">LOGIN</button>
            <button className="bg-yellow py-2 px-4 rounded-full ">
              Sign Up Now{" "}
              <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
            </button>
          </div>
          {/* close List and BUTTOn div */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
