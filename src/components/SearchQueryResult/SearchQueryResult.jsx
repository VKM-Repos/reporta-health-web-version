import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { FETCH_NEAREST_FACILITY_KEY } from "@config/queryKeys";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "react-query";
import shallow from "zustand/shallow";

import FacilityInfo from "./FacilityInfo";

const SearchQueryResult = () => {
  const { data, status, fetchNextPage, hasNextPage } =
    useFetchNearestFacilities();
  // console.log("This kind love", hasNextPage);

  return (
    <div className="pt-12 h-screen flex flex-col bg-white text-black justify-items-stretch overflow-y-scroll">
      {/* <div className="my-4 px-4 py-2 text-lg font-semibold border-b border-gray text-primary">
        {totalSearchResults} Results in :{" "}
        <span className="text-secondary">{locationSearchResults}</span>{" "}
      </div> */}

      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div className="w-1/2 my-6 text-black text-opacity-40 text-center mx-auto">
              <LoadingSpinner text="loading..." />
            </div>
          }
        >
          <div className="">
            {data?.pages &&
            Array.isArray(data.pages) &&
            data?.pages.length !== 0
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
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default SearchQueryResult;
