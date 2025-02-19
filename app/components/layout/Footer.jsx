"use client";
import { APPOINTMENT_DAYS, SOCIAL_LINKS } from "@/Constants/footerData";
import { QUICK_LINKS, SERVICES_LINKS } from "@/Constants/navbarDropdownLinks";
import Image from "next/image";
import Link from "next/link";
import SocialLink from "./SocialLinks";
import useCheckCookies from "@/app/hooks/useCheckCookies";

const Footer = () => {
  const { cookieAccepted } = useCheckCookies();

  return (
    <div
      className={`${
        cookieAccepted ? "flex" : "hidden"
      } bg-[#5BC074] text-white flex flex-col items-center font-normal text-[13px] lg:text-sm px-[25px] py-[60px] lg:py-0 lg:pb-0 lg:pt-[100px]`}
    >
      <div className="max-w-[1320px] flex flex-wrap justify-between responsive-padding md:ml-4 lg:ml-0">
        <div className="w-full md:w-1/2 lg:w-[30%] px-3">
          <Link href={"/"}>
            <Image
              src={"/images/logo-white.svg"}
              alt={"Al-mani Logo"}
              height={100}
              width={120}
            />
          </Link>
          <p className="my-8 leading-4">
            Get in touch with AMHI Pharmacy for any inquiries or to schedule an
            appointment.
          </p>
          <ul className="flex flex-col text-base font-normal gap-4">
            {APPOINTMENT_DAYS.map((day, index) => (
              <li key={index} className="flex justify-between items-center">
                <p>{day}</p>
                <p>8:00 AM - 3:00 PM</p>
              </li>
            ))}
            <li className="mb-4">And by Appointment</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-3 lg:pb-2 mb-4">
          <h1 className="text-[20px] lg:text-[23px] font-bold mb-1">
            Services
          </h1>
          <div className="h-0.5 w-10 bg-[#59d5e0] mb-6 mt-2.5"></div>
          <ul>
            {SERVICES_LINKS.map((service, index) => (
              <li key={index} className="leading-4 mb-3 hover:scale-[1.02]">
                <Link href={service.destination}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-[20%] px-3 mb-4">
          <h1 className="text-[20px] lg:text-[23px] font-bold mb-1">
            Quick Links
          </h1>
          <div className="h-0.5 w-10 bg-[#59d5e0] mb-6 mt-2.5"></div>
          <ul>
            {QUICK_LINKS.map((service, index) => (
              <li key={index} className="leading-4 mb-3 hover:scale-[1.02]">
                {service.isExternal ? (
                  <a
                    href={service.destination}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.name}
                  </a>
                ) : (
                  <Link href={service.destination}>{service.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-4">
          <h1 className="text-[20px] lg:text-[23px] font-bold mb-1">
            Contact Details
          </h1>
          <div className="h-0.5 w-10 bg-[#59d5e0] mb-6 mt-2.5"></div>
          <ul className="flex flex-col gap-3">
            <li className="flex">
              <p className="w-1/4 lg:w-[28%] xl:w-1/4">Address:</p>
              <a
                className="w-3/4 lg:w-[72%] xl:w-3/4 hover:scale-[1.02]"
                href="https://maps.app.goo.gl/8qzySpCUDJ1Afa1Y7"
              >
                7710 NW 71st Court, Suite 201 A, Tamarac, FL 65355
              </a>
            </li>
            <li className="flex items-center">
              <p className="w-1/4">Email:</p>
              <a
                href="mailto:info@almaniinstitute.org"
                className="hover:scale-[1.02]"
              >
                info@almaniinstitute.org
              </a>
            </li>
            <li className="flex items-center">
              <p className="w-1/4">Phone:</p>
              <a href="tel:9546335454" className="hover:scale-[1.02]">
                (954)-633-5454
              </a>
            </li>
            <li className="flex items-center mb-4">
              <p className="w-1/4">Fax:</p>
              <a href="tel:9546782916" className="hover:scale-[1.02]">
                (954)-678-2916
              </a>
            </li>
          </ul>
          <div className="flex gap-1">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink link={link} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] w-full responsive-padding flex flex-col md:flex-row justify-between text-base md:ml-7 lg:ml-0">
        <div className="flex flex-wrap items-center max-[396px]:justify-center px-3 mb-4">
          <p className="whitespace-nowrap flex relative">
            © Copyright 2024
            <Link href={"/"}>
              <Image
                src={"/images/logo-white.svg"}
                alt={"Al-mani Logo"}
                height={45}
                width={54}
                className="ml-3 absolute top-0"
              />
            </Link>
          </p>
        </div>
        <div className="flex gap-4 px-3 mb-4">
          <Link href={"/terms-of-use"}>Terms Of Use</Link>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
