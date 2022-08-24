import React, { useState, useEffect } from "react";
import { stepperContext } from "@context/StepperContext";
import { ToastContainer, toast } from 'react-toastify';

// import Input from "@components/Input/input"
import StepperController from "@components/FormStepper/StepperController";
import Stepper from "@components/FormStepper/Stepper";

import FacilityInfoForm from "./ReportFacilitySteps/FacilityInfoForm";
import ComplaintsForm from "./ReportFacilitySteps/ComplaintsForm";

import reportFacilityFormModel from '@hooks/formValidations/reportFacilityFormValidation/reportFacilityFormModel'
import {useForm} from "../../context/StepperContext"


export default function ReportFacility(props) {
  const {reportFacilityFormData, setReportFacilityFormData, reportFacilityLastStep, setReportFacilityLastStep  } = useForm()
  const [currentStep, setCurrentStep] = useState(1);
  const [facilityData, setFacilityData] = useState("");
  const [addressData, setAddressData] = useState([]);
  useEffect(() => {
    if (reportFacilityLastStep) {
      console.log("Submitting Report Facility data");
      console.log(reportFacilityFormData)
      notify("facility has been reported")
      setReportFacilityLastStep(false);
    }
  }, [reportFacilityLastStep, setReportFacilityLastStep]);
  const {formField } = reportFacilityFormModel;
  const steps = ["Facility information", "Complaints about information"];

  function displayStep(step) {
    switch (step) {
      case 1:
        return <FacilityInfoForm 
                  formField={formField}
                  handleNextStep={handleClick}
                  currentStep={currentStep}
                  steps={steps}
                  onClose={props.onClose}
                  />;
      case 2:
        return <ComplaintsForm 
                  formField={formField}
                  handleNextStep={handleClick}
                  currentStep={currentStep}
                  steps={steps}
                  onClose={props.onClose}
                  />;
      default:
    }
  }

  function handleClick(direction) {
    const newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  const notify = (data) => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
              pending: 'Promise is pending',
              success: data,
              error: 'Promise rejected 🤯'
            }
        )
    }

  if (!props.visible) return null;

  return (
    <div className="fixed top-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
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
      <div className="bg-white py-4 px-5 lg:px-10 rounded-md lg:w-2/5 w-[90vw] h-[80vh] overflow-y-auto ">
        <div>
          <Stepper
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <div className="my-5">
          
            {displayStep(currentStep)}
        </div>
      </div>
    </div>
  );
}
