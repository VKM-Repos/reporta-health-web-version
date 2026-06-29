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
  servicesFilter,       // added: receive filter state
  setServicesFilter,    // added: receive filter setter
}) => {
  const { searchFacilities } = useContext(MapContext);
  const locationOptions = nigerianStates;
  const facilityOptions = facilityTypes;
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isFacilityTypeOpen, setIsFacilityTypeOpen] = useState(false);

  const toggleLocationDropdown = () => setIsLocationOpen(!isLocationOpen);
  const toggleFacilityTypeDropdown = () =>
    setIsFacilityTypeOpen(!isFacilityTypeOpen);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocation = (event) => {
    setLocationInput(event.target.textContent);
    setIsLocationOpen(!isLocationOpen);
  };

  const handleFacilityType = (event) => {
    setFacilityTypeInput(event.target.textContent);
    setIsFacilityTypeOpen(!isFacilityTypeOpen);
  };

  // added: toggle a single service chip on/off without affecting the others
  const toggleServiceChip = (key) => {
    setServicesFilter((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // added: chip definitions — label shown to user, key matches the backend query param
  const serviceChips = [
    { label: "GBV Services", key: "has_gbv_services" },
    { label: "SARC", key: "has_sarcs" },
    { label: "Fistula", key: "has_fistula_programme" },
  ];

  const submitSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
    setDefaultApi(false);
  };

  return (
    <form className="sticky top-auto w-full px-2 py-4" onSubmit={submitSearch}>
      <div className="min-w-screen mx-auto backdrop-blur-xl bg-white/40 border-2 border-black/10 shadow-xl grid grid-cols-2 gap-2 py-2 justify-items-stretch px-2 rounded-md">
        {/* search input — unchanged */}
        <InputField
          type="text"
          placeholder="Search by specialty or name of facility"
          name="query"
          value={searchTerm}
          handleChange={handleChange}
        />

        {/* location dropdown — unchanged */}
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

        {/* facility type dropdown — unchanged */}
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

        {/* added: service filter chips — GBV, SARC, Fistula */}
        <div className="col-span-2 flex flex-wrap gap-2 pt-1">
          {serviceChips.map(({ label, key }) => (
            <button
              key={key}
              type="button"  // added: prevent form submit on chip click
              onClick={() => {
                toggleServiceChip(key);
                setDefaultApi(false); // added: trigger search mode when a chip is toggled
              }}
              className={`text-xs px-3 py-1 rounded-full border font-semibold transition-all duration-200
                ${
                  servicesFilter[key]
                    ? "bg-primary text-white border-primary"        // added: active chip style uses existing primary color
                    : "bg-transparent text-black/60 border-black/30 hover:border-primary hover:text-primary" // added: inactive chip style
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* submit button — unchanged */}
        <button
          type="submit"
          value="Find facility"
          className={`w-full col-span-2 py-2 flex items-center justify-center text-xs rounded-md cursor-pointer text-white 
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
