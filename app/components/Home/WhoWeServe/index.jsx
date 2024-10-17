"use client";
import ClientTypeCard from "./ClientTypeCard";
import { WHAT_WE_SERVE_CARDS_CONTENT } from "@/Constants/PageContent/home";
import Button from "../../common/Button";

const WhoWeServe = () => {
  const handleContact = () => {
    console.log("apple");
  };

  return (
    <div className="max-w-[1320px] mx-auto mt-11 px-3 py-11 flex flex-col gap-4 items-center justify-center w-full text-center ">
      <div className="flex flex-col gap-4 items-center justify-center w-[70%]">
        <p className="text-[#556b2f] text-base md:text-2xl font-medium">
          Who We Serve
        </p>
        <p className="text-[#282530] text-2xl md:text-4xl font-semibold mb-2">
          Supporting a Deivese Range of Clients
        </p>
        <p className="font-normal text-base md:text-lg mb-10">
          At AMHI, we are committed to providing specialized care and support
          for a variety of individuals and professionals involved in the
          recovery and management of injury cases.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {WHAT_WE_SERVE_CARDS_CONTENT.map((content, index) => (
          <ClientTypeCard
            icon={content.icon}
            key={`client-type-card-${index}`}
            title={content.title}
            caption={content.caption}
          />
        ))}
      </div>
      <Button width="fit" className="mt-11 !text-base" onClick={handleContact}>
        Get in touch now
      </Button>
    </div>
  );
};

export default WhoWeServe;
