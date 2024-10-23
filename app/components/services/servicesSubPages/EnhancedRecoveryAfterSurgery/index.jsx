import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import {
  ENHANCED_RECOVERY_AFTER_SURGERY,
  EXPERT_WITNESS_REPORTS,
} from "@/Constants/servicesData";

const EnhancedRecoveryAfterSurgery = () => {
  return (
    <>
      <Image
        src={"/images/recovery_after_surgery.webp"}
        alt="recovery after surgery image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={ENHANCED_RECOVERY_AFTER_SURGERY.OVERVIEW}
      />
      <ServicesContentBlock
        content={ENHANCED_RECOVERY_AFTER_SURGERY.BENEFITS}
      />
    </>
  );
};

export default EnhancedRecoveryAfterSurgery;
