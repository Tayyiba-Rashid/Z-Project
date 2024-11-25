import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import * as Yup from "yup"; // Import Yup for validation

export default function Countries(props) {
  const countriesList = ["Pakistan", "India", "USA"];
  const [openDropdown, setOpenDropdown] = useState(false);

  // Validation Schema
  const page3Schema = Yup.object({
    country: Yup.string().required("Country is required"),
  });

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleOptionSelect = (option, setFieldValue) => {
    setFieldValue("country", option); 
    setOpenDropdown(false);
  };

  const handleSubmit = (values) => {
    props.next(values); 
  };

  return (
    <>
      <header>
        <div className="fixed top-7 left-7 z-50 bg-transparent">
          <div className="flex items-start justify-start text-2xl tracking-widest text-black">
            APPLY
          </div>
        </div>
      </header>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={page3Schema}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className="h-screen flex items-center justify-center relative px-2">
            <div className="absolute inset-0 z-[-1] flex items-center justify-center">
              <Image
                src="/zimo-bg.png"
                alt="Background Image"
                width={800}
                height={800}
                className="opacity-100 blur-md"
              />
            </div>
            <div className="bg-none flex items-center justify-center border border-gold p-4 rounded-2xl md:w-2/4 w-11/12 md:flex-row flex-col relative lg:h-3/5 h-2/4">
              <div className="w-full h-full justify-evenly item-center lg:px-16 flex-col flex p-6">
                <div className="w-full flex flex-col items-center justify-center">
                  <Image
                    src="/careerzimo.png"
                    width={200}
                    height={200}
                    alt="Logo"
                  />
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="relative w-full md:w-2/3">
                    {/* Dropdown Button */}
                    <button
                      onClick={handleDropdown}
                      type="button"
                      className={`w-full uppercase p-3 rounded-xl tracking-widest text-center leading-tight border-2 text-[16px] bg-white ${
                        errors.country && touched.country
                          ? "border-red-600"
                          : "border-grey"
                      } focus:outline-none focus:border-gold`}
                    >
                      {values.country || "Select Your Country"}
                    </button>

                    {/* Dropdown Options */}
                    {openDropdown && (
                      <ul className="absolute mt-2 w-full bg-white border border-gold rounded-xl shadow-md z-10">
                        {countriesList.map((country, index) => (
                          <li
                            key={index}
                            onClick={() =>
                              handleOptionSelect(country, setFieldValue)
                            }
                            className="p-3 text-black text-[14px] md:text-[16px] hover:bg-gold hover:text-black cursor-pointer"
                          >
                            {country}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute md:bottom-4 md:-right-24 -bottom-32 p-4">
                <button
                  type="submit"
                  className="bg-black text-white rounded-2xl py-12 px-10"
                >
                  Start
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <footer>
        <div className="fixed bottom-7 z-50 bg-transparent w-full px-8">
          <div className="flex items-center justify-between text-2xl tracking-widest text-black">
            <div className="md:block hidden">
              <Image
                src="/zimo-team-black.png"
                alt="zimo team"
                width={300}
                height={300}
              />
            </div>
            <div className="md:hidden block">
              <Image
                src="/zimo-team-black.png"
                alt="zimo team"
                width={100}
                height={100}
              />
            </div>
            <div className="md:block hidden">
              <Image
                src="/zimoInternship.png"
                alt="Background Image"
                width={100}
                height={100}
              />
            </div>
            <div className="md:hidden block">
              <Image
                src="/zimoInternship.png"
                alt="Background Image"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
