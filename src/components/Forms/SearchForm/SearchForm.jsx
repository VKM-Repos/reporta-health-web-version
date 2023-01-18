import React, { useState, useEffect } from "react";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import InputField from "@components/FormFields/InputField";
import SelectDropdown from "@components/FormFields/SelectDropdown";

import nigerianStates from "@libs/nigerian-states.json";
import facilityTypes from "@libs/facility-types.json";
import { authInstanceAxios } from "@config/axiosInstance";
import { SEARCH_FACILITY_KEY } from "@config/queryKeys";
import { useInfiniteQuery } from "react-query";

const SearchForm = ({ setDataArray }) => {
  // TODO: CREATE A SEARCH QUERIES FUNCTION TO HOLD BOTH THE INPUT, AND DROPDOWN OPTIONS

  const locationOptions = nigerianStates;
  const facilityOptions = facilityTypes;

  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [facilityTypeInput, setFacilityTypeInput] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isFacilityTypeOpen, setIsFacilityTypeOpen] = useState(false);

  const toggleLocationDropdown = () => setIsLocationOpen(!isLocationOpen);
  const toggleFacilityTypeDropdown = () =>
    setIsFacilityTypeOpen(!isFacilityTypeOpen);

  // INPUT FIELD FUNCTION
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  // SELECT DROPDOWN FIELD FUNCTION FOR LOCATION
  const handleLocation = (value) => {
    setLocationInput(value.target.textContent);
    setIsLocationOpen(!isLocationOpen);
  };

  // SELECT DROPDOWN FIELD FUNCTION FOR FACILITY TYPE
  const handleFacilityType = (value) => {
    setFacilityTypeInput(value.target.textContent);
    setIsFacilityTypeOpen(!isFacilityTypeOpen);
  };

  const useSearchFacility = () => {
    const {
      isLoading,
      isError,
      isFetching,
      error,
      data,
      status,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    } = useInfiniteQuery([SEARCH_FACILITY_KEY, searchInput], searchFacility, {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.next_page_url) {
          return pages?.length + 1;
        } else return undefined;
      },
    });

    return {
      isLoading,
      isError,
      isFetching,
      error,
      data,
      status,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    };
  };

  const searchFacility = async () => {
    const result = await authInstanceAxios.get(`/search/?query=${searchInput}`);
    return result.data;
  };

  const filteredData = () => {
    setDataArray(data);
    // console.log("whip", data?.data?.pages[0]?.data?.data);
    const resultArray = data?.data?.pages[0]?.data?.data.filter((result) =>
      // result.reg_fac_name.includes(searchInput) ||
      // result.statename.includes(locationInput)
      console.log("resultttt", result.reg_fac_name)
    );
  };

  const submitSearch = (event) => {
    event.preventDefault();
    searchFacility();
    filteredData();
  };

  const data = useSearchFacility();
  console.log("trey", data);

  return (
    <form className="" onSubmit={submitSearch}>
      <div className="min-w-fit mx-auto bg-white grid  grid-cols-2 gap-2 py-2 justify-items-stretch px-2 rounded-md">
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
          onOptionClicked={handleLocation}
          selectedOption={locationInput}
          toggleDropdown={toggleLocationDropdown}
          isOpen={isLocationOpen}
        />

        <SelectDropdown
          className="col-span-2"
          options={facilityOptions}
          selectTitle="facility type"
          onOptionClicked={handleFacilityType}
          selectedOption={facilityTypeInput}
          toggleDropdown={toggleFacilityTypeDropdown}
          isOpen={isFacilityTypeOpen}
        />

        <button
          type="submit"
          value="Find facility"
          className={`w-full  col-span-2 py-2 flex items-center justify-center text-xs rounded-md  cursor-pointer text-white 
          ${
            !searchInput
              ? "bg-secondary focus:none cursor-not-allowed"
              : "bg-primary hover:scale-95 ease-out duration-300"
          }`}
          disabled={!searchInput ? true : false}
        >
          {/* {isLoading ? (
            <LoadingSpinner text="Searching for facility..." />
          ) : (
            "Find facility"
          )} */}
          Find facility
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
