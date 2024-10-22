import React from "react";
import ServicesListSection from "@/app/components/services/servicesListSection";
import GetInTouchForm from "@/app/components/common/GetInTouchForm";
import ReferralAction from "../components/common/ReferralAction";

const Services = () => {
  return (
    <>
      <ServicesListSection />
      <div className="appointment-background flex justify-center items-center h-full py-[50px] px-4">
        <GetInTouchForm />
      </div>
      <ReferralAction />
    </>
  );
};

export default Services;
