import { authInstanceAxios } from "@config/axiosInstance";

export const fetchFaciliyByLeveOfCare = async (query) => {
    const result = await authInstanceAxios.get(`https://api.reportahealth.org/v1/facility_count_by_state_care_level?state=${query}`)
    return result
}