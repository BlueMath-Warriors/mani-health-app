import { poppins } from "@/app/layout";
import { HEALTH_AND_LAW_DATA, HEALTH_AND_LAW_SECTION_TEXTS } from "@/Constants/aboutPageData";
import Image from "next/image";
import React from "react";

const HealthAndLawSection = () => {
  return (
    <div
      className={`bg-[#000000] text-white font-normal text-base flex justify-center py-12 px-6 Sm:px-12 md:px-16 ${poppins.className}`}
    >
      <div className="max-w-[1320px] flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-3">
          <p className="font-bold mb-6">{HEALTH_AND_LAW_SECTION_TEXTS.TITLE}</p>
          <p className="font-bold text-[32px] leading-normal mb-6">
            {HEALTH_AND_LAW_SECTION_TEXTS.SUBTITLE}
          </p>
          <p className="mb-1 leading-[1.2]">
            {HEALTH_AND_LAW_SECTION_TEXTS.DESCRIPTION}
          </p>
          <ul className="flex flex-wrap w-full">
            {HEALTH_AND_LAW_DATA.map((data, index) => (
              <li key={data.title} className={`flex flex-col gap-2 w-full sm:w-1/2 mt-6 px-0 ${
                index % 2 === 0 ? "sm:pr-3" : "sm:pl-3"
              }`}>
                <div className="flex gap-2">
                  <Image
                    src={data.imageSrc}
                    alt={`${data.title} icon`}
                    height={16}
                    width={data.width}
                  />
                  <h3 className="font-bold">{data.title}</h3>
                </div>
                <p className="mb-4 leading-[1.2]">{data.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-h-[426px] lg:max-h-[690px] lg:w-1/2 px-3">
          <Image
            src={"/illustrations/lawyer.webp"}
            alt="lawyer"
            height={684}
            width={636}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthAndLawSection;
