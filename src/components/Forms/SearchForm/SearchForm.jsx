import React, { useState } from "react";

import { useSearchFacility } from "@hooks/useSearchFacility";
// import { useSearchFacilityStore } from "@store/searchFacility.store";

import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import InputField from "@components/FormFields/InputField";
import SelectDropdown from "@components/FormFields/SelectDropdown";

import nigerianStates from "@libs/nigerian-states.json";
import facilityTypes from "@libs/facility-types.json";

const SearchForm = () => {
  const { mutate, isError, isLoading } = useSearchFacility();

  const [searchInput, setSearchInput] = useState("");

  const locationOptions = nigerianStates;

  const facilityOptions = facilityTypes;

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    mutate(filteredResults);
  };

  return (
    <form className="" onSubmit={submitSearch}>
      <div className="min-w-fit mx-12 mx-auto bg-white grid lg:grid-cols-5 grid-cols-2 gap-2 py-2 justify-items-stretch px-2 rounded-md">
        {/* search input */}
        <InputField
          type="text"
          placeholder="Search by specialty or name of facility"
          name="query"
          value={searchInput}
          handleChange={handleChange}
        />
        {/* dropdown fields */}
        <SelectDropdown
          className="col-span-2"
          options={locationOptions}
          selectTitle="location"
        />

        <SelectDropdown
          className="col-span-2"
          options={facilityOptions}
          selectTitle="facility type"
        />

        <button
          type="submit"
          value="Find facility"
          className={`w-full lg:col-span-1 col-span-2 py-2 flex items-center justify-center text-xs rounded-md  cursor-pointer text-white 
          ${
            !searchInput
              ? "bg-secondary focus:none cursor-not-allowed"
              : "bg-primary hover:scale-95 ease-out duration-300"
          }`}
          disabled={!searchInput ? true : false}
        >
          {isLoading ? (
            <LoadingSpinner text="Searching for facility..." />
          ) : (
            "Find facility"
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
