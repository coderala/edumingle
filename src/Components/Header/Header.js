import React, { useState } from "react";
// fontawesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
// Images
import vector from "../../assets/Vector.png";

const Header = () => {
  const [hamburger, sethamburger] = useState(false);
  const toggleMenu = () => {
    sethamburger(!hamburger);
  };
  return (
    <header className="container ">
      {/*close NAV is main div  */}
      <nav className="flex flex-wrap justify-between p-2 items-center bg-dark lg:pl-14 lg:pr-20">
        {/* LOGO and HAMBURGER --parent */}
        <div className="flex justify-between w-full lg:w-auto bg-black items-center">
          <img className="w-11 " src={vector} alt="Logo" />
          <FontAwesomeIcon
            className="text-2xl lg:hidden text-white ml-auto"
            onClick={toggleMenu}
            icon={faBars}
          />
        </div>
        {/* close LOGO and HAMBURGER --parent */}

        {/* open List and BUTTOn div  */}
        <div
          className={`bg-light w-full  p-3 mt-2 text-lg space-y-2 rounded-md lg:w-4/5 lg:flex justify-between lg:p-0 lg:mt-0 lg:space-y-0 ${
            hamburger ? "block" : "hidden"
          }`}
        >
          <ul className="text-center space-y-2 lg:flex justify-between lg:space-x-16 items-center lg:space-y-0">
            <li>ABOUT US</li>
            <li>OUR PRODUCTS</li>
            <li>CONTACT US</li>
          </ul>
          <div className="space-x-10 text-center ">
            <button className="bg-white p-2 rounded-full">LOGIN</button>
            <button className="bg-yellow p-2 rounded-full">
              Sign Up Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          {/* close List and BUTTOn div  */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
