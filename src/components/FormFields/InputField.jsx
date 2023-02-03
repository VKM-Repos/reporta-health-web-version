import React from "react";

const InputField = ({ type, placeholder, name, value, handleChange }) => {
  return (
    <>
      <div className="w-full col-span-2 flex flex-row items-center justify-start py-2 px-2 lg:px-4 rounded-md bg-black/10">
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
              stroke="#9F9F9F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
              stroke="#9F9F9F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          className="w-full px-2 placeholder:text-secondary bg-black/0 focus:outline-none text-xs "
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputField;
