import React, { useState, useContext } from "react";
import FacilityList from "./FacilityList";
import SearchForm from "./SearchForm";
import { MapContext } from "@context/mapContext";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultApi, setDefaultApi] = useState(true);
  const {
    servicesFilter, setServicesFilter,
    locationInput, setLocationInput,           // changed: now from shared context
    facilityTypeInput, setFacilityTypeInput,   // changed: now from shared context
  } = useContext(MapContext);

  return (
    <div className="pt-[3rem] h-fit relative grid grid-cols-1 backdrop-blur text-black justify-items-stretch">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationInput={locationInput}
        setLocationInput={setLocationInput}
        facilityTypeInput={facilityTypeInput}
        setFacilityTypeInput={setFacilityTypeInput}
        setDefaultApi={setDefaultApi}
        servicesFilter={servicesFilter}         // added: pass filter state down
        setServicesFilter={setServicesFilter}   // added: pass setter down
      />
      <FacilityList
        defaultApi={defaultApi}
        setDefaultApi={setDefaultApi}
        searchTerm={searchTerm}
        servicesFilter={servicesFilter}
        locationInput={locationInput}
        facilityTypeInput={facilityTypeInput}
      />
    </div>
  );
};

export default Sidebar;
