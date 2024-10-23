import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { HAND_UPPER_EXTREMITY_ORTHOPEDIC } from "@/Constants/servicesData";

const HandUpperExtremityOrthopedic = () => {
  return (
    <>
      <Image
        src={"/images/hand_orthopedic_surgeon.webp"}
        alt="hand orthopedic surgeon image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={HAND_UPPER_EXTREMITY_ORTHOPEDIC.COMMON_CONDITIONS}
      />
      <ServicesContentBlock
        content={HAND_UPPER_EXTREMITY_ORTHOPEDIC.REHABILITATION_RECOVERY}
      />
    </>
  );
};

export default HandUpperExtremityOrthopedic;
