import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <div>
        <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
          <div className="container">
            <div className="pb-12">
              <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif">
                Why Choose Us
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.map((skill) => (
                <div className="card text-center group  bg-dark rounded-lg text-white space-y-3 p-4 hover:bg-primary hover:text-black duration-300 sm:space-y-6 sm:py-16">
                  <div className="grid place-items-center">{skill.icon}</div>
                  <h1 className="text-2xl font-bold">{skill.name}</h1>
                  <p>{skill.description}</p>
                  <a href={skill.link} className="inlie-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300">LEARN MORE</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
