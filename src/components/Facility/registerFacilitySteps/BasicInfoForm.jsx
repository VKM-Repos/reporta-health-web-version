import React, { useContext } from 'react'
import {stepperContext} from "@context/StepperContext"
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from "@components/Input/Input"

export default function BasicInfoForm() {
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

            <label className="mb-3 mt-5">Facility name</label>
           <Field 
            type="text" 
            name="hospitalName"
            placeholder="John Doe Hospital"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="name" component="div" />

           <label className="mb-3 mt-4">Facility type</label>
           <Field 
            type="text" 
            name="type"
            placeholder="Hospital/Clinic"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="type" component="div" />

           <label className="mb-3 mt-4">Country</label>
           <Field 
            type="text" 
            name="country"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />

            <label className="mb-3 mt-4">State</label>
           <Field 
            type="text" 
            name="state"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />

            <label className="mb-3 mt-4">LGA</label>
           <Field 
            type="text" 
            name="lga"
            placeholder="John Doe Street"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="lga" component="div" />
           {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
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
    )
}