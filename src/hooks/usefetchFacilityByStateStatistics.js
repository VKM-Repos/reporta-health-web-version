import { useQuery } from "react-query";
import { fetchFacilityByStateStatistics } from "@services/query/fetchFacilityByStateStatistics";
import { USER_QUERY_KEY } from "@config/queryKeys";

export const useFetchFacilityByStateStatistics = () => {
    const { data, isLoading, isError, status } = useQuery({
        USER_QUERY_KEY,
        queryFn: fetchFacilityByStateStatistics,
    })

    return { isLoading, fetchedData: data, isError, status }
}