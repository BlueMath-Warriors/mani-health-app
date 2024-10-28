"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../Menu";
import { QUICK_LINKS } from "@/Constants/navbarDropdownLinks";

const NavItem = ({ label, href, links, hasDropdown = false }) => {
  return (
    <li className="relative group flex justify-between items-center gap-[9px] cursor-pointer h-full">
      <Link href={href} className="flex justify-between items-center h-full hover:text-primary">
        <p>{label}</p>
      </Link>
      {hasDropdown && (
        <Image
          src={"/images/arrow-down-black.svg"}
          alt="arrow down"
          height={11}
          width={14}
          className="transition-transform duration-0 group-hover:rotate-180"
        />
      )}
      {hasDropdown && (
        <div className="absolute left-0 top-[69.5%] mt-4 w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-20 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[489px] group-hover:opacity-100 transition-[max-height,opacity] duration-100 ease-in-out">
          <ul className="text-sm top-full left-0">
            {links?.map((link, index) => (
              <li
                key={index}
                className="p-[13px] border-b border-gray-300 last:border-none"
              >
                <Link
                  href={link.destination}
                  className="break-words whitespace-normal"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const StickyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-white py-4 text-[#33302B] text-sm font-normal transition-transform duration-500 ease-in-out ${
        isScrolled ? "fixed top-0 left-0 w-full shadow-lg z-50" : "relative bottom-[-80px] transform -translate-y-full"
      }`}
    >
      <div className="flex w-full max-w-[1500px] justify-between items-center px-[25px] large:px-24 gap-0 large:gap-[57px] min-[1223px]:gap-0 mx-auto">
        <Link href="/" className="w-[100px] h-[50px]">
          <Image
            src="/images/Al-Mani-logo.svg"
            height={50}
            width={100}
            alt="Al Mani Logo"
            className="h-full w-full"
          />
        </Link>
        <ul className="hidden large:flex justify-between gap-x-[38px] h-[50px] text-base whitespace-nowrap">
          {QUICK_LINKS.map((item, index) => (
            <NavItem
              key={index}
              label={item.name}
              href={item.destination}
              hasDropdown={item.hasDropdown}
              links={item.linksName}
            />
          ))}
        </ul>
        <Menu />
      </div>
    </div>
  );
};

export default StickyNavbar;
