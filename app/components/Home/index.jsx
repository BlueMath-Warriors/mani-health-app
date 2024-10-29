import React from "react";
import SlickCarousel from "./Slider";
import WhoWeServe from "./WhoWeServe";
import WhatWeOffer from "./WhatWeOffer";
import ComprehensiveCare from "./ComprehensiveCare";
import AboutAMHI from "./AboutAMHI";
import ReferralAction from "../common/ReferralAction";
const Home = () => {
  return (
<<<<<<< HEAD
    <>
      <div class="preloader" style={{ display: "none" }}>
        <div class="centrize full-width">
          <div class="vertical-center">
            <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <SlickCarousel />
        <WhoWeServe />
        <AboutAMHI />
        <WhatWeOffer />
        <ComprehensiveCare />
        <ReferralAction />
      </div>
    </>
=======
    <div className="flex w-full flex-col items-center justify-center">
      <SlickCarousel />
      <WhoWeServe />
      <AboutAMHI />
      <WhatWeOffer />
      <ComprehensiveCare />
      <ReferralAction />
    </div>
>>>>>>> a23399218e6e2a8a8b61ed9f75613dd64c6760a5
  );
};

export default Home;
