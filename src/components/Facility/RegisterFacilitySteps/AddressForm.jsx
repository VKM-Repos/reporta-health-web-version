import React, {useContext} from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from 'yup';

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import { values } from 'lodash';
import {useForm} from "../../../context/StepperContext"

export default function AddressForm(props) {
  const {formData, setFormData } = useForm()
  const currentValidationSchema = validationSchema[1]
  const handleSetFormData = (data) => {
    setFormData(data)
    props.handleNextStep('next')
  }
    const {
      formField: {
        email,
        councilRegistrationNumber,
        facilityAddress,
        website
      }
    } = props;
    return (
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-bold">Basic information</h2>
            
      <Formik
       initialValues={{
        email: formData.email,
        councilRegistrationNumber: formData.councilRegistrationNumber,
        address: formData.address,
        website: formData.website,
       }}
       validationSchema={currentValidationSchema}
       onSubmit={values => {
         // same shape as initial values
         const data = {...formData, ...values}
         handleSetFormData(data)
       }}
       
     >
       {({ errors, touched, values }) => (
         <Form className="w-full flex flex-col">
           <label className="mb-3 mt-5">{email.label}</label>
            <Field 
            type="text" 
            name={email.name}
            placeholder={email.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.email ? 'border border-danger' : ''}`}
            />
           {errors.email && touched.email ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.email}
          </div>
        ) : null}

           <label className="mb-3 mt-4">{councilRegistrationNumber.label}</label>
            <Field 
            type="text" 
            name={councilRegistrationNumber.name}
            placeholder={councilRegistrationNumber.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.councilRegistrationNumber ? 'border border-danger' : ''}`}
            />

           {errors.councilRegistrationNumber && touched.councilRegistrationNumber ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.councilRegistrationNumber}
          </div>
        ) : null}
           <label className="mb-3 mt-4">{facilityAddress.label}</label>
            <Field 
            type="text" 
            name={facilityAddress.name}
            placeholder={facilityAddress.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.address ? 'border border-danger' : ''}`}
            />

           {errors.address && touched.address ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.address}
          </div>
         
        ) : null}
           <label className="mb-3 mt-4">{website.label}</label>
            <Field 
            type="text" 
            name={website.name}
            placeholder={website.placeholder}
            className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.website ? 'border border-danger' : ''}`}
            />
            {errors.website && touched.website ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.website}
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