import React from "react";
import SlickCarousel from "./Slider";
import WhoWeServe from "./WhoWeServe";
import WhatWeOffer from "./WhatWeOffer";
const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SlickCarousel />
      <WhoWeServe />
      <WhatWeOffer />
    </div>
  );
};

export default Home;
