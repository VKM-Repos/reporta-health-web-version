import { useToggle } from "@context/sidebarContext";
import SearchForm from "./SearchForm";
import FacilityList from "./FacilityList";
import { useState } from "react";

export default function Sidenav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultApi, setDefaultApi] = useState(true);

  const [locationInput, setLocationInput] = useState("");
  const [facilityTypeInput, setFacilityTypeInput] = useState("");

  const [closeToggle, setCloseToggle] = useState(toggle);

  const { open, ref, toggle } = useToggle();

  return (
    <aside
      ref={ref}
      className={`max-w-[17rem] md:max-w-[20rem] backdrop-blur inset-y-0 -left-[100%] text-white  relative z-[1500]  pt-[3rem] grid grid-cols-1   justify-items-stretch
        ${
          open
            ? "translate-x-full fixed duration-300 ease-in transition-all"
            : " translate-x-0 duration-400 ease-out transition-all"
        }`}
    >
      <button
        type="button"
        aria-expanded="false"
        aria-label="Toggle sidenav"
        onClick={toggle}
        className="p-2 rounded-md bg-black/40 backdrop-blur fixed top-[10%] -right-[15%] md:-right-[20%] text-[90%] text-white/90 focus:outline-none text-center lg:flex items-center  justify-center"
      >
        <svg
          version="1.1"
          className="w-[1.5rem]  aspect-square"
          id="Layer_1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 455 455"
          xmlSpace="preserve"
        >
          <g>
            <polygon points="152.068,172.474 0,324.544 0,402.761 191.178,211.584 	" />
            <polygon points="157.717,287.471 25.745,419.442 95.496,439.953 202.847,332.602 	" />
            <path
              d="M414.089,31.098l-39.264,39.264c8.526,12.718,13.509,28,13.509,44.428c0,17.906-6.12,35.505-17.231,49.555l-2.744,3.484
		L455,254.471V43.128L414.089,31.098z"
            />
            <polygon points="97.799,118.204 0,216.003 0,282.117 130.855,151.261 	" />
            <polygon points="261.108,184.079 178.929,266.258 267.716,355.044 390.431,232.328 349.664,191.561 308.333,244.032 	" />
            <path
              d="M308.333,64.791c-27.57,0-50,22.43-50,50c0,11.343,3.721,22.044,10.761,30.946l39.238,49.813l39.221-49.791
		c7.059-8.925,10.78-19.626,10.78-30.969C358.333,87.22,335.903,64.791,308.333,64.791z M308.333,129.696
		c-8.219,0-14.905-6.687-14.905-14.905c0-8.219,6.686-14.905,14.905-14.905c8.219,0,14.905,6.686,14.905,14.905
		C323.238,123.009,316.552,129.696,308.333,129.696z"
            />
            <polygon points="288.928,376.257 331.296,418.624 455,455 455,296.897 411.644,253.541 	" />
            <polygon points="128.281,449.594 146.667,455 287.639,417.393 224.06,353.814 	" />
            <path
              d="M212.391,190.371l30.147-30.147c-9.176-13.282-14.204-29.228-14.204-45.434c0-44.112,35.888-80,80-80
		c16.865,0,32.518,5.259,45.433,14.205l27.538-27.538L308.333,0L182.411,33.593l-63.399,63.399L212.391,190.371z"
            />
            <polygon points="0,0 0,173.577 134.135,39.443 	" />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>

        {/* <p className="">{open ? "" : "show list of facilities"}</p> */}
      </button>
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationInput={locationInput}
        setLocationInput={setLocationInput}
        facilityTypeInput={facilityTypeInput}
        setFacilityTypeInput={setFacilityTypeInput}
        setDefaultApi={setDefaultApi}
      />
      <FacilityList
        defaultApi={defaultApi}
        setDefaultApi={setDefaultApi}
        searchTerm={searchTerm}
        setCloseToggle={toggle}
      />
    </aside>
  );
}
