import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";
import React, { useState, useRef } from "react";

let images = [Sliderf, Sliders, Slidert];

const Slider = () => {
  const [drag, setDrag] = useState(false); // To track if dragging is happening
  const [index, setIndex] = useState(0); // To track current index of the slider
  const [startX, setStartX] = useState(0); // Starting X position of the mouse
  const [offset, setOffset] = useState(0); // How much the mouse has moved horizontally
  const sliderRef = useRef(null); // Reference to the slider container for accessing its DOM

  // To handle mouse down event, initialize drag position
  const onMouseDown = (e) => {
    setStartX(e.clientX); // Get the starting mouse position
    setDrag(true); // Set dragging to true
    sliderRef.current.style.transition = "none"; // Disable transition while dragging
  };

  // To handle mouse move event, calculate distance dragged and move the slider
  const onMouseMove = (e) => {
    if (!drag) return; // If not dragging, do nothing

    const moveX = e.clientX - startX; // Calculate distance moved by mouse
    setOffset(moveX); // Update offset for drag effect

    // Optional: Smooth dragging, move the slider container while dragging
    sliderRef.current.style.transform = `translateX(${offset}px)`;
  };

  // To handle mouse up event, stop dragging and change the slide if needed
  const onMouseUp = () => {
    if (drag) {
      if (offset < -100) {
        // If moved more than 100px to the left, go to next slide
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (offset > 100) {
        // If moved more than 100px to the right, go to previous slide
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      setDrag(false); // End the dragging
      setOffset(0); // Reset the offset
      sliderRef.current.style.transition = "transform 0.3s ease"; // Re-enable smooth transition
    }
  };

  // Prev button functionality
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next button functionality
  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Prev Button */}
      <button onClick={prevSlide}>Prev</button>

      {/* Slider container */}
      <div
        className="w-[200px] overflow-hidden border relative"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp} // In case mouse leaves the area while dragging
      >
        <div
          ref={sliderRef}
          className="flex"
          style={{
            transform: `translateX(-${index * 200}px)`, // Apply current index translation
          }}
        >
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Slider ${idx}`} className="w-[200px]" />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
