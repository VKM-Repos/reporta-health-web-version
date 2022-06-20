import React, { useState } from 'react'
import Link from "next/link";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
export default function login() {
  const [formData, setFormData] = useState(
    {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    }
    )
    const [showPasword, setShowPassword] = useState(false)
    function handleChange(event){
        const {type, name, value, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value 
        }))
    }
    function handleClick() {
        alert("Please wait...")
      console.log(formData)
    }

    function handleShowPassword(){
      setShowPassword(prevShowPassword => !prevShowPassword)
    }

  return (
    <div className="max-w-screen max-h-screen flex">
      <div className=" hidden lg:block login-image w-6/12 h-screen bg-accent"></div>
      <div className="flex flex-col justify-center mx-auto px-10 sm:px-5">
        <h2 className="text-4xl font-bold mt-40 sm:mt-5">Create account.</h2>
        <p className="text-secondary mt-3 mb-7">Enter a few details to create your account</p>
        <div className="flex  gap-5">
        <div className="flex flex-col">
        <label className="mb-3 flex-col">First name</label>
        <Input
        type="text"
        placeholder="Jane"
        className="px-4 py-4 bg-gray outline-none  w-64 rounded-md"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
         />
        </div>

        <div className="flex flex-col">
        <label className="mb-3">Last name</label>
        <Input
        type="text"
        placeholder="Doe"
        className="px-4 py-4 bg-gray outline-none w-64 rounded-md"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
         />
        </div>
        </div>
        <label className="mb-3 mt-5">Email</label>
        <Input
        type="email"
        placeholder="Janedoe@gmail.com"
        className="px-4 py-4 bg-gray outline-none sm:w-128 rounded-md"
        name="email"
        onChange={handleChange}
        value={formData.email}
         />
        <label className="mt-5 mb-3">Phone number</label>
        <Input
        type="text"
        placeholder="+234"
        className="px-4 py-4 bg-gray outline-none w-128 rounded-md"
        name="phone"
        onChange={handleChange}
        value={formData.phone}
         />       

        <label className="mt-5 mb-3">Password</label>
        <div className="fex bg-gray rounded-md">
        <Input
        type={!showPasword ? 'password' : 'text' }
        placeholder="......."
        className="px-4 py-4  bg-gray outline-none rounded-md sm:w-120 w-80 input-password"
        name="password"
        onChange={handleChange}
        value={formData.password}
         />
         <Button className="text-xs text-secondary" onClick={handleShowPassword}>Show</Button>
        </div>
         <p className="text-right mt-4 mb-4 text-sm">Forgot password? <a href="#" className="text-primary">Reset it</a> </p>
         <Button className="bg-primary text-white rounded-md py-4 px-4" onClick={handleClick}>Create account</Button>
         <p className="mt-3 mb-4 text-center text-sm ">Already have an account? <Link href="login" ><a className="text-primary">Login</a></Link> </p>
      </div>
    </div>
  )
}