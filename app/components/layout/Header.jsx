import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block bg-neutral py-4 text-white text-sm font-normal">
        <div className="flex w-full max-w-[1500px] justify-between items-center px-24 mx-auto">
          <p className="">Phone: (954)-633-5454</p>
          <ul className="flex contact-info">
            <li>
              Email:{" "}
              <a href="mailto:info@almaniinstitute.org">
                info@almaniinstitute.org
              </a>
            </li>
            <li className="flex">
              <div className="flex items-center justify-between gap-2">
                <p>Tuesday - Wednesday - Thursday :</p>
                <p>8:00 AM - 3:00 PM</p>
                <p>and by appointment</p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <Image
                src={"/images/fax.svg"}
                width={24}
                height={24}
                alt="fax icon"
              />
              <p>Fax: (954)-678-2916</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-4 text-[#33302B] text-sm font-normal">
        <div className="flex w-full max-w-[1500px] justify-between items-center px-24 gap-0 lg:gap-[57px] min-[1223px]:gap-0 mx-auto">
          <div className="w-[100px] h-[50px]">
            <Image
              src={"/images/Al-Mani-logo.svg"}
              height={50}
              width={100}
              alt={"Al Mani Logo"}
              className="h-full w-full"
            />
          </div>
          <ul className="hidden lg:flex flex-wrap justify-between gap-x-[38px] gap-y-[2px] text-base">
            <li>Home</li>
            <li>About</li>
            <li className="flex justify-between gap-[9px]">
              <p>Services</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
            </li>
            <li className="flex justify-between gap-[9px]">
              <p>Legal Support</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
            </li>
            <li className="flex justify-between gap-[9px]">
              <p>{"Workers' Comp"}</p>
              <Image
                src={"/images/arrow-down-black.svg"}
                alt={"arrow down"}
                height={11}
                width={14}
              />
            </li>
            <li>Senior Living</li>
            <li>Contact Us</li>
          </ul>
          <div className="block lg:hidden h-[20px] w-[30px]">
            <Image
            src={"/images/navbar-icon.svg"}
            alt="navbar icon"
            height={20}
            width={30} 
            className="h-full w-full"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
