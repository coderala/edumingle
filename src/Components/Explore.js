import React, { useState } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const ExploreCollection = () => {
  const [currentIndex, setCurrentIndex] = useState(-0.5); // Start from -0.5 to show half slide
  const [leftHidden, setLeftHidden] = useState(false);
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
    if (currentIndex === -0.5) {
      setCurrentIndex(0);
      setLeftHidden(true);
    }
  };

  return (
    <div className="flex items-center justify-center bg-yellow-300 p-10 rounded-xl container mx-auto bg-second_yellow">
      {/* Left Section */}
      <div className="w-1/3 pr-8">
        <h2 className="text-4xl font-bold text-purple-700">Explore Our Collection</h2>
        <p className="text-gray-600 mt-2">Designed for Every Student</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-full">Browse All Products →</button>
      </div>
      
      {/* Right Section - Slider */}
      <div className="relative w-2/3 flex items-center overflow-hidden">
        {/* Left Button - Initially visible, hides after full slide is shown */}
        {!leftHidden && (
          <button 
            onClick={prevSlide} 
            className="absolute left-0 bg-purple-700 text-white p-2 rounded-full">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        )}
        
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${(currentIndex + 0.5) * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="min-w-[250px] mx-4 bg-white p-4 rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Button - Hidden initially, shows after left is clicked */}
        {leftHidden && (
          <button 
            onClick={nextSlide} 
            className={`absolute right-0 bg-purple-700 text-white p-2 rounded-full ${currentIndex === items.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ExploreCollection;
