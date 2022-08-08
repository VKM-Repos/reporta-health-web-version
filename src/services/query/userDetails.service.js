import { authInstanceAxios } from "@config/axiosInstance";
// import { useUserCredentialsStore } from "@store/authStore.store";

/**
 * @desc gets fresh user details..
 * @returns {Object}
 */
// let jwt = useUserCredentialsStore.getState()?.jwt;

export const fetchUserDetails = async () => {
  const user = await authInstanceAxios.get("/user");
  return user?.data;
};
