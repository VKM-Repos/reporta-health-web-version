import Image from "next/image";
import React, { useState } from "react";
import pattern from "@assets/images/pattern.svg";
import landing from "@assets/images/landing.png";
import SearchForm from "@components/Forms/SearchForm/SearchForm";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { useFetchNearestFacility } from "@hooks/useFetchNearestFacility.hook";

const Landing = () => {
  const [query, setQuery] = useState("");
  const { mutate, isLoading } = useFetchNearestFacility();
  const handleChange = (events) => {
    setQuery(events.target.value);
  };
  const fetchFacility = (e) => {
    e.preventDefault();
    mutate(query);
  };

  return (
    <section className="-mt-[20%] w-[100vw] font-jarkata">
      <div className="w-full lg:w-2/3 bg-background h-full py-[20%]">
        <div className="w-5/6 mx-auto relative flex flex-col items-start justify-center ">
          <h1 className="text-black font-extrabold lg:text-[3.3rem] md:text-[3.5rem] text-[2.6rem] tracking-normal leading-tight mt-4 lg:mt-12">
            Find healthcare <br className="hidden lg:block" /> facilites close{" "}
            <br className="hidden lg:block" /> to you.
          </h1>
          <p className="text-black lg:text-[0.9rem] md:text-[1rem] text-sm lg:w-1/2 tracking-wide leading-normal my-6">
            Reporta Health allows you search for the nearest healthcare
            facilities to you. It also allows you report unregistered facilities
            to the supervising authorities.
          </p>

          <button
            type="submit"
            value="Find facility"
            className="w-full lg:w-1/3 lg:col-span-1 col-span-2 py-4 text-xs lg:text-sm rounded-md bg-primary lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer text-white"
            disabled={isLoading}
            onClick={fetchFacility}
          >
            {isLoading ? (
              <LoadingSpinner text="Searching facilities..." />
            ) : (
              "Search nearest facility"
            )}
          </button>
          {/* search bar */}
          <div className="bg-transparent my-12 z-30">
            {/* <SearchForm /> */}
          </div>

          <div className="hidden lg:block absolute z-20 top-[10%] lg:-right-[25%] ">
            <Image src={pattern} alt="pattern" width={400} height={400} />
          </div>

          <div className="lg:hidden ">
            <Image src={landing} alt="landing" />
          </div>
        </div>
      </div>
      <div className="hidden z-20 lg:block pt-[10%] absolute top-0  lg:-right-[5%]">
        <Image src={landing} alt="landing" />
      </div>
    </section>
  );
};

export default Landing;
