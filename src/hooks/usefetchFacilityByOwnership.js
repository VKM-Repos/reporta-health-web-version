import { useMutation } from "react-query";
import { fetchFaciliyByOwnership } from "@services/query/fetchFacilityByOwnership";

export const useFetchFacilityByOwnership = () => {
    const { mutate, data, isLoading, isError, status } = useMutation({
        mutationFn: fetchFaciliyByOwnership,
        onSuccess: (returnedData) => {
            // console.log(returnedData)
        },
        onError: (error) => {
            // console.log(error)
        }
    })

    return { facilityByOwnershipMutate: mutate, facilityByOwnershipData: data, facilityByOwnershipLoading: isLoading, isError, facilityByOwnershipStatus: status }
}