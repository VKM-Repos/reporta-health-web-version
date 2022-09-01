import { authInstanceAxios } from "@config/axiosInstance";
// import { useUserCredentialsStore } from "@store/authStore.store";

/**
 * @desc gets fresh user details..
 * @returns {Object}
 */
// let jwt = useUserCredentialsStore.getState()?.jwt;

export const searchFacilityData = async (query) => {
  const user = await authInstanceAxios.get(`/search/?query=${query}`);
  return user?.data;
};
