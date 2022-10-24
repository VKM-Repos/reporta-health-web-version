import { useInfiniteQuery } from "react-query";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";

import { FETCH_NEAREST_FACILITY_KEY } from "@config/queryKeys";

export const useFetchNearestFacilities = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    status,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    FETCH_NEAREST_FACILITY_KEY,
    fetchNearestFacility,
    {
      getNextPageParam: (lastPage, pages) => {
        console.log("last page na", lastPage?.next_page_url);
        if (lastPage?.next_page_url) {
          return pages?.length + 1;
        }
      },
    }
    // {
    //   onSuccess: (result) => {
    //   },
    // }
  );

  return {
    isError,
    error,
    data,
    status,
    fetchNextPage,
    hasNextPage,
  };
};
