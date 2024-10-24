import {
  EXPERT_EVALUATIONS,
  MEDICAL_SERVICES,
} from "@/Constants/legalSupportData";
import React from "react";
import { DisplayPoints } from "../DisplayPoints";

const LegalSupportForInjurySection = () => {
  return (
    <div
      className={`relative law-picture bg-white text-neutral font-normal leading-normal text-base flex justify-center py-[45px] Sm:py-[90px] px-[25px]`}
    >
      <div className="max-w-[1440px] flex flex-col items-start">
        <div className="flex flex-col items-start w-full lg:w-1/2 mb-10">
          <h1 className="text-[25px] lg:text-4xl font-semibold mb-6">
            Legal Support for Injury Cases
          </h1>
          <p className="text-base lg:text-[18px] mb-6">
            Our team of board-certified Orthopedic surgeons, backed by years of
            extensive experience, offer comprehensive legal support for injury
            cases. Specializing in detailed analysis and reporting, we provide
            critical insights and expert opinions to aid in the resolution of
            legal disputes. Our services include:
          </p>
          <h1 className="text-[#728452] text-[25px] lg:text-4xl font-semibold">
            Expert Evaluation and Reports
          </h1>
        </div>
        <DisplayPoints contentArray={EXPERT_EVALUATIONS} link={true} />
        <h1 className="text-[#728452] text-[25px] lg:text-4xl font-semibold mb-8 mt-3">
          Medical Services
        </h1>
        <DisplayPoints contentArray={MEDICAL_SERVICES} />
      </div>
    </div>
  );
};

export default LegalSupportForInjurySection;
