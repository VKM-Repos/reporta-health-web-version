import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineWarning } from "react-icons/ai";

import validationSchema from "@hooks/formValidations/reportFacilityFormValidation/validationSchema";

import {useForm} from "../../../context/StepperContext"
import facilityTypes from "@libs/facility-types.json";


export default function FacilityInfoForm(props) {

  const currentValidationSchema = validationSchema[0]

  const {reportFacilityFormData, setReportFacilityFormData } = useForm()
  const handleSetFormData = (data) => {
    setReportFacilityFormData(data)
    props.handleNextStep('next')
  }
  const {
    formField: {
      facilityName,
      facilityType,
      facilityAddress,
    }
  } = props;
  return (
    <div className=" flex flex-col">
      <h2 className="text-xl font-bold">Facility information</h2>
      <Formik
        initialValues={{ 
          facility_name: props.facility.reg_fac_name,
          facility_category: 'Hospital', 
          location: props.facility.street_name || 'N/A',
        }}
        validationSchema={currentValidationSchema}
        onSubmit={values => {
          const data = {...reportFacilityFormData, ...values}
          handleSetFormData(data)
        }}
      >
        {({ errors, touched }) => (
          <Form >
            <div className=" w-full flex flex-col h-80 px-4 overflow-y-auto">
              <label className="mb-3 mt-5">{facilityName.label}</label>
              <Field
                type="text"
                name={facilityName.name}
                placeholder="John Doe Hospital"
                className={`z-40 px-4 py-4 bg-gray outline-none rounded-md ${errors.facility_name ? 'border border-danger' : ''}`}
                disabled={true}
               
              />
              {errors.facility_name && touched.facility_name ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.facility_name}
                </div>
              ) : null}

              <label className="mb-3 mt-4">{facilityType.label}</label>
              <Field
                as="select"
                name={facilityType.name}
                placeholder="Hospital/Clinic"
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.facility_category ? 'border border-danger' : ''}`}
                disabled={true}
              >
                <option value="" className='text-white'>Hospital</option>
                
                
              </Field>
              {errors.facility_category && touched.facility_category ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.facility_category}
                </div>
              ) : null}

              <label className="mb-3 mt-4">{facilityAddress.label}</label>
              <Field
                type="text"
                name={facilityAddress.name}
                placeholder="Hospital/Clinic"
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.location ? 'border border-danger' : ''}`}
                disabled={true}
              />
              {errors.location && touched.location ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.location}
                </div>
              ) : null}
            </div>
         <div className="mt-5 grid grid-cols-5 gap-5 ">
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
  );
}
