import Image from "next/image";
import React from "react";

const DurableMedicalEquipmentSection = () => {
  return (
    <div className="flex justify-center items-center bg-primary/10 px-5 sm:px-12 tablet:px-20">
      <div className="grid grid-cols-1 tablet:grid-cols-2 min-[1300px]:grid-cols-3 max-w-[1300px]">
        <div className="sm:w-[426px] sm:h-[369px] py-[60px] px-2">
          <h4 className="text-primary text-base sm:text-[25px] font-medium mb-4">
            What we have?
          </h4>
          <h2 className="text-[#121212] text-[18px] sm:text-[39px] font-semibold">
            Medical equipment Solutions Designed for You
          </h2>
        </div>
        <div className="sm:w-[426px] sm:h-[369px] bg-primary text-white font-semibold py-[60px] px-[50px]">
          <h3 className="text-[18px] sm:text-[25px] mb-5">Ambulatory Products</h3>
          <ul className="text-base sm:text-[18px] flex flex-col gap-2 list-disc pl-4">
            <li className="leading-[27px] pl-4">Canes</li>
            <li className="leading-[27px] pl-4">Crutches</li>
            <li className="leading-[27px] pl-4">Knee Walkers</li>
            <li className="leading-[27px] pl-4">Rollators/Walkers</li>
            <li className="leading-[27px] pl-4">Wheelchairs</li>
          </ul>
        </div>
        <div className="sm:w-[426px] sm:h-[369px] font-semibold py-[60px] px-[50px]">
          <h3 className="text-[#000000] text-[25px] mb-5">
            Bath Safety Products
          </h3>
          <ul className="flex flex-col gap-2 text-[#646464] text-[18px] list-disc pl-4">
            <li className="leading-[27px] pl-4">Bath Benches</li>
            <li className="leading-[27px] pl-4">Bedside Commodes</li>
            <li className="leading-[27px] pl-4">Grab Bars</li>
            <li className="leading-[27px] pl-4">Urinals – Male/Female</li>
          </ul>
        </div>
        <div className="sm:w-[426px] sm:h-[369px]">
          <Image
            src={"/images/sofa_wheel.jpg"}
            alt="sofa with wheel image"
            height={329}
            width={426}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="sm:w-[426px] sm:h-[369px] bg-white font-semibold py-[60px] px-[50px]">
          <h3 className="text-[#000000] text-[18px] sm:text-[25px] mb-6">
            Aids for Daily Living
          </h3>
          <ul className="flex flex-col gap-2 text-[#646464] text-base sm:text-[18px] list-disc pl-4">
            <li className="leading-[27px] pl-4">Grabbers & Reachers</li>
            <li className="leading-[27px] pl-4">Hip/Knee Kits</li>
            <li className="leading-[27px] pl-4">Lift Chairs</li>
          </ul>
        </div>
        <div className="sm:w-[426px] sm:h-[369px]">
          <Image
            src={"/images/wheelChair.jpg"}
            alt="wheel chair image"
            height={329}
            width={426}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DurableMedicalEquipmentSection;
