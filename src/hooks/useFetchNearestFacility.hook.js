import { useQuery } from "react-query";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";
import { useFetchNearestFacilityStore } from "@store/fetchNearestFacility.store";
import { FETCH_NEAREST_FACILITY_KEY } from "@config/queryKeys";
import shallow from "zustand/shallow";

export const useFetchNearestFacilities = (param) => {
  const [updateNearestFacilityStore] = useFetchNearestFacilityStore(
    (state) => [state?.updateNearestFacilityStore],
    shallow
  );

  const [updateCurrentPage] = useFetchNearestFacilityStore(
    (state) => [state?.updateNearestFacilityStore],
    shallow
  );
  const [currentPage] = useFetchNearestFacilityStore(
    (state) => [state?.currentPage],
    shallow
  );
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    isFetched,
  } = useQuery(
    [FETCH_NEAREST_FACILITY_KEY, currentPage],
    fetchNearestFacility,
    {
      onSuccess: (result) => {
        updateNearestFacilityStore(result?.data);
        console.log("feeee", updateNearestFacilityStore);
        if (param?.fetchMore === true && currentPage < result?.page) {
          const newPage = result?.page + 1;
          updateCurrentPage(newPage);
        }
      },
    }
  );

  return {
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    isLoading,
    isFetched,
  };
};
