import { useMutation } from "react-query";
import { fetchFaciliyByLeveOfCare } from "@services/query/fetchFacilityByLevelOfCare";

export const useFetchFacilityByLevelOfCare = () => {
    const { mutate, data, isLoading, isError, status } = useMutation({
        mutationFn: fetchFaciliyByLeveOfCare,
        onSuccess: (returnedData) => {
            // console.log(returnedData)
        },
        onError: (error) => {
            // console.log(error)
        }
    })

    return { mutate, facilityLevelByCareData: data, facilityLevelByCareLoading: isLoading, isError, facilityLevelByCareStatus: status }
}