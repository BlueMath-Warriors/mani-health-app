import Input from "../../common/Input";

const StepSix = ({ adjusterInfo, setAdjusterInfo, position }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdjusterInfo({
      ...adjusterInfo,
      [name]: value,
    });
  };

  const userType = position === "Employer_or_Lawyer" ? "Employer's" : "Adjuster's";

  return (
    <form className="grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-3 w-full items-start">
      <Input
        label={`${userType} Full Name`}
        name="adjuster_full_name"
        value={adjusterInfo.adjuster_full_name}
        onChange={handleChange}
        className="col-span-12"
      />

      <Input
        label={`${userType} Phone Number`}
        name="adjuster_phone_number"
        value={adjusterInfo.adjuster_phone_number}
        onChange={handleChange}
        className="col-span-6"
      />

      <Input
        label={`${userType} Email Address`}
        name="adjuster_email"
        value={adjusterInfo.adjuster_email}
        onChange={handleChange}
        className="col-span-6"
      />
    </form>
  );
};

export default StepSix;
