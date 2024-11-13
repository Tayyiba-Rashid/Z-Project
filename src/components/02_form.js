
import React from "react";
import Image from "next/image";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Page2(props) {
  const handleSubmit = (values) => {
    props.next(values);
  };

  
  const page2Schema = 
  Yup.object({
      city: Yup
      .string()
      .matches(/^[A-Za-z ]*$/, 'Please enter valid city name')
      .required('City is required'),
      address: Yup
       .string()
       .required('Address is required'),
       })
       

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit} validationSchema={page2Schema}>
       {(formProps) => {
       return(
        <Form className=" relative h-screen flex items-center justify-center relative px-2">
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
                className="text-xl font-medium tracking-widest rounded-md px-2 py-1"
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
          <div className="bg-none flex items-center justify-evenly border border-gold p-4 rounded-2xl lg:w-2/4 w-11/12 flex-col relative lg:h-3/5 h-2/4  ">
          <div className="w-full h-full justify-evenly lg:px-16 flex-col flex p-6">
          <div className="w-full flex items-center justify-center">
              <Image 
              src="/zimo.png" 
              width={200} 
              height={200} 
              alt="Logo" />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <Field
                type="text"
                name="city"
                className="bg-transparent border border-grey text-gray-900 rounded-lg placeholder-black focus:ring-gold focus:border-gold text-center text-lg w-full focus:placeholder-black block p-3 focus:outline-none"
                placeholder="CITY NAME"
              />
              <ErrorMessage
                name="city"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="w-full flex flex-col  items-center justify-center">
              <Field
                as="textarea"
                name="address"
                className="bg-transparent border border-grey text-gray-900 rounded-lg placeholder-black focus:ring-gold focus:border-gold text-lg w-full focus:placeholder-black block p-3 focus:outline-none h-24 resize-none text-center"
                placeholder="YOUR ADDRESS"
                
              />
              <ErrorMessage
                name="address"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
            </div>
            <div className="absolute md:bottom-4 md:-right-20 -bottom-28 p-4">
              <button type="submit" className="bg-black text-white rounded-3xl py-12 px-10">
                NEXT
              </button>
            </div>
          </div>
        </Form>
       )
      }}
   
    </Formik>
  );
}

