import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import bannar from "../../assets/bannar.png";

const bannerImg = {
  backgroundImage: `url(${bannar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStoreBanner = () => {
  return (
    <div className="container">
      <div className="text-white py-10 rounded-xl sm:min-h-[400px] " style={bannerImg}>
        <div>
          <div className="space-y-6 max-w-xl p-3">
            <h1 className="text-2xl font-semibold font-serif sm:text-4xl">Get Started with our app</h1>
            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              neque nam sed quia!
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt="PlayStoreImg"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt="AppStoreImg"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
