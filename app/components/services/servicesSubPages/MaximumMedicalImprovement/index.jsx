import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { MEDICAL_IMPROVEMENT } from "@/Constants/servicesData";

const MaximumMedicalImprovement = () => {
  return (
    <>
      <Image
        src={"/images/medical_improvement.webp"}
        alt="medical improvement image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={MEDICAL_IMPROVEMENT.MAXIMUM_MEDICAL_IMPROVEMENT}
      />
      <ServicesContentBlock
        content={MEDICAL_IMPROVEMENT.LONG_TERM_MEDICATION}
      />
    </>
  );
};

export default MaximumMedicalImprovement;
