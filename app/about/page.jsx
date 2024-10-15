import React from "react";
import { poppins } from "../layout";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div
      className={`bg-white text-neutral font-normal text-base flex justify-center py-[45px] px-[25px] ${poppins.className}`}
    >
      <div className="max-w-[1500px] flex flex-col md:flex-row items-center gap-9 large:gap-3 px-0 lg:px-12">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-[450px] h-[250px] md:w-[375px] md:h-[222px] lg:w-[450px] lg:h-[250px] large:w-[600px] large:h-[400px]">
            <Image
              src={"/illustrations/pharmacy.webp"}
              alt={"Pharmacy image"}
              width={600}
              height={400}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <p className="text-secondary font-medium text-base lg:text-2xl">
            Expertise in Workers’ Compensation Pharmacy
          </p>
          <h1 className="font-semibold text-[25px] lg:text-4xl mb-2">
            Welcome to AMHI
          </h1>
          <p className="text-base lg:text-[18px] mb-5">
            Welcome to our dedicated team. We bring the highest clinical
            expertise with a commitment to comprehensive care for all our
            patients. With a focus on excellence, we ensure seamless operations
            that prioritize effective communication with payers, eliminating
            delays and obstacles to deliver optimal patient care. Your
            well-being is our priority, and we pride ourselves on providing a
            cohesive and efficient healthcare experience for every individual we
            serve.
          </p>
          <div className="flex justify-start gap-3 font-medium w-full whitespace-nowrap">
            <a
              className="bg-primary rounded-lg text-white py-3 px-4 flex items-center"
              href={"/contact"}
            >
              Contact Us
            </a>
            <a className="rounded-lg border border-neutral py-3.5 px-4" href={"/referral_form"}>
              Submit Your Referral
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
