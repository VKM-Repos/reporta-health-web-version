import { useMutation } from "react-query";
import Router from "next/router";
import { fetchNearestFacilityData } from "@services/query/fetchNearestFacility.service";
import shallow from "zustand/shallow";
import { useFetchNearestFacilityStore } from "@store/fetchNearestFacility.store";

export const useFetchNearestFacility = () => {
  const [populateSearchResult] = useFetchNearestFacilityStore(
    (state) => [state.populateSearchResult],
    shallow
  );

  const { mutate, data, isLoading, error, isFetching } = useMutation({
    mutationFn: fetchNearestFacilityData,
    onSuccess: (returnedData) => {
      populateSearchResult(returnedData?.data);
      console.log(returnedData?.data);
      Router.replace("/find-facility");
    },
     onError: () => {
      // add error toast
      alert("An error occured")
      return console.log("error fetching facility");
    },
  });
  return {
    mutate,
    data,
    isLoading,
    error,
    isFetching,
  };
};
