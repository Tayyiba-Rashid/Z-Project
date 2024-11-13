import Page1 from "@/components/01_form";
import Page2 from "@/components/02_form";
import Page3 from "@/components/03_form";
import StartForm from "@/components/form";
import React, { useState } from "react";


const initialData = {
  name: "",
  email: "",
  city: "",
  address: "",
  description: "",
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialData);

  const redirect = () => {
    setCurrentStep(0);
  };

  const handleNextStep = (values, final = false) => {
    const updatedData = { ...formData, ...values };
    setFormData(updatedData);
    console.log("Updated formData", updatedData);

    if (final) {
      setFormData(initialData)
      redirect();
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const pages = [
    <StartForm next={handleNextStep} data={formData} />,
    <Page1 next={handleNextStep} prev={handlePrevStep} data={formData} />,
    <Page2 next={handleNextStep} prev={handlePrevStep} data={formData} />,
    <Page3 next={handleNextStep} prev={handlePrevStep} data={formData} />,
  ];

  return (
    <>
      <div>{pages[currentStep]}</div>
    </>
  );
}
