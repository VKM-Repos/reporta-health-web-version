import FetchMore from "@components/Button/FetchMore";
import { FETCH_NEAREST_FACILITY_KEY } from "@config/queryKeys";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";
import { useFetchNearestFacilityStore } from "@store/fetchNearestFacility.store";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import shallow from "zustand/shallow";

import FacilityInfo from "./FacilityInfo";

const SearchQueryResult = () => {
  // const [runQuery, setRunQuery] = useState(false);
  const nearestFacility =
    useFetchNearestFacilityStore()?.nearestFacilities?.data;

  return (
    <div className="pt-12 h-screen flex flex-col bg-white text-black justify-items-stretch overflow-y-scroll">
      {/* <div className="my-4 px-4 py-2 text-lg font-semibold border-b border-gray text-primary">
        {totalSearchResults} Results in :{" "}
        <span className="text-secondary">{locationSearchResults}</span>{" "}
      </div> */}
      <div className="">
        {nearestFacility &&
        Array.isArray(nearestFacility) &&
        nearestFacility?.length !== 0 ? (
          <FacilityInfo facilityInfo={nearestFacility} />
        ) : (
          "nothing to show"
        )}
      </div>
      <FetchMore
      // fetchMore={setRunQuery}
      // isLoading={isLoading}
      // prefetchMore={prefetchMore}
      />
    </div>
  );
};

export default SearchQueryResult;
