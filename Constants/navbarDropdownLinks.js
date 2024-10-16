export const SERVICES_LINKS = [
  { name: "Comprehensive Orthopaedic Care", destination: "/" },
  { name: "Enhanced Recovery After Surgery (ERAS)", destination: "/" },
  { name: "Durable Medical Equipment (DME)", destination: "/" },
  { name: "Revitalize and Repair Solutions", destination: "/" },
  { name: "Maximum Medical Improvement (MMI)", destination: "/" },
  { name: "Hip and Knee Orthopaedic Specialist", destination: "/" },
  { name: "Spinal Orthopaedic Surgeon", destination: "/" },
  { name: "Foot and Ankle Orthopaedic Specialist", destination: "/" },
  { name: "Hand and Upper Extremity Orthopaedic Surgeon", destination: "/" },
  { name: "Kyphoplasty Services", destination: "/" },
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
