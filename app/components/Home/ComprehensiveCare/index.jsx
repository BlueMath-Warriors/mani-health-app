import ServiceCard from "./ServiceCard";
import { COMPREHENSIVE_CARE_CARD_CONTENT } from "@/Constants/PageContent/home";

const ComprehensiveCare = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-11 px-3 py-11 flex flex-col gap-4 items-center justify-center w-full text-center ">
      <p className="text-[#282530] text-2xl md:text-4xl font-semibold !leading-[150%] mb-11 mt-1 max-w-[80%]">
        Comprehensive Care for Injury Recovery and Support
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {COMPREHENSIVE_CARE_CARD_CONTENT.map((content, index) => (
          <ServiceCard key={`service-1-card-${index}`} {...content} />
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveCare;
