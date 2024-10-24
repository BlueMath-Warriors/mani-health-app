import Image from "next/image";
import React from "react";

const CircleCheckSmall = () => {
  return (
    <div className="w-[26px] h-[26px] flex justify-center items-center bg-[#faf4e6] rounded-[50%]">
      <Image
        src="/images/tick-mustard-background.svg"
        alt="tick icon"
        height={16}
        width={16}
      />
    </div>
  );
};

export default CircleCheckSmall;
