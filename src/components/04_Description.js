import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Description(props) {
  const handleSubmit = (values) => {
    Swal.fire({
      title: "Success!",
      text: "Successfully submitted the form!",
      icon: "success",
      iconColor: "#BE9F56",
      confirmButtonColor: "#000000",
    }).then((result) => {
      if (result.isConfirmed) {
        props.next(values, true);
      }
    });
  };

  const handleStatement = (values) => {
    props.next(values);
  };

  const DescriptionSchema = Yup.object({
    description: Yup.string().required("Description is required"),
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
              <div className="text-gold text-2xl font-extrabold mx-2">
                _____
              </div>
            </div>
          </div>
        </div>
      </header>

      <Formik
        initialValues={{
          description: props.data.description || "",
        }}
        onSubmit={handleSubmit}
        validationSchema={DescriptionSchema}
      >
        {(formProps) => {
          const { errors, touched } = formProps;

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
                  onClick={() => props.prev(formProps.values)}
                >
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
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
                  {/* Description Field */}
                  <div className="flex flex-col items-center justify-center">
                    <Field
                      as="textarea"
                      name="description"
                      className={`bg-transparent border ${
                        errors.description && touched.description
                          ? "border-red-600"
                          : "border-grey"
                      } text-gray-900 rounded-lg placeholder-black placeholder:tracking-widest focus:ring-gold focus:border-gold text-lg w-full focus:placeholder-black block p-3 focus:outline-none min-h-24 resize-none text-center`}
                      placeholder="ENTER DESCRIPTION"
                    />
                  </div>
                  <div className="h-5 text-center">
                    <ErrorMessage
                      name="description"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="absolute flex md:flex-col md:-bottom-2/3 md:-right-24 -bottom-32 justify-between md:justify-center  w-full md:w-32">
                  <button
                    type="button"
                    onClick={handleStatement}
                    className="bg-black text-white rounded-2xl py-2 px-2 my-2 pb-4"
                  >
                    <span className="text-center opacity-50 text-xs">
                      OPTIONAL
                    </span>
                    <br />
                    <span className="text-center text-sm tracking-widest">
                      ADD <br /> SUPPORTING <br /> STATEMENT
                    </span>
                  </button>
                  <button
                    type="submit"
                    className="bg-black text-white rounded-2xl md:py-12 md:px-10 my-2 px-8"
                  >
                    SUBMIT
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
