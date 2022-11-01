import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineWarning } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authInstanceAxios } from "@config/axiosInstance";

import validationSchema from "@hooks/formValidations/reportFacilityFormValidation/validationSchema";

import {useForm} from "../../../context/StepperContext"
import { useUserCredentialsStore } from "@store/authStore.store";

export default function FacilityInfoForm(props) {

  const currentValidationSchema = validationSchema[1]
  const [userDetails, setUserDetails] = useState(useUserCredentialsStore.getState().userDetails)
  const {reportFacilityFormData, setReportFacilityFormData, setReportFacilityLastStep } = useForm()

  const closeReportModal = () => {
    props.onSubmitClose()
  }
  const handleSetFormData = async(data) => {
    const user = userDetails.user
    const reportData = {
      user_id: user.id,
      name: 'null',
      email: user.username,
      ...data,
      state: props.facility.statename,
      gps_point_lat: props.facility.latitude,
      gps_point_lon: props.facility.longitude,
      actual_location: '',
      actual_gps_lat: props.facility.latitude,
      actual_gps_lon: props.facility.longitude
    }
    setReportFacilityFormData(reportData)
    toast.promise(
      authInstanceAxios.post(`/report`, reportFacilityFormData),
      {
        pending: 'Please wait...',
        success: {
          render(){
            setTimeout(()=>{
              closeReportModal()
            },2000)
            setReportFacilityFormData({ ...reportFacilityFormData, complaints_factor:[]})
            return 'Facility has been reported'
          },
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#242F9B" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
        },
        error: 'Error reporting facility 🤯'
      },
    );
    // notify("facility has been reported")
    // console.log(reportFacilityFormData)

  }
  const {
    formField: {
      complaints_factor,
    }
  } = props;
  const [validationError, setValidationError] = useState(false)
  // console.log(userDetails.user)
    // const notify = (data) => {
    // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    //     toast.promise(
    //         resolveAfter3Sec,
    //         {
    //           pending: 'Promise is pending',
    //           success: data,
    //           error: 'Promise rejected 🤯'
    //         }
    //     )
    // }
  return (
    <div className="w-full flex flex-col">
           

      <h2 className="text-xl font-bold">Complaint box</h2>
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
            <div className="w-full flex flex-col h-80 px-4 overflow-y-auto">
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
               
              </div>
           </div>
            {errors.complaints_factor ? (
              <div className="flex flex-row items-center text-danger text-sm italic">
                {" "}
                <AiOutlineWarning className="w-4 h-4" />
                {errors.complaints_factor}
              </div>
            ) : null}
         <div className="mt-5 grid grid-cols-5 gap-5 ">
              
            <button
              onClick={props.onClose}
              className=" text-primary tracking-wide leading-loose  text-sm font-normal  py-3 border border-primary rounded-md col-span-2"
              type="button"
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
