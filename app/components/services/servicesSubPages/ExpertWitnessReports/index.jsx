import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { EXPERT_WITNESS_REPORTS } from "@/Constants/servicesData";

const ExpertWitnessReports = () => {
  return (
    <>
      <Image
        src={"/images/expert_witness_reports.webp"}
        alt="expert witness reports image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock content={EXPERT_WITNESS_REPORTS.EXPERT_WITNESSES} />
      <ServicesContentBlock
        content={EXPERT_WITNESS_REPORTS.MEDICAL_LEGAL_COLLABORATION}
      />
      <p className="text-[#646464] mt-16">
        This approach underscores the importance of a multidisciplinary
        perspective in workers{"'"} compensation cases, ensuring that all aspects of
        a client{"'"}s situation are addressed effectively.
      </p>
    </>
  );
};

export default ExpertWitnessReports;
