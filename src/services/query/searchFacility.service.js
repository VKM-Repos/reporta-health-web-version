import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets the data for facilities based on query param
 * @returns {Object}
 */

export const searchFacility = async (query) => {
  const result = await authInstanceAxios.get(`/search/?query=${query}`);
  return result?.data;
};
