import { useState } from "react";
import Input from "../../common/Input";

const StepTwo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    employerName: "",
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
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="col-span-6"
      />

      <Input
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Employer Name"
        name="employerName"
        value={formData.employerName}
        onChange={handleChange}
        className="col-span-6"
      />
    </form>
  );
};

export default StepTwo;
