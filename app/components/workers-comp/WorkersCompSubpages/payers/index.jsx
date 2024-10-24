import React from "react";
import WorkersCompImageTextSection from "../../WorkersCompImageTextSection";
import {
  CLAIMS_PROCESSING,
  COST_MANAGEMENT_IN_CARE,
  OPTIMIZING_WORKERS_COMPENSATION,
  REGULATORY_COMPLIANCE_AND_PATIENT_OUTCOMES,
} from "@/Constants/workersCompData";
import WorkersCompListSection from "../../WorkersCompListSection";
import HandShakeSection from "../../HandShakeSection";

const Payers = () => {
  return (
    <>
      <WorkersCompImageTextSection content={CLAIMS_PROCESSING} />
      <WorkersCompImageTextSection
        content={COST_MANAGEMENT_IN_CARE}
        textOnRight={true}
      />
      <WorkersCompListSection
        title={
          "Optimizing Workers’ Compensation: Addressing Challenges, Achieving Efficiency, and Fostering Health"
        }
        content={OPTIMIZING_WORKERS_COMPENSATION}
      />
      <HandShakeSection content={REGULATORY_COMPLIANCE_AND_PATIENT_OUTCOMES}/>
    </>
  );
};

export default Payers;
