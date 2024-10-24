"use client";
import { QUICK_LINKS } from "@/Constants/navbarDropdownLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavItem = ({
  label,
  href,
  dropdownLinks,
  hasDropdown = false,
  isOpen,
  setIsOpen,
  toggleDropdown,
}) => {
  return (
    <li
      className={`py-4 ${
        label !== "Contact" ? "border-b-2 border-gray-300" : null
      } relative group flex justify-between`}
    >
      <Link
        href={href}
        className="relative flex items-center hover-mask ml-4"
        onClick={() => setIsOpen(false)}
      >
        <span className="mask-lnk">{label}</span>
        <span className="mask-lnk mask-lnk-hover">{label}</span>
      </Link>
      {dropdownLinks && (
        <Image
          src={
            isOpen
              ? "/images/arrow-up-black.svg"
              : "/images/arrow-down-black.svg"
          }
          alt={isOpen ? "arrow up" : "arrow down"}
          width={14}
          height={16}
          onClick={toggleDropdown}
        />
      )}
      {hasDropdown && isOpen && (
        <div className="absolute left-0 top-[65%] mt-4 w-72 Sm:w-80 bg-white shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1),_0_-4px_8px_-2px_rgba(0,0,0,0.1)] z-20 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[550px] group-hover:opacity-100 transition-[max-height,opacity] duration-75 ease-in-out">
          <ul className="text-sm top-full left-0">
            {dropdownLinks?.map((item, index) => (
              <li
                key={index}
                className="p-[13px] border-b border-gray-300 last:border-none"
                onClick={() => {
                  setIsOpen(false);
                  toggleDropdown();
                }}
              >
                <Link href={item.destination}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <label className="burger block large:hidden" htmlFor="burger">
      <input
        type="checkbox"
        checked={isOpen}
        id="burger"
        onChange={() => setIsOpen((prev) => !prev)}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsOpen(false);
        setOpenDropdownIndex(null);
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
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-[81px] left-0 large:hidden h-[406px] px-[25px] w-full bg-white justify-start z-50`}
      >
        <ul className="w-full text-base flex flex-col">
          {QUICK_LINKS.map((link, index) => (
            <NavItem
              key={index}
              label={link.name}
              href={link.destination}
              hasDropdown={link.hasDropdown}
              dropdownLinks={link.linksName}
              isOpen={openDropdownIndex === index}
              setIsOpen={setIsOpen}
              toggleDropdown={() => toggleDropdown(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
