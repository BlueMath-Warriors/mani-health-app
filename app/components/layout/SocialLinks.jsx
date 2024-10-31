"use client";
import { useState } from 'react';
import Image from 'next/image';

const SocialLink = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-[50px] bg-[#f4538a] hover:bg-white group h-[35px] w-[35px] flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? link.srcHover : link.src}
        alt={link.alt}
        height={link.height}
        width={link.width}
      />
    </a>
  );
};

export default SocialLink;
