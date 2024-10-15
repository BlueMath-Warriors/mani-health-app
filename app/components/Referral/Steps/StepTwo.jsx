import Input from "../../common/Input";

const StepTwo = ({ patientInfo, setPatientInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      [name]: value,
    });
  };

  return (
    <form className="grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-3 w-full items-start">
      <Input
        label="First Name"
        name="fullName"
        value={patientInfo.fullName}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Address"
        name="address"
        value={patientInfo.address}
        onChange={handleChange}
        className="col-span-6"
      />

      <Input
        label="Phone Number"
        name="phone"
        value={patientInfo.phone}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Employer Name"
        name="employerName"
        value={patientInfo.employerName}
        onChange={handleChange}
        className="col-span-6"
      />
    </form>
  );
};

export default StepTwo;
