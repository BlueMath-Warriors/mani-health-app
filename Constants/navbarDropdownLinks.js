export const SERVICES_LINKS = [
  { name: "Comprehensive Orthopaedic Care", destination: "/services/comprehensive-orthopedic-care" },
  { name: "Enhanced Recovery After Surgery (ERAS)", destination: "/services/enhanced-recovery-after-surgery-eras" },
  { name: "Durable Medical Equipment (DME)", destination: "/services/durable-medical-equipment-dme" },
  { name: "Revitalize and Repair Solutions", destination: "/services/revitalize-repair-solutions" },
  { name: "Maximum Medical Improvement (MMI)", destination: "/services/maximum-medical-improvement-mmi" },
  { name: "Hip and Knee Orthopaedic Specialist", destination: "/services/hip-and-knee-orthopedic-specialist" },
  { name: "Spinal Orthopaedic Surgeon", destination: "/services/spinal-orthopedic-surgeon" },
  { name: "Foot and Ankle Orthopaedic Specialist", destination: "/services/foot-and-ankle-orthopedic-specialist" },
  { name: "Hand and Upper Extremity Orthopaedic Surgeon", destination: "/services/hand-and-upper-extremity-orthopedic-surgeon" },
  { name: "Kyphoplasty Services", destination: "/services/kyphoplasty-services" },
];

export const LEGAL_SUPPORT_LINKS = [
  {
    name: "Personal Injury Evaluation",
    destination: "/",
  },
  {
    name: "Expert Medical Advisors",
    destination: "/",
  },
  {
    name: "Independent Medical Evaluation (IME)",
    destination: "/",
  },
  {
    name: "Expert Witness Reports",
    destination: "/",
  },
  {
    name: "Emergency Medical Condition (EMC) Evaluation",
    destination: "/",
  },
];

export const WORKERS_COMP_LINKS = [
  { name: "Adjusters", destination: "/" },
  { name: "Lawyers and Attorneys", destination: "/" },
  { name: "Payers", destination: "/" },
];

export const QUICK_LINKS = [
  { name: "Home", destination: "/", hasDropdown: false, },
  { name: "About Us", destination: "/about", hasDropdown: false, },
  { name: "Services", destination: "/services", hasDropdown: true, linksName: SERVICES_LINKS },
  { name: "Legal Support", destination: "/legal-support", hasDropdown: true, linksName: LEGAL_SUPPORT_LINKS  },
  { name: "Workers Comp", destination: "/workers-comp", hasDropdown: true, linksName: WORKERS_COMP_LINKS },
  { name: "Senior Living", destination: "/senior-living", hasDropdown: false, },
  { name: "Contact", destination: "/contact", hasDropdown: false, },
];
