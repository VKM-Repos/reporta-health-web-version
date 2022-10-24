import { authInstanceAxios } from "@config/axiosInstance";

/**
 * @desc fetches all nearest facilities within user location
 * @returns {Object}
 */

function getPreciseLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve([pos.coords.latitude, pos.coords.longitude]);
    });
  });
}

export const fetchNearestFacility = async ({ pageParam = 1 }) => {
  // const page = 1;
  let fac_type = 1; // facility type value of 1 is given to hospitals
  try {
    if (typeof window === "object" && "geolocation" in navigator) {
      // get coords (getPreciseLocation => [lat, lng])
      let coords = await getPreciseLocation();

      const response = await authInstanceAxios.get(
        `/fetch_nearest_facilities?latitude=${coords[0]}&longitude=${coords[1]}&fac_type=${fac_type}&page=${pageParam}`
      );
      return response?.data?.data;
    } else {
      // eslint-disable-next-line no-console
      console.log(`Error: Geolocation Not Supported: ${err}`);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Error: Unable to Fetch GeoLocation data: ${err}`);
  }
};
