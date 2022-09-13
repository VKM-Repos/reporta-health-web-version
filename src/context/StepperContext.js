import {createContext, useState, useContext} from "react"
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import reportFacilityFormInitialValues from "@hooks/formValidations/reportFacilityFormValidation/formInitialValues";

export const FormContext = createContext({
    formData: undefined,
    setFormData: async (formData)=> null,
    reportFacilityFormData: undefined,
    setReportFacilityFormData: async (reportFacilityFormData)=> null,
    reportFacilityLastStep: false,
    setReportFacilityLastStep:async(reportFacilityLastStep)=> null,
    lastStep: false,
    setLastStep: async (lastStep)=> null,
    seachFacilityQuery: undefined,
    setSeachFacilityQuery: async (seachFacilityQuery) => null,
});
export const useForm = () => useContext(FormContext)
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(formInitialValues);
    const [lastStep, setLastStep] = useState(false)
    const [reportFacilityLastStep, setReportFacilityLastStep] = useState(false)
    const [reportFacilityFormData, setReportFacilityFormData] = useState(reportFacilityFormInitialValues)
    const [seachFacilityQuery,setSeachFacilityQuery] = useState("")
  
    return <FormContext.Provider value={{ formData, setFormData, reportFacilityFormData, setReportFacilityFormData, reportFacilityLastStep, setReportFacilityLastStep, lastStep, setLastStep, seachFacilityQuery,setSeachFacilityQuery }}>{children}</FormContext.Provider>
  }