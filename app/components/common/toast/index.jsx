import Image from "next/image";
import React from "react";

const Toast = ({ setShowToast }) => {
  return (
    <div className="fixed bottom-9 right-6 bg-white flex gap-3 w-[315px] h-[78px] p-4 rounded-md shadow-custom-shadow-lg z-[600]">
      <div className="flex items-center">
        <div className="bg-green-500 rounded-full w-5 h-5 flex justify-center items-center">
          <Image
            src={"/images/tick.svg"}
            height={12}
            width={12}
            alt="tick icon"
          />
        </div>
      </div>
      <p className="text-gray-500">
        Thank you! Your message has been sent successfully.
      </p>
      <Image
        src={"/images/cross.svg"}
        alt="cross icon"
        height={7}
        width={9}
        className="self-start mt-1"
        onClick={() => setShowToast(false)}
      />
    </div>
  );
};

export default Toast;
