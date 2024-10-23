import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import Image from "next/image";
import { KYOPLASTY } from "@/Constants/servicesData";

const KyphoplastyServices = () => {
  return (
    <>
      <Image
        src={"/images/kyphoplasty_services.webp"}
        alt="kyphoplasty services image"
        height={500}
        width={856}
        className="max-h-[500px] min-h-[300px] rounded-lg object-cover"
      />
      <ServicesContentBlock
        content={KYOPLASTY.INTRODUCTION}
      />
      <ServicesContentBlock
        content={KYOPLASTY.WORKERS_COMPENSATION}
      />
      <ServicesContentBlock
        content={KYOPLASTY.RECOVERY_AFTERCARE}
      />
    </>
  );
};

export default KyphoplastyServices;
