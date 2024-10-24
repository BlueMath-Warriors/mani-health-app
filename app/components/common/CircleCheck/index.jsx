import { SENIOR_LIVING_IMAGE_SOURCES } from "@/Constants/seniorLivingData";
import Image from "next/image";

export const CircleCheck = () => {
  return (
    <div className="w-[38px] h-[38px] lg:w-12 lg:h-12 flex flex-shrink-0 justify-center items-center bg-[#D6A42B] rounded-[50%]">
      <div className="bg-white rounded-[50%] w-[30px] h-[30px] lg:w-[33px] lg:h-[33px] flex justify-center items-center">
        <Image
          src={SENIOR_LIVING_IMAGE_SOURCES.CHECK_YELLOW_ICON}
          alt="check icon"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
