"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ServiceCard = ({ bgImage, icon, title, caption, link }) => {
  const router = useRouter();
  return (
    <div
      className="group service-card-2 relative overflow-hidden flex items-end bg-cover bg-center rounded-lg h-[415px] w-[350px] custom-transition text-left p-6 cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 2.29%, #2f2100 100%), url(${bgImage})`,
      }}
      onClick={() => router.push(link)}
    >
      <p className="text-white text-2xl font-semibold block group-hover:hidden">
        {title}
      </p>
      <span className="flex items-center justify-center w-[188px] h-[188px] rounded-full bg-[#d6a42b] bg-opacity-40 absolute -left-56 -top-10 group-hover:-left-10 z-20">
        <Image src={icon} width={60} height={60} alt="service card icon" />
      </span>
      <span className="absolute top-[420px] group-hover:top-0 left-0 right-0 h-full bg-[#ce9100] bg-opacity-80" />
      <div className="hidden group-hover:flex flex-col items-center text-left z-10">
        <p className="text-white text-2xl font-medium mb-2">{title}</p>
        <p className="text-white mb-4">{caption}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
