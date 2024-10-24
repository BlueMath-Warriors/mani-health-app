import React from "react";
import WorkersCompImageTextSection from "../../WorkersCompImageTextSection";
import {
  EXPERT_TESTIMONY,
  MEDICAL_REPORTS,
  STREAMLINED_COMMUNICATION,
} from "@/Constants/workersCompData";
import HandShakeSection from "../../HandShakeSection";

const LawyersAndAttorneys = () => {
  return (
    <>
      <WorkersCompImageTextSection content={MEDICAL_REPORTS} />
      <WorkersCompImageTextSection
        content={EXPERT_TESTIMONY}
        textOnRight={true}
      />
      <HandShakeSection content={STREAMLINED_COMMUNICATION} />
    </>
  );
};

export default LawyersAndAttorneys;
