import { authInstanceAxios } from "@config/axiosInstance";

export const loginData = async (values) => {
  const res = await authInstanceAxios.post("/report", values);
  return res;
};
