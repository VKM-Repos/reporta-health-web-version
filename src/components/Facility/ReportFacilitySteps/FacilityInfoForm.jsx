import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineWarning } from "react-icons/ai";

import validationSchema from "@hooks/formValidations/reportFacilityFormValidation/validationSchema";

import {useForm} from "../../../context/StepperContext"

export default function FacilityInfoForm(props) {

  const currentValidationSchema = validationSchema[0]

  const {reportFacilityFormData, setReportFacilityFormData } = useForm()
  console.log(reportFacilityFormData);
  const handleSetFormData = (data) => {
    setReportFacilityFormData(data)
    props.handleNextStep('next')
  }
  console.log(currentValidationSchema)
  const {
    formField: {
      facilityName,
      facilityType,
      facilityAddress,
    }
  } = props;
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-xl font-bold">Facility information</h2>
      <Formik
        initialValues={{ 
          facility_name: reportFacilityFormData.facility_name,
          facility_category: reportFacilityFormData.facility_category, 
          location: reportFacilityFormData.location,
        }}
        validationSchema={currentValidationSchema}
        onSubmit={values => {
          const data = {...reportFacilityFormData, ...values}
          handleSetFormData(data)
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full flex flex-col">
            <label className="mb-3 mt-5">{facilityName.label}</label>
            <Field
              type="text"
              name={facilityName.name}
              placeholder="John Doe Hospital"
              className="px-4 py-4 bg-gray outline-none rounded-md"
            />
            {errors.facilityName && touched.facilityName ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.facilityName}
          </div>
        ) : null}

            <label className="mb-3 mt-4">{facilityType.label}</label>
            <Field
              type="text"
              name={facilityType.name}
              placeholder="Hospital/Clinic"
              className="px-4 py-4 bg-gray outline-none rounded-md"
            />
            {errors.facilityType && touched.facilityType ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.facilityType}
          </div>
        ) : null}

            <label className="mb-3 mt-4">{facilityAddress.label}</label>
            <Field
              type="text"
              name={facilityAddress.name}
              placeholder="Hospital/Clinic"
              className="px-4 py-4 bg-gray outline-none rounded-md"
            />
             {errors.facilityAddress && touched.facilityAddress ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.facilityAddress}
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

      {/* <form className="w-full flex flex-col">
            <label className="mb-3">Facility name</label>
            <Input
            // onChange={handleChange}
            // value={facilityData["hospitalName"] || ""}
            type="text"
            name="hospitalName"
            placeholder="John Doe Hospital"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            
            />
            </form> */}
    </div>
  );
}
