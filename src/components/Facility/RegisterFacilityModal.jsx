import React, { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

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
  const {
    formData,
    registerFacilityFormData,
    setRegisterFacilityFormData,
    registerFacilityLastStep,
    setRegisterFacilityLastStep,
  } = useForm();
  // const { formData, setFormData, lastStep, setLastStep } = useForm();
  // console.log(formData)
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    if (registerFacilityLastStep) {
       console.log("Submitting Report Facility data");
        console.log(formData);
        notify("Facility has been successfully registered");
        toast.done('done')
        setRegisterFacilityLastStep(false);
      // try {
      //   // console.log("Submitting Report Facility data");
      //   // console.log(formData);
      //   // notify("Facility has been successfully registered");
      //   // toast.done('done')
      //   // setRegisterFacilityLastStep(false);
      //   toast.promise(resolveAfter3Sec, {
      //     pending: "Please wait ....",
      //     success: "Facility has been successfully registered",
      //     error: "Error failed to register facility! 🤯",
      //   });

      // } catch (error) {
      //   toast.error(error)
      // }
    }
  }, [registerFacilityLastStep, setRegisterFacilityLastStep]);

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
    const newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  const notify = (data) => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Please wait ....",
      success: data,
      error: "Error failed to register facility! 🤯",
    });
  };

  if (!props.visible) return null;

  return (
    <div className="fixed lg:p-40  inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="bg-white lg:my-40 p-2 px-5 lg:px-10 bac rounded-md lg:w-2/3 w-[90vw] h-[98vh] overflow-y-auto ">
        <div>
          <Stepper
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <div className="my-5">{displayStep(currentStep)}</div>
      </div>
    </div>
  );
}
