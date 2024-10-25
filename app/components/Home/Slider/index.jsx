"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../common/Button";
import PlatformSection from "./platformSection";
import { useRouter } from "next/navigation";

const slidesData = [
  {
    id: 1,
    bgImage: "/images/slider/slider1.webp",
    alt: "Slide 1",
    service: "Orthopedic and Physical Therapy Care",
    title: "Expert Care for Accident and Work Injuries",
    detail:
      "Offering specialized orthopedic and physical therapy services for individuals injured in road accidents or at work, supporting their full recovery journey",
    btnText: "Explore Our Services",
    btnLink: "/services",
  },
  {
    id: 2,
    bgImage: "/images/slider/slider2.webp",
    alt: "Slide 2",
    service: "Services for Legal and Insurance Professionals",
    title: "Tailored Support for Workers’ Compensation and Road Accident Cases",
    detail:
      "Collaborating with lawyers and insurance professionals in road accident and workers’ compensation cases, providing essential medical insights and services.",
    btnText: "Legal and Insurance Support",
    btnLink: "/legal-support",
  },
  {
    id: 3,
    bgImage: "/images/slider/slider3.webp",
    alt: "Slide 3",
    service: "Comprehensive Services for Nursing Homes",
    title: "Pharmacy and Medical Equipment for Nursing Homes",
    detail:
      "Supplying nursing homes with necessary medications and durable medical equipment, ensuring quality care for residents.",
    btnText: "Nursing Home Partnerships",
    btnLink: "/senior-living",
  },
];

const SlickCarousel = () => {
  const [isInView, setIsInView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null); // Reference to the slider container
  const sliderRef = useRef(null); // Reference to the Slider instance
  const router = useRouter();

  const handleClick = (btnLink) => {
    router.push(btnLink);
  };

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

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isInView,
    autoplaySpeed: 6000,
    beforeChange: handleBeforeChange,
    ref: sliderRef, // Set the ref on the slider instance
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
              className="bg-cover bg-center h-[700px] md:h-[800px] relative"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              <div className="flex items-start justify-center h-full bg-black bg-opacity-30 home-slider-gradient px-3 sm:px-8 ">
                <div className="max-w-[1450px] w-full text-center sm:text-left px-0 sm:px-24 pt-24 sm:pt-[146px]">
                  <div className="flex flex-col gap-4 max-w-[800px]">
                    <p
                      className={`text-lg leading-normal sm:text-2xl font-medium text-[#556B2F]`}
                    >
                      {slide.service}
                    </p>
                    <p className="tablet:leading-normal text-2xl sm:text-3xl tablet:text-[40px] large:text-[57px] font-semibold mb-2">
                      {slide.title}
                    </p>
                    <p className="font-medium text-[#403d39] mb-4">
                      {slide.detail}
                    </p>
                    <div className="flex w-full items-center justify-center sm:justify-start mt-4 sm:mt-12 gap-4 home-btn-container">
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
                    <div className="flex w-full justify-center sm:justify-start">
                      <ul className="relative custom-dots mt-6">
                        {slidesData.map((_, index) => (
                          <li
                            key={index}
                            className={
                              currentSlide === index ? "slick-active" : ""
                            }
                            onClick={() => sliderRef.current.slickGoTo(index)}
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
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
