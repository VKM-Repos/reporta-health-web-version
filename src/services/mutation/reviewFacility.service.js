import { authInstanceAxios } from "@config/axiosInstance";

export const reviewFacility = async ({ facilityId, rating, body, isAnonymous = false }) => {
  const res = await authInstanceAxios.post(
    `/facilities/${facilityId}/reviews/create/`,
    { facility: facilityId, rating, body, is_anonymous: isAnonymous }
  );
  return res?.data;
};
