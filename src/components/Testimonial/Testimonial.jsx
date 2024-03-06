import React from "react";

const testimonialData = [
  {
    name: "Dilshad",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Satya",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <div className="py-14">
      <div className="container">
        <div className="space-y-4 pb-12">
          <h1
            data-aos="fade-up"
            className="font-bold text-4xl text-center font-serif"
          >
            What Our Clients Say About Us
          </h1>
          <p data-aos="fade-up" className="text-center py-5 sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-col-1 gap-4 md:grid-cols-3 sm:grid-cols-2 text-dark dark:text-white">
          {testimonialData.map((data) => (
            <div
              key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="card text-center space-y-3 group bg-gray-100 rounded-lg p-4 sm:space-y-6 sm:py-12 dark:bg-white/20 duration-300 "
            >
              <div className="grid place-items-center">
                <img
                  src="https://picsum.photos/536/354"
                  alt="image"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p>{data.description}</p>
              <p className="font-semibold text-center">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
