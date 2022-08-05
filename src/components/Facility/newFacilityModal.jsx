// App.js
import React, { createContext, useState } from "react";
import NewStepper from '@components/FormStepper/NewStepper'

export const FormContext = createContext();


function App(props) {
    const [activeStepIndex, setActiveStepIndex] = useState(0)
    if(!props.visible) return null
  return (
    <FormContext.Provider value={{ activeStepIndex }}>
    <div className="fixed lg:p-40  inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
    <div className="bg-white lg:my-40 p-2 px-5 lg:px-20 rounded-md lg:w-1/2 w-[90vw] h-[98vh] overflow-y-auto ">
        <NewStepper />
    </div>
    </div>
    
    </FormContext.Provider>
  );
}

export default App;
