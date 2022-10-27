import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";

import React, { useState, useEffect } from "react";

import FacilityInfo from "@components/SearchQueryResult/FacilityInfo";
import PulseLoader from "@components/Loader/PulseLoader";
import { searchFacility } from "@services/query/searchFacility.service";

const SearchQueryResult = () => {
  const {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useFetchNearestFacilities();

  const totalSearchResults = data?.pages[0]?.total;
  const locationSearchResults = data?.pages[0]?.data[0]?.statename;

  return (
    <div className="pt-10 h-screen flex flex-col bg-white text-black justify-items-stretch overflow-y-scroll">
      <div className="mt-4 px-4 py-2 text-lg font-semibold border-b border-gray text-primary">
        {totalSearchResults} Result(s) in :{" "}
        <span className="text-secondary italic">{locationSearchResults}</span>{" "}
      </div>
      {/* IF USER HAS NOT SEARCH FOR FACILITY USING INPUT FIELD DISPLAY NEAREST FACILITY ELSE DISPLAY SEARCHED RESULTS */}
      {status === "loading" ? (
        <div className="text-center w-full h-screen flex items-center justify-center overflow-hidden">
          <PulseLoader />
        </div>
      ) : status === "error" ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {data?.pages && Array.isArray(data.pages) && data?.pages.length !== 0
            ? data?.pages.map((result) => {
                return result?.data?.map((facility) => (
                  <FacilityInfo
                    key={facility.id}
                    reg_fac_name={facility.reg_fac_name}
                    average_rating={facility.average_rating}
                    facility_level={facility.facility_level}
                    street_name={facility.street_name}
                    statename={facility.statename}
                    operational_hours={facility.operational_hours}
                  />
                ));
              })
            : "no facility found"}
          <div>
            <div
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="w-fit my-4 px-4 py-2 bg-background rounded-md text-black text-opacity-80 text-center mx-auto cursor-pointer font-semibold "
            >
              {isFetchingNextPage ? (
                <LoadingSpinner text="Loading..." />
              ) : hasNextPage ? (
                "Load more"
              ) : (
                "You've come to the end of the list"
              )}
            </div>
          </div>
          <div>
            {isFetching && !isFetchingNextPage ? (
              <LoadingSpinner text="" />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchQueryResult;
