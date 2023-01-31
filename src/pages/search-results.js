import { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

import SearchHeader from "@components/SearchQueryResult/SearchHeader";

import mapIcon from "@assets/images/map-icon.svg";
import listIcon from "@assets/images/list-icon.svg";

import Sidebar from "@components/SearchPage/Sidebar";


const Map = dynamic(() => import("@components/SearchPage/Map"), {
  ssr: false,
});

// const Map = dynamic(() => import("@components/SearchQueryResult/Map"), {
//   ssr: false,
// });


export default function SearchResult() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <section className="w-screen flex flex-col relative overflow-x-hidden">
      <div className="w-full flex justify-center">
        <SearchHeader />
        <Map className={`w-screen h-screen z-30 pt-12 `} />
        {/* show panels button */}
        <div className="fixed z-50 w-fit rounded-lg bg-white hover:bg-white text-black text-opacity-90 font-semibold border border-black border-opacity-30  left-3 top-[4rem] lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer">
          {showSideBar ? (
            <button
              onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
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
              <p className="text-[90%] whitespace-nowrap">show map view</p>{" "}

            </button>
          ) : (
            <button
              onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
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
              <p className="text-[90%] whitespace-nowrap">show list of facilities</p>{" "}

            </button>
          )}
        </div>



        {showSideBar && (

          <div>
            {/* tablet and desktop */}
            <div className="z-30 absolute hidden md:block left-0 inset-y-0">
              <div onClick={() => setShowSideBar((showSideBar) => !showSideBar)} className="fixed inset-0 w-screen h-screen z-10"></div>

              <div className="w-screen relative  z-40 ">
                <AnimatePresence>
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{
                      x: "0"
                    }}
                    exit={{
                      x: "0"
                    }}
                    transition={{ type: "spring", bounce: 0, duration: 0.7 }}
                    className="fixed text-white shadow-lg inset-y-0 left-0 w-full max-w-sm h-screen"
                  >
                    <Sidebar />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            {/* mobile view */}
            <div className="z-30 absolute md:hidden block left-0 inset-y-0">
              <div onClick={() => setShowSideBar((showSideBar) => !showSideBar)} className="fixed inset-0 w-screen h-screen z-10"></div>
              <div className="relative  z-40">
                <AnimatePresence>
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{
                      x: 0
                    }}
                    exit={{
                      x: "100%"
                    }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    className="fixed text-white shadow-lg inset-y-0 bottom-0 w-full max-w-sm h-screen"
                  >
                    <Sidebar />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
}
