import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container mx-auto font-poppins text-lg">
    <div className="flex justify-between items-center gap-4 p-6 bg-gray-900 text-white">
      <ul className="  lg:flex list-none gap-6">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>

      <div className="flex gap-6 text-2xl text-white">
        <FontAwesomeIcon icon={faFacebookF} className="" />
        <FontAwesomeIcon icon={faInstagram} className="" />
        <FontAwesomeIcon icon={faTwitter} className="" />
      </div>
      </div>
      <div className="text-center p-3 text-gray-500 ">
        <h2>&copy; 2024 EduMingle. All rights reserved.</h2>
      </div>
   </footer>
  );
};

export default Footer;
