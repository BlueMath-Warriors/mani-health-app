import Input from "../../common/Input";

const StepFive = ({ insuranceInfo, setInsuranceInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsuranceInfo({
      ...insuranceInfo,
      [name]: value,
    });
  };

  return (
    <form className="grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-3 w-full items-start">
      <Input
        label="Insurance Company"
        name="insurance_company"
        value={insuranceInfo.insurance_company}
        onChange={handleChange}
        required
        className="col-span-12"
      />

      <Input
        label="Policy Number"
        name="policy_number"
        value={insuranceInfo.policy_number}
        onChange={handleChange}
        required
        className="col-span-6"
      />

      <Input
        label="Claim Number"
        name="claim_number"
        value={insuranceInfo.claim_number}
        onChange={handleChange}
        required
        className="col-span-6"
      />
    </form>
  );
};

export default StepFive;
