import { poppins } from "@/app/layout";
import {
  SERVICES_LIST,
  SERVICES_LIST_SECTION_TEXTS,
} from "@/Constants/servicesData";
import ServicesCard from "../../common/ServicesCard";

const ServicesListSection = () => {
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal flex justify-center py-[45px] px-[25px] ${poppins.className}`}
    >
      <div className="max-w-[1200px] flex flex-col items-center justify-center">
        <div className="flex flex-col text-center mb-12">
          <h4 className="text-base lg:text-2xl text-secondary font-medium mb-6">
            {SERVICES_LIST_SECTION_TEXTS.TITLE}
          </h4>
          <h1 className="text-[25px] lg:text-4xl font-semibold">
            {SERVICES_LIST_SECTION_TEXTS.SUBTITLE}
          </h1>
        </div>
        <div className="grid grid-cols-1 mid:grid-cols-3 justify-center gap-8">
        {SERVICES_LIST.map((service, index) => (
            <ServicesCard
              key={`services-card-${index}`}
              image={service.imageSrc}
              title={service.title}
              caption={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesListSection;
