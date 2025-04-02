import React, { useState } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const images = [Sliderf, Sliders, Slidert];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const length = images.length;
  function button_next() {
    setIndex((next) => (next + 1) % length);
  }
  function button_prev() {
    setIndex((prev) => (prev - 1 + length) % length);
  }
  return (
    <section>
      <div className="w-[500px] bg-orange-200 overflow-hidden">
        <div
          className="w-[1500px] h-80 flex "
          style={{ transform: `translateX(-${index * 500}px)` }}
        >
          {images.map((i) => (
            <img className="w-[500px] h-full " src={i} />
          ))}
        </div>
      </div>
      <button onClick={button_prev}>prev</button>
      <button onClick={button_next}>next</button>
    </section>
  );
};

export default Slider;
