import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-neutral py-4 text-white text-sm font-normal">
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
  );
};

export default Header;
