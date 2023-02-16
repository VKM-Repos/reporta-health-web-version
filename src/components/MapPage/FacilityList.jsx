import PulseLoader from "@components/Loader/PulseLoader";
import { authInstanceAxios } from "@config/axiosInstance";
import {
  FETCH_NEAREST_FACILITY_KEY,
  SEARCH_FACILITY_KEY,
} from "@config/queryKeys";
import { MapContext } from "@context/mapContext";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";
import React, { useContext, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import FacilityItem from "./FacilityItem";

const FacilityList = ({ searchTerm, defaultApi, setDefaultApi, toggle }) => {
  const {
    status,
    data,
    error,
    isFetching,
    fetchMore,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery([FETCH_NEAREST_FACILITY_KEY], fetchNearestFacility, {
    enabled: defaultApi,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.next_page_url) {
        return pages?.length + 1;
      } else refetch;
    },
    getFetchMore: (lastPage, pages) => {
      if (lastPage.length > 0) {
        return pages.length + 1;
      }
      return false;
    },
  });

  const searchFacility = async () => {
    const result = await authInstanceAxios.get(`/search/?query=${searchTerm}`);
    return result?.data?.data;
  };

  const {
    status: searchStatus,
    data: searchData,
    error: searchError,
    isFetching: searchIsFetching,
    fetchMore: searchFetchMore,
    hasNextPage: searchHasNextPage,
    isFetchingNextPage: searchIsFetchingNextPage,
    fetchNextPage: searchFetchNextPage,
    refetch: searchRefetch,
  } = useInfiniteQuery([SEARCH_FACILITY_KEY, searchTerm], searchFacility, {
    enabled: !defaultApi,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.next_page_url) {
        return pages?.length + 1;
      } else searchRefetch;
    },
    getFetchMore: (lastPage, pages) => {
      if (lastPage.length > 0) {
        return pages.length + 1;
      }
      return false;
    },
  });

  const { setNearestFacilities, setSearchFacilities, setSelectedFacility } =
    useContext(MapContext);

  useEffect(() => {
    setNearestFacilities(data);
  }, [data, setNearestFacilities]);

  useEffect(() => {
    setSearchFacilities(searchData);
  }, [searchData, setSearchFacilities]);

  return (
    <div className="w-full max-h-full overflow-x-hidden overflow-y-scroll">
      {defaultApi ? (
        <>
          {status === "loading" && <PulseLoader />}
          {status === "error" && <div>An error occurred: {error.message}</div>}
          {status === "success" && (
            <>
              {data?.pages &&
              Array.isArray(data.pages) &&
              data?.pages.length !== 0 ? (
                data?.pages.map((result) => {
                  return result?.data?.map((facility) => (
                    <div
                      key={facility.id}
                      onClick={() => {
                        setSelectedFacility(facility);
                        toggle();
                        refetch();
                      }}
                    >
                      <FacilityItem
                        reg_fac_name={facility.reg_fac_name}
                        average_rating={facility.average_rating}
                        facility_level={facility.facility_level}
                        street_name={facility.street_name}
                        statename={facility.statename}
                        operational_hours={facility.operational_hours}
                        services={facility.services}
                        getFacility={() => {
                          setSelectedFacility(facility);
                        }}
                      />
                    </div>
                  ));
                })
              ) : (
                <div className="w-full h-full mt-[5rem] flex flex-col items-center justify-center text-black/20">
                  <svg
                    className="w-1/3"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none" />
                      </g>
                      <g id="icons_Q2" data-name="icons Q2" fill="currentColor">
                        <path d="M24,2C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Zm0,8a8.7,8.7,0,0,1,4.8,1.4L16.4,23.8A8.7,8.7,0,0,1,15,19,9,9,0,0,1,24,10Zm0,18a8.7,8.7,0,0,1-4.8-1.4L31.6,14.2A8.7,8.7,0,0,1,33,19,9,9,0,0,1,24,28Z" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-semibold ">Location not found</h4>
                </div>
              )}
              <div>
                <div
                  disabled={!hasNextPage || isFetchingNextPage}
                  className="w-fit mx-auto pb-16"
                >
                  {isFetchingNextPage ? (
                    <PulseLoader />
                  ) : hasNextPage ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault;
                        fetchNextPage();
                      }}
                      className="w-full my-4 px-8 py-2 font-semibold text-primary text-center mx-auto cursor-pointer "
                    >
                      Load more
                    </button>
                  ) : (
                    <div className="w-full h-full my-[1rem] flex flex-col items-center justify-center text-black/20">
                      <svg
                        className="w-1/3"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="invisible_box" data-name="invisible box">
                            <rect width="48" height="48" fill="none" />
                          </g>
                          <g
                            id="icons_Q2"
                            data-name="icons Q2"
                            fill="currentColor"
                          >
                            <path d="M24,2C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Zm0,8a8.7,8.7,0,0,1,4.8,1.4L16.4,23.8A8.7,8.7,0,0,1,15,19,9,9,0,0,1,24,10Zm0,18a8.7,8.7,0,0,1-4.8-1.4L31.6,14.2A8.7,8.7,0,0,1,33,19,9,9,0,0,1,24,28Z" />
                          </g>
                        </g>
                      </svg>
                      <h4 className="text-xl font-semibold ">no data</h4>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {isFetching && !isFetchingNextPage ? <PulseLoader /> : null}
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {searchStatus === "loading" && <PulseLoader />}
          {searchStatus === "error" && (
            <div>An error occurred: {searchError.message}</div>
          )}
          {searchStatus === "success" && (
            <>
              {searchData?.pages &&
              Array.isArray(searchData.pages) &&
              searchData?.pages.length !== 0 ? (
                searchData?.pages.map((result) => {
                  return result?.data?.map((facility) => (
                    <div
                      key={facility.id}
                      onClick={() => {
                        setSelectedFacility(facility);
                        toggle();
                        searchRefetch();
                      }}
                    >
                      <FacilityItem
                        reg_fac_name={facility.reg_fac_name}
                        average_rating={facility.average_rating}
                        facility_level={facility.facility_level}
                        street_name={facility.street_name}
                        statename={facility.statename}
                        operational_hours={facility.operational_hours}
                        services={facility.services}
                        direction={facility}
                      />
                    </div>
                  ));
                })
              ) : (
                <div className="w-full h-full mt-[5rem] flex flex-col items-center justify-center text-black/20">
                  <svg
                    className="w-1/3"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none" />
                      </g>
                      <g id="icons_Q2" data-name="icons Q2" fill="currentColor">
                        <path d="M24,2C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Zm0,8a8.7,8.7,0,0,1,4.8,1.4L16.4,23.8A8.7,8.7,0,0,1,15,19,9,9,0,0,1,24,10Zm0,18a8.7,8.7,0,0,1-4.8-1.4L31.6,14.2A8.7,8.7,0,0,1,33,19,9,9,0,0,1,24,28Z" />
                      </g>
                    </g>
                  </svg>
                  <h4 className="text-xl font-semibold ">Location not found</h4>
                </div>
              )}
              <div>
                <div
                  disabled={!searchHasNextPage || searchIsFetchingNextPage}
                  className="w-fit mx-auto"
                >
                  {searchIsFetchingNextPage ? (
                    <PulseLoader />
                  ) : searchHasNextPage ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault;
                        searchFetchNextPage();
                      }}
                      className="w-full my-4 px-8 py-2 font-semibold text-primary text-center mx-auto cursor-pointer "
                    >
                      Load more
                    </button>
                  ) : (
                    <div className="w-full h-full my-[1rem] flex flex-col items-center justify-center text-black/20">
                      <svg
                        className="w-1/3"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="invisible_box" data-name="invisible box">
                            <rect width="48" height="48" fill="none" />
                          </g>
                          <g
                            id="icons_Q2"
                            data-name="icons Q2"
                            fill="currentColor"
                          >
                            <path d="M24,2C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Zm0,8a8.7,8.7,0,0,1,4.8,1.4L16.4,23.8A8.7,8.7,0,0,1,15,19,9,9,0,0,1,24,10Zm0,18a8.7,8.7,0,0,1-4.8-1.4L31.6,14.2A8.7,8.7,0,0,1,33,19,9,9,0,0,1,24,28Z" />
                          </g>
                        </g>
                      </svg>
                      <h4 className="text-xl font-semibold ">no data</h4>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {searchIsFetching && !searchIsFetchingNextPage ? (
                  <PulseLoader />
                ) : null}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FacilityList;
