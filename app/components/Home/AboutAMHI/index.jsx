"use client";
import { useRef } from "react";
import Button from "../../common/Button";
import List from "../../common/List";
import Image from "next/image";
import { ABOUT_LIST_CONTENT } from "@/Constants/PageContent/home";
import { useRouter } from "next/navigation";
import useInView from "@/app/hooks/useInView"; // Adjust the import path as necessary

const AboutAMHI = () => {
  const router = useRouter();
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  // Check if the sections are in view
  const isLeftInView = useInView(leftSectionRef);
  const isRightInView = useInView(rightSectionRef);

  return (
    <div className="flex items-center justify-center bg-[#fbfbfb]">
      <div className="grid mid:grid-cols-2 w-full max-w-[1320px] gap-4 items-start justify-center text-left px-3 py-11">
        {/* Left Section */}
        <div
          ref={leftSectionRef}
          className={`flex flex-col gap-4 items-center justify-center text-left fade-left ${
            isLeftInView ? "in-view" : ""
          }`}
        >
          <p className="text-[#556b2f] text-base md:text-2xl font-medium mr-auto">
            About AMHI
          </p>
          <p className="text-[#282530] text-2xl md:text-4xl font-semibold mb-2 mr-auto">
            Your Partner in Healthcare and Recovery
          </p>
          <p className="font-normal text-base md:text-lg mb-10">
            AMHI stands at the forefront of providing integrated medical care,
            including orthopedic, physical therapy, and pharmacy services. We
            cater to individuals injured in road accidents and at work, aligning
            our services with the needs of legal and insurance professionals,
            and nursing homes. Our comprehensive approach ensures high-quality
            care and effective support for all involved.
          </p>
          <List items={ABOUT_LIST_CONTENT} />
          <Button
            width="fit"
            className="!text-base mt-12 mr-auto"
            onClick={() => router.push("/about")}
          >
            Learn More About Us
          </Button>
        </div>

        {/* Right Section */}
        <div
          ref={rightSectionRef}
          className={`grid grid-cols-2 gap-6 -order-1 large:order-1 fade-right ${
            isRightInView ? "in-view" : ""
          }`}
        >
          <div className="flex flex-col col-span-2 large:col-span-1">
            <p className="text-[32px] font-semibold">
              Connect with{" "}
              <span className="text-[#556b2f]">AMHI Health Care</span>
            </p>
            <div
              className="h-full bg-cover bg-center relative hidden large:block"
              style={{
                backgroundImage: `url('/images/about-amhi/first.webp')`,
              }}
            />
          </div>
          <div
            className="bg-cover bg-center relative h-[370px] hidden large:block"
            style={{
              backgroundImage: `url('/images/about-amhi/second.webp')`,
            }}
          />
          <div
            className="col-span-2 h-[350px] bg-cover bg-center relative"
            style={{
              backgroundImage: `url('/images/about-amhi/third.webp')`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAMHI;
