import React, {useContext} from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from 'yup';

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import {useForm} from "../../../context/StepperContext"

export default function AddressForm(props) {
  const {formData, setFormData } = useForm()
  const currentValidationSchema = validationSchema[2]
  const handleSetFormData = (data) => {
    setFormData(data)
    props.handleNextStep('next')
  }

  console.log(currentValidationSchema)
    const {
      formField: {
        ownership,
        facilityLevel,
        operationHours,
        licenceStatus,
        registrationStatus,
        premisesStatus
      }
    } = props;

    console.log(props.formField)
    return (
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-bold">Basic information</h2>
            
      <Formik
       initialValues={{
        ownership: formData.ownership,
        level: formData.facilityLevel,
        operationHours: formData.operationHours,
        licenceStatus: formData.licenceStatus,
        registrationStatus: formData.registrationStatus,
        premisesStatus: formData.premisesStatu
       }}
       validationSchema={currentValidationSchema}
       onSubmit={values => {
         // same shape as initial values
         const data = {...formData, ...values}
         handleSetFormData(data)
         console.log('ownership form', formData);
       }}
     >
       {({ errors, touched }) => (
         <Form className="w-full flex flex-col">
           <label className="mb-3 mt-5">{ownership.label}</label>
            <Field 
            type="text" 
            name={ownership.name}
            placeholder={ownership.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.ownership ? 'border border-danger' : ''}`}
            />
           {/* {errors.ownership && touched.ownership ? (
             <div classownership="text-danger">{errors.ownership}</div>
           ) : null} */}
           {errors.ownership && touched.ownership ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.ownership}
          </div>
        ) : null}

           <label className="mb-3 mt-4">{facilityLevel.label}</label>
            <Field 
            type="text" 
            name={facilityLevel.name}
            placeholder={facilityLevel.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.level ? 'border border-danger' : ''}`}
            />

           {errors.level && touched.level ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.level}
          </div>
        ) : null}
           <label className="mb-3 mt-4">{operationHours.label}</label>
            <Field 
            type="text" 
            name={operationHours.name}
            placeholder={operationHours.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.operationHours ? 'border border-danger' : ''}`}
            />

           {errors.operationHours && touched.operationHours ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.operationHours}
          </div>
         
        ) : null}
             {console.log(errors)}
           <label className="mb-3 mt-4">{licenceStatus.label}</label>
            <Field 
            type="text" 
            name={licenceStatus.name}
            placeholder={licenceStatus.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.licenceStatus ? 'border border-danger' : ''}`}
            />
            {errors.licenceStatus && touched.licenceStatus ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.licenceStatus}
          </div>
        ) : null}

            <label className="mb-3 mt-4">{registrationStatus.label}</label>
            <Field 
            type="text" 
            name={registrationStatus.name}
            placeholder={registrationStatus.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.registrationStatus ? 'border border-danger' : ''}`}
            />
            {errors.registrationStatus && touched.registrationStatus ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.registrationStatus}
          </div>
        ) : null}

            <label className="mb-3 mt-4">{premisesStatus.label}</label>
            <Field 
            type="text" 
            name={premisesStatus.name}
            placeholder={premisesStatus.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.premisesStatus ? 'border border-danger' : ''}`}
            />
            {errors.premisesStatus && touched.premisesStatus ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.premisesStatus}
          </div>
        ) : null}
            <div className="my-16 grid grid-cols-5 gap-5 ">
            <button
              onClick={props.onClose}
              className=" text-primary tracking-wide leading-loose  text-sm font-normal  py-3 border border-primary rounded-md col-span-2"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="text-white  bg-primary tracking-wide leading-loose text-sm font-normal py-3 border border-primary rounded-md col-span-3"
            >
              {props.currentStep === props.steps.length ? "Submit" : "Proceed"}
            </button>
            </div>
         </Form>
       )}
     </Formik>
        </div>
    )
}