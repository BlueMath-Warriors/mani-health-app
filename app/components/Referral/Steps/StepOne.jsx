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
        "flex w-full h-full items-center justify-center rounded-2xl border-[5px] p-0 sm:p-2 hover:border-[#ebd296] cursor-pointer " +
        (position === value ? "border-[#ebd296]" : "border-transparent")
      }
      onClick={handleSelectPosition}
    >
      {/* Inner Div with Content */}
      <div className="w-full p-2 sm:p-4 md:p-6 rounded-xl flex flex-col gap-1 sm:gap-2 md:gap-4 items-center justify-center bg-[#faf4e6] ">
        <Image src={img} width={257} height={166} alt="adjuster illustration" />
        <p className="text-[10px] sm:text-sm text-[#2e3e50] font-semibold">
          {title}
        </p>
      </div>
    </div>
  );
};

const StepOne = ({ position, setPosition }) => {
  return (
    <div className="grid gap-2 sm:gap-4 grid-cols-2 w-full items-center justify-center">
      <PositionCard
        position={position}
        title={"Adjuster"}
        value={"adjuster"}
        img={"/illustrations/adjuster.svg"}
        handleSelectPosition={() => {
          setPosition("adjuster");
        }}
      />

      <PositionCard
        position={position}
        title={"Employer or Lawyer"}
        value={"lawyers"}
        img={"/illustrations/lawyers.svg"}
        handleSelectPosition={() => {
          setPosition("lawyers");
        }}
      />
    </div>
  );
};

export default StepOne;
