"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    window.dispatchEvent(new Event("cookieConsentUpdated"));
    setIsVisible(false);
  };

  if (!isVisible) return null;
  return (
    <>
      {pathname !== "/terms-of-use" && pathname !== "/privacy-policy" && (
        <div className="fixed inset-0 bg-[#000000] opacity-50 z-[550] no-doc-scroll"></div>
      )}
      <div
        className={`fixed bottom-0 w-full bg-white text-neutral font-normal leading-normal flex justify-center py-[45px] px-[25px] z-[600]`}
      >
        <div className="w-full max-w-[660px] lg:max-w-[1320px] flex flex-col lg:flex-row items-center justify-between px-4">
          <div className="flex flex-col">
            <Image
              src={"/images/Al-Mani-logo.svg"}
              height={50}
              width={100}
              alt="Al Mani Logo"
            />
            <h2 className="text-[#212529] text-[25px] sm:text-[26px] lg:text-[28px] large:text-3xl desktop:text-[32px] font-medium mb-2 mt-1">
              Terms of Use Agreement
            </h2>
            <p className="mb-4">
              To proceed to the website, please agree to our Terms of Use and
              Privacy Policy.
            </p>
          </div>
          <div className="w-full lg:max-w-[170px] flex flex-col gap-4">
            <Link
              href={"/terms-of-use"}
              className="border border-[#333333] text-center font-medium whitespace-nowrap rounded-md px-2 py-2"
            >
              AHI Terms of Use
            </Link>
            <Link
              href={"/privacy-policy"}
              className="border border-[#333333] text-center font-medium whitespace-nowrap rounded-md px-2 py-2"
            >
              AHI Privacy Policy
            </Link>
            <button
              onClick={handleAccept}
              className="bg-primary text-white font-medium whitespace-nowrap rounded-md px-2 py-2"
            >
              Agree and Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBar;
