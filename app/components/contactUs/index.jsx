"use client";
import { useState, useEffect } from "react";
import { TextAreaInput, FormInput } from "../common/GetInTouchForm";
import Button from "../common/Button";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { submitContactForm } from "@/app/lib/api";
import { validateEmail, validatePhone } from "@/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });

  const mapStyles = {
    height: "400px",
    width: "100%",
    marginBottom: "55px",
    marginTop: "55px",
  };

  const defaultCenter = {
    lat: 26.2124,
    lng: -80.2498,
  };

  const showSuccessToast = () => {
    toast.success("Thank you! Your message has been sent successfully.", {
      autoClose: 3000,
    });
  };
  const showFailureToast = () => {
    toast.error("Error in Submission, Please try again!", {
      autoClose: 3000,
    });
  };

  const locationName =
    "Al Mani Health Institute, 7710 NW 71st Ct Suite 201, Tamarac, FL 33321, United States";

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            locationName
          )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();
        if (data.results[0]) {
          const { lat, lng } = data.results[0].geometry.location;
          setLocation({ lat, lng });
        } else {
          console.error("Location not found");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchCoordinates();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <div className="relative w-full flex justify-center">
      <ToastContainer />
      <div className="max-w-[1320px] flex flex-col mt-[90px] w-full ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-0 px-4 py-8 text-center lg:text-left px-6">
          {/* Contact Information Section */}
          <div className="contact-info w-full lg:w-1/2 flex flex-col items-start text-left ">
            <p className="text-4xl font-semibold mb-7 mx-auto lg:mx-0">
              Contact Information
            </p>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#f4538a] text-lg w-2/5 pr-2">Phone Number</p>
              <a
                href="tel:9546335454"
                className="text-[#403d39] w-3/5 px-2 text-right lg:text-left hover:text-[#59d5e0] transition-colors duration-300"
              >
                (954)-633-5454
              </a>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#f4538a] text-lg w-2/5 pr-2">Fax Number</p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                (954)-678-2916
              </p>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#f4538a] text-lg w-2/5 pr-2">Email Address</p>
              <a
                href="mailto:info@almaniinstitute.org"
                className="text-[#403d39] w-3/5 px-2 text-right lg:text-left hover:text-[#59d5e0] transition-colors duration-300"
              >
                info@almaniinstitute.org
              </a>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#f4538a] text-lg w-2/5 pr-2">Address</p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                7710 NW 71st Court, Suite 201 A, Tamarac, FL 65355
              </p>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="working-hours lg:border-l-2 border-[#989694] lg:pl-14 w-full lg:w-1/2 flex flex-col items-start">
            <p className="text-4xl font-semibold mb-7 mx-auto lg:mx-0">
              Working Hours
            </p>
            <p className="mb-4 text-center">
              Since opening our doors, AMHI Pharmacy has been a cornerstone of
              health in our neighborhood.
            </p>
            {["Tuesday", "Wednesday", "Thursday"].map((day) => (
              <div
                key={day}
                className="flex items-center justify-between w-full mt-2.5 mb-4 text-[#403d39]"
              >
                <p>{day}</p>
                <p>8:00 AM - 3:00 PM</p>
              </div>
            ))}
            <div className="flex items-center justify-between w-full mt-2.5 mb-4 text-[#403d39]">
              <p>And by appointment</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col text-base font-normal w-full bg-[#fbfbfb] px-6 rounded-xl">
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
                error={
                  !validateEmail(formData.email) && formData.email.length > 0
                }
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
                error={
                  formData.message.length < 5 && formData.message.length > 0
                }
                errorText={"Message must be at least 5 characters"}
              />
            </div>
            <div className="flex justify-center sm:justify-start mt-6">
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

        {/* Google Map Section */}
        <div className="mt-14 w-full">
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={15}
              center={location}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
