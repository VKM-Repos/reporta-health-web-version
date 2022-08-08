// Stepper.js
import React, { useContext, useEffect } from "react";
import {FormContext} from '../Facility/newFacilityModal'
function NewStepper() {
    const activeStepIndex  = useContext(FormContext);
    console.log(activeStepIndex)
    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-item");
        stepperItems.forEach((step, i) => {
          if (i <= activeStepIndex) {
            step.classList.add("bg-indigo-500", "text-white");
          } else {
            step.classList.remove("bg-indigo-500", "text-white");
          }
        });
      }, [activeStepIndex]);
  return (
    <div className="flex justify-center items-center">
        <div className="flex-1">djdj</div>
        <div className=" flex-1 flex flex-row items-center justify-center  py-16">
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        1
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        2
      </div>
      <div className="flex-auto border-t-2"></div>
      <div className="stepper-item w-8 h-8 text-center font-medium border-2 rounded-full">
        3
      </div>
    </div>
    </div>
  );
}

export default NewStepper;
