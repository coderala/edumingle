import React from "react";
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
      <div className=" container mx-auto">
        {/* lg size parent  */}
        <div className="lg:flex justify-between">
          {/* first card  */}
          <main className="bg-light_blue flex p-2 sm:px-5  m-2 xl:m-5 rounded-xl lg:w-1/2 sm:h-70 2xl:p-5">
             {/* Number  */}
            <img src={One} className="h-36 sm:h-60 lg:h-52 2xl:h-64" />

            {/* center div  */}
            <div className=" ml-2 sm:ml-5 flex flex-col justify-center  xl:ml-16 ">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-prompt font-bold text-xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl  2xl:text-5xl">
                Quality
                </h1>
                <img src={Vector_one} className="h-14 sm:h-24 lg:h-16 xl:h-20 xl:h-20 2xl:h-24" />
              </div>
              {/* Paragraph   */}
              <p className="font-poppins sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl mt-3">
              We prioritize quality in every product to ensure they stand the
              test of time.
              </p>
            </div>
          </main>
          {/* Second card  */}
          <main className="bg-light_purple flex p-2 sm:px-5  m-2 xl:m-5 rounded-xl lg:w-1/2 sm:h-70 2xl:p-5">
            {/* Number  */}
            <img src={Two} className=" h-36 sm:h-60 lg:h-52 2xl:h-64"  />

            {/* center div  */}
            <div className="ml-2 sm:ml-5 flex flex-col justify-center xl:ml-16">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-prompt font-bold text-xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Style
                </h1>
                <img src={Vector_two} className="h-14 sm:h-24 lg:h-16 xl:h-20 2xl:h-24" />
              </div>
              {/* Paragraph  */}
              <p className="font-poppins sm:text-2xl md:text-3xl lg:text-xl 2xl:text-3xl mt-3">
              Our accessories are not just functional but also reflect your
                unique style.
              </p>
            </div>
          </main>
        </div>
        {/* lg second parent  */}
        <div className="lg:flex justify-between ">
          {/* Third card  */}
          <main className="bg-light_orange flex p-2 sm:px-5  m-2 xl:m-5 rounded-xl lg:w-1/2 sm:h-70 2xl:p-5">
            {/* Number  */}
            <img src={Three} className="h-36 sm:h-60 lg:h-52 2xl:h-64" />

            {/* center div  */}
            <div className="ml-2 sm:ml-5 flex flex-col justify-center xl:ml-16">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-prompt font-bold text-xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                  Affordability
                </h1>
                <img src={Vector_three} className="h-14 sm:h-24 lg:h-16 xl:h-20 2xl:h-24" />
              </div>
              {/* Paragraph  */}
              <p className="font-poppins sm:text-2xl md:text-3xl lg:text-xl 2xl:text-3xl mt-3">
                We believe in providing top-notch products at prices that won’t
                break the bank.
              </p>
            </div>
          </main>
          {/* Four card  */}
          <main className="bg-light_green flex p-2 sm:px-5  m-2 xl:m-5 rounded-xl lg:w-1/2 sm:h-70 2xl:p-5" >
            {/* Number  */}
            <img src={Four} className="h-36 sm:h-60 lg:h-52 2xl:h-64" />

            {/* center div  */}
            <div className="ml-2 sm:ml-5 flex flex-col justify-center xl:ml-16">
              <div className="flex w-full justify-between items-center">
                <h1 className="font-prompt font-bold text-xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                Sustainability
                </h1>
                <img src={Vector_four} className="h-14 sm:h-24 lg:h-16 xl:h-20 2xl:h-24" />
              </div>
              {/* Paragraph  */}
              <p className="font-poppins sm:text-2xl md:text-3xl lg:text-xl 2xl:text-3xl mt-3">
              EduMingle is committed to eco-friendly practices and materials.
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Cards;
