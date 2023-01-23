import React, { useState, useEffect } from "react";
import { stepperContext } from "@context/StepperContext";
import { ToastContainer, toast } from "react-toastify";

// import Input from "@components/Input/input"
import StepperController from "@components/FormStepper/StepperController";
import Stepper from "@components/FormStepper/Stepper";

import FacilityInfoForm from "./ReportFacilitySteps/FacilityInfoForm";
import ComplaintsForm from "./ReportFacilitySteps/ComplaintsForm";

import reportFacilityFormModel from "@hooks/formValidations/reportFacilityFormValidation/reportFacilityFormModel";
import { useForm } from "../../context/StepperContext";

export default function ReportFacility(props) {
  const {
    reportFacilityFormData,
    setReportFacilityFormData,
    reportFacilityLastStep,
    setReportFacilityLastStep,
  } = useForm();
  const [currentStep, setCurrentStep] = useState(2);
  const [facilityData, setFacilityData] = useState("");
  const [addressData, setAddressData] = useState([]);
  useEffect(() => {
    if (reportFacilityLastStep) {
      console.log("Submitting Report Facility data");
      console.log(reportFacilityFormData);
      // notify("facility has been reported")
      // toast.success('Facility has been reported', {
      //   icon: "🚀"
      // })
      setReportFacilityLastStep(false);
    }
  }, [reportFacilityLastStep, setReportFacilityLastStep]);
  const { formField } = reportFacilityFormModel;
  const steps = ["Facility information", "Complaints about information"];

  function displayStep(step) {
    switch (step) {
      case 1:
        return (
          <FacilityInfoForm
            formField={formField}
            handleNextStep={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
            facility={props.facility}
          />
        );
      case 2:
        return (
          <ComplaintsForm
            formField={formField}
            handleNextStep={handleClick}
            currentStep={currentStep}
            steps={steps}
            onClose={props.onClose}
            onSubmitClose={props.onSubmitClose}
            facility={props.facility}
          />
        );
      default:
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
      pending: "Please wait .....",
      success: {
        render({ data }) {
          return "Facility has been registered";
        },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#242F9B"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path>
          </svg>
        ),
      },
      error: "Promise rejected 🤯",
    });
  };

  if (!props.visible) return null;

  return (
    <div className="fixed top-0 w-full h-full bg-black  flex justify-center items-center">
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
        progressStyle={{ backgroundColor: "#242F9B", color: "#242F9B" }}
      />
      <div className=" bg-white px-5 lg:px-10 rounded-md  w-[90vw] h-[78vh] max-h-[85vh]">
        <div className="fixed w-[370px] xl:w-[370px] bg-white py-2 ">
          <Stepper
            handleClick={handleClick}
            steps={steps}
            currentStep={currentStep}
          />
        </div>

        <div className="my-5 pt-16">{displayStep(currentStep)}</div>
      </div>
    </div>
  );
}
