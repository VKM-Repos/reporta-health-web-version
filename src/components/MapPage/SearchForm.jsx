import InputField from "@components/FormFields/InputField";
import SelectDropdown from "@components/FormFields/SelectDropdown";
import React, { useContext, useState } from "react";

import nigerianStates from "@libs/nigerian-states.json";
import facilityTypes from "@libs/facility-types.json";
import { MapContext } from "@context/mapContext";

const SearchForm = ({
  searchTerm,
  setSearchTerm,
  locationInput,
  setLocationInput,
  facilityTypeInput,
  setFacilityTypeInput,
  setDefaultApi,
}) => {
  const { searchFacilities } = useContext(MapContext);
  const locationOptions = nigerianStates;
  const facilityOptions = facilityTypes;
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isFacilityTypeOpen, setIsFacilityTypeOpen] = useState(false);

  const toggleLocationDropdown = () => setIsLocationOpen(!isLocationOpen);
  const toggleFacilityTypeDropdown = () =>
    setIsFacilityTypeOpen(!isFacilityTypeOpen);

  // INPUT FIELD FUNCTION
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // SELECT DROPDOWN FIELD FUNCTION FOR LOCATION
  const handleLocation = (event) => {
    setLocationInput(event.target.textContent);
    setIsLocationOpen(!isLocationOpen);
  };

  // SELECT DROPDOWN FIELD FUNCTION FOR FACILITY TYPE
  const handleFacilityType = (event) => {
    setFacilityTypeInput(event.target.textContent);
    setIsFacilityTypeOpen(!isFacilityTypeOpen);
  };

  // const filteredData = () => {
  //   const resultArray = searchFacilities?.pages[0]?.data?.filter(
  //     (result) =>
  //       result.reg_fac_name.includes(searchTerm) ||
  //       result.statename.includes(locationInput)
  //   );
  //   // setDataArray(resultArray);
  //   setSearchTerm(resultArray);
  // };

  // console.log(searchFacilities?.pages[0]?.data);
  // console.log(searchTerm);

  const submitSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
    // filteredData();
    setDefaultApi(false);
  };

  return (
    <form className="sticky top-auto w-full px-2 py-4" onSubmit={submitSearch}>
      <div className="min-w-screen mx-auto backdrop-blur-xl bg-white/40 border-2 border-black/10 shadow-xl grid  grid-cols-2 gap-2 py-2 justify-items-stretch px-2 rounded-md">
        {/* search input */}
        <InputField
          type="text"
          placeholder="Search by specialty or name of facility"
          name="query"
          value={searchTerm}
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
          close={toggleLocationDropdown}
        />

        <SelectDropdown
          className="col-span-2"
          options={facilityOptions}
          selectTitle="facility type"
          onOptionClicked={handleFacilityType}
          selectedOption={facilityTypeInput}
          toggleDropdown={toggleFacilityTypeDropdown}
          isOpen={isFacilityTypeOpen}
          close={toggleFacilityTypeDropdown}
        />

        <button
          type="submit"
          value="Find facility"
          className={`w-full  col-span-2 py-2 flex items-center justify-center text-xs rounded-md  cursor-pointer text-white 
          ${
            !searchTerm
              ? "bg-secondary focus:none cursor-not-allowed"
              : "bg-primary hover:scale-95 ease-out duration-300"
          }`}
          disabled={!searchTerm ? true : false}
        >
          Find facility
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
