"use client";
import {
  LEGAL_SUPPORT_LINKS,
  SERVICES_LINKS,
  WORKERS_COMP_LINKS,
} from "@/Constants/navbarDropdownLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <label
        className="burger block large:hidden"
        for="burger"
      >
        <input type="checkbox" id="burger" onClick={() => setIsOpen((prev) => !prev)}></input>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-[81px] left-0 large:hidden h-[404px] px-[25px] w-full bg-white justify-start`}
      >
        <ul className="w-full text-base flex flex-col">
          <Link href={"/"}>
            <li className="p-4 border-b-2 border-gray-300">Home</li>
          </Link>
          <Link href={"/"}>
            <li className="p-4 border-b-2 border-gray-300">About</li>
          </Link>
          <li className="p-4 border-b-2 border-gray-300 relative group">
            <Link href="/services" className="flex justify-between">
              <p>Services</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt="arrow down"
                width={14}
                height={16}
              />
            </Link>
            <div className="absolute left-0 top-[65%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[489px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
              <ul className="text-sm top-full left-0">
                {SERVICES_LINKS.map((service, index) => (
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
          <li className="p-4 border-b-2 border-gray-300 relative group">
            <Link href="/legal-support" className="flex justify-between">
              <p>Legal Support</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt="arrow down"
                width={14}
                height={16}
              />
            </Link>
            <div className="absolute left-0 top-[65%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[284px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
              <ul className="text-sm top-full left-0">
                {LEGAL_SUPPORT_LINKS.map((service, index) => (
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
          <li className="p-4 border-b-2 border-gray-300 relative group">
            <Link href="/workers-comp" className="flex justify-between">
              <p>Workers{"'"} Comp</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt="arrow down"
                width={14}
                height={16}
              />
            </Link>
            <div className="absolute left-0 top-[65%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-10 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-linear">
              <ul className="text-sm top-full left-0">
                {WORKERS_COMP_LINKS.map((service, index) => (
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

export default Menu;
