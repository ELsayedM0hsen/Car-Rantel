import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car11.png";
import car3 from "../../assets/car12.png";
import car4 from "../../assets/car7.png";
import car5 from "../../assets/car8.png";
import car6 from "../../assets/car9.png";
const carList = [
  {
    name: "Rover UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Jeep UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car4,
    aosDelay: "0",
  },  {
    name: "Merce UX",
    price: 100,
    image: car5,
    aosDelay: "500",
  },  {
    name: "BMW 12",
    price: 100,
    image: car6,
    aosDelay: "1000",
  },
];
const CarList = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold font-serif mb-3 sm:text-4xl">Lorem ipsum dolor</h1>
        <p className="text-sm pb-10">
          sit amet consectetur adipisicing elit. Maxime corporis sed vero
          repellat laboriosam accusamus
        </p>
        <div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 sm:grid-cols-2">
            {carList.map((car)=>(
              <div className="relative group rounded-xl p-3 border-2 border-gray-300 space-y-3 hover:border-primary">
                <div className="w-full h-[120px]">
                  <img src={car.image} alt="car" className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700" />
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">12Km</p>
                <div>
                  <h1 className="text-primary font-semibold">{car.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${car.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
