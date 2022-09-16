import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets fresh user details..
 * @returns {Object}
 */

const params = {
  latitude: "9.106868 ",
  longitude: "7.417006",
  fac_type: "hospitals",
};

export const fetchNearestFacilityData = async () => {
  const user = await authInstanceAxios.get(`/fetch_nearest_facilities`, {
    params,
  });
  return user?.data;
};
