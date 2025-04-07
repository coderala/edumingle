import React from "react";
import CardComponent from "./CardComponent";

import One from "../assets/images/One.png";
import Two from "../assets/images/Two.png";
import Three from "../assets/images/Three.png";
import Four from "../assets/images/Four.png";
import Vector_one from "../assets/images/Vector_one.png";
import Vector_two from "../assets/images/Vector_two.png";
import Vector_three from "../assets/images/Vector_three.png";
import Vector_four from "../assets/images/Vector_four.png";

const Cards = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <CardComponent
            bgColor="bg-light_blue"
            nmbrImg={One}
            title="Quality"
            text="We prioritize quality in every product to ensure they stand the test of time."
            Img={Vector_one}
          />
          <CardComponent
            bgColor="bg-light_purple"
            nmbrImg={Two}
            title="Style"
            text="Our accessories are not just functional but also reflect your unique style."
            Img={Vector_two}
          />
        </div>
        <div className="lg:flex justify-between">
          <CardComponent
            bgColor="bg-light_orange"
            nmbrImg={Three}
            title="Affordability"
            text="We believe in providing top-notch products at prices that won’t break the bank."
            Img={Vector_three}
          />
          <CardComponent
            bgColor="bg-light_green"
            nmbrImg={Four}
            title="Sustainability"
            text="EduMingle is committed to eco-friendly practices and materials."
            Img={Vector_four}
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
