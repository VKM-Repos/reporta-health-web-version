import React, {useContext} from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from 'yup';

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import {useForm} from "../../../context/StepperContext"
export default function BasicInfoForm(props) {
  const {formData, setFormData } = useForm()
  const currentValidationSchema = validationSchema[0]

  const handleSetFormData = (data) => {
    setFormData(data)
    props.handleNextStep('next')
  }
  const {
    formField: {
      hospitalName,
      facilityType,
      country,
      state,
      lga
    }
  } = props;

    return (
        <div >
          <h2 className="text-xl font-bold">Basic information</h2>
          <Formik
       initialValues={{
        name: formData.name,
        type: formData.type,
        country: formData.country,
        state: formData.state,
        lga: formData.lga
       }}
       validationSchema={currentValidationSchema}
       onSubmit={values => {
         // same shape as initial values
         const data = {...formData, ...values}
         handleSetFormData(data)
         console.log(values);
        
        console.log('basic form', formData)
       }}
     >
       {({ errors, touched }) => (
         <Form className="w-full flex flex-col">
           <label className="mb-3 mt-5">{hospitalName.label}</label>
            <Field 
            type="text" 
            name={hospitalName.name}
            placeholder={hospitalName.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.name ? 'border border-danger' : ''}`}
            />
           {/* {errors.name && touched.name ? (
             <div className="text-danger">{errors.name}</div>
           ) : null} */}
           {errors.name && touched.name ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.name}
          </div>
        ) : null}

           <label className="mb-3 mt-4">{facilityType.label}</label>
            <Field 
            type="text" 
            name={facilityType.name}
            placeholder={facilityType.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.type ? 'border border-danger' : ''}`}
            />

           {errors.type && touched.type ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.type}
          </div>
        ) : null}
           <label className="mb-3 mt-4">{country.label}</label>
            <Field 
            type="text" 
            name={country.name}
            placeholder={country.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.country ? 'border border-danger' : ''}`}
            />
           {errors.country && touched.country ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.country}
          </div>
        ) : null}

           <label className="mb-3 mt-4">{state.label}</label>
            <Field 
            type="text" 
            name={state.name}
            placeholder={state.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.state ? 'border border-danger' : ''}`}
            />
            {errors.state && touched.state ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.state}
          </div>
        ) : null}

            <label className="mb-3 mt-4">{lga.label}</label>
            <Field 
            type="text" 
            name={lga.name}
            placeholder={lga.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.lga ? 'border border-danger' : ''}`}
            /> 
            {errors.lga && touched.lga ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.lga}
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