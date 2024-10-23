"use client";
import React from "react";
import ServicesContentBlock from "../../servicesContentBlock";
import { COMPREHENSIVE_ORTHOPEDIC_CARE } from "@/Constants/servicesData";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ComprehensiveOrthopedicCare = () => {
  const router = useRouter();
  return (
    <>
      <ServicesContentBlock
        content={COMPREHENSIVE_ORTHOPEDIC_CARE.INTRODUCTION}
      />
      <div className="flex justify-center items-center text-center">
        <ul className="max-w-[605px] grid grid-cols-1 md:grid-cols-2">
          {COMPREHENSIVE_ORTHOPEDIC_CARE.ORTHOPEDIC_SPECIALITIES.map(
            (speciality, index) => (
              <li
                key={index}
                className="max-w-[294px] flex justify-center items-center flex-col rounded-lg shadow-servicesCustomShadow cursor-pointer px-3 py-8 m-2"
                onClick={()=>router.push(speciality.link)}
              >
                <div className="bg-[#faf4e6] rounded-full w-[120px] h-[120px] flex justify-center items-center">
                  <Image
                    src={speciality.imageSrc}
                    alt={`${speciality.title} image`}
                    width={75}
                    height={75}
                  />
                </div>
                <h4 className="text-sm font-semibold text-[#33302B] my-4">
                  {speciality.title}
                </h4>
                <p className="text-[13px] text-[#666461]">{speciality.text}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default ComprehensiveOrthopedicCare;
