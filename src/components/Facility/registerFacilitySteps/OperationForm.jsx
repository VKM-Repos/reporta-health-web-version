import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from 'yup';

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import {useForm} from "../../../context/StepperContext"
  
export default function OperationForm(props) {
    const {formData, setFormData, setRegisterFacilityLastStep } = useForm()
    const currentValidationSchema = validationSchema[3]

    const handleSetFormData = (data) => {
        setFormData(data)
        console.log(data)
        setRegisterFacilityLastStep(true)
      }

    const {
        formField: {
            operationStatus,
            medicalDoctors,
            dentists,
            nurses,
            midwives,
            communityHealthExtensionWorker,
            communityHealthOfficer,
            enviromentHealthOfficer,
            pharmacyTechnicians,
            labScientists,
            phamacists,
            dentalTechnicians
        }
      } = props;

    return (
        <div className="w-full flex flex-col">
            <h2 className="text-xl font-bold">Basic information</h2>
            <Formik
                initialValues={{
                    hs_op_status: formData.hs_op_status,
                    hs_no_doctors: formData.hs_no_doctors,
                    hs_no_dentist: formData.hs_no_dentist,
                    hs_no_single_qualified_nurses: formData.hs_no_single_qualified_nurses,
                    hs_no_single_qualified_midwives: formData.hs_no_single_qualified_midwives,
                    hs_no_comm_health_ext_officer: formData.hs_no_comm_health_ext_officer,
                    hs_no_comm_health_officer: formData.hs_no_comm_health_officer,
                    hs_no_env_health_officer: formData.hs_no_env_health_officer,
                    hs_no_pharm_tech: formData.hs_no_pharm_tech,
                    hs_no_lab_sc: formData.hs_no_lab_sc,
                    hs_no_pharm: formData.hs_no_pharm,
                    hs_no_dental_tech: formData.hs_no_dental_tech
                }}
                validationSchema={currentValidationSchema}
                onSubmit={values => {
                    // same shape as initial values
                    const data = {...formData, ...values}
                    handleSetFormData(data)
                    // console.log(data)
                }}
                >
                {({ errors, touched }) => (
            <Form className="w-full flex flex-col">
                <div className="flex flex-col mt-10">
                    <label className="mb-3">{operationStatus.label}</label>
                    <Field
                    type="number"
                    name={operationStatus.name}
                    placeholder={operationStatus.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_op_status ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_op_status && touched.hs_op_status ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_op_status}
                        </div>
                    ) : null}
                </div>
           <h2 className="text-xl font-bold my-10">Human resource information</h2>
           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3">{medicalDoctors.label}</label>
                
                <Field 
                    type="number" 
                    name={medicalDoctors.name}
                    placeholder={medicalDoctors.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_doctors ? 'border border-danger' : ''}`}
                    />
                     {errors.hs_no_doctors && touched.hs_no_doctors ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_doctors}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3">{dentists.label}</label>
                <Field 
                    type="number" 
                    name={dentists.name}
                    placeholder={dentists.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_dentist ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_dentist && touched.hs_no_dentist ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_dentist}
                        </div>
                        ) : null}
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{nurses.label}</label>
                <Field 
                    type="number" 
                    name={nurses.name}
                    placeholder={nurses.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_single_qualified_nurses ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_single_qualified_nurses && touched.hs_no_single_qualified_nurses ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_single_qualified_nurses}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{midwives.label}</label>
                <Field 
                    type="number" 
                    name={midwives.name}
                    placeholder={midwives.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_single_qualified_midwives ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_single_qualified_midwives && touched.hs_no_single_qualified_midwives ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_single_qualified_midwives}
                        </div>
                        ) : null}
                </div>
           </div>
           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col col-span-2">
                <label className="mb-3 mt-5">{communityHealthExtensionWorker.label}</label>
                <Field 
                    type="number" 
                    name={communityHealthExtensionWorker.name}
                    placeholder={communityHealthExtensionWorker.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_comm_health_ext_officer ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_comm_health_ext_officer && touched.hs_no_comm_health_ext_officer ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_comm_health_ext_officer}
                        </div>
                        ) : null}
                </div>

                {/* <div className="flex flex-col">
                <label className="mb-3 mt-5">{healthInformationManagementOfficers.label}</label>
                <Field 
                    type="text" 
                    name={healthInformationManagementOfficers.name}
                    placeholder={healthInformationManagementOfficers.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.communityHealthOfficer && touched.communityHealthOfficer ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.communityHealthOfficer}
                        </div>
                        ) : null}
                </div> */}
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{communityHealthOfficer.label}</label>
                <Field 
                    type="number" 
                    name={communityHealthOfficer.name}
                    placeholder="John Doe Hospital"
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_comm_health_officer ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_comm_health_officer && touched.hs_no_comm_health_officer ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_comm_health_officer}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{enviromentHealthOfficer.label}</label>
                <Field 
                    type="number" 
                    name={enviromentHealthOfficer.name}
                    placeholder={enviromentHealthOfficer.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_env_health_officer ? 'border border-danger' : ''}`}
                    />
                        {errors.hs_no_env_health_officer && touched.hs_no_env_health_officer ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_env_health_officer}
                        </div>
                        ) : null}
                       
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{pharmacyTechnicians.label}</label>
                <Field 
                    type="number" 
                    name={pharmacyTechnicians.name}
                    placeholder={pharmacyTechnicians.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_pharm_tech ? 'border border-danger' : ''}`}
                    />
                                {errors.hs_no_pharm_tech && touched.hs_no_pharm_tech ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_pharm_tech}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{labScientists.label}</label>
                <Field 
                    type="number" 
                    name={labScientists.name}
                    placeholder={labScientists.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_lab_sc ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_lab_sc && touched.hs_no_lab_sc ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_lab_sc}
                        </div>
                        ) : null}
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{phamacists.label}</label>
                <Field 
                    type="number" 
                    name={phamacists.name}
                    placeholder={phamacists.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_pharm ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_pharm && touched.hs_no_pharm ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_pharm}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{dentalTechnicians.label}</label>
                <Field 
                    type="number" 
                    name={dentalTechnicians.name}
                    placeholder={dentalTechnicians.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_no_dental_tech ? 'border border-danger' : ''}`}
                    />
                    {errors.hs_no_dental_tech && touched.hs_no_dental_tech ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.hs_no_dental_tech}
                        </div>
                        ) : null}
                </div>
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

    )
}