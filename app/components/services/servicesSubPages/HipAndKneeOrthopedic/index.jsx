import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { HIP_AND_KNEE_ORTHOPEDIC } from "@/Constants/servicesData";

const HipAndKneeOrthopedic = () => {
  return (
    <>
      <Image
        src={"/images/hip_and_knee_orthopedic.webp"}
        alt="hip and knee orthopedic image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={HIP_AND_KNEE_ORTHOPEDIC.BASICS}
      />
      <ServicesContentBlock
        content={HIP_AND_KNEE_ORTHOPEDIC.DIAGNOSIS_AND_ASSESSMENT}
      />
      <ServicesContentBlock
        content={HIP_AND_KNEE_ORTHOPEDIC.PREVENTION_AND_ERGONOMICS}
      />
    </>
  );
};

export default HipAndKneeOrthopedic;
