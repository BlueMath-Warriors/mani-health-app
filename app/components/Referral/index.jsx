"use client";
import { useState } from "react";
import Steps from "./Steps";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Referral = () => {
  const [step, setStep] = useState(1);

  const showSuccessToast = () => {
    setStep(1);
    toast.success("Form submitted successfully", {
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
      <div className="relative w-full flex flex-col items-center justify-center gap-4 font-medium">
        <h2 className="text-base lg:text-[39px] text-dark mb-2 font-semibold">
          Referral Form Request
        </h2>
        <p className="text-xs lg:text-base text-[#818181] mb-4">
          Please follow the steps
        </p>

        <Steps
          currentStep={step}
          nextStep={() => setStep(step + 1)}
          prevStep={() => setStep(step - 1)}
          showSuccessToast={showSuccessToast}
          showFailureToast={showFailureToast}
        />
      </div>
    </>
  );
};

export default Referral;
