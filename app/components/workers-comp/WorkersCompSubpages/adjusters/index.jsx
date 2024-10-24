import React from "react";
import WorkersCompImageTextSection from "../../WorkersCompImageTextSection";
import {
  COST_MANAGEMENT,
  EFFICIENCY_IN_CLAIMS_PROCESSING,
  REGULATORY_COMPLIANCE,
  WORKERS_COMPENSATION_SUCCESS,
} from "@/Constants/workersCompData";
import WorkersCompListSection from "../../WorkersCompListSection";
import HandShakeSection from "../../HandShakeSection";

const Adjusters = () => {
  return (
    <>
      <WorkersCompImageTextSection content={EFFICIENCY_IN_CLAIMS_PROCESSING} />
      <WorkersCompImageTextSection
        content={COST_MANAGEMENT}
        textOnRight={true}
      />
      <WorkersCompListSection
        title={
          "Empowering Workers' Compensation Success: Collaborations, Insights, and Real-Life Achievements"
        }
        content={WORKERS_COMPENSATION_SUCCESS}
      />
      <HandShakeSection content={REGULATORY_COMPLIANCE} />
    </>
  );
};

export default Adjusters;
