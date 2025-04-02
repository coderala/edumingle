import React, { useState, useRef } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const images = [Sliderf, Sliders, Slidert];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = images.length;
  // const sliderRef = useRef(null);
  let startX = 0;
  let isDragging = false;

  const next = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    if (moveX > 50) {
      prev();
      isDragging = false;
    } else if (moveX < -50) {
      next();
      isDragging = false;
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <div
      // ref={sliderRef}
      className="relative w-[500px] overflow-hidden mx-auto"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-[500px] h-[300px] flex-shrink-0"
          />
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
      >
        Prev
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
