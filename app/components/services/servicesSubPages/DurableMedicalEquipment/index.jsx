import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { DURABLE_MEDICAL_EQUIPMENT } from "@/Constants/servicesData";

const DurableMedicalEquipment = () => {
  return (
    <>
      <Image
        src={"/images/medical_equipment.webp"}
        alt="medical equipment image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={DURABLE_MEDICAL_EQUIPMENT.MEDICAL_EQUIPMENT}
      />
      <ServicesContentBlock
        content={DURABLE_MEDICAL_EQUIPMENT.DME_ROLE}
      />
    </>
  );
};

export default DurableMedicalEquipment;
