import Link from "next/link";
<<<<<<< HEAD
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"


export default function login() {
  
    const [showPasword, setShowPassword] = useState(false)
    function handleChange(event){
        const {type, name, value, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value 
        }))
    }
    // function handleClick() {
    //     alert("Please wait...")
    //   console.log(formData)
    // }
=======
import React, { useState } from "react";

import { useCreateUser } from "@hooks/useCreateUser.hook";
import { useUserSignupFormValidation } from "@hooks/formValidations/userSignupFormValidation.schema";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";
>>>>>>> 0b1dbbb1b0893a0f15bd13f9b7c8b8355a62f9d8

import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

export default function Signup() {
  const { mutate, isLoading } = useCreateUser();
  const onSubmitHandler = (values) => {
    mutate(values);
  };

  const formik = useUserSignupFormValidation(onSubmitHandler);

  const [showPasword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="max-w-screen max-h-screen flex">
<<<<<<< HEAD
      <div className=" hidden lg:block login-image w-6/12 h-screen bg-accent"></div>
      <div className="flex flex-col justify-center mx-auto py-10 px-10 sm:px-5">
        <h2 className="text-4xl font-bold mt-40 sm:mt-5">Create account.</h2>
        <p className="text-secondary mt-3 mb-7">Enter a few details to create your account</p>

        <Formik
           initialValues={{ firstName: '', lastName: '',  email: '', phone: '', password: '' }}
            validate={values => {
              const errors = {};
              if(!values.firstName)
                errors.firstName = 'Required'
              if(!values.lastName)
                errors.lastName = 'Required'
              if (!values.email) {
                errors.email = 'Required';
                errors.password = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if(!values.phone) 
                errors.phone = 'Required'
              if(!values.password)
                errors.password = 'Required'
              
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log('Submit')
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form className="flex flex-col">
                <div className="flex  gap-5">
                  <div className="flex flex-col">
                  <label className="mb-3 flex-col">First name</label>
                  <Field
                  type="text"
                  placeholder="Jane"
                  className={`px-4 py-4 bg-gray outline-none  w-64 rounded-md ${errors.firstName ? 'border border-error' : ''}`}
                  name="firstName"
                  />
                  <ErrorMessage className="text-error" name="firstName" component="div" />
                  </div>

                  <div className="flex flex-col">
                  <label className="mb-3">Last name</label>
                  <Field
                  type="text"
                  placeholder="Doe"
                  className={`px-4 py-4 bg-gray outline-none w-64 rounded-md ${errors.lastName ? 'border border-error' : ''}`}
                  name="lastName"
                  />
                  <ErrorMessage className="text-error" name="lastName" component="div" />
                  </div>
                  </div>
                  <label className="mb-3 mt-5">Email</label>
                  <Field
                  type="text"
                  placeholder="Janedoe@gmail.com"
                  className={`px-4 py-4 bg-gray outline-none sm:w-128 rounded-md ${errors.email ? 'border border-error' : ''}`}
                  name="email"
                  />
                  <ErrorMessage className="text-error" name="email" component="div" />
                  <label className="mt-5 mb-3">Phone number</label>
                  <Field
                  type="text"
                  placeholder="+234"
                  className={`px-4 py-4 bg-gray outline-none w-128 rounded-md ${errors.phone ? 'border border-error' : ''}`}
                  name="phone"
                  />       
                  <ErrorMessage className="text-error" name="phone" component="div" />
                  <label className="mt-5 mb-3">Password</label>
                  <div className="fex bg-gray rounded-md ${errors.password ? 'border border-error' : ''}">
                  <Field
                  type={!showPasword ? 'password' : 'text' }
                  placeholder="......."
                  className={`px-4 py-4  bg-gray outline-none rounded-md sm:w-120 w-80 input-password `}
                  name="password"
                  />
                  <button type="button" className="text-xs text-secondary" onClick={handleShowPassword}>Show</button>
                  </div>
                  <ErrorMessage className="text-error" name="password" component="div" />
                  <p className="text-right mt-4 mb-4 text-sm">Forgot password? <a href="#" className="text-primary">Reset it</a> </p>
                  <button type="submit" disabled={isSubmitting} className="bg-primary text-white hover:scale-95 rounded-md py-4 px-4">Create account</button>
                  <p className="mt-3 mb-4 text-center text-sm ">Already have an account? <Link href="login" ><a className="text-primary">Login</a></Link> </p>
              </Form>
            )}
          </Formik>
        
        
=======
      <div className=" hidden lg:block login-image w-1/2 h-screen bg-accent"></div>

      <div className="flex flex-col justify-center mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center mx-auto py-12 lg:px-10 px-5"
        >
          <h2 className="text-4xl font-bold mt-40 sm:mt-5">Create account.</h2>
          <p className="text-secondary mt-3 mb-7">
            Enter a few details to create your account
          </p>
          <div className="flex  gap-5">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="mb-3 flex-col">
                First name
              </label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? "px-4 py-4 bg-gray outline-none  w-64 rounded-md border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
                    : "px-4 py-4 bg-gray outline-none  w-64 rounded-md"
                }
                inputMode="FirstName"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {/* firstname error div */}
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="mb-3">
                Last name
              </label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Jane"
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? "px-4 py-4 bg-gray outline-none  w-64 rounded-md border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
                    : "px-4 py-4 bg-gray outline-none  w-64 rounded-md"
                }
                inputMode="lastName"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {/* last name error div */}
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="flex flex-row items-center text-danger text-xs italic">
                  {" "}
                  <AiOutlineWarning className="w-4 h-4" />
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>
          <label htmlFor="email" className="mb-3 mt-5">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Janedoe@gmail.com"
            className={
              formik.touched.email && formik.errors.email
                ? "px-4 py-4 bg-gray outline-none sm:w-128 rounded-md border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
                : "px-4 py-4 bg-gray outline-none sm:w-128 rounded-md"
            }
            inputMode="email"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {/* email error div */}
          {formik.touched.email && formik.errors.email ? (
            <div className="flex flex-row items-center text-danger text-xs italic">
              {" "}
              <AiOutlineWarning className="w-4 h-4" />
              {formik.errors.email}
            </div>
          ) : null}

          <label htmlFor="phone" className="mt-5 mb-3">
            Phone number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234"
            className={
              formik.touched.phone && formik.errors.phone
                ? "px-4 py-4 bg-gray outline-none sm:w-128 rounded-md border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
                : "px-4 py-4 bg-gray outline-none sm:w-128 rounded-md"
            }
            inputMode="email"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {/* phone number error div */}
          {formik.touched.phone && formik.errors.phone ? (
            <div className="flex flex-row items-center text-danger text-xs italic">
              {" "}
              <AiOutlineWarning className="w-4 h-4" />
              {formik.errors.phone}
            </div>
          ) : null}

          <label htmlFor="password" className="mt-5 mb-3">
            Password
          </label>
          <div className="flex bg-gray rounded-md">
            <Input
              id="password"
              name="password"
              type={!showPasword ? "password" : "text"}
              placeholder="......."
              className={
                formik.touched.password && formik.errors.password
                  ? "px-4 py-4  bg-gray outline-none rounded-md sm:w-120 w-80 input-password border-danger leading-tight focus:outline-none focus:bg-white focus:border-danger animate-wiggle"
                  : "px-4 py-4  bg-gray outline-none rounded-md sm:w-120 w-80 input-password"
              }
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span
              className="text-xs text-secondary"
              onClick={handleShowPassword}
            >
              Show
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="flex flex-row items-center text-danger text-xs italic">
              {" "}
              <AiOutlineWarning className="w-4 h-4" />
              {formik.errors.password}
            </div>
          ) : null}

          <p className="text-right mt-4 mb-4 text-sm">
            Forgot password?{" "}
            <a href="#" className="text-primary">
              Reset it
            </a>{" "}
          </p>
          <Button
            onClick={formik.handleSubmit}
            className="bg-primary text-white hover:scale-95 rounded-md py-4 px-4"
            type="submit"
          >
            {isLoading ? (
              <LoadingSpinner text="Creating your account..." />
            ) : (
              "Create account"
            )}
          </Button>
        </form>

        <p className="mt-3 mb-4 text-center text-sm ">
          Already have an account?{" "}
          <Link href="login">
            <a className="text-primary">Login</a>
          </Link>{" "}
        </p>
>>>>>>> 0b1dbbb1b0893a0f15bd13f9b7c8b8355a62f9d8
      </div>
    </div>
  );
}
