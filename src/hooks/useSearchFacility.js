import { useMutation } from "react-query";
import Router from "next/router";
import { useSearchFacilityStore } from "@store/searchFacility.store";
import { searchFacilityData } from "@services/query/searchFacility.service";
import shallow from "zustand/shallow";
import DialogueBox from "@components/DialogueBox/DialogueBox";

export const useSearchFacility = () => {
  const [populateSearchResult] = useSearchFacilityStore(
    (state) => [state.populateSearchResult],
    shallow
  );

  const { mutate, data, isLoading, isError, isFetching } = useMutation({
    mutationFn: searchFacilityData,
    onSuccess: (returnedData) => {
      populateSearchResult(returnedData?.data?.data);
      console.log("returned data", returnedData);

      // window.location.replace("/search-results");
    },

    onError: () => {
      // add error toast
    },
  });
  return {
    mutate,
    data,
    isLoading,
    isError,
    isFetching,
  };
};
