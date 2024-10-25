"use client";
import ServicesCard from "../../common/ServicesCard";
import { WHAT_WE_OFFER_CARDS_CONTENT } from "@/Constants/PageContent/home";
import Button from "../../common/Button";
import { useRouter } from "next/navigation";

const WhatWeOffer = () => {
  const router = useRouter();

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
      <div className="grid grid-cols-1 mid:grid-cols-3 justify-center gap-8">
        {WHAT_WE_OFFER_CARDS_CONTENT.map((content, index) => (
          <ServicesCard
            key={`offer-card-${index}`}
            image={content.image}
            title={content.title}
            caption={content.caption}
            link={content.link}
          />
        ))}
      </div>
      <Button
        width="fit"
        className="mt-11 !text-base"
        onClick={() => router.push("/services")}
      >
        See More Services
      </Button>
    </div>
  );
};

export default WhatWeOffer;
