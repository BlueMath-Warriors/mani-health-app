import Image from "next/image";

const List = ({ type, items }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {items.map((item, index) => (
        <div key={`list-item-${index}`} className="flex items-start justify-start gap-4">
            <div className="flex flex-shrink-0 items-center justify-center w-[30px] h-[30px] bg-[#faf4e6] rounded-full">
                <Image
                src={"/images/check-icon.svg"}
                width={16}
                height={16}
                alt="check icon"
                className=""
                />
            </div>
          <div className="flex flex-col items-start justify-center text-left mt-1">
            <p className="font-medium mb-1">{item?.title}</p>
            <p>{item?.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
