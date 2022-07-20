import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from 'yup';

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import {useForm} from "../../../context/StepperContext"
  
export default function OwnerShipForm(props) {
    const {formData, setFormData } = useForm()
    const currentValidationSchema = validationSchema[3]

    const handleSetFormData = (data) => {
        setFormData(data)
        props.handleNextStep('next')
      }

    const {
        formField: {
            daysOfOperation,
            typesOfService,
            medicalDoctors,
            dentists,
            nurses,
            midwives,
            juniorCommunityHealthExtensionWorker,
            healthInformationManagementOfficers,
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
                    daysOfOperation: formData.daysOfOperation,
                    typesOfService: formData.typesOfService,
                    medicalDoctors: formData.medicalDoctors,
                    dentists: formData.dentists,
                    nurses: formData.nurses,
                    midwives: formData.midwives,
                    juniorCommunityHealthExtensionWorker: formData.juniorCommunityHealthExtensionWorker,
                    healthInformationManagementOfficers: formData.healthInformationManagementOfficers,
                    communityHealthOfficer: formData.communityHealthOfficer,
                    enviromentHealthOfficer: formData.enviromentHealthOfficer,
                    pharmacyTechnicians: formData.pharmacyTechnicians,
                    labScientists: formData.labScientists,
                    phamacists: formData.phamacists,
                    dentalTechnicians: formData.dentalTechnicians
                }}
                validationSchema={currentValidationSchema}
                onSubmit={values => {
                    // same shape as initial values
                    const data = {...props.formData, ...values}
                    handleSetFormData(data)
                     console.log('operation form', formData);
                }}
                >
                {({ errors, touched }) => (
            <Form className="w-full flex flex-col">
            <label className="mb-3 mt-5">{daysOfOperation.label}</label>
           <Field 
            type="text" 
            name={daysOfOperation.name}
            placeholder={daysOfOperation.placeholder}
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
            {errors.daysOfOperation && touched.daysOfOperation ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.daysOfOperation}
          </div>
        ) : null}

           <label className="mb-3 mt-4">{typesOfService.label}</label>
           <Field 
            type="text" 
            name={typesOfService.name}
            placeholder={typesOfService.placeholder}
            className="px-4 py-4 bg-gray outline-none rounded-md"
            />
            {errors.typesOfService && touched.typesOfService ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {errors.typesOfService}
          </div>
        ) : null}
           <h2 className="text-xl font-bold my-10">Human resource information</h2>
           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3">{medicalDoctors.label}</label>
                <Field 
                    type="text" 
                    name={medicalDoctors.name}
                    placeholder={medicalDoctors.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                     {errors.medicalDoctors && touched.medicalDoctors ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.medicalDoctors}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3">{dentists.label}</label>
                <Field 
                    type="text" 
                    name={dentists.name}
                    placeholder={dentists.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.dentists && touched.dentists ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.dentists}
                        </div>
                        ) : null}
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{nurses.label}</label>
                <Field 
                    type="text" 
                    name={nurses.name}
                    placeholder={nurses.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.nurses && touched.nurses ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.nurses}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{midwives.label}</label>
                <Field 
                    type="text" 
                    name={midwives.name}
                    placeholder={midwives.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.midwives && touched.midwives ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.midwives}
                        </div>
                        ) : null}
                </div>
           </div>
           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{juniorCommunityHealthExtensionWorker.label}</label>
                <Field 
                    type="text" 
                    name={juniorCommunityHealthExtensionWorker.name}
                    placeholder={juniorCommunityHealthExtensionWorker.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.healthInformationManagementOfficers && touched.healthInformationManagementOfficers ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.healthInformationManagementOfficers}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
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
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{communityHealthOfficer.label}</label>
                <Field 
                    type="text" 
                    name={communityHealthOfficer.name}
                    placeholder="John Doe Hospital"
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.communityHealthOfficer && touched.communityHealthOfficer ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.communityHealthOfficer}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{enviromentHealthOfficer.label}</label>
                <Field 
                    type="text" 
                    name={enviromentHealthOfficer.name}
                    placeholder={enviromentHealthOfficer.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.enviromentHealth && touched.enviromentHealthOfficer ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.enviromentHealth}
                        </div>
                        ) : null}
                       
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{pharmacyTechnicians.label}</label>
                <Field 
                    type="text" 
                    name={pharmacyTechnicians.name}
                    placeholder={pharmacyTechnicians.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.pharmacyTechnicians && touched.pharmacyTechnicians ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.pharmacyTechnicians}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{labScientists.label}</label>
                <Field 
                    type="text" 
                    name={labScientists.name}
                    placeholder={labScientists.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.labScientists && touched.labScientists ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.labScientists}
                        </div>
                        ) : null}
                </div>
           </div>

           <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                <label className="mb-3 mt-5">{phamacists.label}</label>
                <Field 
                    type="text" 
                    name={phamacists.name}
                    placeholder={phamacists.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.phamacists && touched.phamacists ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.phamacists}
                        </div>
                        ) : null}
                </div>

                <div className="flex flex-col">
                <label className="mb-3 mt-5">{dentalTechnicians.label}</label>
                <Field 
                    type="text" 
                    name={dentalTechnicians.name}
                    placeholder={dentalTechnicians.placeholder}
                    className="px-4 py-4 bg-gray outline-none rounded-md"
                    />
                    {errors.dentalTechnicians && touched.dentalTechnicians ? (
                        <div className="flex flex-row items-center text-danger text-xs italic">
                            {" "}
                            <AiOutlineWarning className="w-4 h-4" />
                            {errors.dentalTechnicians}
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