import { publicInstanceAxios } from "@config/axiosInstance";

// Deduplicate identical in-flight requests — collapses React re-render storms into one fetch
const inFlight = new Map();

export const fetchFacilityClusters = async (params) => {
  const query = new URLSearchParams(params).toString();
  const url = `/facilities/clusters/?${query}`;

  if (inFlight.has(url)) {
    return inFlight.get(url);
  }

  const promise = publicInstanceAxios.get(url)
    .then(res => res?.data)
    .finally(() => inFlight.delete(url));

  inFlight.set(url, promise);
  return promise;
};

// Fetch a single facility by ID
export const fetchFacilityById = async (id) => {
  const result = await publicInstanceAxios.get(`/facilities/${id}/`);
  return result?.data;
};
