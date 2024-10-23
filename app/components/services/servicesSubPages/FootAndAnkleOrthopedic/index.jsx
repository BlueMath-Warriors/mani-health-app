import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { FOOT_AND_ANKLE_ORTHOPEDIC } from "@/Constants/servicesData";

const FootAndAnkleOrthopedic = () => {
  return (
    <>
      <Image
        src={"/images/foot_and_ankle_orthopedic.webp"}
        alt="foot and ankle orthopedic image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={FOOT_AND_ANKLE_ORTHOPEDIC.CONDITIONS_TREATED}
      />
      <ServicesContentBlock
        content={FOOT_AND_ANKLE_ORTHOPEDIC.TREATMENT_APPROACHES}
      />
      <ServicesContentBlock
        content={FOOT_AND_ANKLE_ORTHOPEDIC.PREVENTIVE_CARE_AND_EDUCATION}
      />
      <p className="text-[#646464] mt-16">
        These preventive strategies are integral to maintaining optimal foot and
        ankle health, and we emphasize their importance in every patient
        interaction.
      </p>
    </>
  );
};

export default FootAndAnkleOrthopedic;
