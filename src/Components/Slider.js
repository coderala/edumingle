import React, { useState } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const images = [Sliderf, Sliders, Slidert];

const Slider = () => {
  const [key, setkey] = useState(0);
  const [downs, setdowns] = useState(0);
  const [moves, setmoves] = useState(0);
  const [condense, setcondense] = useState(false);
  const Prev = () => {
    setkey((v) => (v === 0 ? images.length - 1 : v - 1));
  };
  const Next = () => {
    setkey((v) => (v === images.length - 1 ? 0 : v + 1));
  };
  const Down = (e) => {
    setdowns(e.clientX);
    setcondense(true);
    console.log("Down",e.clientX);
  };
  const Move = (e) => {
    if (condense) {
      // let mov = e.clientX;
      setmoves(e.clientX);
      console.log("Move",e.clientX);
      setcondense(false);
    }
  };
  const Up = (e) => {
    let end = downs - moves;
    console.log("Up",e.clientX);
    console.log("End",end);
  };
  return (
    <div>
      <button onClick={Prev}>Prev</button>
      <div
        className="flex w-96 border overflow-hidden "
        onMouseDown={Down}
        onMouseMove={Move}
        onMouseUp={Up}
      >
        {images.map((img, indx) => (
          <img
            src={img}
            key={indx}
            alt={indx}
            draggable={false}
            className="h-72 object-cover"
            style={{ transform: `translateX(${-key * 384}px)` }}
          />
        ))}
      </div>
      <button onClick={Next}>Next</button>
    </div>
  );
};

export default Slider;
