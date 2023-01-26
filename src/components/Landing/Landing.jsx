import Image from "next/image";
import React, { useState, useEffect } from "react";
import pattern from "@assets/images/pattern.svg";
import landing from "@assets/images/landing.png";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import ToastBox from "@components/ToastBox/ToastBox";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import { useRouter } from "next/router";
import useGetLocation from "@hooks/useGetLocation.hook";

const Landing = () => {
  const router = useRouter();
  const { data, isLoading, status } = useFetchNearestFacilities();
  // console.log("data", data);

  const location = useGetLocation();
  const ShowMyLocation = () => {
    if (location.loaded && !location.error) {
      fetchFacility();
      // console.log("show location");
    } else {
      alert(location.error.message);
    }
  };

  const fetchFacility = () => {
    if (data !== undefined) {
      router.push("/search-results");
    } else {
      // console.log("error, there is no data");
      setShowDialogue(true);
    }
  };

  const [showDialogue, setShowDialogue] = useState(false);
  const confirmCancel = () => {
    setShowDialogue(false);
  };

  return (
    <section className="w-screen font-jarkata">
      {/* TODO: REPLACE DIALOGUE MODAL WITH TOAST COMPONENT */}
      <ToastBox
        show={showDialogue}
        confirmCancel={confirmCancel}
        title="Network error"
        message="There has been an error, please refresh page and try again"
      />
      <div className="w-screen lg:w-2/3 bg-background noisy min-h-screen pt-[8%]">
        <div className="lg:w-4/6 w-screen relative flex flex-col items-start justify-center px-[5%]">
          <h1 className="text-black font-extrabold lg:text-[3.5vw] md:text-[5vw] text-[8vw] tracking-normal leading-tight mt-[4rem]">
            Find healthcare facilites close to you.
          </h1>
          <p className="text-black lg:text-[0.9rem] md:text-[1rem] text-xs tracking-wide leading-normal my-6 lg:w-[80%]">
            Reporta Health allows you search for the nearest healthcare
            facilities to you. It also allows you report unregistered facilities
            to the supervising authorities.
          </p>

          {status === "success" ? (
            <button
              type="submit"
              value="Find facility"
              className="md:w-fit w-full px-8 lg:col-span-1 col-span-2 py-4 text-xs lg:text-sm rounded-md bg-primary lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer text-white"
              disabled={isLoading}
              onClick={ShowMyLocation}
            >
              Search nearest facility
            </button>
          ) : status === "error" ? (
            <div>error</div>
          ) : (
            <div>
              <LoadingSpinner text="getting your location" />
            </div>
          )}

          <div
            style={{
              backgroundImage: `url(${pattern.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="hidden lg:block absolute z-20 top-[30%] lg:-right-[45%] w-[55%] -right-10 aspect-square "
          ></div>
          <div
            style={{
              backgroundImage: `url(${landing.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
            className="lg:hidden my-12 w-full aspect-square "
          ></div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${landing.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
        className="hidden z-20 lg:block absolute top-[15%] w-[50%] -right-10 aspect-square shadow-xl"
      ></div>
    </section>
  );
};

export default Landing;
