export const TitleAndText = ({ details }) => {
  return (
    <>
      <h2 className="font-medium text-[26px] md:text-[28px] lg:text-[32px] leading-[27px] sm:leading-[32px] md:leading-[38px] mb-1.5 md:mb-2">
        {details.title}
      </h2>
      <p className="leading-[19.2px] mb-4">{details.content}</p>
    </>
  );
};
