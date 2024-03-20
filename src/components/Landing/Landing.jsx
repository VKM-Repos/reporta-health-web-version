import React, { useState } from "react";
import pattern from "@assets/images/pattern.svg";
import landing from "@assets/images/landing.png";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import ToastBox from "@components/ToastBox/ToastBox";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import { useRouter } from "next/router";
import useGetLocation from "@hooks/useGetLocation.hook";

const Landing = () => {
  const [showDialogue, setShowDialogue] = useState(false);
  const router = useRouter();
  const { data, isLoading, status } = useFetchNearestFacilities();
  const location = useGetLocation();

  const ShowMyLocation = (e) => {
    e.preventDefault();
    if (location.loaded && !location.error) {
      fetchFacility();
    } else {
      setShowDialogue(true);
      // alert(location.error.message);
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

  const confirmCancel = () => {
    setShowDialogue(false);
  };

  return (
    <section className="w-screen h-screen font-jarkata bg-background grid grid-cols-1 lg:grid-cols-5 justify-items-stretch">
      {/* TODO: REPLACE DIALOGUE MODAL WITH TOAST COMPONENT */}
      <ToastBox
        show={showDialogue}
        confirmCancel={confirmCancel}
        title="Network error"
        message="There has been an error, please refresh page and try again"
      />
      <div className="w-full lg:col-span-3 flex flex-col items-start justify-center">
        <div className="lg:w-4/6 w-full relative flex flex-col items-start justify-center px-[5%]">
          <h1 className="text-black font-extrabold lg:text-[70px] md:text-[50px] text-[45px] leading-none tracking-normal">
            Find healthcare facilites close to you.
          </h1>
          <p className="text-black text-lg tracking-wide leading-normal my-6 lg:w-[80%]">
            Reporta Health allows you search for the nearest healthcare
            facilities to you. It also allows you report unregistered facilities
            to the supervising authorities.
          </p>

          {status === "success" ? (
            <button
              type="submit"
              value="Find facility"
              className="md:w-fit w-full px-8 lg:col-span-1 col-span-2 py-4 text-sm lg:text-sm rounded-md bg-primary lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer text-white"
              disabled={isLoading}
              onClick={ShowMyLocation}
            >
              Search nearest facilities
            </button>
          ) : status === "error" ? (
            <div>error: cannot get your location</div>
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
            className="hidden lg:block absolute z-20 top-[10%] lg:-right-[60%] w-[70%] -right-10 aspect-square "
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
        className="w-full lg:col-span-2"
      ></div>
    </section>
  );
};

export default Landing;
