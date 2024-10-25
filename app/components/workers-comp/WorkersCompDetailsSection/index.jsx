import { SOLUTION_FOR_ADJUSTERS } from "@/Constants/workersCompData";
import Image from "next/image";
import React from "react";
import CircleCheckSmall from "../../common/CircleCheckSmall";

const WorkersCompDetailsSection = () => {
  return (
    <div
      className={`relative bg-[#FBFBFB] text-neutral font-normal leading-normal flex justify-center px-[25px] lg:px-24 py-12`}
    >
      <div className="max-w-[700px] lg:max-w-[1307px] flex flex-col items-center justify-center py-1 lg:py-12 px-3">
        <div className="flex flex-col lg:flex-row gap-y-3 mb-10">
          <div className="w-full lg:w-1/2">
            <h3 className="text-secondary font-medium text-base lg:text-xl">
              Welcome to Al Mani Health Institute
            </h3>
            <h1 className="font-semibold text-[18px] lg:text-2xl leading-[27px] lg:leading-[36px]">
              Where excellence meets efficiency in workers{"'"} compensation
              care.
            </h1>
          </div>
          <div className="w-[1px] h-full bg-[#33302B] hidden lg:block ml-2 mr-10"></div>
          <div className="w-full lg:w-1/2">
            <p className="text-base lg:text-[18px] leading-[27px]">
              Meet our dedicated team of specialists—a synergy of orthopedic
              surgeons, pharmacy, and durable medical equipment services, all
              under one roof. We are committed to streamlining the claims
              journey, ensuring swift and informed decision-making for
              adjusters.
            </p>
          </div>
        </div>
        <div className="flex gap-x-12">
          <div className="w-[36%] hidden lg:block">
            <Image
              src="/images/Workers_compensation_image.webp"
              alt="Workers at duty image"
              height={450}
              width={450}
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-y-2 w-full lg:w-[64%] min-h-[500px]">
            <h2 className="font-medium text-2xl lg:text-[28px] mt-2">
              Solutions for Adjusters
            </h2>
            <ul className="w-full mb-0 lg:mb-5">
              {SOLUTION_FOR_ADJUSTERS?.map((point, subIndex) => (
                <li className="flex gap-3 mb-4" key={subIndex}>
                  <div className="flex justify-center items-start">
                    <CircleCheckSmall />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-medium text-primary leading-[19px] mb-2 mt-1">
                      {point.title}
                    </h4>
                    <p className="text-base leading-[19px] mb-4">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              className="bg-primary text-white text-[13px] sm:text-base font-medium rounded-md px-4 py-2 sm:py-3.5 self-start hover:bg-opacity-80 hover:shadow-md hover:shadow-opacity-20"
              href="/about"
            >
              Learn more about us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkersCompDetailsSection;
