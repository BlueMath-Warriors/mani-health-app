"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesData = [
  { id: 1, bgImage: "/images/slider/slider1.webp", alt: "Slide 1" },
  { id: 2, bgImage: "/images/slider/slider2.webp", alt: "Slide 2" },
  { id: 3, bgImage: "/images/slider/slider3.webp", alt: "Slide 3" },
];

const SlickCarousel = () => {
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isInView,
    autoplaySpeed: 6000,
    dotsClass: "custom-dots",
  };

  return (
    <div
      className="slider-container w-full h-auto overflow-x-hidden"
      ref={carouselRef}
    >
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={`carousel-slide-${index}`}>
            <div
              className="bg-cover bg-center h-[700px] md:h-[800px] "
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30 home-slider-gradient ">
                <h2 className="text-white text-3xl">{slide.alt}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
