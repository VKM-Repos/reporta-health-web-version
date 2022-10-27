import React from 'react'
import {useForm} from "../../../context/StepperContext"
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function ConfirmSubmit(props) {
  const {formData, setFormData } = useForm()
  const handleSetFormData = (data) => {
    setFormData(data)
    props.handleNextStep('next')
  }
    return (
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-bold">Confirm Submission</h2>
            
      <Formik
       onSubmit={values => {
         // same shape as initial values
         const data = {...formData}
         handleSetFormData(data)
         console.log('address form', formData);
       }}
       
     >
       {({ errors, touched, values }) => (
         <Form className="w-full flex flex-col">
           
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
             Submit
            </button>
            </div>
         </Form>
       )}
     </Formik>
        </div>
    )
}