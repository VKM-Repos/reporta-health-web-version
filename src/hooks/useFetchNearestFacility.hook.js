import { useInfiniteQuery } from "react-query";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";

import { FETCH_NEAREST_FACILITY_KEY } from "@config/queryKeys";

export const useFetchNearestFacilities = () => {
  const {
    isLoading,
    isError,
    isFetching,
    error,
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery(FETCH_NEAREST_FACILITY_KEY, fetchNearestFacility, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.next_page_url) {
        return pages?.length + 1;
      } else return null;
      // const nextPage = pages.length + 1;
      // return lastPage?.next_page_url?.length !== 0 ? nextPage : null;
    },
  });

  return {
    isLoading,
    isError,
    isFetching,
    error,
    data,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
