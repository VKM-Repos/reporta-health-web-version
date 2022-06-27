import Link from "next/link";
import React, { useState } from "react";

import { useCreateUser } from "@hooks/useCreateUser.hook";
import { useUserSignupFormValidation } from "@hooks/formValidations/userSignupFormValidation.schema";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { AiOutlineWarning } from "react-icons/ai";

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
      </div>
    </div>
  );
}
