import React from "react";
import ServicesListSection from "@/app/components/services/servicesListSection";
import GetInTouchForm from "@/app/components/common/GetInTouchForm";

const Services = () => {
  return (
    <>
      <ServicesListSection />
      <div className="appointment-background flex justify-center items-center h-full py-[50px] px-4">
        <GetInTouchForm />
      </div>
    </>
  );
};

export default Services;
