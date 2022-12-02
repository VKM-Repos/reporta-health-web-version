import { authInstanceAxios } from "@config/axiosInstance";


export const fetchFacilityByStateStatistics = async () => {
    const result = await authInstanceAxios.get('https://api.reportahealth.org/v1/facility_count_in_all_states')
    return result
}