import { poppins } from "@/app/layout";
import { WELCOME_SECTION_IMAGES, WELCOME_SECTION_TEXTS } from "@/Constants/aboutPageData";
import Image from "next/image";
import React from "react";

const WelcomeSection = () => {
  return (
    <div
      className={`bg-white text-neutral font-normal text-base flex justify-center py-[45px] px-[25px] ${poppins.className}`}
    >
      <div className="max-w-[1500px] flex flex-col md:flex-row items-center gap-5 large:gap-8 px-0 md:px-3 lg:px-12">
        <div className="w-full md:h-full md:w-1/2 flex justify-center items-center px-3">
          <div className="flex justify-center items-center w-[283px] h-[162px] Sm:w-[360px] Sm:h-[220px] lg:w-[450px] lg:h-[250px] large:w-[520px] large:h-[400px]">
            <Image
              src={WELCOME_SECTION_IMAGES.PHARMACY_IMAGE}
              alt={"Pharmacy image"}
              width={600}
              height={400}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2 px-3">
          <p className="text-secondary font-medium text-base lg:text-2xl">
            {WELCOME_SECTION_TEXTS.EXPERTISE_DESCRIPTION}
          </p>
          <h1 className="font-semibold text-[25px] lg:text-4xl mb-2">
            {WELCOME_SECTION_TEXTS.WELCOME_TITLE}
          </h1>
          <p className="text-base lg:text-[18px] leading-7 mb-5">
            {WELCOME_SECTION_TEXTS.WELCOME_DESCRIPTION}
          </p>
          <div className="flex justify-start gap-3 font-medium w-full whitespace-nowrap text-[13px] sm:text-base ">
            <a
              className="bg-primary rounded-lg text-white px-3.5 py-1.5 min-[470px]:px-4 sm:py-3 flex items-center hover:bg-opacity-80 hover:shadow-md hover:shadow-opacity-20"
              href={"/contact"}
            >
              {WELCOME_SECTION_TEXTS.CONTACT_BUTTON_TEXT}
            </a>
            <a
              className="rounded-lg border border-neutral px-3.5 py-1.5 min-[470px]:px-5 sm:py-3.5 sm:px-4 hover:text-neutral/80"
              href={"/referral_form"}
            >
              {WELCOME_SECTION_TEXTS.REFERRAL_BUTTON_TEXT}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
