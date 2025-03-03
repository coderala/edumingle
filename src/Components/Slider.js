import React, { useState } from "react";
import Sliderf from "../assets/images/Sliders.png";
import Sliders from "../assets/images/Sliderf.png";
import Slidert from "../assets/images/Slidert.png";

const Slider = () => {
  return (
    <div className="flex">
        <img className="border-2" src={Sliderf}/>
        <img src={Sliders}/>
        <img src={Slidert}/>

    </div>
  )
}

export default Slider