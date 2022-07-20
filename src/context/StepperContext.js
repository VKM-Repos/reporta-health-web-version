import {createContext, useState, useContext} from "react"
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";

export const FormContext = createContext({
    formData: undefined,
    setFormData: async (formData)=> null
});
export const useForm = () => useContext(FormContext)
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(formInitialValues);
  
    return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>
  }