"use client";
import {
  DISCLAIMER_OF_WARRANTY,
  HEALTH_INFORMATION,
  PRODUCTS_AND_TRANSACTIONS,
  TERMS_MAPPING,
  TERMS_OF_USE,
} from "@/Constants/termsOfUse";
import React from "react";
import { TitleAndText } from "../components/common/TitleAndText";
import useCheckCookies from "../hooks/useCheckCookies";

const TermsOfUse = () => {
  const { cookieAccepted } = useCheckCookies();
  return (
    <div
      className={`relative ${
        cookieAccepted
          ? "pb-12"
          : "pb-[450px] sm:pb-[430px] md:pb-[400px] lg:pb-72 large:pb-60"
      } bg-white text-neutral font-normal leading-normal sm:text-base flex justify-center py-[48px] px-[25px]`}
    >
      <div className="sm:max-w-[516px] md:max-w-[696px] lg:max-w-[936px] large:max-w-[1116px] desktop:max-w-[1300px] flex flex-col items-start">
        <h1 className="font-medium text-[#212529] text-3xl sm:text-[32px] md:text-4xl lg:text-[40px] leading-[30px] sm:leading-[36px] md:leading-[42px] lg:leading-[48px] mb-2 md:mb-3">
          {TERMS_OF_USE.title}
        </h1>
        <p className="leading-[19.2px] mb-4">{TERMS_OF_USE.content.part1}</p>
        <p className="leading-[19.2px] mb-4">
          {TERMS_OF_USE.content.part2}
          <a
            href="https://www.almanihealthinstitute/"
            className="text-[#0D6EFD]"
          >
            www.almanihealthinstitute
          </a>
          {TERMS_OF_USE.content.part3}
        </p>
        <h4 className="font-bold leading-[19.2px] mb-4">
          {TERMS_OF_USE.content.part4}
        </h4>
        <TitleAndText details={HEALTH_INFORMATION} />
        <p className="leading-[19.2px] mb-4">
          {HEALTH_INFORMATION.notResponsible}
        </p>
        <p className="leading-[19.2px] mb-4">{HEALTH_INFORMATION.emergency}</p>
        <TitleAndText details={PRODUCTS_AND_TRANSACTIONS} />
        <p className="font-bold leading-[19.2px] mb-4">
          {PRODUCTS_AND_TRANSACTIONS.obligations}
        </p>
        <p className="leading-[19.2px] mb-4">
          {PRODUCTS_AND_TRANSACTIONS.lawfulUse}
        </p>
        <TitleAndText details={DISCLAIMER_OF_WARRANTY} />
        <p className="leading-[19.2px] mb-4">
          {DISCLAIMER_OF_WARRANTY.warning}
        </p>
        {TERMS_MAPPING.map((detail, index) => (
          <TitleAndText details={detail} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TermsOfUse;
