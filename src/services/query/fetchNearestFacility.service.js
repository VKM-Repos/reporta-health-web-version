import { publicInstanceAxios } from "@config/axiosInstance"; // changed: was authInstanceAxios, nearby is public

/**
 * @desc fetches all nearest facilities within user location
 * @returns {Object}
 */

function getPreciseLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve([pos.coords.latitude, pos.coords.longitude]), // changed: success callback now only resolves
      (err) => reject(err) // changed: error callback properly passed as 2nd arg to getCurrentPosition
    );
  });
}

export const fetchNearestFacility = async ({ pageParam = 1, meta }) => {
  try {
    if (typeof window === "object" && "geolocation" in navigator) {
      const [lat, lng] = await getPreciseLocation(); // changed: was "let coords = ...", now destructures lat/lng directly

      const response = await publicInstanceAxios.get(
        `/facilities/nearby/?lat=${lat}&lng=${lng}${meta?.serviceParams || ""}` // added: append service/location filters
      );
      return response?.data;
    } else {
      console.log("Error: Geolocation Not Supported");
    }
  } catch (err) {
    console.log(`Error: Unable to Fetch GeoLocation data: ${err}`);
  }
};
