import { MEDICAL_REPORTING } from "@/Constants/legalSupportData";
import React from "react";

const MedicalReportingSection = () => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal text-base flex justify-center py-[45px] sm:py-[90px] px-[25px]`}
    >
      <div className="max-w-[1326px] flex flex-col items-start">
        <h1 className="w-full text-[25px] lg:text-4xl font-semibold text-secondary mb-16">Medical Reporting</h1>
        <ul className="w-full flex flex-wrap">
            {MEDICAL_REPORTING.map((point, index)=>(
                <li className="flex flex-col text-[18px] w-full md:w-1/2" key={index}>
                    <h4 className="text-[#403D39] font-medium mb-3">{point.title}</h4>
                    <ul className="text-[#716F6C] list-disc pl-6 mb-8">
                        {point.texts.map((text, subIndex)=>(
                            <li className="flex flex-col leading-[27px]" key={subIndex}>
                                {text}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalReportingSection;
