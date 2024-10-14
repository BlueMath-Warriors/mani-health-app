import { useState } from "react";
import Input from "../../common/Input";

const StepTwo = () => {
  const [formData, setFormData] = useState({
    insuranceCompany: "",
    policyNumber: "",
    claimNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="grid grid-cols-12 gap-x-4 gap-y-3 w-full items-start">
      <Input
        label="Insurance Company"
        name="insuranceCompany"
        value={formData.insuranceCompany}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Policy Number"
        name="policyNumber"
        value={formData.policyNumber}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Claim Number"
        name="claimNumber"
        value={formData.claimNumber}
        onChange={handleChange}
        required
        className="col-span-12"
      />
    </form>
  );
};

export default StepTwo;
