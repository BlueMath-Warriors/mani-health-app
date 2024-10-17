import Button from "@/app/components/common/Button";
import Image from "next/image";

const OfferCard = ({ image, title, caption, link = "#" }) => {
  return (
    <div className="flex col-span-1 flex-col w-full max-w-md mid:max-w-[360px] min-w-60 bg-white cursor-pointer custom-transition group ">
      <div
        className="relative h-56 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-[#ce9100]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 flex flex-col items-center text-center mid:text-left offer-card-shadow rounded-b-lg">
        <h3 className="text-2xl text-[#33302b] font-semibold mb-2 group-hover:text-[#CE9100]">
          {title}
        </h3>
        <p className="text-[#666461] text-base font-normal three-lines mb-4">
          {caption}
        </p>
        <Button
          width="fit"
          variant="primary-outline"
          className="!text-base !py-2 !px-4 mid:mr-auto "
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
