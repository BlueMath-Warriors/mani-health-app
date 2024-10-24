import Image from "next/image";
import React from "react";
import CircleCheckSmall from "../../common/CircleCheckSmall";

const WorkersCompListSection = ({ title="", content }) => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal flex justify-center px-6 py-12`}
    >
      <div className="max-w-[1700px] flex flex-col items-center justify-center">
        <h1 className={`text-base sm:text-xl lg:text-2xl font-medium text-[#212529] w-full text-center px-3 lg:text-start lg:self-start lg:max-w-[900px] mb-6 ${title === "" ? "hidden" :"block"}`}>
          {title}
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content.map((service, index) => (
            <li
              className="max-w-[454px] border flex flex-col gap-2.5 rounded-[5px] px-[15px] py-5 m-3"
              key={index}
            >
              <div className="w-full flex justify-start items-center">
                <div className="w-[100px] h-[100px] flex justify-center items-center rounded-[50%] bg-[#faf4e6]">
                  <Image src={service.imageSrc} alt={`${service.title} image`} height={50} width={50} />
                </div>
              </div>
              <h3 className="text-[18px] font-medium">{service.title}</h3>
              <ul className="w-full">
                {service.points?.map((point, subIndex) => (
                  <li className="flex gap-3 mb-1" key={subIndex}>
                    <div className="flex justify-center items-start">
                      <CircleCheckSmall />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-medium text-primary leading-[19px] mb-2 mt-1">
                        {point.title}
                      </h4>
                      <p className="text-sm leading-[17px]">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkersCompListSection;
