import React from "react";
import WelcomeSection from "../components/about/welcomeSection";
import ServicesSection from "../components/about/servicesSection";
import HealthAndLawSection from "../components/about/healthAndLawSection";
import ReferralAction from "../components/common/ReferralAction";

const AboutPage = () => {
  return (
    <>
      <WelcomeSection />
      <ServicesSection />
      <HealthAndLawSection />
      <ReferralAction />
    </>
  );
};

export default AboutPage;
