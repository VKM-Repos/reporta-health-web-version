import { authInstanceAxios } from "@config/axiosInstance";

export const fetchFaciliyByOwnership = async (query) => {
    const result = await authInstanceAxios.get(`https://api.reportahealth.org/v1/facility_count_by_state_ownership?state=${query}`)
    return result
}