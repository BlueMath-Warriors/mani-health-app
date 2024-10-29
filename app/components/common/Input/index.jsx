import { useState } from "react";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "Type here",
  name,
  className,
  required = false,
  disabled = false,
  ...props
}) => {
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (required && !value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(e);

    if (required) {
      if (value) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <div
      className={`flex w-full flex-col items-start justify-center ${className}`}
    >
      {label && (
        <div className="flex items-start gap-1 mb-1">
          <label htmlFor={name} className="text-sm font-medium text-[#2e3e50]">
            {label}
          </label>
          {required && (
            <span className="text-sm mt-0.5 text-error leading-none">*</span>
          )}
        </div>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onBlur={handleBlur}
        className={`flex w-full px-4 py-3.5 items-start bg-[#fafbfb] border rounded outline-none active:outline-none focus:border-[#59d5e0] ${
          error ? "border-red-500" : "border-[#bfc4ca]"
        }`} // Change border color if there's an error
        {...props}
      />
      {error && (
        <p className="text-error text-sm mb-5 mt-1">{`${label} is required`}</p>
      )}
    </div>
  );
};

export default Input;
