"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../common/Button";
import PlatformSection from "./platformSection";
import { useRouter } from "next/navigation";
import { CAROUSEL_SLIDES_CONTENT } from "@/Constants/PageContent/home";

const SlickCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const router = useRouter();

  const handleClick = (btnLink) => {
    router.push(btnLink);
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    beforeChange: handleBeforeChange,
    ref: sliderRef,
  };

  return (
    <div className="slider-container w-full h-auto overflow-x-hidden" ref={carouselRef}>
      <Slider {...settings}>
        {CAROUSEL_SLIDES_CONTENT.map((slide, index) => {
          // Smooth transition based on currentSlide
          const isActive = currentSlide === index;
          const isPrev = currentSlide === (index - 1 + CAROUSEL_SLIDES_CONTENT.length) % CAROUSEL_SLIDES_CONTENT.length;
          const isNext = currentSlide === (index + 1) % CAROUSEL_SLIDES_CONTENT.length;

          return (
            <div key={`carousel-slide-${index}`}>
              <div
                className="bg-cover bg-center h-[700px] md:h-[800px] relative"
                style={{ backgroundImage: `url('${slide.bgImage}')` }}
              >
                <div className="flex items-start justify-center h-full bg-black bg-opacity-30 home-slider-gradient px-3 sm:px-8 ">
                  <div className="max-w-[1450px] w-full text-center sm:text-left px-0 sm:px-24 pt-24 sm:pt-[146px]">
                    <div className={`flex flex-col gap-4 max-w-[800px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>
                      <p
                        className={`text-lg leading-normal sm:text-2xl font-medium text-[#556B2F] ${isActive ? "animate-1" : ""}`}
                      >
                        {slide.service}
                      </p>
                      <p
                        className={`tablet:leading-normal text-2xl sm:text-3xl tablet:text-[40px] large:text-[57px] font-semibold mb-2 ${isActive ? "animate-1" : ""}`}
                      >
                        {slide.title}
                      </p>
                      <p className={`font-medium text-[#403d39] mb-4 ${isActive ? "animate-1" : ""}`}>
                        {slide.detail}
                      </p>
                      <div className={`flex w-full items-center justify-center sm:justify-start mt-4 sm:mt-12 gap-4 home-btn-container ${isActive ? "animate-1" : ""}`}>
                        <Button
                          width="fit"
                          className="!text-xs sm:!text-base"
                          onClick={() => handleClick(slide.btnLink)}
                        >
                          {slide.btnText}
                        </Button>
                        <Button
                          variant="outline"
                          width="fit"
                          className="!text-xs sm:!text-base"
                          onClick={() => handleClick("/contact")}
                        >
                          Contact Us
                        </Button>
                      </div>
                      <div className={`flex w-full justify-center sm:justify-start ${isActive ? "animate-1" : ""}`}>
                        <ul className="relative custom-dots mt-6">
                          {CAROUSEL_SLIDES_CONTENT.map((_, dotIndex) => (
                            <li
                              key={dotIndex}
                              className={currentSlide === dotIndex ? "slick-active" : ""}
                              onClick={() => sliderRef.current.slickGoTo(dotIndex)}
                            >
                              <button type="button"></button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <PlatformSection />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
