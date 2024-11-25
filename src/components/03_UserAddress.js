import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

function UserAddress(props) {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const UserAddressSchema = Yup.object({
    city: Yup.string()
      // .matches(/^[A-Za-z ]*$/, "Please enter valid city name")
      .required("City is required"),
    province: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid province name")
      .required("City is required"),
    zipcode: Yup.string()
      .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid zipcode (e.g., 12345)")
      .required("Zipcode is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <>
      <header>
        <div className="fixed z-50 grid md:grid-cols-3 grid-cols-2 w-full px-8">
          <div className="col-span-1 flex items-start justify-start">
            <div className="flex items-start justify-start text-2xl tracking-widest text-black">
              APPLY
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:items-center items-end justify-end mt-8">
            <div className="text-2xl font-light tracking-widest text-right md:text-center">
              YOUR APPLICATION
            </div>
            <div className="flex ">
              <div className="text-gold text-2xl font-extrabold mx-2">
                _____
              </div>
              <div className="text-gold text-2xl font-extrabold mx-2">
                _____
              </div>
              <div className="text-black text-2xl font-extrabold mx-2">
                _____
              </div>
            </div>
          </div>
          <div className="md:col-span-1"></div>
        </div>
      </header>

      <Formik
        initialValues={{
          city: props.data.city || "",
          province: props.data.province || "",
          zipcode: props.data.zipcode || "",
          address: props.data.address || "",
        }}
        onSubmit={handleSubmit}
        validationSchema={UserAddressSchema}
      >
        {(formProps) => {
          const { values, errors, touched, handleChange, handleBlur } =
            formProps;

          return (
            <Form className="h-screen relative px-2 flex items-center justify-center">
              <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                <Image
                  src="/zimo-bg.png"
                  alt="Background Image"
                  width={800}
                  height={800}
                  className="opacity-100 blur-md"
                />
              </div>

              <div className="absolute z-50 top-11 left-0 flex justify-start ml-4 my-4">
                <button
                  type="button"
                  className="text-xl font-medium hover:text-gold tracking-widest rounded-md px-2 py-1"
                  onClick={() => props.prev(values)}
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                    <span className="text-2xl font-normal">BACK</span>
                  </div>
                </button>
              </div>

              <div className="bg-none flex items-center justify-center p-4 rounded-2xl md:w-5/12 w-11/12 md:flex-row flex-col relative ">
                <div className="w-full h-full justify-evenly lg:px-16 flex-col flex p-6">
                  {/* First Name Field */}
                  <div className="flex flex-col items-center justify-center">
                    <Field
                      type="text"
                      name="city"
                      className={`bg-transparent border ${
                        errors.city && touched.city
                          ? "border-red-600"
                          : "border-grey"
                      } text-gray-900 rounded-lg placeholder-black placeholder:tracking-widest focus:ring-gold focus:border-gold text-center text-lg w-full focus:placeholder-black block p-3 focus:outline-none`}
                      placeholder="ENTER CITY"
                    />
                  </div>
                  <div className="h-5 text-center">
                    <ErrorMessage
                      name="city"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Last Name Field */}
                  <div className="flex flex-col items-center justify-center">
                    <Field
                      type="text"
                      name="province"
                      className={`bg-transparent border ${
                        errors.province && touched.province
                          ? "border-red-600"
                          : "border-grey"
                      } text-gray-900 rounded-lg placeholder-black placeholder:tracking-widest focus:ring-gold focus:border-gold text-center text-lg w-full focus:placeholder-black block p-3 focus:outline-none`}
                      placeholder="ENTER PROVINCE NAME"
                    />
                  </div>
                  <div className="h-5  text-center">
                    <ErrorMessage
                      name="province"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Father's Name Field */}
                  <div className="flex flex-col items-center justify-center">
                    <Field
                      type="text"
                      name="zipcode"
                      className={`bg-transparent border ${
                        errors.zipcode && touched.zipcode
                          ? "border-red-600"
                          : "border-grey"
                      } text-gray-900 rounded-lg placeholder-black placeholder:tracking-widest focus:ring-gold focus:border-gold text-center text-lg w-full focus:placeholder-black block p-3 focus:outline-none`}
                      placeholder="ENTER ZIPCODE"
                    />
                  </div>
                  <div className="h-5  text-center">
                    <ErrorMessage
                      name="zipcode"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col items-center justify-center">
                    <Field
                      type="address"
                      name="address"
                      className={`border ${
                        errors.address && touched.address
                          ? "border-red-600"
                          : "border-grey"
                      } border-grey text-gray-900 rounded-lg placeholder-black focus:ring-gold focus:border-gold text-lg w-full focus:placeholder-black block p-3 focus:outline-none h-24 resize-none text-center bg-transparent"
`}
                      placeholder="ENTER ADDRESS"
                    />
                  </div>
                  <div className="h-5 text-center">
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="absolute md:bottom-4 md:-right-24 -bottom-32 p-4">
                  <button
                    type="submit"
                    className="bg-black text-white rounded-2xl py-12 px-10"
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
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

export default UserAddress;
