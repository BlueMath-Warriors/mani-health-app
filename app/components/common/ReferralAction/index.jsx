"use client"
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

const ReferralAction = () => {
  const router = useRouter();

  const handleSubmitReferral = () => {
    router.push("/referral_form");
  };

  return (
    <div className="flex items-center justify-center w-full bg-secondary px-6 py-[90px] text-white text-center">
      <div className=" flex flex-col gap-5 items-center justify-center w-full max-w-xl">
        <h3 className="text-4xl font-semibold leading-normal mb-2">
          Start Your Case Referral Today
        </h3>
        <p className="mb-4 text-lg">
          Quickly submit injury details and medical information to connect with
          our expert team
        </p>
        <Button
          width="fit"
          className="!text-base"
          onClick={handleSubmitReferral}
        >
          Submit Your Referral
        </Button>
      </div>
    </div>
  );
};

export default ReferralAction;
