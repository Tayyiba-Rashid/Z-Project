import React from "react";
import { Formik, Field, Form } from "formik";
import Image from "next/image";

export default function StartForm(props) {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      <Form className="h-screen flex items-center justify-center relative px-2">
        <div className="absolute inset-0 z-[-1]  flex items-center justify-center">
          <Image
            src="/zimo-bg.png"
            alt="Background Image"
            width={800}
            height={800}
            className="opacity-100 blur-md"
          />
        </div>
        <div
          className="bg-none flex items-center justify-center border border-gold p-4 rounded-2xl   
        md:w-2/4 w-11/12 md:flex-row flex-col relative lg:h-3/5 h-2/4"
        >
          <div className="w-full h-full justify-evenly item-center lg:px-16 flex-col flex p-6 ">
            <div className="w-full flex flex-col items-center justify-center">
              <Image
                src="/careerzimo.png"
                width={200}
                height={200}
                alt="Logo"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-lg tracking-widest text-center">START YOUR APPLICATION</h1>
            </div>
          </div>
          <div className="absolute md:bottom-4 md:-right-24 -bottom-32 p-4">
            <button
              type="submit"
              className="bg-black text-white rounded-3xl py-12 px-10"
            >
              Start
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
