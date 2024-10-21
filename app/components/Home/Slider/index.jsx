"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../common/Button";
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
  const [animateClasses, setAnimateClasses] = useState({});
  const carouselRef = useRef(null);
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

  const handleBeforeChange = (newIndex) => {
    setCurrentSlide(newIndex);
    setTimeout(() => {
      setAnimateClasses({});
    }, 10);
  };

  const handleAfterChange = (newIndex) => {
    setCurrentSlide(newIndex);
    setTimeout(() => {
      setAnimateClasses({ 1: "animate-1" });
    }, 10);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isInView,
    autoplaySpeed: 6000,
    dotsClass: "custom-dots",
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
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
              <div className="flex items-start justify-center h-full bg-black bg-opacity-30 home-slider-gradient px-8 ">
                <div className="max-w-[1450px] w-full px-24 pt-[146px] relative">
                  <div className="flex flex-col gap-4 max-w-[800px]">
                    <p
                      className={`text-2xl font-medium text-[#556B2F] ${"animate-1"}`}
                    >
                      {slide.service}
                    </p>
                    <p className="text-[57px] font-semibold mb-2">
                      {slide.title}
                    </p>
                    <p className="font-medium text-[#403d39] mb-4">
                      {slide.detail}
                    </p>
                    <div className="flex w-full items-center justify-start mt-12 gap-4">
                      <Button
                        width="fit"
                        className="!text-base"
                        onClick={() => handleClick(slide.btnLink)}
                      >
                        {slide.btnText}
                      </Button>
                      <Button
                        variant="outline"
                        width="fit"
                        className="!text-base"
                      >
                        Contact Us
                      </Button>
                    </div>
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
