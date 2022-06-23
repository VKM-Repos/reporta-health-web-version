import React, { useState } from "react";
import Link from "next/link";

import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPasword, setShowPassword] = useState(false);
  function handleChange() {
    console.log("formData");
  }

  function handleClick() {
    console.log("handleClick");
  }

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="max-w-screen max-h-screen flex">
      <div className="hidden lg:block login-image w-6/12 h-screen bg-accent"></div>

      <div className="flex flex-col justify-center mx-auto px-10 sm:px-5">
        <h2 className="text-4xl font-bold mt-20">Login.</h2>
        <p className="text-secondary mt-3 mb-10">
          Welcome back to your account
        </p>
        <label className="mb-3">Email</label>
        <Input
          type="text"
          placeholder="Janedoe@gmail.com"
          className="px-4 py-4 bg-gray outline-none  w-128 rounded-md"
          onChange={handleChange}
          value={formData.email}
        />

        <label className="mt-5 mb-3">Password</label>
        <div className="fex bg-gray rounded-md">
          <Input
            type={!showPasword ? "password" : "text"}
            placeholder="......."
            className="px-4 py-4  bg-gray outline-none w-120  rounded-md  input-password"
            onChange={handleChange}
            value={formData.password}
          />
          <Button
            className="text-xs text-secondary"
            onClick={handleShowPassword}
          >
            {!showPasword ? "Show" : "Hide"}
          </Button>
        </div>
        <p className="text-right mt-4 mb-14 text-sm">
          Forgot password?{" "}
          <a href="#" className="text-primary">
            Reset it
          </a>{" "}
        </p>
        <Button
          className="bg-primary text-white rounded-md py-4 px-4"
          onClick={handleClick}
        >
          Login
        </Button>
        <p className="mt-5 text-center text-sm ">
          Don&apos;t have an account yet?{" "}
          <Link href="signup">
            <a className="text-primary">Sign up</a>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
