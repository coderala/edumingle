import React from "react";
import One from "../assets/images/One.png";
import Two from "../assets/images/Two.png";
import Three from "../assets/images/Three.png";
import Vector_one from "../assets/images/Vector_one.png";

const Cards = () => {
  return (
    <section>
      <div className="bg-light_blue flex ">
        <img src={One} className="w-1/4" />
        {/* one  */}
        <div className="flex">
          <h1>Quality</h1>
          <img src={Vector_one} className="h-8
          "/>
        </div>
        {/* heading  */}
        {/* <h1>
          We prioritize quality in every product to ensure they stand the test
          of time.
        </h1> */}
      </div>
    </section>
  );
};

export default Cards;
