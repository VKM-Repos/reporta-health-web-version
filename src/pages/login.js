import React, { useState } from 'react'
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Input from "@components/Input/Input"
import Button from "@components/Button/Button"
export default function login() {
  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""
    }
    )
    const [showPasword, setShowPassword] = useState(false)
    function handleChange(){
      console.log("formData")
    }

    function handleClick() {
      console.log("handleClick")
    }

    function handleShowPassword(){
      setShowPassword(prevShowPassword => !prevShowPassword)
    }

  return (
    <div className="max-w-screen max-h-screen flex">

      <div className="hidden lg:block login-image w-6/12 h-screen bg-accent"></div>


      <div className="flex flex-col justify-center mx-auto px-10 sm:px-5">
        <h2 className="text-4xl font-bold mt-20">Login.</h2>
        <p className="text-secondary mt-3 mb-10">Welcome back to your account</p>

        <Formik
           initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
                errors.password = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
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
                <label className="mb-3">Email</label>
                <Field 
                  type="text" 
                  name="email" 
                  placeholder="Janedoe@gmail.com"
                  className={`px-4 py-4 bg-gray outline-none  w-128 rounded-md ${errors.email ? 'border border-error' : ''}`}
                  />
                <ErrorMessage className="text-error" name="email" component="div" />

                <label className="mt-5 mb-3">Password</label>
                <div className={`bg-gray rounded-md ${errors.password ? 'border border-error' : ''} `}>
                <Field 
                  type={!showPasword ? 'password' : 'text'} 
                  name="password"
                  placeholder="......."
                  className="px-4 py-4  bg-gray outline-none w-120  rounded-md  input-password" 
                  />
                  <Button className="text-xs text-secondary" onClick={handleShowPassword}>{ !showPasword ? 'Show' : 'Hide' }</Button>
                  
                </div>
                <ErrorMessage className="text-error" name="password" component="div" />
                <p className="text-right mt-4 mb-14 text-sm">Forgot password? <a href="#" className="text-primary">Reset it</a> </p>
                <button type="submit" disabled={isSubmitting} className="bg-primary hover:scale-95 text-white rounded-md py-4 px-4">Login</button>
                <p className="mt-5 text-center text-sm ">Don’t have an account yet? <Link href="signup" ><a className="text-primary">Sign up</a></Link> </p>
              </Form>
            )}
          </Formik>
         
      </div>
    </div>
  )
}
