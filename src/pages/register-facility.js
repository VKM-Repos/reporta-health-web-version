import React, { useState } from 'react'
import Link from "next/link";

import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
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
      <div className="login-image w-6/12 h-screen bg-accent"></div>
      <div className="flex flex-col justify-center mx-auto">
        <h2 className="text-4xl font-bold">Create account.</h2>
        <p className="text-secondary mt-3 mb-10">Enter a few details to create your account</p>
        <label className="mb-3">Email</label>
        <Input
        type="text"
        placeholder="Janedoe@gmail.com"
        className="px-4 py-4 bg-gray outline-none w-96"
        onChange={handleChange}
        value={formData.email}
         />

        <label className="mt-5 mb-3">Password</label>
        <div className="fex bg-gray">
        <Input
        type={!showPasword ? 'password' : 'text' }
        placeholder="......."
        className="px-4 py-4  bg-gray outline-none w-80 input-password"
        onChange={handleChange}
        value={formData.password}
         />
         <Button className="text-xs text-secondary" onClick={handleShowPassword}>Show</Button>
        </div>
         <p className="text-right mt-4 mb-14 text-sm">Forgot password? <a href="#" className="text-primary">Reset it</a> </p>
         <Button className="bg-primary text-white py-4 px-4" onClick={handleClick}>Create account</Button>
         <p className="mt-5 text-center text-sm ">Already have an account? <Link href="login" ><a className="text-primary">Login</a></Link> </p>
      </div>
    </div>
  )
}
