import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { searchFacilityStoreName, searchFacilityVersion } from "@config/index";

let searchFacilityStore = (set) => ({
  searchResults: null,

  populateSearchResult: (payload) => {
    set(() => ({
      searchResults: payload,
    }));
  },

  refreshSearchFacilityResults: (payload) => {
    set(() => ({
      searchResults: payload,
    }));
  },

  reset: () => {
    set(() => ({ searchResults: null }));
  },
});

searchFacilityStore = devtools(searchFacilityStore);

searchFacilityStore = persist(searchFacilityStore, {
  name: searchFacilityStoreName,
  version: searchFacilityVersion,
});

export const useSearchFacilityStore = create(searchFacilityStore);
