import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex w-full px-4 py-3.5 items-center justify-center font-medium rounded-md focus:outline-none transition-all ease-linear duration-300";

  const variantStyles = {
    primary: "bg-[#ce9100] text-white hover:bg-[#d6a42b] primary-btn-shadow ",
    "primary-outline":
      "border border-[#ce9100] text-[#ce9100] hover:bg-[#ce9100]/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
