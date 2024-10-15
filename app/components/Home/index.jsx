import React from "react";
import SlickCarousel from "./Slider";
import WhoWeServe from "./WhoWeServe";
const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SlickCarousel />
      <WhoWeServe />
    </div>
  );
};

export default Home;
