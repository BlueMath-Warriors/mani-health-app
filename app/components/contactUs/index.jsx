"use client";
import { useState } from "react";
import { TextAreaInput, FormInput } from "../common/GetInTouchForm";
import Button from "../common/Button";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { submitContactForm } from "@/app/lib/api";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 26.2124,
    lng: -80.2498,
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("Apple");
    e.preventDefault();
    try {
      const result = await submitContactForm(formData);
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Failed to submit contact form:", error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1320px] flex flex-col mt-[90px] w-full px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-0 px-4 py-8 text-center lg:text-left">
          {/* Contact Information Section */}
          <div className="contact-info w-full lg:w-1/2 flex flex-col items-start text-left">
            <p className="text-4xl font-semibold mb-7 mx-auto lg:mx-0">
              Contact Information
            </p>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2">Phone Number</p>
              <a
                href="tel:9546335454"
                className="text-[#403d39] w-3/5 px-2 text-right lg:text-left hover:text-[#CE9100] transition-colors duration-300"
              >
                (954)-633-5454
              </a>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2">Fax Number</p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                (954)-678-2916
              </p>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2">Email Address</p>
              <a
                href="mailto:info@almaniinstitute.org"
                className="text-[#403d39] w-3/5 px-2 text-right lg:text-left hover:text-[#CE9100] transition-colors duration-300"
              >
                info@almaniinstitute.org
              </a>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2">Address</p>
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
        <div className="flex flex-col text-base font-normal p-[50px]">
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
                value={formData.phone_number}
                onChange={(e) =>
                  handleInputChange({
                    target: { name: "phone_number", value: e.target.value },
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
        {/* <div className="mt-14 w-full">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
