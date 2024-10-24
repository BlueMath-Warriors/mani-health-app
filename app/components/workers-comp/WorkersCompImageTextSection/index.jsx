import Image from "next/image";
import React from "react";
import CircleCheckSmall from "../../common/CircleCheckSmall";

const WorkersCompImageTextSection = ({ content, textOnRight = false }) => {
  return (
    <div
      className={`relative bg-white text-neutral font-medium leading-normal flex justify-center px-6 py-[45px]`}
    >
      <div className="max-w-[1416px] flex flex-col lg:flex-row items-center justify-center lg:gap-x-6 large:gap-x-10 desktop:gap-x-28 gap-y-8">
        <div
          className={`max-w-[708px] w-full lg:w-[58%] flex flex-col gap-4 px-[15px] order-2 ${
            textOnRight ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h2 className="text-secondary text-[19px] md:text-2xl leading-[27.5px] md:leading-[36px]">
            {content.title}
          </h2>
          <h2 className="text-[22px] md:text-[23px] lg:text-[24px] leading-[28px] mb-2">
            {content.subtitle}
          </h2>
          <p className="text-[18px] leading-[27px]">{content.text}</p>
          <ul className="w-full flex flex-col gap-4 mt-4">
            {content.points?.map((point, index) => (
              <li key={index} className="flex gap-4 justify-start items-center">
                <CircleCheckSmall />
                <p className="font-normal leading-[19.2px]">{point}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col min-[440px]:flex-row gap-x-4 gap-y-3 mt-8">
            <a
              className="bg-primary text-white text-[13px] sm:text-base font-medium rounded-md px-4 py-2 sm:py-3.5 self-start hover:bg-opacity-80 hover:shadow-md hover:shadow-opacity-20"
              href={content.button.link}
            >
              {content.button.name}
            </a>
            <a
              className="bg-white border border-neutral text-[13px] sm:text-base font-medium rounded-md px-4 py-2 sm:py-3.5 self-start hover:opacity-80"
              href="/referral_form"
            >
              Submit Your Referral
            </a>
          </div>
        </div>
        <div
          className={`flex justify-center w-full lg:w-[42%] order-1 ${
            textOnRight ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={content.imageSrc}
            alt="Efficiency Claims Processing Image"
            width={600}
            height={510}
            className="w-full max-w-[678px] h-[510px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkersCompImageTextSection;
