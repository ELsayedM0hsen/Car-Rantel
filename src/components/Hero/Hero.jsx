import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.jpg";
import yellowCar from "../../assets/banner-car.png";

const Hero = ({theme}) => {
  

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="order-1 sm:order-2">
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="car"
              className="sm:scale-125 relative  max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p className="text-primary text-2xl font-serif">Effortless</p>
            <h1 className="text-5xl lg:text-7xl font-semibold font-serif">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              explicabo consectetur ipsa ad id voluptatum inventore et,
            </p>
            <button className="rounded-md bg-primary py-2 px-6 text-black transition hover:bg-primary/80 duration-500">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
