"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import ServicesLayout from "@/app/components/services/servicesLayout";
import ServicesContentBlock from "@/app/components/services/servicesContentBlock";
import { EXPERT_WITNESS_REPORTS } from "@/Constants/servicesData";
import ExpertWitnessReports from "@/app/components/services/servicesSubPages/ExpertWitnessReports";
import ReferralAction from "@/app/components/common/ReferralAction";
import EnhancedRecoveryAfterSurgery from "@/app/components/services/servicesSubPages/EnhancedRecoveryAfterSurgery";
import DurableMedicalEquipment from "@/app/components/services/servicesSubPages/DurableMedicalEquipment";
import RepairSolutions from "@/app/components/services/servicesSubPages/RepairSolutions";
import MaximumMedicalImprovement from "@/app/components/services/servicesSubPages/MaximumMedicalImprovement";
import PersonalInjuryEvaluation from "@/app/components/services/servicesSubPages/PersonalInjuryEvaluation";
import ExpertMedicalAdvisors from "@/app/components/services/servicesSubPages/ExpertMedicalAdvisors";
import IndependantMedicalEvaluation from "@/app/components/services/servicesSubPages/IndependantMedicalEvaluation";
import HipAndKneeOrthopedic from "@/app/components/services/servicesSubPages/HipAndKneeOrthopedic";
import SpinalOrthopedicSurgeon from "@/app/components/services/servicesSubPages/SpinalOrthopedicSurgeon";
import FootAndAnkleOrthopedic from "@/app/components/services/servicesSubPages/FootAndAnkleOrthopedic";
import EmergencyMedicalCondition from "@/app/components/services/servicesSubPages/EmergencyMedicalCondition";
import KyphoplastyServices from "@/app/components/services/servicesSubPages/KyphoplastyServices";
import ComprehensiveOrthopedicCare from "@/app/components/services/servicesSubPages/ComprehensiveOrthopedicCare";
import DurableMedicalEquipmentSection from "@/app/components/services/durableMedicalSection";
import HandUpperExtremityOrthopedic from "@/app/components/services/servicesSubPages/HandUpperExtremityOrthopedic";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  return (
    <>
      <ServicesLayout selectedLink={slug}>
        {slug === "expert-witness-reports" && <ExpertWitnessReports />}
        {slug === "enhanced-recovery-after-surgery-eras" && (
          <EnhancedRecoveryAfterSurgery />
        )}
        {slug === "durable-medical-equipment-dme" && (
          <DurableMedicalEquipment />
        )}
        {slug === "revitalize-repair-solutions" && <RepairSolutions />}
        {slug === "maximum-medical-improvement-mmi" && (
          <MaximumMedicalImprovement />
        )}
        {slug === "personal-injury-evaluation" && <PersonalInjuryEvaluation />}
        {slug === "expert-medical-advisors" && <ExpertMedicalAdvisors />}
        {slug === "independent-medical-evaluation-ime" && (
          <IndependantMedicalEvaluation />
        )}
        {slug === "hip-and-knee-orthopedic-specialist" && (
          <HipAndKneeOrthopedic />
        )}
        {slug === "spinal-orthopedic-surgeon" && <SpinalOrthopedicSurgeon />}
        {slug === "foot-and-ankle-orthopedic-specialist" && (
          <FootAndAnkleOrthopedic />
        )}
        {slug === "emergency-medical-condition-emc-evaluation" && (
          <EmergencyMedicalCondition />
        )}
        {slug === "hand-and-upper-extremity-orthopedic-surgeon" && (
          <HandUpperExtremityOrthopedic />
        )}
        {slug === "kyphoplasty-services" && <KyphoplastyServices />}
        {slug === "comprehensive-orthopedic-care" && (
          <ComprehensiveOrthopedicCare />
        )}
      </ServicesLayout>
      {slug === "durable-medical-equipment-dme" && (
        <DurableMedicalEquipmentSection />
      )}
      <ReferralAction />
    </>
  );
};

export default ServiceDetailPage;
