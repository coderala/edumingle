// import React, { useState } from "react";
// import Sliderf from "../assets/images/Sliders.png";
// import Sliders from "../assets/images/Sliderf.png";
// import Slidert from "../assets/images/Slidert.png";

// const images = [Sliderf, Sliders, Slidert];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-[600px] overflow-hidden">
//       {/* Images Container */}
//       <div
//         className="flex transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 50}%)` }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             className="w-[200px] h-[200px] mx-2 rounded-lg shadow-lg"
//             alt="Slider"
//           />
//         ))}
//       </div>

//       {/* Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//       >
//         Prev⬅
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//       >
//         ➡next
//       </button>
//     </div>
//   );
// };

// export default Slider;
import React, { useState } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const images = [Sliderf, Sliders, Slidert];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = images.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % totalSlides); // Loop back to start
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides); // Loop to last image
  };

  return (
    <div className="relative w-[500px] overflow-hidden mx-auto">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${index * 33.33}%)`, // 33.33% taake 2.5 images dikhain
        }}
      >
        {images.concat(images).map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-[200px] h-[200px] mx-2 flex-shrink-0"
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
