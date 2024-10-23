import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { EMERGENCY_MEDICAL_CONDITION } from "@/Constants/servicesData";

const EmergencyMedicalCondition = () => {
  return (
    <>
      <Image
        src={"/images/emergency_medical_condition.webp"}
        alt="emergency medical image condition image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={EMERGENCY_MEDICAL_CONDITION.MEDICAL_LEGAL_INSIGHTS}
      />
      <ServicesContentBlock
        content={EMERGENCY_MEDICAL_CONDITION.INTEGRATING_EXPERTISE}
      />
    </>
  );
};

export default EmergencyMedicalCondition;
