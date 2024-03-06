import CarPng from "../../assets/car10.png";

const About = () => {
  return (
    <div className="bg-slate-100 dark:bg-dark sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img
              src={CarPng}
              alt="car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
              <p className="leading-8 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                nemo? Nemo praesentium laboriosam deserunt
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                nemo? Nemo praesentium laboriosam deserunt
              </p>
              <button className="rounded-md border-2 border-primary hover:bg-primary/80 hover:text-black duration-500 py-2 px-6 text-primary tracking-wider">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
