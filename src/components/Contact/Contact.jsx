import React from "react";

const Contact = () => {
  return (
    <div className="py-10 text-white">
      <div className="container">
        <div className="rounded-xl gap-6 bg-gray-800 p-5">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:place-items-center">
            <div className="space-y-6 max-w-xl p-3 ">
              <h1 className="text-4xl sm:text-5xl font-bold font-serif">
                Let's collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                neque nam sed quia!
              </p>
            </div>
            <button className="rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-500 py-2 px-6 text-primary tracking-wider">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
