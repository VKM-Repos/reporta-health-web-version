import React, { useContext } from 'react'
import {stepperContext} from "@context/StepperContext"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from "@components/Input/Input"

export default function AddressForm() {
    const [facilityData, setFacilityData] = useContext(stepperContext)
    const handleChange = (event) => {
        const {name, type, value, checked} = event.target
        setFacilityData({
            ...facilityData,
            [name]: value
        })
    }
    return (
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-bold">Basic information</h2>
            <Formik
      initialValues={{ hospitalName: '', hospitalType: '' }}
       validate={values => {
         const errors = {};
         if (!values.hospitalName) {
           errors.hospitalName = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="w-full flex flex-col">

            <label className="mb-3 mt-5">Facility email</label>
           <Field 
            type="email" 
            name="email"
            placeholder="John Doe Hospital"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="email" component="div" />

           <label className="mb-3 mt-4">Council of Nigeria registration number</label>
           <Field 
            type="text" 
            name="CouncilRegistrationNUmber"
            placeholder="Hospital/Clinic"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="CouncilRegistrationNUmber" component="div" />

           <label className="mb-3 mt-4">Facility address</label>
           <Field 
            type="text" 
            name="address"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />

            <label className="mb-3 mt-4">John Doe Street</label>
           <Field 
            type="text" 
            name="state"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
         </Form>
       )}
     </Formik>
        </div>
    )
}