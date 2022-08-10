import React, { createContext, useState, useEffect } from "react";

import StepperController from "@components/FormStepper/StepperController";
import Stepper from "@components/FormStepper/Stepper";

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import registerFacilityFormModel from "@hooks/formValidations/registerFacilityFormValidation/registerFacilityFormModel";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";

import BasicInfoFrom from "@components/Facility/registerFacilitySteps/BasicInfoForm";
import AddressForm from "@components/Facility/registerFacilitySteps/AddressForm";
import OwnerShipForm from "@components/Facility/registerFacilitySteps/OwnerShipForm";
import OperationForm from "@components/Facility/registerFacilitySteps/OperationForm";
import { useForm } from "../../context/StepperContext";
import { set } from "lodash";

export default function RegisterFacility(props) {
  const { formData, setFormData, lastStep, setLastStep } = useForm();

  useEffect(() => {
    if (lastStep) {
      console.log("Submitting Facility data");
      setLastStep(false);
    }
  }, [lastStep, setLastStep]);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Basic information",
    "Basic information",
    "Basic information",
    "Basic information",
  ];
  const { formField } = registerFacilityFormModel;

  function displayStep(step) {
    switch (step) {
      case 1:
        return (
          <BasicInfoFrom
            // formData={formData}
            // handleSetFormData={handleSetFormData}
            formField={formField}
            handleNextStep={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
          />
        );
      case 2:
        return (
          <AddressForm
            formField={formField}
            handleNextStep={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
          />
        );
      case 3:
        return (
          <OwnerShipForm
            formField={formField}
            handleNextStep={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
          />
        );
      case 4:
        return (
          <OperationForm
            formField={formField}
            handleNextStep={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  }

  function handleClick(direction) {
    console.log(direction);
    const newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  if (!props.visible) return null;

  return (
    <div className="fixed lg:p-40  inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white lg:my-40 p-2 px-5 lg:px-20 bac rounded-md lg:w-1/2 w-[90vw] h-[98vh] overflow-y-auto ">
        <div>
          <Stepper
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <div className="my-5">
          {currentStep > 4 ? <h1>Success!</h1> : displayStep(currentStep)}
        </div>
      </div>
    </div>
  );
}
