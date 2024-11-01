"use client";
import React from "react";
import ServicesListSection from "@/app/components/services/servicesListSection";
import GetInTouchForm from "@/app/components/common/GetInTouchForm";
import ReferralAction from "../components/common/ReferralAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Services = () => {
  const showSuccessToast = () => {
    toast.success("Thank you! Your message has been sent successfully.", {
      autoClose: 3000,
    });
  };
  const showFailureToast = () => {
    toast.error("Error in Submission, Please try again!", {
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />
      <ServicesListSection />
      <div className="appointment-background flex justify-center items-center h-full py-[50px] px-4">
        <GetInTouchForm
          showSuccessToast={showSuccessToast}
          showFailureToast={showFailureToast}
        />
      </div>
      <ReferralAction />
    </>
  );
};

export default Services;
