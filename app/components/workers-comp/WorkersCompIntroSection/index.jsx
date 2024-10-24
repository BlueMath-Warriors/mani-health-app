import { WORKERS_TYPES } from "@/Constants/workersCompData";
import Image from "next/image";
import React from "react";

const WorkersCompIntroSection = () => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal flex justify-center py-[45px] px-[25px]`}
    >
      <div className="max-w-[1440px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center gap-5 mb-12">
          <h3 className="text-secondary font-medium text-base lg:text-2xl">
            Workers{"'"} Compensation - AMHI
          </h3>
          <h1 className="text-[25px] lg:text-4xl font-semibold">
            Navigating Workers{"'"} Comp with Expertise and Care
          </h1>
          <h4 className="text-base lg:text-[18px]">
            AMHI: Streamlining workers{"'"} compensation cases with effective
            partnerships for optimal care.
          </h4>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 p-4 gap-8">
          {WORKERS_TYPES.map((type, index) => (
            <li
              key={index}
              className="max-w-[508px] md:max-w-[322px] min-h-[340px] flex flex-col justify-start items-center text-center py-[25px] md:py-8 px-3 shadow-servicesCustomShadow"
            >
              <div className="mb-1">
                <div className="w-[120px] h-[120px] flex justify-center items-center rounded-[50%] bg-[#faf4e6]">
                  <Image
                    src={type.imageSrc}
                    alt={`${type.title} image`}
                    height={64}
                    width={64}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold my-4">{type.title}</h3>
              <p>{type.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkersCompIntroSection;
