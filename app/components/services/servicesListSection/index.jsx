import { poppins } from "@/app/layout";
import { SERVICES_LIST, SERVICES_LIST_SECTION_TEXTS } from "@/Constants/servicesData";
import Image from "next/image";
import React from "react";

const ServicesListSection = () => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal flex justify-center py-[45px] px-[25px] ${poppins.className}`}
    >
      <div className="max-w-[1200px] flex flex-col">
        <div className="flex flex-col text-center mb-12">
          <h4 className="text-base lg:text-2xl text-secondary font-medium mb-6">
            {SERVICES_LIST_SECTION_TEXTS.TITLE}
          </h4>
          <h1 className="text-[25px] lg:text-4xl font-semibold">
            {SERVICES_LIST_SECTION_TEXTS.SUBTITLE}
          </h1>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-8">
          {SERVICES_LIST.map((service, index) => (
            <li
              key={index}
              className="flex flex-col group cursor-pointer hover:shadow-2xl transition-shadow duration-300 w-full md:w-[52%] lg:w-[30%] rounded-lg shadow-servicesCustomShadow my-4"
            >
              <div className="relative rounded-t-lg h-56">
                <Image
                  src={service.imageSrc}
                  alt={`${service.title} image`}
                  width={360}
                  height={224}
                  className="h-full w-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-lg"></div>
              </div>
              <div className="flex flex-col text-center lg:text-left justify-between flex-grow p-4">
                <h2 className="font-semibold text-2xl leading-[150%] group-hover:text-primary duration-300 transition-all mb-2">
                  {service.title}
                </h2>
                <p className="text-[#666461] text-base mb-4">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="self-center lg:self-start font-medium text-[13px] sm:text-base text-primary rounded-lg border border-primary hover:bg-primary/10 py-2 px-5 sm:px-[17px]"
                >
                  {SERVICES_LIST_SECTION_TEXTS.BUTTON_TEXT}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesListSection;
