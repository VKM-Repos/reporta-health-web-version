import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineWarning } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import validationSchema from "@hooks/formValidations/reportFacilityFormValidation/validationSchema";

import {useForm} from "../../../context/StepperContext"

export default function FacilityInfoForm(props) {

  const currentValidationSchema = validationSchema[1]

  const {reportFacilityFormData, setReportFacilityFormData, setReportFacilityLastStep } = useForm()
  const handleSetFormData = (data) => {
    setReportFacilityFormData(data)
    setReportFacilityLastStep(true)
    // notify("facility has been reported")
    // console.log(reportFacilityFormData)

  }
  const {
    formField: {
      complaints_factor,
    }
  } = props;
  const [validationError, setValidationError] = useState(false)
  
    const notify = (data) => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
              pending: 'Promise is pending',
              success: data,
              error: 'Promise rejected 🤯'
            }
        )
    }
  return (
    <div className="w-full flex flex-col">
            <ToastContainer 
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

      <h2 className="text-xl font-bold">Facility information</h2>
      <Formik
        initialValues={{ 
          complaints_factor: reportFacilityFormData.complaints_factor,
        }}
        validate={values=> {
          const errors = {}
          if(values.complaints_factor.length <= 0){
            errors.complaints_factor = 'One or more  Complaints box need to be checked'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          for(let i = 0; i < values.complaints_factor.length; i++) {

          }
          const data = {...reportFacilityFormData, ...values}
          handleSetFormData(data)
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="w-full flex flex-col">
           <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Long delay before recieving care
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="1"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Cost of service recieved
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="2"
                  className=" w-6 h-6 rounded-full"
                />
              </label>

            </div>
            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Care recieved was suboptimal
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="3"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Unregistered health facility
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="4"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Poor medical equipment
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="5"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Uncoordinated medical staff
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="6"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Other
                <Field
                  type="checkbox"
                  name="complaints_factor"
                  value="7"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              {errors.complaints_factor ? (
          <div className="flex flex-row items-center text-danger text-sm italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.complaints_factor}
          </div>
        ) : null}
            </div>
           
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
  );
}
