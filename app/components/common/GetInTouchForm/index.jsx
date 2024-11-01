"use client";
import React, { useState } from "react";
import Button from "../Button";
import { submitContactForm } from "@/app/lib/api";
import { DebounceInput } from "react-debounce-input";
import { validateEmail, validatePhone } from "@/utils";

export const FormInput = ({
  type,
  placeholder,
  value,
  onChange,
  error = false,
  errorText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full sm:w-1/2">
      <DebounceInput
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
        debounceTimeout={750}
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
      {error && (
        <div className="text-[#FF0000] leading-6 mt-2">{errorText}</div>
      )}
    </div>
  );
};

export const TextAreaInput = ({
  placeholder,
  value,
  onChange,
  error = false,
  errorText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <DebounceInput
        element="textarea"
        debounceTimeout={750}
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
      {error && (
        <div className="text-[#FF0000] leading-6 mt-[-22px]">{errorText}</div>
      )}
    </>
  );
};

const GetInTouchForm = ({ contactUsPageFlow = false, showSuccessToast, showFailureToast }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return !(
      formData.first_name.length < 2 ||
      formData.first_name.length > 50 ||
      formData.last_name.length < 2 ||
      formData.last_name.length > 50 ||
      !validateEmail(formData.email) ||
      formData.phone_number.length < 10 ||
      formData.phone_number.length > 12 ||
      validatePhone(formData.phone_number) ||
      formData.message.length < 5
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const result = await submitContactForm(formData);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
      showSuccessToast();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      showFailureToast();
      console.error("Failed to submit contact form:", error);
    }
  };

  return (
    <div
      className={`relative max-w-[520px] md:max-w-[700px] lg:max-w-[950px] flex flex-col flex-grow text-base text-neutral font-normal p-[50px] ${
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
            value={formData.first_name}
            onChange={(e) =>
              handleInputChange({
                target: { name: "first_name", value: e.target.value },
              })
            }
            error={
              (formData.first_name.length < 2 &&
                formData.first_name.length > 0) ||
              formData.first_name.length > 50
            }
            errorText={
              formData.first_name.length > 50
                ? "First Name can be at most 50 characters"
                : "First Name must be at least 2 characters"
            }
          />
          <FormInput
            type="text"
            placeholder="Last Name*"
            value={formData.last_name}
            onChange={(e) =>
              handleInputChange({
                target: { name: "last_name", value: e.target.value },
              })
            }
            error={
              (formData.last_name.length < 2 &&
                formData.last_name.length > 0) ||
              formData.last_name.length > 50
            }
            errorText={
              formData.last_name.length > 50
                ? "Last Name can be at most 50 characters"
                : "Last Name must be at least 2 characters"
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
            error={!validateEmail(formData.email) && formData.email.length > 0}
            errorText={"Invalid Email Address"}
          />
          <FormInput
            type="text"
            placeholder="Phone number*"
            value={formData.phone_number}
            onChange={(e) =>
              handleInputChange({
                target: { name: "phone_number", value: e.target.value },
              })
            }
            error={
              (formData.phone_number.length < 10 ||
                formData.phone_number.length > 12 ||
                validatePhone(formData.phone_number)) &&
              formData.phone_number.length > 0
            }
            errorText={
              validatePhone(formData.phone_number)
                ? "Invalid Phone Number format"
                : formData.phone_number.length < 10
                ? "Phone Number must be at least 10 characters"
                : "Phone Number can be at most 12 characters"
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
            error={formData.message.length < 5 && formData.message.length > 0}
            errorText={"Message must be at least 5 characters"}
          />
        </div>
        <div className="flex justify-center sm:justify-start mt-4">
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
