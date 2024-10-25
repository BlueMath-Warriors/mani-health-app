"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import ReferralAction from "@/app/components/common/ReferralAction";
import { WORKERS_COMP_COMPONENTS_MAP } from "@/Constants/workersCompData";

const WorkersPage = () => {
  const { slug } = useParams();

  const Component = WORKERS_COMP_COMPONENTS_MAP[slug];

  return (
    <>
      {Component ? <Component /> : notFound()}
      <ReferralAction />
    </>
  );
};

export default WorkersPage;
