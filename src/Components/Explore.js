import React, { useState, useRef } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const ExploreCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Start from first slide
  const [dragging, setDragging] = useState(false); // To track dragging
  const startX = useRef(0); // Starting position of the drag
  const offset = useRef(0); // Track the drag offset
  const items = [
    {
      image: Sliderf,
      title: "Backpacks",
      description: "Durable and stylish backpacks to carry your essentials."
    },
    {
      image: Sliders,
      title: "Stationery",
      description: "Quality pens, notebooks, and organizers to keep you organized."
    },
    {
      image: Slidert,
      title: "Tech Accessories",
      description: "Protective sleeves and chargers for your devices."
    }
  ];

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    let moveX = e.clientX - startX.current;
    offset.current = moveX;

    if (moveX > 100) {
      prevSlide();
      setDragging(false); // Stop dragging after a certain threshold
    } else if (moveX < -100) {
      nextSlide();
      setDragging(false); // Stop dragging after a certain threshold
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div>
      <h1 className="bg-red-500 text-white text-4xl text-center p-5">Explore Our Collection</h1>
      <div className="flex items-center justify-center bg-yellow-300 p-10 rounded-xl container mx-auto">
        {/* Left Section */}
        <div className="w-1/3 pr-8">
          <h2 className="text-4xl font-bold text-purple-700">Explore Our Collection</h2>
          <p className="text-gray-600 mt-2">Designed for Every Student</p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-full">Browse All Products →</button>
        </div>

        {/* Right Section - Slider */}
        <div
          className="relative w-2/3 flex items-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Ensures dragging stops when the mouse leaves the container
        >
          {/* Left Button */}
          {currentIndex > 0 && (
            <button 
              onClick={prevSlide} 
              className="absolute left-0 bg-purple-700 text-white p-2 rounded-full">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}

          {/* Slider Items */}
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 40}%)`, // Move 40% of the width per slide to show 2.5 slides
              width: "100%", // Ensure the container's width spans the full available space
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-[40%] mx-2 bg-white p-4 rounded-lg shadow-lg"
                style={{
                  opacity: 1, // No opacity effect, making slides fully visible
                  transform: `scale(1)`, // No scaling, ensure normal size for all slides
                  transition: "none", // No transition on scaling or opacity
                }}
              >
                <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-md" />
                <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          {currentIndex < items.length - 1 && (
            <button 
              onClick={nextSlide} 
              className="absolute right-0 bg-purple-700 text-white p-2 rounded-full">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreCollection;
