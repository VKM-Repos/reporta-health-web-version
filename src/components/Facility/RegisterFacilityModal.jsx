import React, { useState } from 'react'
import {stepperContext} from "@context/StepperContext"

// import Input from "@components/Input/input"
import StepperController from "@components/FormStepper/StepperController"
import Stepper from "@components/FormStepper/Stepper"

import BasicInfoFrom from "@components/Facility/steps/BasicInfoForm"
import AddressForm from "@components/Facility/steps/AddressForm"
import OwnerShipForm from "@components/Facility/steps/OwnerShipForm"
import OperationForm from "@components/Facility/steps/OperationForm"

export default function registerFacility(props) {
    const [currentStep, setCurrentStep] = useState(1)
    const [facilityData, setFacilityData] = useState('')
    const [addressData, setAddressData] = useState([])
    const steps = [
        "Basic information",
        "Basic information",
        "Basic information",
        "Basic information"
    ]

    function displayStep(step) {
        switch(step) {
            case 1 :
            return <BasicInfoFrom />
            case 2 :
            return <AddressForm />
            case 3 :
            return <OwnerShipForm />
            case 4 :
            return <OperationForm />
        default:
        }
    }

    function handleClick(direction) {
        console.log(direction)
        const newStep = currentStep;

        direction === "next" ? newStep ++ : newStep --
         newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }

    if(!props.visible) return null

    function handleChange(){
        console.log("ONchagegg")
    }

  return (
    <div className="fixed lg:p-40  inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
        <div className="bg-white lg:my-40 p-2 px-5 lg:px-20 rounded-md lg:w-1/2 w-[90vw] h-[98vh] overflow-y-auto ">
            <div>
                <Stepper handleClick={handleClick} steps={steps} currentStep={currentStep} />
            </div>

            <div className="my-5">
                <stepperContext.Provider value={{
                    facilityData,
                    setFacilityData
                }}>
                    {displayStep(currentStep)}
                </stepperContext.Provider>
            </div>
          <div>
                <StepperController 
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
                onClose={props.onClose} />
          </div>
        </div>
    </div>
  )
}
