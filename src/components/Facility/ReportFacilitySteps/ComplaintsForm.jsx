import React, { useContext } from "react";
import { stepperContext } from "@context/StepperContext";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Input from "@components/Input/Input";

export default function ComplaintsForm() {
  const [facilityData, setFacilityData] = useContext(stepperContext);
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFacilityData({
      ...facilityData,
      [name]: value,
    });
  };
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-xl font-bold">Complaints about facility</h2>
      <Formik
        initialValues={{ hospitalName: "", hospitalType: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.hospitalName) {
            errors.hospitalName = "Required";
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
            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Long delay before recieving care
                <Field
                  type="checkbox"
                  name="delay"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Cost of service recieved
                <Field
                  type="checkbox"
                  name="service cost"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>
            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Care recieved was suboptimal
                <Field
                  type="checkbox"
                  name="care recieved"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Unregistered health facility
                <Field
                  type="checkbox"
                  name="unregistered facility"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Poor medical equipment
                <Field
                  type="checkbox"
                  name="poor equipment"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Uncoordinated medical staff
                <Field
                  type="checkbox"
                  name="uncordinated staff"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>

            <div className="">
              <label className="mb-3 mt-5 flex flex-row items-center text-accent justify-between px-4 py-4 selection:text-accent selection:font-extrabold bg-gray outline-none ">
                Other
                <Field
                  type="checkbox"
                  name="other"
                  className=" w-6 h-6 rounded-full"
                />
              </label>
              <ErrorMessage name="onership" component="div" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
