import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import * as Yup from "yup";

import validationSchema from "@hooks/formValidations/registerFacilityFormValidation/validationSchema";
import formInitialValues from "@hooks/formValidations/registerFacilityFormValidation/formInitialValues";
import { useForm } from "../../../context/StepperContext";

export default function OwnershipForm(props) {
  const { formData, setFormData } = useForm();
  const currentValidationSchema = validationSchema[2];
  const handleSetFormData = (data) => {
    setFormData(data);
    props.handleNextStep("next");
  };

  const {
    formField: {
      ownership,
      facilityLevel,
      operationHours,
      licenceStatus,
      registrationStatus,
    },
  } = props;
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-xl font-bold">Basic information</h2>

      <Formik
        initialValues={{
          ownership: formData.ownership,
          facility_level: formData.facility_level,
          operational_hours: formData.operational_hours,
          hs_lic_status: formData.hs_lic_status,
          hs_reg_status: formData.hs_reg_status,
        }}
        validationSchema={currentValidationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          const data = { ...formData, ...values };
          handleSetFormData(data);
        }}
      >
        {({ errors, touched }) => (
          <Form className="w-full flex flex-col">
            <div className="w-full flex flex-col h-80 px-4 overflow-y-auto">
              <label className="mb-3 mt-5">{ownership.label}</label>
              <Field
                type="text"
                name={ownership.name}
                placeholder={ownership.placeholder}
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.ownership ? "border border-danger" : ""
                  }`}
              />
              {/* {errors.ownership && touched.ownership ? (
             <div classownership="text-danger">{errors.ownership}</div>
           ) : null} */}
              {errors.ownership && touched.ownership ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.ownership}
                </div>
              ) : null}

              <label className="mb-3 mt-4">{facilityLevel.label}</label>
              <Field
                type="text"
                name={facilityLevel.name}
                placeholder={facilityLevel.placeholder}
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.facility_level ? "border border-danger" : ""
                  }`}
              />
              {errors.facility_level && touched.facility_level ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.facility_level}
                </div>
              ) : null}
              <label className="mb-3 mt-4">{operationHours.label}</label>
              <Field
                type="text"
                name={operationHours.name}
                placeholder={operationHours.placeholder}
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.operational_hours ? "border border-danger" : ""
                  }`}
              />

              {errors.operational_hours && touched.operational_hours ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.operational_hours}
                </div>
              ) : null}
              <label className="mb-3 mt-4">{licenceStatus.label}</label>
              <Field
                type="text"
                name={licenceStatus.name}
                placeholder={licenceStatus.placeholder}
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_lic_status ? "border border-danger" : ""
                  }`}
              />
              {errors.hs_lic_status && touched.hs_lic_status ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.hs_lic_status}
                </div>
              ) : null}

              <label className="mb-3 mt-4">{registrationStatus.label}</label>
              <Field
                type="text"
                name={registrationStatus.name}
                placeholder={registrationStatus.placeholder}
                className={`px-4 py-4 bg-gray outline-none rounded-md ${errors.hs_reg_status ? "border border-danger" : ""
                  }`}
              />
              {errors.hs_reg_status && touched.hs_reg_status ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {errors.hs_reg_status}
                </div>
              ) : null}
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
