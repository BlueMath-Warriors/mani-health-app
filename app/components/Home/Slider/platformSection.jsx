"use client";
import Image from "next/image";
import { SOCIAL_MEDIA_CONTENT } from "@/Constants/PageContent/home";
import { useRouter } from "next/navigation";

export const PlatformSection = () => {
  const router = useRouter();
  return (
    <div className="platforms-section w-full absolute bottom-14 sm:bottom-8 sm:right-8 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4 sm:gap-7">
      <p className="text-lg font-medium pr-8 sm:pr-0">Our platforms</p>
      <div className="hidden sm:block border-b border-[#282520] w-36" />
      <div className="flex items-center gap-4 sm:gap-7 pr-8 sm:pr-0">
        {SOCIAL_MEDIA_CONTENT.map((social, index) => (
          <div
            key={`social-${index}`}
            className="flex items-center justify-center rounded-full cursor-pointer bg-[#faf4e6] w-12 h-12"
            onClick={() => router.push(social.link)}
          >
            <Image
              src={social.icon}
              width={social.id === "facebook" ? 15 : 24}
              height={24}
              alt="socials icon"
              className="hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformSection;
