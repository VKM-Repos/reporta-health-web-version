import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
  fetchNearestFacilityStoreName,
  fetchNearestFacilityVersion,
} from "@config/index";

// export const fetchNearestFacilityStore = create(
//   persist(
//     (set, get) => ({
//       nearestFacilities: null,
//       currentPage: 1,
//       // updateNearestFacilityStore: (data) => {
//       //   return set((state) => {
//       //     state.nearestFacilities = [
//       //       ...get().nearestFacilities,
//       //       ...data?.results,
//       //     ];
//       //   });
//       // },
//       updateNearestFacilityStore: (result) => {
//         set(() => ({
//           nearestFacilities: result,
//         }));
//       },

//       updateCurrentPage: (result, pageNum) => {
//         if (result !== null && get()?.currentPage < result?.total) {
//           return set((state) => {
//             state.currentPage = pageNum;
//           });
//         }
//         return set((state) => {
//           state.currentPage = pageNum;
//         });
//       },
//     }),
//     {
//       name: fetchNearestFacilityStoreName,
//       version: fetchNearestFacilityVersion,
//     }
//   )
// );

// import create from "zustand";
// import { persist, devtools } from "zustand/middleware";
// import { searchFacilityStoreName, searchFacilityVersion } from "@config/index";

let fetchNearestFacilityStore = (set, get) => ({
  nearestFacilities: null,

  updateNearestFacilityStore: (result) => {
    set(() => ({
      nearestFacilities: result,
    }));
  },

  updateCurrentPage: (result, pageNum) => {
    if (
      result !== null &&
      get()?.nearestFacilities?.current_page < result?.nearestFacilities?.total
    ) {
      return set((state) => {
        state.current_page = pageNum;
      });
    }
    return set((state) => {
      state.current_page = pageNum;
    });
    //  set(() => ({
    //    nearestFacilities: result,
    //  }));
  },

  refreshSearchFacilityResults: (results) => {
    set(() => ({
      nearestFacilities: results,
    }));
  },

  reset: () => {
    set(() => ({ nearestFacilities: null }));
  },
});

fetchNearestFacilityStore = devtools(fetchNearestFacilityStore);

fetchNearestFacilityStore = persist(fetchNearestFacilityStore, {
  name: fetchNearestFacilityStoreName,
  version: fetchNearestFacilityVersion,
});

export const useFetchNearestFacilityStore = create(fetchNearestFacilityStore);
