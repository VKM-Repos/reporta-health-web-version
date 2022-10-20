import SearchHeader from "@components/SearchQueryResult/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import SearchForm from "@components/Forms/SearchForm/SearchForm";
import mapIcon from "@assets/images/map-icon.svg";
import listIcon from "@assets/images/list-icon.svg";

import { useSearchFacilityStore } from "@store/searchFacility.store";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useFetchNearestFacilityStore } from "@store/fetchNearestFacility.store";
import { FETCH_NEAREST_FACILITY_KEY } from "@config/queryKeys";
import { fetchNearestFacility } from "@services/query/fetchNearestFacility.service";
const Map = dynamic(() => import("@components/SearchQueryResult/Map"), {
  ssr: false,
});

export default function SearchResult() {
  const nearestFacility =
    useFetchNearestFacilityStore()?.nearestFacilities?.data;

  const [showFacilityList, setShowFacilityList] = useState(true);
  return (
    <section className="w-full flex flex-col relative overflow-x-hidden">
      <SearchHeader />

      <Map
        facilityInfo={nearestFacility}
        className={`w-screen h-screen z-10 pt-12 `}
      />

      <div className="w-full absolute z-20">
        <div className="w-full relative flex flex-row">
          <div className="hidden md:block">
            <AnimatePresence>
              {showFacilityList && (
                <motion.div
                  key="list"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "40vw", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className=""
                >
                  <SearchQueryResult />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="md:hidden block">
            <AnimatePresence>
              {showFacilityList && (
                <motion.div
                  key="list"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100vw", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className=""
                >
                  <SearchQueryResult />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full mt-16">
            <SearchForm />
          </div>

          <div className="fixed rounded-xl bg-white border border-secondary shadow-xl right-10 bottom-10 ">
            {showFacilityList ? (
              <button
                onClick={() => setShowFacilityList(!showFacilityList)}
                className="px-4 py-4 z-40 text-sm text-black text-opacity-60 font-semibold"
              >
                <span className="flex flex-row items-center">
                  <Image src={mapIcon} width="20" height="20" />{" "}
                  <p className="ml-2">show map</p>{" "}
                </span>
              </button>
            ) : (
              <button
                onClick={() => setShowFacilityList(!showFacilityList)}
                className=" px-4 py-4 z-40  text-sm text-black text-opacity-60 font-semibold"
              >
                <span className="flex flex-row items-center">
                  <Image src={listIcon} width="20" height="20" />{" "}
                  <p className="ml-2">show list</p>{" "}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
