import { poppins } from "@/app/layout";
import { HEALTH_AND_LAW_DATA } from "@/Constants/aboutPageData";
import Image from "next/image";
import React from "react";

const HealthAndLawSection = () => {
  return (
    <div
      className={`bg-black text-white font-normal text-base flex justify-center py-12 px-16 ${poppins.className}`}
    >
      <div className="max-w-[1320px] flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 px-3">
          <p className="font-bold mb-6">Why Choose AMHI?</p>
          <p className="font-bold text-[32px] leading-normal mb-6">
            Bridging Health and Law for Your Wellness
          </p>
          <p className="mb-7">
            At AMHI, we provide unparalleled services in the field of workers
            {"'"} compensation medical coordination, blending healthcare
            expertise with legal acumen.
          </p>
          <ul className="flex flex-wrap w-full">
            {HEALTH_AND_LAW_DATA.map((data) => (
              <li key={data.title} className="flex flex-col gap-2 w-1/2 px-3">
                <div className="flex gap-1">
                  <Image
                    src={data.imageSrc}
                    alt={`${data.title} icon`}
                    height={16}
                    width={14}
                  />
                  <h3 className="font-bold">{data.title}</h3>
                </div>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 px-3">
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
