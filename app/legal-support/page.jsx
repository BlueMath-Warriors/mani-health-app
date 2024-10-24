import React from "react";
import LegalSupportForInjurySection from "../components/legalSupport/LegalSupportInjurySection";
import MedicalReportingSection from "../components/legalSupport/MedicalReportingSection";
import ExpertWitnessSection from "../components/legalSupport/ExpertWitnessSection";

const LegalSupport = () => {
  return (
    <>
      <LegalSupportForInjurySection />
      <MedicalReportingSection />
      <ExpertWitnessSection />
    </>
  );
};

export default LegalSupport;
