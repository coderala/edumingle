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
    <header className="container bg-dark">
      <nav className="flex justify-between p-2 items-center">
        <img className="w-11 " src={vector} alt="Logo" />
        <FontAwesomeIcon
          className="text-2xl text-white"
          onClick={toggleMenu}
          icon={faBars}
        />

        {/* main div  */}
        <div className={`${hamburger ? "block" : "hidden"}`}>
          <ul>
            <li>ABOUT US</li>
            <li>OUR PRODUCTS</li>
            <li>CONTACT US</li>
          </ul>
          <div>
            <button>LOGIN</button>
            <button>
              Sign Up Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          {/* main div  */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
