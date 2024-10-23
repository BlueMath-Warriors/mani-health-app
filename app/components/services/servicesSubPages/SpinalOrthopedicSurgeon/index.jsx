import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { SPINAL_ORTHOPEDIC_SURGEON } from "@/Constants/servicesData";

const SpinalOrthopedicSurgeon = () => {
  return (
    <>
      <Image
        src={"/images/spinal_orthopedic_surgeon.webp"}
        alt="spinal orthopedic surgeon image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={SPINAL_ORTHOPEDIC_SURGEON.ROLE_OF_SPINE_SURGEONS}
      />
      <ServicesContentBlock
        content={SPINAL_ORTHOPEDIC_SURGEON.RECOVERY_AND_REHABILITATION}
      />
    </>
  );
};

export default SpinalOrthopedicSurgeon;
