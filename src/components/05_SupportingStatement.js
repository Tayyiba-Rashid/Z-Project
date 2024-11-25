import React from "react";
import { Formik, Field, Form } from "formik";
import Image from "next/image";

export default function SupportingStatement(props) {
  const handleSubmit = (values) => {
    console.log("Supporting Statement values:", values);
    props.next(values); 
    console.log("Supporting Statement values:", values);
  };

  return (
    <>
      <header>
        <div className="z-50 grid md:grid-cols-3 grid-cols-2 w-full px-8">
          <div className="col-span-1 flex items-start justify-start">
            <div className="flex items-start justify-start text-2xl tracking-widest text-black">
              APPLY
            </div>
          </div>
          <div className="col-span-1 flex flex-col md:items-center items-end justify-end mt-8">
            <div className="text-2xl font-light tracking-widest text-right md:text-center">
              YOUR APPLICATION
            </div>
            <div className="flex">
              <div className="text-gold text-2xl font-extrabold mx-2">_____</div>
              <div className="text-gold text-2xl font-extrabold mx-2">_____</div>
              <div className="text-gold text-2xl font-extrabold mx-2">_____</div>
            </div>
            <div className="pt-4 text-xl font-light tracking-widest text-right md:text-center">
              SUPPORTING INFORMATION
            </div>
          </div>
        </div>
      </header>

      <Formik
        initialValues={{
          supportingStatement: props.data?.supportingStatement || "", 
        }}
        onSubmit={handleSubmit}
      >
        {(formProps) => {
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
                  className="text-xl font-medium hover:text-gold tracking-widest rounded-md px-2 py-1 absolute lg:bottom-28 md:bottom-32 sm:bottom-24 bottom-40 xs:bg-red-600"
                  onClick={() => props.prev(formProps.values)} 
                >
                  <div className="flex items-center justify-center ">
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

              <div className="mt-16 flex items-center justify-center p-4 rounded-2xl md:w-8/12 w-11/12 flex-col">
                <div className="text-center text-xs text-black tracking-widest">
                  YOU CAN PROVIDE ADDITIONAL (SUPPORTING) INFORMATION TO HELP US
                  BETTER UNDERSTAND YOU AS A PERSON AND YOUR QUALIFICATIONS/SUITABILITY
                  FOR THE ROLE/PROGRAM/INTERNSHIP. PLEASE PROVIDE US WITH ADDITIONAL
                  DETAILS WHICH YOU BELIEVE WILL SUPPORT YOUR APPLICATION.
                </div>
                <div className="bg-none flex items-center justify-center p-4 rounded-2xl w-full md:flex-row flex-col relative">
                  <div className="w-full h-full justify-evenly lg:px-16 flex-col flex p-6">
                    {/* Description Field */}
                    <div className="flex flex-col items-center justify-center">
                      <Field
                        as="textarea"
                        name="supportingStatement"
                        className="bg-transparent border border-grey text-gray-900 rounded-lg placeholder-grey placeholder:tracking-widest focus:ring-gold focus:border-gold w-full focus:placeholder-gray block p-3 focus:outline-none min-h-80 resize-none text-start"
                        placeholder="Supporting Information"
                        value={formProps.values.supportingStatement}
                      />
                    </div>
                  </div>

                  <div className="md:absolute flex flex-row justify-between md:flex-col md:bottom-1 md:-right-32 lg:-right-24 bottom-32 md:p-4 w-full md:w-44">
                    <button
                      type="button"
                      className="bg-white text-black border border-black rounded-2xl py-12 px-10"
                      onClick={() => props.prev(formProps.values)} 
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="bg-black text-white rounded-2xl md:py-6 md:px-2 md:my-2 py-4 px-6"
                    >
                      <span className="text-center text-sm tracking-widest">
                        ADD <br /> SUPPORTING <br /> STATEMENT
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>

      <footer>
        <div className="bottom-7 z-50 bg-transparent w-full px-8">
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
