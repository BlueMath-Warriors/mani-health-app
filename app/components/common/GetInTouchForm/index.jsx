"use client";
import React, { useState } from "react";
import Button from "../Button";

const FormInput = ({ type, placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full sm:w-1/2">
      <input
        id={placeholder}
        type={type}
        placeholder=" "
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (!value) {
            setIsFocused(false);
          }
        }}
        onChange={onChange}
        className={`border border-[#DEE2E6] rounded-md text-[15px] w-full px-3 py-4 transition-all duration-300 ${
          isFocused || value ? "pt-[22px] pb-[10px]" : "pt-4"
        }`}
        required
      />
      <label
        htmlFor={placeholder}
        className={`absolute left-4 top-4 text-neutral transition-all duration-300 ${
          isFocused || value ? "text-xs top-[7px]" : "text-base"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

const TextAreaInput = ({ placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <textarea
        name="message"
        id="message"
        placeholder=" "
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          if (!value) {
            setIsFocused(false);
          }
        }}
        onChange={onChange}
        className={`w-full h-[150px] rounded-md text-[15px] border border-[#DEE2E6] px-3 py-4 mb-6 transition-all duration-300 ${
          isFocused || value ? "pt-[22px] pb-[10px]" : "pt-4"
        }`}
        required
      />
      <label
        htmlFor="message"
        className={`absolute left-4 top-4 transition-all text-neutral duration-300 ${
          isFocused || value ? "text-xs top-[7px]" : "text-base"
        }`}
      >
        {placeholder}
      </label>
    </>
  );
};

const GetInTouchForm = ({ contactUsPageFlow = false }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /*TODO: Add submit functionality */
    }
  };

  return (
    <div
      className={`max-w-[520px] md:max-w-[700px] lg:max-w-[950px] flex flex-col flex-grow text-base text-neutral font-normal p-[50px] ${
        contactUsPageFlow ? "bg-[#FBFBFB]" : "bg-white"
      }`}
    >
      <h1 className="text-[25px] lg:text-4xl font-semibold text-center sm:text-start mb-14 mt-4">
        Get In Touch With Us
      </h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between gap-6 w-full mb-6">
          <FormInput
            type="text"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={(e) =>
              handleInputChange({
                target: { name: "firstName", value: e.target.value },
              })
            }
          />
          <FormInput
            type="text"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={(e) =>
              handleInputChange({
                target: { name: "lastName", value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-6 w-full mb-6">
          <FormInput
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={(e) =>
              handleInputChange({
                target: { name: "email", value: e.target.value },
              })
            }
          />
          <FormInput
            type="text"
            placeholder="Phone number*"
            value={formData.phoneNumber}
            onChange={(e) =>
              handleInputChange({
                target: { name: "phoneNumber", value: e.target.value },
              })
            }
          />
        </div>
        <div className="relative w-full">
          <TextAreaInput
            placeholder="Message*"
            value={formData.message}
            onChange={(e) =>
              handleInputChange({
                target: { name: "message", value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex justify-center sm:justify-start">
          <Button
            type="submit"
            variant="primary"
            width="fit"
            className="!text-base"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouchForm;
