"use client";
import { useState } from "react";
import { TextAreaInput, FormInput } from "../common/GetInTouchForm";
import Button from "../common/Button";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1320px] flex flex-col mt-[90px] w-full px-6">
        <div className="flex flex-col  lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-0 px-4 py-8 text-center lg:text-left">
          <div className="contact-info w-full lg:w-1/2 flex flex-col items-start text-left ">
            <p className="text-4xl font-semibold mb-7 mx-auto lg:mx-0">
              Contact Information
            </p>
            <div className="flex items-center w-full mt-2.5 mb-4 ">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2 text-nowrap">
                Phone Number
              </p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                (954)-633-5454
              </p>
            </div>
            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2 text-nowrap">
                Fax Number
              </p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                (954)-678-2916
              </p>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2 text-nowrap">
                Email Address
              </p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                info@almaniinstitute.org
              </p>
            </div>

            <div className="flex items-center w-full mt-2.5 mb-4">
              <p className="text-[#556b2f] text-lg w-2/5 pr-2 text-nowrap">
                Address
              </p>
              <p className="text-[#403d39] w-3/5 px-2 text-right lg:text-left">
                7710 NW 71st Court, Suite 201 A, Tamarac, FL 65355
              </p>
            </div>
          </div>

          <div className="working-hours lg:border-l-2 border-[#989694] lg:pl-14  w-full lg:w-1/2 flex flex-col items-start ">
            <p className="text-4xl font-semibold mb-7 mx-auto lg:mx-0">
              {" "}
              Working Hours
            </p>
            <p className="mb-4 text-center">
              Since opening our doors, AMHI Pharmacy has been a cornerstone of
              health in our neighborhood.
            </p>

            <div className="flex items-center justify-between w-full mt-2.5 mb-4 text-[#403d39] ">
              <p>Tuesday</p>
              <p className="">8:00 AM - 3:00 PM</p>
            </div>

            <div className="flex items-center justify-between w-full mt-2.5 mb-4 text-[#403d39] ">
              <p>Wednesday</p>
              <p className="">8:00 AM - 3:00 PM</p>
            </div>

            <div className="flex items-center justify-between w-full mt-2.5 mb-4 text-[#403d39] ">
              <p>Thursday</p>
              <p className="">8:00 AM - 3:00 PM</p>
            </div>

            <div className="flex items-center justify-between w-full mt-2.5 mb-4 text-[#403d39] ">
              <p>And by appointment</p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col flex-grow text-base text-neutral font-normal p-[50px] `}
        >
          <h1 className="text-[25px] lg:text-4xl font-semibold text-center sm:text-start mb-14 mt-4">
            Get In Touch With Us
          </h1>
          <form className="w-full" onSubmit={() => {}}>
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
        {/* Google Map Section */}
        {/* <div className="mt-14 w-full">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={15}
              center={defaultCenter}
            >
              <Marker position={defaultCenter} />
            </GoogleMap>
          </LoadScript>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
