import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import { COMPREHENSIVE_ORTHOPEDIC_CARE } from "@/Constants/servicesData";
import OrthopedicSpecialities from "../../OrthopedicSpecialities";

const ComprehensiveOrthopedicCare = () => {
  return (
    <>
      <ServicesContentBlock
        content={COMPREHENSIVE_ORTHOPEDIC_CARE.INTRODUCTION}
      />
      <OrthopedicSpecialities />
    </>
  );
};

export default ComprehensiveOrthopedicCare;
