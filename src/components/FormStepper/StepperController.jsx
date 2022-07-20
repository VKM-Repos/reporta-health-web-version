import React from "react";


export default function StepperController(props) {
  console.log(props.isDisabled)
  return (
    <div className="my-16 grid grid-cols-5 gap-5 ">
      <button
        onClick={props.onClose}
        className=" text-primary tracking-wide leading-loose  text-sm font-normal  py-3 border border-primary rounded-md col-span-2"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={props.isDisabled}
        onClick={() => props.handleClick("next")}
        className="text-white  bg-primary tracking-wide leading-loose text-sm font-normal py-3 border border-primary rounded-md col-span-3"
      >
        {props.currentStep === props.steps.length ? "Submit" : "Proceed"}
      </button>
    </div>
  );
}
