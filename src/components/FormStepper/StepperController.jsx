import React from 'react'

import Button from "@components/Button/button"

export default function StepperController(props) {
    return (
        <div className="my-16 grid grid-cols-5 gap-5 ">
            <Button 
                onClick={props.onClose}
                className=" text-primary tracking-wide leading-loose  text-sm font-normal  py-3 border border-primary rounded-md col-span-2" >
                    Cancel
            </Button>

            <Button onClick={()=> props.handleClick("next")} className="text-white  bg-primary tracking-wide leading-loose text-sm font-normal py-3 border border-primary rounded-md col-span-3"  >
                {props.currentStep === props.steps.length  ? "Submit" : "Proceed"}
            </Button>
        </div>
    )
}
