"use client";
import { useParams } from "next/navigation";
import { notFound } from 'next/navigation';
import ServicesLayout from "@/app/components/services/servicesLayout";
import { COMPONENTS_MAP } from "@/Constants/servicesData";
import ReferralAction from "@/app/components/common/ReferralAction";
import DurableMedicalEquipmentSection from "@/app/components/services/durableMedicalSection";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  const Component = COMPONENTS_MAP[slug];

  return (
    <>
      <ServicesLayout selectedLink={slug}>
        {Component ? <Component /> : notFound()}
      </ServicesLayout>
      {slug === "durable-medical-equipment-dme" && ( //An extra section has to be shown in the layout of this page
        <DurableMedicalEquipmentSection />
      )}
      <ReferralAction />
    </>
  );
};

export default ServiceDetailPage;
