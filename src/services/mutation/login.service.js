import { publicInstanceAxios } from "@config/axiosInstance";

export const loginData = async (values) => {
  const res = await publicInstanceAxios.post("/auth/jwt/create/", {
    email: values.username,
    password: values.password,
  });
  return res;
};