import Image from "next/image";

const PositionCard = ({
  position,
  title,
  value,
  img,
  handleSelectPosition,
}) => {
  return (
    <div
      className={
        "flex w-full h-full items-center justify-center rounded-2xl border-[5px] p-0 sm:p-2 hover:border-[#ebd296] cursor-pointer transition-all ease-linear duration-300 " +
        (position === value ? "border-[#ebd296]" : "border-transparent")
      }
      onClick={handleSelectPosition}
    >
      {/* Inner Div with Content */}
      <div className="w-full p-2 sm:p-4 md:p-6 rounded-xl flex flex-col gap-1 sm:gap-2 md:gap-4 items-center justify-center bg-[#faf4e6] ">
        <Image src={img} width={257} height={166} alt="Adjuster illustration" />
        <p className="text-[10px] sm:text-sm text-[#2e3e50] font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
};

const StepOne = ({ position, setPosition, showError }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid gap-2 sm:gap-4 grid-cols-2 w-full items-center justify-center">
        <PositionCard
          position={position}
          title={"Adjuster"}
          value={"Adjuster"}
          img={"/illustrations/Adjuster.svg"}
          handleSelectPosition={() => {
            setPosition("Adjuster");
          }}
        />

        <PositionCard
          position={position}
          title={"Employer or Lawyer"}
          value={"Employer_or_Lawyer"}
          img={"/illustrations/Employer_or_Lawyer.svg"}
          handleSelectPosition={() => {
            setPosition("Employer_or_Lawyer");
          }}
        />
      </div>
      {showError && (
        <p className="text-error text-sm mb-5 mt-1 ml-4">
          Role selection is required
        </p>
      )}
    </div>
  );
};

export default StepOne;
