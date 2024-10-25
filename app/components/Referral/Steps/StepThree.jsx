import Input from "../../common/Input";

const StepThree = ({ accidentDetails, setAccidentDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccidentDetails({
      ...accidentDetails,
      [name]: value,
    });
};

  return (
    <form className="grid grid-cols-6 md:grid-cols-12 gap-x-4 gap-y-3 w-full items-start">
      <Input
        label="Date of Injury/Accident"
        name="date_of_injury"
        value={accidentDetails.date_of_injury}
        onChange={handleChange}
        required
        type="date"
        className="col-span-6"
      />

      <Input
        label="Time of Injury/Accident"
        name="time"
        value={accidentDetails.time}
        onChange={handleChange}
        type="time"
        className="col-span-6"
      />

      <Input
        label="Location of Injury/Accident"
        name="location"
        value={accidentDetails.location}
        onChange={handleChange}
        className="col-span-12"
      />

      <Input
        label="Circumstances of Injury/Accident"
        name="circumstance"
        value={accidentDetails.circumstance}
        onChange={handleChange}
        className="col-span-12"
      />
    </form>
  );
};

export default StepThree;
