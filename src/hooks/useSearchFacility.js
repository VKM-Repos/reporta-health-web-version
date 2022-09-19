import { useMutation, useQuery } from "react-query";
import Router from "next/router";
import { useSearchFacilityStore } from "@store/searchFacility.store";
import { searchFacilityData } from "@services/query/searchFacility.service"
import { USER_QUERY_KEY } from "@config/queryKeys";
import shallow from "zustand/shallow";

export const useSearchFacility = () => {
  const [populateSearchResult] = useSearchFacilityStore(
    (state) => [state.populateSearchResult],
    shallow
  );

  const { mutate, data, isLoading, error, isFetching } = useMutation({
    mutationFn: searchFacilityData,
    onSuccess: (returnedData) => {
      populateSearchResult(returnedData?.data)
      console.log(returnedData?.data)
      window.location.replace("/search-results");

    },
  })
  return {
    mutate,
    data,
    isLoading,
    error,
    isFetching,
  };
};
