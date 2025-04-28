// src/components/CardComponent.js
import React from "react";

const CardComponent = ({ bgColor, nmbrImg, title, text, Img }) => {
  return (
    <main
      className={`${bgColor} flex p-2 sm:px-5 sm:py-5 m-2 xl:m-5 xl:mt-0 rounded-xl lg:w-1/2 sm:h-70 2xl:p-5`}
    >
      <img src={nmbrImg} className="h-36 sm:h-60 lg:h-52 2xl:h-64" />
      <div className="ml-2 sm:ml-5 flex flex-col justify-center xl:ml-16">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-prompt font-bold text-xl sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {title}
          </h1>
          <img src={Img} className="h-14 sm:h-24 lg:h-16 xl:h-20 2xl:h-24" />
        </div>
        <p className="font-poppins sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl mt-3">
          {text}
        </p>
      </div>
    </main>
  );
};

export default CardComponent;
