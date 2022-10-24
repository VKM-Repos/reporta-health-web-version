import { createContext, useState, useContext } from "react";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import reportFacilityFormInitialValues from "@hooks/formValidations/reportFacilityFormValidation/formInitialValues";
import registerFacilityFormInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";

export const FormContext = createContext({
  formData: undefined,
  setFormData: async (formData) => null,
  reportFacilityFormData: undefined,
  setReportFacilityFormData: async (reportFacilityFormData) => null,
  reportFacilityLastStep: false,
  setReportFacilityLastStep: async (reportFacilityLastStep) => null,

  registerFacilityFormData: undefined,
  setRegisterFacilityFormData: async (registerFacilityFormData) => null,
  registerFacilityLastStep: false,
  setRegisterFacilityLastStep: async (registerFacilityLastStep) => null,
  lastStep: false,
  setLastStep: async (lastStep) => null,
});
export const useForm = () => useContext(FormContext);
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(formInitialValues);
  const [lastStep, setLastStep] = useState(false);
  const [reportFacilityLastStep, setReportFacilityLastStep] = useState(false);
  const [reportFacilityFormData, setReportFacilityFormData] = useState(
    reportFacilityFormInitialValues
  );

  const [registerFacilityLastStep, setRegisterFacilityLastStep] =
    useState(false);
  const [registerFacilityFormData, setRegisterFacilityFormData] = useState(
    registerFacilityFormInitialValues
  );

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        reportFacilityFormData,
        setReportFacilityFormData,
        reportFacilityLastStep,
        setReportFacilityLastStep,
        registerFacilityFormData,
        setRegisterFacilityFormData,
        registerFacilityLastStep,
        setRegisterFacilityLastStep,
        lastStep,
        setLastStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
