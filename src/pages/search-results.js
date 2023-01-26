import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import SearchHeader from "@components/SearchQueryResult/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import mapIcon from "@assets/images/map-icon.svg";
import listIcon from "@assets/images/list-icon.svg";
import { useSearchFacility } from "@components/Forms/SearchForm/SearchForm";
import SearchFacilityData from "@components/SearchQueryResult/SearchFacilityData";

const Map = dynamic(() => import("@components/SearchQueryResult/Map"), {
  ssr: false,
});

export default function SearchResult() {
  const [showFacilityList, setShowFacilityList] = useState(false);
  const { data } = useFetchNearestFacilities();

  console.log(SearchFacilityData);

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
                animate={{ width: "35vw", opacity: 1 }}
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
        <div className="fixed z-10 rounded-lg bg-white/50 hover:bg-white text-black text-opacity-90 font-semibold border border-black border-opacity-30 shadow-xl right-5 bottom-10 lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer">
          {showFacilityList ? (
            <button
              onClick={() => setShowFacilityList(!showFacilityList)}
              className="py-2 px-4 z-40  w-full space-x-2 flex flex-row items-center"
            >

              <span
                style={{
                  backgroundImage: `url(${mapIcon.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                }}
                className="w-[1.5rem] aspect-square "
              ></span>
              <p className="text-[90%] whitespace-nowrap">show map</p>{" "}

            </button>
          ) : (
            <button
              onClick={() => setShowFacilityList(!showFacilityList)}
              className="py-2 px-4 z-40  w-full space-x-2 flex flex-row items-center"
            >

              <span
                style={{
                  backgroundImage: `url(${listIcon.src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                }}
                className="w-[1.5rem] aspect-square "
              ></span>
              <p className="text-[90%] whitespace-nowrap">show list</p>{" "}

            </button>
          )}
        </div>
      </div>

    </section>
  );
}
