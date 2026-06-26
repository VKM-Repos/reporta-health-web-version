import { publicInstanceAxios } from "@config/axiosInstance";

/**
 * @desc fetches facility clusters or individual facilities for map display
 * @param {Object} params - either { bbox, zoom, ...filters } for browse mode
 *                           or { lat, lng, zoom, radius_km, ...filters } for nearby mode
 * @returns {Object} { type: 'clusters' | 'facilities', count, results }
 */
export const fetchFacilityClusters = async (params) => {
  const query = new URLSearchParams(params).toString();
  const response = await publicInstanceAxios.get(`/facilities/clusters/?${query}`);
  return response?.data;
};

// Fetch a single facility by ID
export const fetchFacilityById = async (id) => {
  const result = await publicInstanceAxios.get(`/facilities/${id}/`);
  return result?.data;
};