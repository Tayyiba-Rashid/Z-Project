import UserInfo from "@/components/02_UserInfo";
import Countries from "@/components/01_Countries";
import React, { useState } from "react";
import UserAddress from "@/components/03_UserAddress";
import Description from "@/components/04_Description";
import SupportingStatement from "@/components/05_SupportingStatement";

const initialData = {
  supportingStatement: "",
  description: "",
  country: "",
  firstName: "",
  lastName: "",
  fatherName: "",
  email: "",
  city: "",
  province: "",
  zip: "",
  address: "",
};

const tabs = {
  country: 0,
  userInfo: 1,
  userAddress: 2,
  description: 3,
  suppStatement: 4
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(tabs.country); 
  const [formData, setFormData] = useState(initialData);

  const redirect = () => {
    setCurrentStep(tabs.country);
  };

  const handleNextStep = (values, final = false) => {
    const updatedData = { ...formData, ...values };
    setFormData(updatedData);
    console.log("Updated formData:", updatedData);
    console.log("Current Step (Before Update):", currentStep);
  
    if (final) {
      setFormData(initialData);
      redirect();
      return;
    }
  
    if (currentStep === tabs.suppStatement) {
      console.log("Transitioning to Description step.");
      setCurrentStep(tabs.description);
    } else {
      setCurrentStep((prev) => prev + 1); 
    }
  
    console.log("Current Step (After Update):", currentStep);
  };
  
  const handlePrevStep = () => {
    if (currentStep === tabs.description) {
      setCurrentStep(tabs.suppStatement); 
    } else {
      setCurrentStep((prev) => prev - 1); 
    }
  };

 
  const pages = [
    <Countries key="start" next={handleNextStep} data={formData} />,
    <UserInfo key="userInfo" next={handleNextStep} prev={handlePrevStep} data={formData} />,
    <UserAddress key="userAddress" next={handleNextStep} prev={handlePrevStep} data={formData} />,
    <Description key="description" next={handleNextStep} prev={handlePrevStep} data={formData} />,
    <SupportingStatement key="supportingStatement" next={handleNextStep} prev={handlePrevStep} data={formData} />,
  ];

  return <div>{pages[currentStep]}</div>;
}
