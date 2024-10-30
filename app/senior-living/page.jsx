import React from "react";
import { poppins } from "../layout";
import Image from "next/image";
import {
  KEY_SERVICE_AREAS,
  SENIOR_LIVING_IMAGE_SOURCES,
  SENIOR_LIVING_TEXTS,
} from "@/Constants/seniorLivingData";
import { CircleCheck } from "../components/common/CircleCheck";
import ReferralAction from "../components/common/ReferralAction";

const SeniorLiving = () => {
  return (
    <>
    <div
      className={`relative bg-white text-neutral font-normal leading-normal text-4xl flex justify-center py-[45px] Sm:py-[90px] px-[25px] ${poppins.className}`}
    >
      <div className="absolute top-0 right-0 w-[42%]">
        <Image
          src={SENIOR_LIVING_IMAGE_SOURCES.SENIOR_LIVING_BACKGROUND}
          height={500}
          width={700}
          alt="senior living background"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-[1440px] flex flex-col items-start z-10">
        <div className="flex flex-col items-start justify-between gap-5 w-full lg:w-1/2 px-0 lg:pl-3 mb-10">
          <h4 className="text-base lg:text-2xl text-secondary font-medium">
            {SENIOR_LIVING_TEXTS.TITLE}
          </h4>
          <h1 className="text-[25px] lg:text-4xl font-semibold mb-2 leading-[37.5px] lg:leading-[54px]">
            {SENIOR_LIVING_TEXTS.SUBTITLE}
          </h1>
          <p className="text-base lg:text-[18px] leading-7">
            {SENIOR_LIVING_TEXTS.DESCRIPTION}
          </p>
          <h2 className="font-semibold text-[25px] lg:text-4xl text-secondary">
            {SENIOR_LIVING_TEXTS.KEY_SERVICE_AREAS_TITLE}
          </h2>
        </div>
        <ul className="w-full flex flex-wrap">
          {KEY_SERVICE_AREAS.map((service, index) => (
            <li
              key={index}
              className="flex gap-[30px] w-full md:w-1/2 lg:w-1/3 px-0 md:pr-6 lg:px-3"
            >
              <CircleCheck />
              <div className="flex flex-col">
                <h4 className="font-medium text-[18px]">{service.title}</h4>
                <p className="text-[13px] Sm:text-base mb-4 mt-2">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <ReferralAction />
    </>
  );
};

export default SeniorLiving;
