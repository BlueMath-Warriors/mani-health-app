"use client";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useInView from "@/app/hooks/useInView"; // Adjust the import path as necessary

const ClientTypeCard = ({
  icon = "/images/who-we-serve/injured_individuals.svg",
  title = "Injured Individuals",
  caption = "Offering comprehensive orthopedic and physical therapy services for those injured in road accidents or at work.",
  link,
}) => {
  const router = useRouter();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef);

  return (
    <div
      ref={cardRef}
      onClick={() => router.push(link)}
      className={`flex cursor-pointer w-full flex-col items-center justify-start p-4 pt-11 bg-[#FAF4E6] min-w-[282px] max-w-[282px] h-[380px] rounded-lg text-center client-type-card fade-up ${
        isInView ? "in-view" : ""
      }`}
    >
      <div className="flex items-center justify-center bg-white rounded-full mb-4 w-[100px] h-[100px]">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <p className="text-[#212529] text-2xl font-medium mb-2">{title}</p>
      <p className="font-normal text-base">{caption}</p>
    </div>
  );
};

export default ClientTypeCard;
