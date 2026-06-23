import { useState, useCallback } from "react";
import { fetchFacilityClusters } from "@services/query/fetchFacilityClusters.service";

export const useFacilityClusters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchByBounds = useCallback(async (bbox, zoom, filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchFacilityClusters({ bbox, zoom, ...filters });
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchNearby = useCallback(async (lat, lng, zoom, radius_km = 10, filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchFacilityClusters({ lat, lng, zoom, radius_km, ...filters });
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, fetchByBounds, fetchNearby };
};