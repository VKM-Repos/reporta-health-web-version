import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc fetches all nearest facilities within user location
 * @returns {Object}
 */

let latitude = 9.0765;
let longitude = 7.3986;
let fac_type = 1;

export const fetchNearestFacility = async ({ queryKey }) => {
  const page = queryKey[1] ? queryKey[1] : 1;

  const user = await authInstanceAxios.get(
    `/fetch_nearest_facilities?latitude=${latitude}&longitude=${longitude}&fac_type=${fac_type}&page=${page}`
  );
  return user?.data;
};
