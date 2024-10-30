const StepsTracker = ({ currentStep }) => {
  const steps = Array.from({ length: 6 }, (_, index) => index);

  const progressWidth = `${(currentStep / (steps.length - 1)) * 100}%`;

  return (
    <div className="w-full px-2">
      <ol className="flex relative items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base my-4 md:mb-16 md:mt-0 overflow-hidden">
        {/* Line behind steps */}
        <div className="z-0 absolute w-full h-[3px] bg-black" />
        {/* Progress Line */}
        <div
          className="z-10 left-0 absolute h-[3px] bg-[#59d5e0]"
          style={{ width: progressWidth }}
        />
        {steps.map((step) => (
          <li key={step}>
            <span className="relative z-20 flex items-center justify-center border-white border-4 sm:border-8 rounded-full ">
              <span
                className={
                  "flex items-center justify-center bg-white border-[3px] rounded-full w-6 h-6 sm:w-8 sm:h-8 md:h-11 md:w-11 " +
                  (step < currentStep
                    ? "border-[#59d5e0] text-[#59d5e0]"
                    : "border-[#A3AAB2] text-dark")
                }
              >
                <p className="text-sm sm:text-base lg:text-xl">{step + 1}</p>
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepsTracker;
