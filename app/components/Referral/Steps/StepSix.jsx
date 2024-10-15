import Input from "../../common/Input";

const StepSix = ({ adjusterInfo, setAdjusterInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdjusterInfo({
      ...adjusterInfo,
      [name]: value,
    });
  };

  return (
    <form className="grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-3 w-full items-start">
      <Input
        label="Adjuster’s Full Name"
        name="fullName"
        value={adjusterInfo.fullName}
        onChange={handleChange}
        className="col-span-12"
      />

      <Input
        label="Adjuster’s Phone Number"
        name="phoneNumber"
        value={adjusterInfo.phoneNumber}
        onChange={handleChange}
        className="col-span-6"
      />

      <Input
        label="Adjuster’s Email Address"
        name="email"
        value={adjusterInfo.email}
        onChange={handleChange}
        className="col-span-6"
      />
    </form>
  );
};

export default StepSix;
