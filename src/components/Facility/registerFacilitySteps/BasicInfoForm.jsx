import React, {useContext, useState} from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from 'yup';

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import {useForm} from "../../../context/StepperContext"
import facilityTypes from "@libs/facility-types.json";
import state_lgas from '@libs/statesAndLgas.json'
import registerFacilityFormInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import { values } from 'lodash';




export default function BasicInfoForm(props) {
  const {formData, setFormData } = useForm()
  const currentValidationSchema = validationSchema[0]
  const [lgas, setLgas] = useState([])
  const [selectedLga, setselectedLga] = useState('')
  const states = state_lgas.sort()
  const handleSetFormData = async (data) => {
    await setFormData(data)
    // console.log(data)
    props.handleNextStep('next')
  }
  const {
    formField: {
      facility,
      facilityType,
      state,
      lga
    }
  } = props;
  const handleSetLgas = (event) =>{
 
    const {value, name} = event.target
    if(name === 'state' && value !== '') {
      setLgas([])
      const stateData = state_lgas.filter(state => state.alias === value)
      const stateLgas = stateData[0].lgas
      setLgas(stateLgas)
    } 
    // console.log(event.target.name)
    
  }
    return (
        <div >
          <h2 className="text-xl font-bold">Basic information</h2>
          <Formik
            initialValues={{
              reg_fac_name: formData.reg_fac_name,
              facility_type_name: formData.facility_type_name,
              state: formData.state,
              lganame: formData.lganame
            }}
            validationSchema={currentValidationSchema}
            onSubmit={values => {
              // same shape as initial values
              const data = {...formData, ...values}
              handleSetFormData(data)
            }}
     >
          {({ errors, touched }) => (
            <div className=''>
              <Form  onChange={handleSetLgas}>

                <div className="w-full flex flex-col h-80 px-4 overflow-y-auto">
                  <label className="mb-3 mt-5">{facility.label}</label>
                  <Field
                    type="text"
                    name={facility.name}
                    placeholder={facility.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.reg_fac_name ? 'border border-danger' : ''}`}
                  />
                  {/* {errors.name && touched.name ? (
             <div className="text-danger">{errors.name}</div>
           ) : null} */}
                  {errors.reg_fac_name && touched.reg_fac_name ? (
                    <div className="flex flex-row items-center text-danger text-xs italic">
                      {" "}
                      <AiOutlineWarning className="w-4 h-4" />
                      {errors.reg_fac_name}
                    </div>
                  ) : null}

                  <label className="mb-3 mt-4">{facilityType.label}</label>
                  <Field
                    as="select"
                    name={facilityType.name}
                    placeholder={facilityType.placeholder}
                    className={`px-4 py-4 bg-gray outline-none  rounded-md ${errors.facility_type_name ? 'border border-danger' : ''}`}
                  >
                    <option value="" className='text-white'>Select facility type</option>
                    {
                      facilityTypes.map(FacilityType => (
                        <option key={FacilityType} value={FacilityType}>{FacilityType}</option>
                      ))
                    }
                  </Field>

                  {errors.facility_type_name && touched.facility_type_name ? (
                    <div className="flex flex-row items-center text-danger text-xs italic">
                      {" "}
                      <AiOutlineWarning className="w-4 h-4" />
                      {errors.facility_type_name}
                    </div>
                  ) : null}


                  <label className="mb-3 mt-4">{state.label}</label>
                  <Field
                    as="select"
                    name={state.name}
                    placeholder={state.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.state ? 'border border-danger' : ''}`}
                  // onChange={(e) => {
                  //   handleSetLgas(e)
                  // }}
                  >
                    <option value="">Select state</option>
                    {
                      state_lgas.map(({ state, alias }) => (
                        <option key={alias} value={alias}>{state}</option>
                      ))
                    }
                  </Field>
                  {/* {console.log(values.state)} */}
                  {errors.state && touched.state ? (
                    <div className="flex flex-row items-center text-danger text-xs italic">
                      {" "}
                      <AiOutlineWarning className="w-4 h-4" />
                      {errors.state}
                    </div>
                  ) : null}

                  <label className="mb-3 mt-4">{lga.label}</label>
                  <Field
                    as="select"
                    name={lga.name}
                    placeholder={lga.placeholder}
                    className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.lganame ? 'border border-danger' : ''}`}
                  >
                    <option value=''>Select Lga</option>
                    {
                      lgas && lgas.map((lga, index) => (
                        <option key={index} value={lga}>{lga}</option>
                      ))
                    }
                  </Field>
                  {errors.lganame && touched.lganame ? (
                    <div className="flex flex-row items-center text-danger text-xs italic">
                      {" "}
                      <AiOutlineWarning className="w-4 h-4" />
                      {errors.lganame}
                    </div>
                  ) : null}

                </div>
                <div className="my-16 grid grid-cols-5 gap-5">
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
            </div>
       )}
     </Formik>
        </div>
    )
}