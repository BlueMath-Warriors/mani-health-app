import Image from "next/image";
import React from "react";

const ServicesContentBlock = ({ content }) => {
  return (
    <div className="flex flex-col gap-4 justify-between items-center mt-8">
      <h1 className="text-[#000000] text-[32px] font-semibold leading-[48px] flex justify-start w-full mb-2">
        {content.title}
      </h1>
      <p className="mb-4">{content.text}</p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {content.points?.map((point, index) => (
          <li key={index} className="w-full lg:max-w-[380px] flex gap-4 px-3 mb-2">
            <Image
              src={
                point.iconType === "green"
                  ? "/images/arrow-right-green-double.svg"
                  : "/images/tick-blue-background.svg"
              }
              alt="bullet icon"
              height={20}
              width={20}
              className="self-start mt-1"
            />
            <div className="inline">
              <span className="font-medium">{point.title}</span>
              <span className="ml-1">{point.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesContentBlock;
