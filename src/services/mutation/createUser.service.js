import { publicInstanceAxios } from "@config/axiosInstance";

export const submitSignupData = async (values) => {
  const res = await publicInstanceAxios.post("/register", values);
  return res;
};
