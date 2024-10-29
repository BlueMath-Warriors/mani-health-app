import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  width = "full",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex px-4 py-2 md:py-3.5 text-sm items-center justify-center font-medium rounded-md focus:outline-none transition-all ease-linear duration-300";

  const widthStyles = {
    full: "w-full",
    fit: "w-fit",
  };
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-[#d6a42b] primary-btn-shadow ",
    "primary-outline":
      "border border-primary text-primary hover:bg-primary/10",
    outline: "border border-[#282520] text-[#282520]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles[width]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
