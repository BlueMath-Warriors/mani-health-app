import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { REPAIR_SOLUTIONS } from "@/Constants/servicesData";

const RepairSolutions = () => {
  return (
    <>
      <Image
        src={"/images/repair_solutions.webp"}
        alt="repair solutions image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={REPAIR_SOLUTIONS.MEDICAL_EQUIPMENT_ROLE}
      />
      <ServicesContentBlock
        content={REPAIR_SOLUTIONS.THERAPEUTIC_APPROACHES}
      />
    </>
  );
};

export default RepairSolutions;
