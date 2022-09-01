import React, { useState } from "react";
import Router from "next/router";
import { AiOutlineDown } from "react-icons/ai";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import { useSearchFacility } from '@hooks/useSearchFacility'

const SearchForm = () => {
  const options = [
    "Abuja",
    "Lagos",
    "Calabar",
    "Kaduna",
    "Port Harcourt",
    "Benin City",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [query, setQuery] = useState('')

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const { mutate, isLoading } = useSearchFacility();
  const handleChange = (events)=> {
    setQuery(events.target.value);
  }
  const searchFacility = (e) =>{
    e.preventDefault() 
    mutate(query)
  }

  return (
    <form className="" onSubmit={searchFacility}>
      <div className="w-[80vw] bg-white grid grid-cols-2 lg:grid-cols-5 gap-5 py-2 justify-items-stretch px-4 rounded-md">
        {/* select field */}
        <div className="lg:max-w-[12rem] flex flex-col">
          <label
            className="cursor-pointer flex flex-row items-center justify-start text-xs lg:text-sm text-secondary "
            onClick={toggling}
          >
            {" "}
            select location <AiOutlineDown className="ml-4 text-black" />{" "}
          </label>
          <div className="relative flex flex-col ">
            <div className="flex py-2 items-start text-xs lg:text-sm">
              {selectedOption || "Abuja"}
            </div>
            {isOpen && (
              <div className="absolute left-0 w-full h-[7rem] shadow-xl bg-white overflow-auto">
                <div className=" py-4 text-secondary text-xs lg:text-sm">
                  {options.map((option) => (
                    <span
                      className="flex flex-col px-1 py-1 hover:bg-background"
                      onClick={onOptionClicked(option)}
                      key={Math.random()}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* search input */}
        <div className="lg:col-span-3 flex flex-row items-center justify-start lg:w-[39rem] px-2 lg:px-4 rounded-md bg-gray">
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
            className="w-full px-2 py-4 bg-gray focus:outline-none text-xs lg:text-sm"
            type="text"
            placeholder="Search by specialty or name of facility"
            name="query"
            onChange={handleChange}
          />
        </div>
        {/* <input
          type="submit"
          value="Find facility"
          className="w-full lg:col-span-1 col-span-2 py-4 text-xs lg:text-sm rounded-md bg-primary hover:bg-opacity-90 cursor-pointer text-white"
        /> */}
        <button
        type="submit"
        value="Find facility"
        className="w-full lg:col-span-1 col-span-2 py-4 text-xs lg:text-sm rounded-md bg-primary hover:bg-opacity-90 cursor-pointer text-white"
        disabled={isLoading}
        >
        {isLoading ? <LoadingSpinner text="Searching for facility..." /> : "Find facility"}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
