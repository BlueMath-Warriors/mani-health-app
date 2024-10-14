import React, { useState } from "react";
import StepsTracker from "../Steps-Tracker";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import Button from "../../common/Button";

const Steps = ({ currentStep, nextStep, prevStep }) => {
  const [position, setPosition] = useState();
  const steps = [
    <StepOne key={1} position={position} setPosition={setPosition} />,
    <StepTwo key={2} />,
    <StepThree key={3} />,
    <StepFour key={4} />,
    <StepFive key={5} />,
    <StepSix key={6} />,
  ];

  return (
    <div className="flex flex-col items-center justify-center w-11/12 lg:max-w-[824px] lg:w-full px-6 py-5 lg:p-16 bg-white rounded-lg referral-card-shadow">
      <div className="w-full flex flex-col items-center justify-center ">
        <h3 className="text-dark text-lg mb-8 font-semibold">
          Choose your Position
        </h3>
        <StepsTracker currentStep={currentStep} />
        {steps[currentStep - 1]}
      </div>
      <div className="flex w-full flex-col gap-4 my-12">
        {currentStep != 6 && <Button onClick={nextStep}>Next</Button>}
        {currentStep > 1 && (
          <Button onClick={prevStep} variant="primary-outline">
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default Steps;