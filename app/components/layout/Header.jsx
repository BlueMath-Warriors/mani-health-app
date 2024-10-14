import { legalSupportLinks, servicesLinks, workersCompLinks } from "@/Constants/navbarDropdownLinks";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block bg-neutral py-4 text-white text-sm font-normal">
        <div className="flex w-full max-w-[1500px] justify-between items-center px-[25px] min-[1331px]:px-24 mx-auto whitespace-nowrap">
          <p className="">Phone: (954)-633-5454</p>
          <ul className="flex items-center contact-info">
            <li>
              Email:{" "}
              <a href="mailto:info@almaniinstitute.org">
                info@almaniinstitute.org
              </a>
            </li>
            <li className="flex">
              <div className="flex items-center justify-between gap-2">
                <p>Tuesday - Wednesday - Thursday :</p>
                <p>8:00 AM - 3:00 PM</p>
                <p>and by appointment</p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/images/fax.svg"}
                width={24}
                height={24}
                alt="fax icon"
              />
              <p>Fax: (954)-678-2916</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-4 text-[#33302B] text-sm font-normal relative">
        <div className="flex w-full max-w-[1500px] justify-between items-center px-24 gap-0 lg:gap-[57px] min-[1223px]:gap-0 mx-auto">
          <div className="w-[100px] h-[50px]">
            <Image
              src={"/images/Al-Mani-logo.svg"}
              height={50}
              width={100}
              alt={"Al Mani Logo"}
              className="h-full w-full"
            />
          </div>
          <ul className="hidden lg:flex flex-wrap justify-between gap-x-[38px] gap-y-[2px] text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li
              className="flex justify-between gap-[9px] relative group cursor-pointer"
            >
              <p>Services</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
                <div className="absolute left-0 top-[140%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75 delay-100">
                  <ul className="text-sm top-full left-0">
                    {servicesLinks.map((service, index) => (
                      <li key={index} className="p-[13px] border-b border-gray-300 last:border-none">
                        <a href={service.destination}>{service.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
            </li>
            <li className="flex justify-between gap-[9px] relative group cursor-pointer">
              <p>Legal Support</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
              <div className="absolute left-0 top-[140%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75 delay-100">
                  <ul className="text-sm top-full left-0">
                    {legalSupportLinks.map((service, index) => (
                      <li key={index} className="p-[13px] border-b border-gray-300 last:border-none">
                        <a href={service.destination}>{service.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
            </li>
            <li className="flex justify-between gap-[9px] relative group cursor-pointer">
              <p>{"Workers' Comp"}</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
              <div className="absolute left-0 top-[140%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75 delay-100">
                  <ul className="text-sm top-full left-0">
                    {workersCompLinks.map((service, index) => (
                      <li key={index} className="p-[13px] border-b border-gray-300 last:border-none">
                        <a href={service.destination}>{service.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
            </li>
            <li className="cursor-pointer">Senior Living</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
          <div className="block lg:hidden h-[20px] w-[30px]">
            <Image
              src={"/images/navbar-icon.svg"}
              alt="navbar icon"
              height={20}
              width={30}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
