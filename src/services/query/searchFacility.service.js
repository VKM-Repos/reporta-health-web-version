import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets the data for facilities based on query param
 * @returns {Object}
 */

export const searchFacilityData = async (query) => {
  const user = await authInstanceAxios.get(`/search/?query=${query}`);
  return user?.data;
};
