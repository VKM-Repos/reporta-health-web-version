import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
  fetchNearestFacilityStoreName,
  fetchNearestFacilityVersion,
} from "@config/index";

let fetchNearestFacilityStore = (set) => ({
  fetchResults: null,

  populateSearchResult: (payload) => {
    set(() => ({
      fetchResults: payload,
    }));
  },

  refreshSearchFacilityResults: (payload) => {
    set(() => ({
      fetchResults: payload,
    }));
  },

  reset: () => {
    set(() => ({ fetchResults: null }));
  },
});

fetchNearestFacilityStore = devtools(fetchNearestFacilityStore);

fetchNearestFacilityStore = persist(fetchNearestFacilityStore, {
  name: fetchNearestFacilityStoreName,
  version: fetchNearestFacilityVersion,
});

export const useFetchNearestFacilityStore = create(fetchNearestFacilityStore);
