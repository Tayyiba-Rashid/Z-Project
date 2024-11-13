import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Page3(props) {
  const handleSubmit = (values) => {
    Swal.fire({
      title: "Success!",
      text: "Successfully submitted the form!",
      icon: "success",
      iconColor: "#BE9F56",
      confirmButtonColor: "#000000",
    }).then((result) => {
      if (result.isConfirmed) {
        // If user clicks OK, proceed to the next step or reset form.
        props.next(values, true); // Continue to next step or reset as needed
      }
    });
  };

  const page3Schema = Yup.object({
    description: Yup.string().required("Description is required"),
  });

  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={page3Schema}
      >
        {(formProps) => {
          return (
            <Form className="relative h-screen flex items-center justify-center relative px-2">
              <div className="absolute inset-0 z-[-1]  flex items-center justify-center">
                <Image
                  src="/zimo-bg.png"
                  alt="Background Image"
                  width={800}
                  height={800}
                  className="opacity-100 blur-md"
                />
              </div>
              <div className="absolute top-0 left-0 z-10 flex justify-start ml-4 my-4 ">
                <button
                  type="button"
                  className="text-xl font-medium hover:text-gold tracking-widest rounded-md px-2 py-1"
                  onClick={() => props.prev(formProps.values)}
                >
                  <div className="flex  items-center justify-center">
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
                    BACK
                  </div>
                </button>
              </div>
              <div className="bg-none flex items-center justify-evenly border border-gold p-4 rounded-2xl lg:w-2/4 w-11/12 flex-col relative lg:h-3/5 h-2/4 ">
                <div className="w-full h-full justify-evenly lg:px-16 flex-col flex p-6 ">
                  <div className="w-full flex items-center justify-center">
                    <Image
                      src="/zimo.png"
                      width={200}
                      height={200}
                      alt="Logo"
                    />
                  </div>

                  <div className="w-full flex items-center justify-center ">
                    <div className="w-full flex flex-col items-center justify-center">
                      <Field
                        as="textarea"
                        name="description"
                        className="bg-transparent border border-grey text-gray-900 rounded-lg placeholder-black focus:ring-gold focus:border-gold text-lg w-full focus:placeholder-black block p-3 focus:outline-none h-24 resize-none text-center"
                        placeholder="DESCRIPTION"
                      />
                      <ErrorMessage
                        name="description"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute md:bottom-4 md:-right-20 -bottom-28 p-4 ">
                  <button
                    type="submit"
                    className="bg-black text-white rounded-3xl py-12 px-10"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
