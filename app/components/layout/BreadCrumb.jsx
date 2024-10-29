"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const pathname = usePathname();

  // Split the pathname into parts and remove any empty strings
  const pathParts = pathname.split("/").filter(Boolean);

  // If there are no parts (i.e., it's the base path), don't render the breadcrumb
  if (
    pathParts.length === 0 ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-of-use"
  ) {
    return null;
  }

  // Get the last part of the path
  const pageTitle = decodeURIComponent(
    pathParts[pathParts.length - 1].replace(/-/g, " ")
  );

  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: "url(/images/bannerimage.png)" }}
    >
      <div className="flex flex-col bg-opacity-30 bradcrumb-gradient">
        <div className="flex justify-start items-center bradcrumb-bg w-full">
          <h2 className="text-white text-2xl tablet:text-3xl  mid:text-[41px] font-medium pl-6 mid:pl-28 capitalize mid:mt-14 py-7 mid:py-20">
            {pageTitle}
          </h2>
        </div>
        <div className="flex  items-center breadcrumb-content pl-6 mid:pl-28 min-h-[50px] py-1.5 mid:py-2.5">
          <div className="flex items-center flex-wrap gap-x-2">
            <div className="flex gap-2 cursor-pointer text-primary hover:text-secondary">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/home-icon.svg"
                    alt="Home icon"
                    width={18}
                    height={16}
                    className="mb-1"
                  />
                  <p className="text-sm mid:text-base capitalize">Home</p>
                </div>
              </Link>
            </div>

            {/* Breadcrumb Links */}
            {pathParts.map((part, index) => {
              const isLast = index === pathParts.length - 1;
              return (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#ce9100] font-medium text-2xl">
                    {">"}
                  </span>
                  {isLast ? (
                    <p className="text-[#403d39] text-sm mid:text-base capitalize">
                      {decodeURIComponent(part.replace(/-/g, " "))}
                    </p>
                  ) : (
                    <Link href={`/${pathParts.slice(0, index + 1).join("/")}`}>
                      <p className="text-[#ce9100] hover:text-[#556b2f] text-sm mid:text-base capitalize cursor-pointer">
                        {decodeURIComponent(part.replace(/-/g, " "))}
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
