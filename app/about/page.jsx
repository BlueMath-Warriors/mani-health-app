import React from "react";
import WelcomeSection from "../components/about/welcomeSection";
import ServicesSection from "../components/about/servicesSection";
import HealthAndLawSection from "../components/about/healthAndLawSection";

const AboutPage = () => {
  return (
    <>
      <WelcomeSection />
      <ServicesSection />
      <HealthAndLawSection />
    </>
  );
};

export default AboutPage;
