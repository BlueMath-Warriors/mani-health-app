import {
  legalSupportLinks,
  servicesLinks,
  workersCompLinks,
} from "@/Constants/navbarDropdownLinks";
import Image from "next/image";
import NavbarDropdown from "../NavbarDropdown/page";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="hidden large:block bg-neutral py-4 text-white text-sm font-normal">
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
        <div className="flex w-full max-w-[1500px] justify-between items-center px-[25px] lg:px-24 gap-0 large:gap-[57px] min-[1223px]:gap-0 mx-auto">
          <div className="w-[100px] h-[50px]">
            <Image
              src={"/images/Al-Mani-logo.svg"}
              height={50}
              width={100}
              alt={"Al Mani Logo"}
              className="h-full w-full"
            />
          </div>
          <ul className="hidden large:flex flex-wrap justify-between gap-x-[38px] gap-y-[2px] text-base">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/">
              <li className="cursor-pointer">About</li>
            </Link>
            <li className="flex justify-between gap-[9px] relative group cursor-pointer">
              <p>Services</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
              <div className="absolute left-0 top-[140%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[489px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
                <ul className="text-sm top-full left-0">
                  {servicesLinks.map((service, index) => (
                    <li
                      key={index}
                      className="p-[13px] border-b border-gray-300 last:border-none"
                    >
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
              <div className="absolute left-0 top-[140%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[284px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
                <ul className="text-sm top-full left-0">
                  {legalSupportLinks.map((service, index) => (
                    <li
                      key={index}
                      className="p-[13px] border-b border-gray-300 last:border-none"
                    >
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
              <div className="absolute left-0 top-[140%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-linear">
                <ul className="text-sm top-full left-0">
                  {workersCompLinks.map((service, index) => (
                    <li
                      key={index}
                      className="p-[13px] border-b border-gray-300 last:border-none"
                    >
                      <a href={service.destination}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <Link href={"/"}>
              <li className="cursor-pointer">Senior Living</li>
            </Link>
            <Link href={"/"}>
              <li className="cursor-pointer">Contact Us</li>
            </Link>
          </ul>
          <NavbarDropdown />
        </div>
      </div>
    </>
  );
};

export default Header;
