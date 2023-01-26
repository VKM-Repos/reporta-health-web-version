import React, { useState } from "react";
import SearchForm from "@components/Forms/SearchForm/SearchForm";
import SearchFacilityData from "./SearchFacilityData";
import NearestFacilityData from "./NearestFacilityData";

const SearchQueryResult = ({}) => {
  const [dataArray, setDataArray] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="pt-10 h-screen flex flex-col bg-white text-black justify-items-stretch overflow-y-scroll">
      <div className="py-2 bg-white shadow-lg sticky top-0 z-10">
        <SearchForm
          setDataArray={setDataArray}
          setIsSearching={setIsSearching}
        />
      </div>
      {isSearching ? (
        <SearchFacilityData dataArray={dataArray} />
      ) : (
        <NearestFacilityData />
      )}
    </div>
  );
};

export default SearchQueryResult;
