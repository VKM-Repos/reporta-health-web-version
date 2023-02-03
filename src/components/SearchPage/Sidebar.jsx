import React, { useState } from "react";
import FacilityList from "./FacilityList";
import SearchForm from "./SearchForm";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultApi, setDefaultApi] = useState(true);

  const [locationInput, setLocationInput] = useState("");
  const [facilityTypeInput, setFacilityTypeInput] = useState("");
  return (
    <div className=" pt-[3rem] h-fit relative grid grid-cols-1 backdrop-blur text-black justify-items-stretch ">
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
