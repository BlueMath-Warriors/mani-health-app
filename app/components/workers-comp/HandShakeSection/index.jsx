import React from "react";

const HandShakeSection = ({ content }) => {
  return (
    <div
      className={`relative bg-[#faf4e6] text-neutral hand-shake-picture font-medium leading-normal flex justify-center px-[25px] lg:px-[70px] large:px-[120px] py-[60px] sm:py-[90px] lg:py-[150px]`}
    >
      <div className="max-w-[1320px] w-full flex flex-col items-center justify-center text-center lg:justify-start lg:text-start gap-5 my-2">
        <h3 className="w-full text-secondary text-2xl leading-[36px]">
          {content.title}
        </h3>
        <h1 className="w-full text-4xl font-semibold leading-[54px] mb-2">
          {content.subtitle}
        </h1>
        <p className="lg:max-w-[650px] large:max-w-[700px] desktop:max-w-[880px] text-[#403d39] font-normal lg:self-start text-[18px] leading-[27px] mb-4">
          {content.text}
        </p>
        <div className="flex gap-x-4 lg:w-full">
          <a
            className="bg-primary text-white text-[13px] sm:text-base font-medium rounded-md px-4 py-2 sm:py-3.5 self-start hover:bg-opacity-80 hover:shadow-md hover:shadow-opacity-20"
            href="/contact"
          >
            Contact Us Now
          </a>
          <a
            className="border border-neutral text-[13px] sm:text-base font-medium rounded-md px-4 py-2 sm:py-3.5 self-start hover:opacity-80"
            href="/about"
          >
            Who we are
          </a>
        </div>
      </div>
    </div>
  );
};

export default HandShakeSection;
