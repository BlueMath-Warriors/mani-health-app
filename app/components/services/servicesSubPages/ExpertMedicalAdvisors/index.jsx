import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { EXPERT_MEDICAL_ADVISORS } from "@/Constants/servicesData";

const ExpertMedicalAdvisors = () => {
  return (
    <>
      <Image
        src={"/images/medical_advisors.webp"}
        alt="medical advisors image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={EXPERT_MEDICAL_ADVISORS.CRUCIAL_ROLE}
      />
      <ServicesContentBlock
        content={EXPERT_MEDICAL_ADVISORS.EVOLVING_TRENDS}
      />
      <ServicesContentBlock
        content={EXPERT_MEDICAL_ADVISORS.UNDERSTANDING_ADVISORS}
      />
    </>
  );
};

export default ExpertMedicalAdvisors;
