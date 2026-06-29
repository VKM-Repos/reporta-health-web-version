import React, { useState, useContext } from "react";
import FacilityList from "./FacilityList";
import SearchForm from "./SearchForm";
import { MapContext } from "@context/mapContext";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultApi, setDefaultApi] = useState(true);
  const [locationInput, setLocationInput] = useState("");
  const [facilityTypeInput, setFacilityTypeInput] = useState("");
  const { servicesFilter, setServicesFilter } = useContext(MapContext); // use shared context instead of local state

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
        servicesFilter={servicesFilter}  // added: FacilityList uses this to build query params
      />
    </div>
  );
};

export default Sidebar;
