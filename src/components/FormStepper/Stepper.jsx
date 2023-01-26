import React, { useContext, useEffect, useState, useRef } from "react";

export default function Stepper(props) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  function updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let count = 1;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlghted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlghted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlghted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  }

  useEffect(() => {
    const stepsState = props.steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlightrd: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(props.currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [props.steps, props.currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={`
            
            ${
              index !== newStep.length - 1
                ? "w-full flex items-center"
                : "flex items-center"
            }
        `}
      >
        <div className="flex items-center text-primary">
          <div
            className={`rounded-md transition duration-500 ease-in-out border-2 border-primary w-[1.2rem] aspect-square flex items-center justify-center ${
              step.selected ? "bg-primary text-white" : ""
            } `}
          >
            {/* Display Number*/}
            {index + 1}
          </div>
        </div>

        <div className="flex-auto border-t-2 border-primary transition duration-500 ease-in-out">
          {/*Display line*/}
        </div>
      </div>
    );
  });
  return (
    <div className="w-full mb-4 grid grid-cols-3 gap-10 items-center justify-items-stretch">
      <button
        onClick={() => props.handleClick()}
        className="text-[100%] flex bg-primary/20 border-none rounded-md text-primary py-1 px-2 justify-center items-center justify-self-start lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer"
      >
        <svg
          className="mr-2 w-[9%]"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49954 14.6L2.06621 9.16669C1.42454 8.52502 1.42454 7.47502 2.06621 6.83336L7.49954 1.40002"
            stroke="currentColor"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </button>

      <div className="col-span-2 w-1/3 flex  justify-self-end">
        {displaySteps}
      </div>
    </div>
  );
}
