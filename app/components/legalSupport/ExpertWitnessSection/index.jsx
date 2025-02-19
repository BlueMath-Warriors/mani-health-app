import Image from "next/image";
import React from "react";

const ExpertWitnessSection = () => {
  return (
    <div
      className={`relative  bg-white text-neutral font-normal leading-normal text-base flex justify-center pb-[90px]`}
    >
      <div className="max-w-[1350px] expert-witness-bg flex flex-wrap justify-between items-center py-[45px] px-[24px] md:px-[40px] lg:px-[75px]">
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-4xl text-secondary lg:leading-[54px] font-semibold mb-6">
            Expert Witness Collaboration
          </h1>
          <p className="text-[#33302B] text-[18px] mb-6">
            Partnering with expert witnesses to provide comprehensive medical
            insights for accident legal cases.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/images/legal_hand.svg"}
            alt="legal hand image"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertWitnessSection;
