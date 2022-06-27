import React, { useState } from 'react'
import Link from "next/link";
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

    function handleShowPassword(){
      setShowPassword(prevShowPassword => !prevShowPassword)
    }

  return (
    <div className="max-w-screen max-h-screen flex">
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
        
        
      </div>
    </div>
  )
}