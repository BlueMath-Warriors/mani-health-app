import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { INDEPENDENT_MEDICAL_EVALUATION } from "@/Constants/servicesData";

const IndependantMedicalEvaluation = () => {
  return (
    <>
      <Image
        src={"/images/independant_medical_evaluation.webp"}
        alt="independant medical evaluation image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={INDEPENDENT_MEDICAL_EVALUATION.BASICS_OF_IME}
      />
      <ServicesContentBlock
        content={INDEPENDENT_MEDICAL_EVALUATION.ROLE_OF_PHARMACISTS}
      />
      <ServicesContentBlock
        content={INDEPENDENT_MEDICAL_EVALUATION.IMPACT_OF_IMES}
      />
    </>
  );
};

export default IndependantMedicalEvaluation;
