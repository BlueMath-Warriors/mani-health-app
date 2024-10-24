import {
  CONTACT_US,
  DETAILS_MAP,
  ONLINE_ANALYTICS,
  PRIVACY_POLICY,
  TABLE_DATA,
  TYPES_OF_PERSONAL_INFORMATION,
} from "@/Constants/privacyPolicyData";
import React from "react";

const TitleAndText = ({ details }) => {
  return (
    <>
      <h2 className="font-medium text-[26px] md:text-[28px] lg:text-[32px] leading-[27px] sm:leading-[32px] md:leading-[38px] mb-2 md:mb-3">
        {details.title}
      </h2>
      <p className="leading-[19.2px] mb-4">{details.content}</p>
    </>
  );
};

const PrivacyPolicy = () => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal text-[13px] min-[370px]:text-sm min-[430px]:text-[15px] sm:text-base flex justify-center py-[48px] px-[25px]`}
    >
      <div className="sm:max-w-[516px] md:max-w-[696px] lg:max-w-[936px] large:max-w-[1116px] desktop:max-w-[1300px] flex flex-col items-start">
        <h1 className="font-medium text-[#212529] text-3xl sm:text-[32px] md:text-4xl lg:text-[40px] leading-[30px] sm:leading-[36px] md:leading-[42px] lg:leading-[48px] mb-2 md:mb-3">
          {PRIVACY_POLICY.title}
        </h1>
        <p className="leading-[19.2px] mb-4">
          {PRIVACY_POLICY.content.part1}
          <a
            href="https://www.almanihealthinstitute/"
            className="text-[#0D6EFD]"
          >
            www.almanihealthinstitute
          </a>
          {PRIVACY_POLICY.content.part2}
        </p>
        <TitleAndText details={TYPES_OF_PERSONAL_INFORMATION} />
        <table class="min-w-full table-auto border-collapse mb-4 mt-1">
          <thead>
            <tr>
              <th class="text-left p-2 border-b border-[#DEE2E6]">
                Categories
              </th>
              <th class="text-left p-2 border-b border-[#DEE2E6]">
                Examples
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left align-top p-2 border-b border-[#DEE2E6]">
                {TABLE_DATA.categoryInformation}
              </td>
              <td class="text-left align-top p-2 border-b border-[#DEE2E6]">
                {TABLE_DATA.exampleInformation}
              </td>
            </tr>
            <tr>
              <td class="text-left align-top p-2 border-b border-[#DEE2E6]">
                {TABLE_DATA.categoryPersonalInfo}
              </td>
              <td class="text-left align-top p-2 border-b border-[#DEE2E6]">
                {TABLE_DATA.examplePersonalInfo}
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-medium text-[26px] md:text-[28px] lg:text-[32px] leading-[27px] sm:leading-[32px] md:leading-[38px] mb-2 md:mb-3">
          {ONLINE_ANALYTICS.title}
        </h2>
        <p className="leading-[19.2px] mb-4">
          {ONLINE_ANALYTICS.content.part1}
          <a
            className="text-[#0d6efd]"
            href="http://www.google.com/policies/privacy/partners/"
          >
            http://www.google.com/policies/privacy/partners/
          </a>
          {ONLINE_ANALYTICS.content.part2}
          <a
            className="text-[#0d6efd]"
            href="http://tools.google.com/dlpage/gaoptout?hl=en"
          >
            http://tools.google.com/dlpage/gaoptout?hl=en
          </a>
          .
        </p>
        {DETAILS_MAP.map((detail, index) => (
          <TitleAndText details={detail} key={index} />
        ))}
        <h2 className="font-medium text-[26px] md:text-[28px] lg:text-[32px] leading-[27px] sm:leading-[32px] md:leading-[38px] mb-2 md:mb-3">
          {CONTACT_US.title}
        </h2>
        <p>{CONTACT_US.content}</p>
        <p className="font-bold">
          Email:{" "}
          <a
            className="text-[#0d6edf] font-normal"
            href="mailto:Info@almaniinstitute.org"
          >
            {CONTACT_US.email}
          </a>
        </p>
        <p className="font-bold">
          Telephone:{" "}
          <a className="text-[#0d6edf] font-normal" href="tel:9546335454">
            {CONTACT_US.telephone}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
