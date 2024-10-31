import React, { useState } from "react";

import Image from "next/image";
import StepsTracker from "../Steps-Tracker";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import Button from "../../common/Button";
import { STEPS_TITLES } from "@/app/constants/steps";
import {
  INITIAL_ACCIDENT_DETAILS,
  INITIAL_ADJUSTER_INFO,
  INITIAL_INSURANCE_INFO,
  INITIAL_PATIENT_INFO,
} from "@/app/constants/steps";
import { submitReferralForm } from "@/app/lib/api";

const Steps = ({ currentStep, nextStep, prevStep, showToast }) => {
  const [position, setPosition] = useState();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [patientInfo, setPatientInfo] = useState(INITIAL_PATIENT_INFO);
  const [accidentDetails, setAccidentDetails] = useState(
    INITIAL_ACCIDENT_DETAILS
  );
  const [insuranceInfo, setInsuranceInfo] = useState(INITIAL_INSURANCE_INFO);
  const [adjusterInfo, setAdjusterInfo] = useState(INITIAL_ADJUSTER_INFO);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleReferralSubmission = async () => {
    const formData = new FormData();

    // Append non-file fields
    formData.append("position", position);
    Object.entries(patientInfo).forEach(([key, value]) =>
      formData.append(key, value)
    );
    Object.entries(insuranceInfo).forEach(([key, value]) =>
      formData.append(key, value)
    );
    Object.entries(accidentDetails).forEach(([key, value]) =>
      formData.append(key, value)
    );
    Object.entries(adjusterInfo).forEach(([key, value]) =>
      formData.append(key, value)
    );

    // Append file fields
    uploadedFiles.forEach((file, index) => {
      formData.append(`media_files[${index}]`, file);
    });

    try {
      const response = await submitReferralForm(formData);
      showToast();
      setPosition();
      setUploadedFiles([]);
      setPatientInfo(INITIAL_PATIENT_INFO);
      setAccidentDetails(INITIAL_ACCIDENT_DETAILS);
      setInsuranceInfo(INITIAL_INSURANCE_INFO);
      setAdjusterInfo(INITIAL_ADJUSTER_INFO);
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const steps = [
    <StepOne
      key={1}
      position={position}
      setPosition={setPosition}
      showError={showError}
    />,
    <StepTwo
      key={2}
      patientInfo={patientInfo}
      setPatientInfo={setPatientInfo}
    />,
    <StepThree
      key={3}
      accidentDetails={accidentDetails}
      setAccidentDetails={setAccidentDetails}
    />,
    <StepFour
      key={4}
      uploadedFiles={uploadedFiles}
      setUploadedFiles={setUploadedFiles}
    />,
    <StepFive
      key={5}
      insuranceInfo={insuranceInfo}
      setInsuranceInfo={setInsuranceInfo}
    />,
    <StepSix
      key={6}
      adjusterInfo={adjusterInfo}
      setAdjusterInfo={setAdjusterInfo}
    />,
  ];

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        if (!position) {
          setShowError(true);
          return false;
        }
        break;
      case 2:
        if (!patientInfo.full_name || !patientInfo.phone_number) {
          setShowError(true);
          return false;
        }
        break;
      case 3:
        if (!accidentDetails.date_of_injury) {
          setShowError(true);
          return false;
        }
        break;
      case 4:
        break;
      case 5:
        if (
          !insuranceInfo.insurance_company ||
          !insuranceInfo.policy_number ||
          !insuranceInfo.claim_number
        ) {
          setShowError(true);
          return false;
        }
        break;
      case 6:
        break;
      default:
        break;
    }
    setShowError(false);
    return true;
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      nextStep();
    }
  };
  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-11/12 lg:max-w-[824px] lg:w-full px-6 py-5 lg:p-16 bg-white rounded-lg referral-card-shadow transition-all duration-200 ease-linear">
        <div className="flex w-full items-center justify-center relative">
          <Image
            src={"/images/leftTop.svg"}
            alt="left top image"
            width={88}
            height={88}
            className="hidden xl:block absolute -top-20 -left-56 "
          />
          <Image
            src={"/images/leftMiddle.svg"}
            alt="left middle image"
            width={40}
            height={60}
            className="hidden xl:block absolute top-60 -left-56 "
          />
          <Image
            src={"/images/shapeRight.svg"}
            alt="right image"
            width={40}
            height={60}
            className="hidden xl:block absolute top-60 -right-56 "
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <h3 className="text-dark text-lg mb-0 sm:mb-4 md:mb-8 font-semibold">
            {STEPS_TITLES[currentStep - 1]}
          </h3>
          <StepsTracker currentStep={currentStep} />
          {steps[currentStep - 1]}
        </div>
        <div className="flex w-full flex-col gap-4 my-4 md:my-12">
          {currentStep === 6 ? (
            <Button onClick={handleReferralSubmission}>
              {loading ? "...submitting" : "Submit"}
            </Button>
          ) : (
            <Button onClick={handleNextStep}>Next</Button>
          )}
          {currentStep > 1 && (
            <Button onClick={prevStep} variant="primary-outline">
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Steps;
