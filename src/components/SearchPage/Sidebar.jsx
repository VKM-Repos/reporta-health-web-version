import React, { useState } from "react";
import FacilityList from "./FacilityList";
import SearchForm from "./SearchForm";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultApi, setDefaultApi] = useState(true);
  console.log("input", searchTerm);
  const [locationInput, setLocationInput] = useState("");
  const [facilityTypeInput, setFacilityTypeInput] = useState("");
  return (
    <div className="pt-[6.7rem] h-screen flex flex-col bg-white text-black justify-items-stretch overflow-y-scroll">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationInput={locationInput}
        setLocationInput={setLocationInput}
        facilityTypeInput={facilityTypeInput}
        setFacilityTypeInput={setFacilityTypeInput}
        setDefaultApi={setDefaultApi}
      />
      <FacilityList
        defaultApi={defaultApi}
        setDefaultApi={setDefaultApi}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Sidebar;
