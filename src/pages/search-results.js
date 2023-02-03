import { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import SearchHeader from "@components/SearchQueryResult/SearchHeader";
import mapIcon from "@assets/images/map-icon.svg";
import listIcon from "@assets/images/list-icon.svg";
import Sidebar from "@components/SearchPage/Sidebar";
// import Map from "@components/SearchPage/Map"

const Map = dynamic(() => import("@components/SearchPage/Map"), {
  ssr: false,
});


export default function SearchResult() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <section className="w-screen flex flex-col relative overflow-x-hidden">
      <div className="w-full flex">
        <SearchHeader />
        <Map className={`w-screen h-screen z-30 `} />
        {/* show panels button */}
        <div className="lg:z-[40] z-[90] relative">
          <button
            onClick={() => setShowSideBar(true)}
            className="py-2 px-4  w-fit h-fit  space-x-2 flex flex-row items-center  rounded-lg text-[80%] bg-primary text-white border border-primary  fixed lg:top-[3.3rem] bottom-1 right-2 lg:left-3  lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer"
          >
            <span
              style={{
                backgroundImage: `url(${mapIcon.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
              }}
              className="w-[1.2rem] aspect-square "
            ></span>
            <p className="text-[90%] whitespace-nowrap">show map view</p>{" "}

          </button>

        </div>



        {showSideBar && (

          <div>
            {/* tablet and desktop */}
            <div className="z-50 absolute hidden md:block left-0 inset-y-0">
              <AnimatePresence>
                <motion.div initial={{ x: "-100%" }}
                  animate={{
                    x: "0"
                  }}
                  exit={{
                    x: "0"
                  }}
                  transition={{ type: "spring", bounce: 0, duration: 0.9 }}
                  onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
                  className="fixed inset-2 w-screen h-screen z-10"></motion.div>
              </AnimatePresence>

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
            <div className="z-50 absolute md:hidden block left-0 inset-y-0">
              <AnimatePresence>
                <motion.div initial={{ x: "-100%" }}
                  animate={{
                    x: "0"
                  }}
                  exit={{
                    x: "0"
                  }}
                  transition={{ type: "spring", bounce: 0, duration: 0.7 }}
                  onMouseOver={() => setShowSideBar((showSideBar) => !showSideBar)}
                  className="fixed inset-2 w-screen h-screen z-10"></motion.div>
              </AnimatePresence>
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
