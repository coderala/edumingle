import React, { useState, useRef } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Sliderf, Sliders, Slidert];
  const sliderRef = useRef(null);

  let startX = 0;
  let isDragging = false;

  // **Next Slide**
  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // **Previous Slide**
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // **Drag Start**
  const handleDragStart = (e) => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
  };

  // **Drag Move**
  const handleDragMove = (e) => {
    if (!isDragging) return;
    let moveX = e.clientX || e.touches[0].clientX;
    let diff = moveX - startX;

    if (diff > 50) {
      prevSlide();
      isDragging = false;
    } else if (diff < -50) {
      nextSlide();
      isDragging = false;
    }
  };

  // **Drag End**
  const handleDragEnd = () => {
    isDragging = false;
  };

  return (
    <div className="relative w-[80%] mx-auto flex items-center justify-center overflow-hidden">
      {/* Left Button (Shuru me sirf ye show hoga, disabled rahega) */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 z-10 bg-gray-800 text-white px-3 py-1 rounded ${
          currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Left
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div>
          <img src={Sliderf} />
        </div>
        <div>
          <img src={Sliders} />
        </div>
        <div>
          <img src={Slidert} />
        </div>
      </div>

      {/* Right Button (Pehle hidden, first click ke baad show hoga) */}
      <button
        onClick={nextSlide}
        className={`absolute right-2 z-10 bg-gray-800 text-white px-3 py-1 rounded ${
          currentIndex === images.length - 1 ? "opacity-50 pointer-events-none" : ""
        } ${currentIndex === 0 ? "hidden" : ""}`}
      >
        Right
      </button>
    </div>
  );
};

export default Explore;
