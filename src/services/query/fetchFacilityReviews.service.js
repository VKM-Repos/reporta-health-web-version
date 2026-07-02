import { publicInstanceAxios } from "@config/axiosInstance";

export const fetchFacilityReviews = async ({ pageParam = 1, facilityId }) => {
  const result = await publicInstanceAxios.get(
    `/facilities/${facilityId}/reviews/?page=${pageParam}`
  );
  return result?.data;
};
