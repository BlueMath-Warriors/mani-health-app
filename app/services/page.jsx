import React from "react";
import { poppins } from "../layout";
import { SERVICES_LIST } from "@/Constants/servicesData";
import Image from "next/image";

const Services = () => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal flex justify-center py-[45px] px-[25px] ${poppins.className}`}
    >
      <div className="max-w-[1200px] flex flex-col">
        <div className="flex flex-col text-center mb-12">
          <h4 className="text-base lg:text-2xl text-secondary font-medium mb-6">
            What We Offer?
          </h4>
          <h1 className="text-[25px] lg:text-4xl font-semibold">
            Exceptional Services To Support Your Health And Well-Being
          </h1>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-8">
          {SERVICES_LIST.map((service, index) => (
            <li key={index} className="flex flex-col w-full lg:w-[30%] rounded-lg shadow-servicesCustomShadow my-4">
              <div className="rounded-t-lg">
                <Image
                  src={service.imageSrc}
                  alt={`${service.title} image`}
                  width={360}
                  height={224}
                  className="h-full w-full rounded-t-lg"
                />
              </div>
              <div className="flex flex-col text-center lg:text-left justify-between flex-grow p-4">
                <h2 className="font-semibold text-2xl leading-[150%] mb-2">{service.title}</h2>
                <p className="text-[#666461] text-base mb-4">{service.description}</p>
                <a href="/services" className="self-center lg:self-start font-medium text-[13px] sm:text-base text-primary rounded-lg border border-primary py-2 px-5 sm:px-[17px]">Learn More</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
