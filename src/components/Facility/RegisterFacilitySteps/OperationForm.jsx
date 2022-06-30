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

            <label className="mb-3 mt-5">Days of operation</label>
           <Field 
            type="text" 
            name="daysOfOperation"
            placeholder="John Doe Hospital"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="onership" component="div" />

           <label className="mb-3 mt-4">Types of service</label>
           <Field 
            type="text" 
            name="typesOfService"
            placeholder="Hospital/Clinic"
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
           <ErrorMessage name="facilityLevel" component="div" />
           <h2 className="text-xl font-bold my-10">Human resource information</h2>
           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3">Medical doctors</label>
                <Field 
                    type="text" 
                    name="medicalDoctors"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3">Dentists</label>
                <Field 
                    type="text" 
                    name="dentists"
                    placeholder="Hospital/Clinic"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">Nurses</label>
                <Field 
                    type="text" 
                    name="nurses"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">Midwives</label>
                <Field 
                    type="text" 
                    name="midwives"
                    placeholder="Hospital/Clinic"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                </div>
           </div>
           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">Junior communicty health extension worker</label>
                <Field 
                    type="text" 
                    name="juniorCommunityHealthExtensionWorker"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">Health information management officers</label>
                <Field 
                    type="text" 
                    name="healthInformationManagementOfficers"
                    placeholder="Hospital/Clinic"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">Community health officer</label>
                <Field 
                    type="text" 
                    name="communityHealthOfficer"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">Env health officer</label>
                <Field 
                    type="text" 
                    name="enviromentHealthOfficer"
                    placeholder="Hospital/Clinic"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">Pharmacy technicians</label>
                <Field 
                    type="text" 
                    name="pharmacyTechnicians"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">Lab scientists</label>
                <Field 
                    type="text" 
                    name="labScientists"
                    placeholder="Hospital/Clinic"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">Pharmacists</label>
                <Field 
                    type="text" 
                    name="phamacists"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">Dental technicians</label>
                <Field 
                    type="text" 
                    name="dentalTechnicians"
                    placeholder="Hospital/Clinic"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                </div>
           </div>

           {/* <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">Community health extension worker</label>
                <Field 
                    type="text" 
                    name="onership"
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                <ErrorMessage name="onership" component="div" />     
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5"></label>
                
                </div>
           </div> */}
           {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
         </Form>
       )}
     </Formik>
        </div>
    )
}