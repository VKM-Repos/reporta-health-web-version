import React, {useEffect, useState, useRef} from "react"


export default function Stepper(props) {
    const [newStep, setNewStep] = useState([])
    const stepRef = useRef()
    function updateStep(stepNumber, steps) {
        const newSteps = [...steps]
        let count = 1

        while(count < newSteps.length ) {
            if(count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlghted: true,
                    selected: true,
                    completed: true
                }
                count ++
            } else if(count < stepNumber ) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlghted: false,
                    selected: true,
                    completed: true
                }
                count ++
            } else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlghted: false,
                    selected: false,
                    completed: false
                }
                count ++
            }
        }
        return newSteps
    }
  
        useEffect(()=>{
            const stepsState = props.steps.map((step, index)=> 
                Object.assign({}, {
                    description: step,
                    completed: false,
                    highlightrd: index === 0 ? true : false,
                    selected: index === 0 ? true : false
                })
            )
            stepRef.current = stepsState;
            const current = updateStep(props.currentStep -1, stepRef.current)
            setNewStep(current)
        }, [props.steps, props.currentStep])

        const displaySteps = newStep.map((step, index)=> {
            return (
                <div key={index} className= {index !== newStep.length -1 ? "w-full flex items-center" : "flex items-center" }>
                    <div className="relative flex flex-col items-center text-accent">
                    <div className={`rounded-full transition duration-500 ease-in-out border-2 border-accent h-7 w-7 flex items-center justify-center py-3 ${step.selected ? "bg-accent text-white" : ""} `} >
                        {/* Display Number*/}
                        {index + 1}
                    </div>
                    </div>
        
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out">
                    {/*Display line*/}
                    </div>
                </div>
            )
        }) 
    return (
        <div className="flex  items-center justify-between">
            <div className="flex justify-center">
                <button onClick={() => props.handleClick() } className="text-xs lg:text-sm flex gap-1 justify-center items-center" >
                    <svg className="mr-4" width="8" height="14" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M7.49954 14.6L2.06621 9.16669C1.42454 8.52502 1.42454 7.47502 2.06621 6.83336L7.49954 1.40002" stroke="#242F9B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                Back
                </button> </div>




            <div className="py-5 flex lg:w-1/3 w-1/2 justify-between items-center"> 
            {displaySteps}
            </div>
        </div>
        
    )
}
