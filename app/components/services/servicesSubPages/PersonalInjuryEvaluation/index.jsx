import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { PERSONAL_INJURY_EVALUATION } from "@/Constants/servicesData";

const PersonalInjuryEvaluation = () => {
  return (
    <>
      <Image
        src={"/images/personal_injury.webp"}
        alt="personal injury image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={PERSONAL_INJURY_EVALUATION.IMPORTANCE_OF_DOCUMENTATION}
      />
      <ServicesContentBlock
        content={PERSONAL_INJURY_EVALUATION.DEALING_WITH_INSURANCE}
      />
      <ServicesContentBlock
        content={PERSONAL_INJURY_EVALUATION.INJURY_EVALUATION}
      />
    </>
  );
};

export default PersonalInjuryEvaluation;
