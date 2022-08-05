import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useLogin } from "@hooks/useLogin.hook";
import { useLoginFormValidation } from "@hooks/formValidations/loginFormValidation.schema";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

export default function Login() {
  const { mutate, isLoading } = useLogin();
  const onSubmitHandler = (values) => {
    mutate(values);
  };

  const formik = useLoginFormValidation(onSubmitHandler);

  const [showPasword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  return (
    <div className="max-w-screen max-h-screen flex">
      <div className="hidden lg:block login-image w-6/12 h-screen bg-accent"></div>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center mx-auto px-10 sm:px-5"
      >
        <h2 className="text-4xl font-bold mt-20">Login.</h2>
        <p className="text-secondary mt-3 mb-10">
          Welcome back to your account
        </p>
        <label htmlFor="email" className="mb-3">
          Email
        </label>
        <Input
          placeholder="Janedoe@gmail.com"
          id="email"
          name="email"
          type="text"
          className={
            formik.touched.email && formik.errors.email
              ? "px-4 py-4 bg-gray outline-none  w-128 rounded-md border border-danger leading-tight focus:outline-none focus:border-danger animate-wiggle"
              : "px-4 py-4 bg-gray outline-none  w-128 rounded-md "
          }
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

        <label htmlFor="password" className="mt-5 mb-3">
          Password
        </label>
        <div className={`flex bg-gray rounded-md ${formik.touched.password && formik.errors.password ? 'rounded-md border border-danger leading-tight focus:outline-none focus:border-danger animate-wiggle ' : ''}`}>
          <Input
            id="password"
            name="password"
            type={!showPasword ? "password" : "text"}
            placeholder="......."
            className="px-4 py-4  bg-gray outline-none w-120  input-password"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            type="button"
            className="text-xs text-secondary"
            onClick={handleShowPassword}
          >
            {!showPasword ? "Show" : "Hide"}
          </button>
        </div>
        {/* email error div */}
        {formik.touched.password && formik.errors.password ? (
          <div className="flex flex-row items-center text-danger text-xs italic">
            {" "}
            <AiOutlineWarning className="w-4 h-4" />
            {formik.errors.password}
          </div>
        ) : null}
        <p className="text-right mt-4 mb-14 text-sm">
          Forgot password?{" "}
          <a href="#" className="text-primary">
            Reset it
          </a>{" "}
        </p>
        <Button
          onClick={formik.handleSubmit}
          className="bg-primary text-white rounded-md py-4 px-4"
          type="submit"
        >
          {isLoading ? <LoadingSpinner text="Logging you in..." /> : "Login"}
        </Button>
        <p className="mt-5 text-center text-sm ">
          Don&apos;t have an account yet?{" "}
          <Link href="signup">
            <a className="text-primary">Sign up</a>
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
