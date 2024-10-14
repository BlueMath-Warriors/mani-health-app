"use client";
import {
  legalSupportLinks,
  servicesLinks,
  workersCompLinks,
} from "@/Constants/navbarDropdownLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavbarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  }, [isLargeScreen]);
  return (
    <>
      <div
        className="block large:hidden h-[20px] w-[30px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          src={isOpen ? "/images/x-mark.svg" : "/images/navbar-icon.svg"}
          alt="navbar icon"
          height={20}
          width={30}
          className="h-full w-full"
        />
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-[81px] left-0 large:hidden h-[404px] px-[25px] w-full bg-white justify-center md:justify-start`}
      >
        <ul className="w-[330px] text-base flex flex-col">
          <Link href={"/"}>
            <li className="p-4 border-b-2 border-gray-300">Home</li>
          </Link>
          <Link href={"/"}>
            <li className="p-4 border-b-2 border-gray-300">About</li>
          </Link>
          <li className="p-4 border-b-2 border-gray-300 flex justify-between relative group">
            <p>Services</p>
            <Image
              src={"/images/arrow-down-black.svg"}
              alt="arrow down"
              width={14}
              height={16}
            />
            <div className="absolute left-0 top-[65%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[489px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
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
          <li className="p-4 border-b-2 border-gray-300 flex justify-between relative group">
            <p>Legal Support</p>
            <Image
              src={"/images/arrow-down-black.svg"}
              alt="arrow down"
              width={14}
              height={16}
            />
            <div className="absolute left-0 top-[65%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[284px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
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
          <li className="p-4 border-b-2 border-gray-300 flex justify-between relative group">
            <p>Workers{"'"} Comp</p>
            <Image
              src={"/images/arrow-down-black.svg"}
              alt="arrow down"
              width={14}
              height={16}
            />
            <div className="absolute left-0 top-[65%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-linear">
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
            <li className="p-4 border-b-2 border-gray-300">Senior Living</li>
          </Link>
          <Link href={"/"}>
            <li className="p-4">Contact Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavbarDropdown;
