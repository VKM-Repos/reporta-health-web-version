import { useInfiniteQuery } from "react-query";
import { searchFacility } from "@services/query/searchFacility.service";
import { SEARCH_FACILITY_KEY } from "@config/queryKeys";

export const useSearchFacility = () => {
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
  } = useInfiniteQuery(
    SEARCH_FACILITY_KEY,
    searchFacility,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.next_page_url) {
          return pages?.length + 1;
        } else return undefined;
        // const nextPage = pages.length + 1;
        // return lastPage?.next_page_url?.length !== 0 ? nextPage : null;
      },
    }

    // {
    //   onSuccess: (result) => {
    //   },
    // }
  );

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
