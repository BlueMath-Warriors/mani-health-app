import { poppins } from "@/app/layout";
import { HOURS_OF_OPERATION, SERVICES_DATA, SERVICES_SECTION_TEXTS } from "@/Constants/aboutPageData";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <div
      className={`bg-white text-neutral font-normal text-base flex justify-center py-[45px] px-[25px] ${poppins.className}`}
    >
      <div className="max-w-[1300px] flex flex-col items-center">
        <p className="text-base lg:text-2xl text-secondary font-medium mb-[18px]">
          {SERVICES_SECTION_TEXTS.TITLE}
        </p>
        <h1 className="font-semibold text-[25px] lg:text-4xl mb-[52px] text-center">
          {SERVICES_SECTION_TEXTS.SUBTITLE}
        </h1>
        <div className="flex flex-col gap-4 large:flex-row">
          <ul className="flex flex-wrap gap-3 w-full large:w-[63%]">
            {SERVICES_DATA.map((service) => (
              <li
                key={service.title}
                className="w-full large:w-[49%] rounded-lg bg-white flex items-start p-4 gap-4 shadow-custom-shadow-lg mb-4"
              >
                <Image
                  src={service.imageSrc}
                  alt={`${service.title} icon`}
                  height={50}
                  width={50}
                />
                <div className="flex flex-col">
                  <h4 className="font-medium text-[18px] text-[#403D39] mt-1">
                    {service.title}
                  </h4>
                  <p className="my-4 text-[#666461]">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col text-white w-full large:w-[401px] gap-5 p-5 bg-secondary rounded-lg self-start">
            <div className="flex flex-col">
              <h2 className="text-[30px] font-bold my-2 leading-9">
                {SERVICES_SECTION_TEXTS.HOURS_OF_OPERATION_TITLE}
              </h2>
              <p className="text-[15px] font-medium mb-4">
                {SERVICES_SECTION_TEXTS.HOURS_OF_OPERATION_DESCRIPTION}
              </p>
            </div>
            <ul className="flex flex-col">
              {HOURS_OF_OPERATION.map((item) => (
                <li
                  key={item.day}
                  className="w-full flex justify-between mb-3.5 text-[15px] Sm:text-base"
                >
                  <p>{item.day}</p>
                  <p>{item.timings}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
