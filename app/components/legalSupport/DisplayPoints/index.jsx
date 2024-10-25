"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { CircleCheck } from "../../common/CircleCheck";

export const DisplayPoints = ({ contentArray, link = false }) => {
  const router = useRouter();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {contentArray.map((point, index) => (
        <li
          className={`flex gap-[15px] lg:gap-[30px] ${
            link ? "cursor-pointer" : null
          } px-3`}
          key={index}
          onClick={() => {
            if (link) {
              router.push(point.link);
            }
          }}
        >
          <div className="flex justify-start">
            <CircleCheck />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base sm:text-[18px] font-medium mb-2">
              {point.title}
            </h4>
            <p className="mb-4">{point.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
