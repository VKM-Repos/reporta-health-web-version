import React, { useContext } from 'react'
import {stepperContext} from "@context/StepperContext"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from "@components/Input/Input"

export default function OwnerShipForm() {
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

            <label className="mb-3 mt-5">Ownership</label>
           <Field 
            type="text" 
            name="onership"
            placeholder="John Doe Hospital"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="onership" component="div" />

           <label className="mb-3 mt-4">Facility level</label>
           <Field 
            type="text" 
            name="level"
            placeholder="Hospital/Clinic"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="facilityLevel" component="div" />

           <label className="mb-3 mt-4">Operational hours</label>
           <Field 
            type="text" 
            name="operationHours"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />

            <label className="mb-3 mt-4">Licence status</label>
           <Field 
            type="text" 
            name="licenceStatus"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
             <label className="mb-3 mt-4">Rgistration status</label>
           <Field 
            type="text" 
            name="licenceStatus"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
             <label className="mb-3 mt-4">Premises status</label>
           <Field 
            type="text" 
            name="licenceStatus"
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