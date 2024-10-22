import { SERVICES_LINKS } from "@/Constants/servicesData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ServicesLayout = ({ children, selectedLink }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div
      className={`relative bg-white text-neutral font-normal leading-normal flex justify-center py-[60px] px-1 sm:px-[15px]`}
    >
      <div className="max-w-[720px] lg:max-w-[1200px] desktop:max-w-[1320px] flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
        <div className={`w-full lg:max-w-[330px] flex flex-col h-full justify-start px-3`}>
          <div
            className={`bg-primary text-white font-semibold flex justify-between text-[18px] cursor-pointer p-2.5 hover:opacity-80`}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <p>Our Services</p>
            <Image
              src={"/images/arrow-down-white.svg"}
              alt="arrow down icon"
              width={16}
              height={10}
              className={`transition-transform duration-700 ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
            />
          </div>
          <ul className={`flex flex-col w-full lg:max-w-[306px] text-[#a4a4a4] font-medium overflow-hidden transition-[max-height] ease-in-out duration-300 ${isExpanded ? 'max-h-[920px]' : 'max-h-0'}`}>
            {SERVICES_LINKS.map((service, index) => (
              <li
                key={index}
                className={`w-full border-dashed border-b border-[#a4a4a4] ${`/services/${selectedLink}` === service.link? "text-primary": "text-[#a4a4a4]"} hover:text-primary py-2.5 px-4`}
              >
                <Link href={service.link} className="block self-auto">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <main className="w-full sm:max-w-[600px] md:max-w-[760px] lg:max-w-[880px] px-3">{children}</main>
      </div>
    </div>
  );
};

export default ServicesLayout;
