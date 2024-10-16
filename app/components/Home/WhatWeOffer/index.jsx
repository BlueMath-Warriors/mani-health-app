"use client";
import OfferCard from "./OfferCard";
import { WHAT_WE_OFFER_CARDS_CONTENT } from "@/Constants/PageContent/home";
import Button from "../../common/Button";

const WhatWeOffer = () => {
  const handleContact = () => {
    console.log("apple");
  };

  return (
    <div className="max-w-[1320px] mx-auto mt-11 px-3 py-11 flex flex-col gap-4 items-center justify-center w-full text-center ">
      <div className="flex flex-col gap-4 items-center justify-center w-3/5 mb-10">
        <p className="text-[#556b2f] text-base md:text-2xl font-medium ">
          What We Offer?
        </p>
        <p className="text-[#282530] text-2xl md:text-4xl font-semibold mb-2 !leading-[150%]">
          Exceptional Services To Support Your Health And Well-Being
        </p>
      </div>
      <div className="grid grid-cols-1 min-[980px]:grid-cols-3 justify-center gap-8">
        {WHAT_WE_OFFER_CARDS_CONTENT.map((content, index) => (
          <OfferCard
            image={content.image}
            title={content.title}
            caption={content.caption}
          />
        ))}
      </div>
      <Button width="fit" className="mt-11 !text-base" onClick={handleContact}>
        See More Services
      </Button>
    </div>
  );
};

export default WhatWeOffer;
