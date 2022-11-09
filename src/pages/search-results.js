import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import { useSearchFacility } from "@hooks/useSearchFacility.hook";

import SearchHeader from "@components/SearchQueryResult/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import mapIcon from "@assets/images/map-icon.svg";
import listIcon from "@assets/images/list-icon.svg";

const Map = dynamic(() => import("@components/SearchQueryResult/Map"), {
  ssr: false,
});

export default function SearchResult() {
  const [showFacilityList, setShowFacilityList] = useState(true);

  const { data } = useFetchNearestFacilities();

  // TODO: CREATE A HOOK TO GET USER LOCATION AND IMPORT IT HERE

  return (
    <section className="w-full flex flex-col relative overflow-x-hidden">
      <SearchHeader />
      <Map className={`w-screen h-screen z-10 pt-12 `} data={data} />

      <div className="w-full absolute flex flex-row">
        <div className="hidden md:block z-10">
          <AnimatePresence>
            {showFacilityList && (
              <motion.div
                key="list"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "30vw", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className=""
              >
                <SearchQueryResult />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="md:hidden block z-10">
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

        {/* show panels button */}
        <div className="fixed z-10 rounded-lg bg-white text-black text-opacity-90 font-semibold border border-black border-opacity-30 shadow-xl right-10 bottom-10 ">
          {showFacilityList ? (
            <button
              onClick={() => setShowFacilityList(!showFacilityList)}
              className="px-4 py-4 z-40 text-sm "
            >
              <span className="flex flex-row items-center">
                <Image src={mapIcon} width="20" height="20" />{" "}
                <p className="ml-2">Show Map</p>{" "}
              </span>
            </button>
          ) : (
            <button
              onClick={() => setShowFacilityList(!showFacilityList)}
              className=" px-4 py-4 z-40  text-sm "
            >
              <span className="flex flex-row items-center">
                <Image src={listIcon} width="20" height="20" />{" "}
                <p className="ml-2">Show List</p>{" "}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
