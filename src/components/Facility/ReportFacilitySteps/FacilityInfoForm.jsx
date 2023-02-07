import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineWarning } from "react-icons/ai";

import validationSchema from "@hooks/formValidations/reportFacilityFormValidation/validationSchema";

import { useForm } from "../../../context/StepperContext";
import facilityTypes from "@libs/facility-types.json";

export default function FacilityInfoForm(props) {
  const currentValidationSchema = validationSchema[0];

  const { reportFacilityFormData, setReportFacilityFormData } = useForm();
  const handleSetFormData = (data) => {
    setReportFacilityFormData(data);
    props.handleNextStep("next");
  };
  const {
    formField: { facilityName, facilityType, facilityAddress },
  } = props;
  console.log(props);
  return (
    <div className=" flex flex-col">
      <h2 className="text-[120%] font-bold">Facility information</h2>
      <Formik
        initialValues={{
          facility_name: props.facility.reg_fac_name,
          facility_category: "Hospital",
          location: props.facility.street_name || "N/A",
        }}
        validationSchema={currentValidationSchema}
        onSubmit={(values) => {
          const data = { ...reportFacilityFormData, ...values };
          handleSetFormData(data);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className=" w-full flex flex-col h-[50vh] mt-4 overflow-y-auto">
              <label className="mt-5 font-semibold text-black/70">
                {facilityName.label}
              </label>
              <Field
                type="text"
                name={facilityName.name}
                placeholder={facilityName.name}
                className={`p-2 bg-gray outline-none rounded-md lowercase ${
                  errors.facility_name ? "border border-danger" : ""
                }`}
                disabled={true}
              />
              {errors.facility_name && touched.facility_name ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.facility_name}
                </div>
              ) : null}

              <label className="mt-4 font-semibold text-black/70">
                {facilityType.label}
              </label>
              <Field
                as="select"
                name={facilityType.name}
                placeholder="Hospital/Clinic"
                className={`p-2 bg-gray outline-none rounded-md ${
                  errors.facility_category ? "border border-danger" : ""
                }`}
                disabled={true}
              >
                <option value="" className=" text-white">
                  Hospital
                </option>
              </Field>
              {errors.facility_category && touched.facility_category ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.facility_category}
                </div>
              ) : null}

              <label className="mt-4 font-semibold text-black/70">
                {facilityAddress.label}
              </label>
              <Field
                type="text"
                name={facilityAddress.name}
                placeholder="Hospital/Clinic"
                className={`p-2 bg-gray outline-none rounded-md ${
                  errors.location ? "border border-danger" : ""
                }`}
                disabled={true}
              />
              {errors.location && touched.location ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.location}
                </div>
              ) : null}
            </div>
            <div className="mt-5 font-semibold grid grid-cols-5 gap-5 ">
              <button
                onClick={props.onClose}
                className=" text-primary tracking-wide leading-loose text-[100%] font-normal  py-1 border border-primary rounded-md col-span-2 lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="text-white  bg-primary tracking-wide leading-loose  text-[100%] font-normal py-1 border border-primary rounded-md col-span-3 lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer"
              >
                {props.currentStep === props.steps.length
                  ? "Submit"
                  : "Proceed"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
