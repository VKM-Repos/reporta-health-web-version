import React, { useState } from "react";
import { stepperContext } from "@context/StepperContext";

// import Input from "@components/Input/input"
import StepperController from "@components/FormStepper/StepperController";
import Stepper from "@components/FormStepper/Stepper";

import FacilityInfoForm from "./ReportFacilitySteps/FacilityInfoForm";
import ComplaintsForm from "./ReportFacilitySteps/ComplaintsForm";

export default function ReportFacility(props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [facilityData, setFacilityData] = useState("");
  const [addressData, setAddressData] = useState([]);
  const steps = ["Facility information", "Complaints about information"];

  function displayStep(step) {
    switch (step) {
      case 1:
        return <FacilityInfoForm />;
      case 2:
        return <ComplaintsForm />;
      default:
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
    <div className="fixed top-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white py-4 px-5 lg:px-10 rounded-md lg:w-2/5 w-[90vw] h-[80vh] overflow-y-auto ">
        <div>
          <Stepper
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <div className="my-5">
          <stepperContext.Provider
            value={{
              facilityData,
              setFacilityData,
            }}
          >
            {displayStep(currentStep)}
          </stepperContext.Provider>
        </div>
        <div>
          <StepperController
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
          />
        </div>
      </div>
    </div>
  );
}
