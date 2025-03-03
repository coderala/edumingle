import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Have = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <h1 className="my-5 text-dark text-3xl text-center sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-prompt font-extrabold ">
        Have Questions?
      </h1>
      <div className=" flex w-10/12 flex-col items-center lg:items-start text-center bg-white rounded-lg m-auto text-lg sm:text-2xl lg:text-xl 2xl:text-sm">
        <div
          className="flex w-full  justify-between items-center px-4 py-2 rounded-lg"
          onClick={() => setShow(!show)}
        >
          <button>What is your return policy?</button>
          <FontAwesomeIcon icon={show ? faChevronDown : faChevronUp} />
        </div>
        <h2 className={` px-4 py-2 text-gray-400 ${show ? "block" : "hidden"}`}>
          We offer a hassle-free 30-day return policy on all products.
        </h2>
      </div>
    </div>
  );
};

export default Have;
