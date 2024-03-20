import { useToggle } from "@context/sidebarContext";
import SearchForm from "./SearchForm";
import FacilityList from "./FacilityList";
import { useState } from "react";
import TooltipWrapper from "@components/Tooltip/TooltipWrapper";

export default function Sidenav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultApi, setDefaultApi] = useState(true);

  const [locationInput, setLocationInput] = useState("");
  const [facilityTypeInput, setFacilityTypeInput] = useState("");

  const { open, ref, toggle } = useToggle();

  return (
    <aside
      ref={ref}
      className={`w-[20rem] md:w-[26rem] bg-white/70 backdrop-blur-sm inset-y-0 -left-[100%] text-white h-screen  relative z-[1000]  pt-1 grid grid-cols-1   justify-items-stretch
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
        // onClick={toggle}
        onMouseDown={() => {
          toggle(),
            setTimeout(() => {
              setDefaultApi(true);
            }, 1000);
        }}
        className="p-2 rounded-md bg-black/40 backdrop-blur fixed top-[9%] -right-[2.9rem] md:-right-[3rem] lg:-right-[3rem] text-black focus:outline-none text-center lg:flex items-center  justify-center cursor-pointer"
      >
        {open ? (
          <TooltipWrapper text="hide facilities">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 492 492"
              xmlSpace="preserve"
              fill="currentColor"
              className="w-6 aspect-square bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full p-1"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                stroklinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </TooltipWrapper>
        ) : (
          <TooltipWrapper text="show list of facilities">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.00 512.00"
              xmlpace="preserve"
              fill="currentColor"
              className="w-6 aspect-square bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full p-1"
              strokeWidth="16.384"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M462.521,512h-63.461c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059 h48.402V160.8L256,33.157L64.538,160.8v321.083h251.698c8.317,0,15.059,6.742,15.059,15.059c0,8.317-6.742,15.059-15.059,15.059 H49.479c-8.317,0-15.059-6.742-15.059-15.059V152.739c0-5.036,2.516-9.737,6.706-12.529L247.647,2.529 c5.057-3.372,11.648-3.372,16.706,0L470.875,140.21c4.189,2.792,6.706,7.495,6.706,12.529v344.203 C477.58,505.259,470.838,512,462.521,512z"></path>{" "}
                <path d="M320.063,160.217c-19.208,0-31.619,8.535-31.619,21.745v56.195h-64.888v-56.195 c0-13.21-12.411-21.745-31.619-21.745s-31.621,8.535-31.621,21.745v172.443c0,12.991,13.002,22.064,31.621,22.064 c18.617,0,31.619-9.073,31.619-22.064v-64.476h64.888v64.476c0,12.991,13.002,22.064,31.619,22.064s31.619-9.073,31.619-22.064 V181.962C351.682,168.753,339.272,160.217,320.063,160.217z"></path>{" "}
                <g>
                  {" "}
                  <path d="M320.063,391.53c-27.047,0-46.678-15.613-46.678-37.123V304.99h-34.771v49.417 c0,21.512-19.631,37.123-46.678,37.123s-46.679-15.613-46.679-37.123V181.962c0-18.321,14.434-36.804,46.679-36.804 s46.678,18.485,46.678,36.804v41.136h34.771v-41.136c0-18.321,14.432-36.804,46.678-36.804s46.678,18.485,46.678,36.804v172.443 C366.741,375.917,347.111,391.53,320.063,391.53z M223.556,274.871h64.888c8.317,0,15.059,6.742,15.059,15.059v64.476 c0,3.384,6.655,7.005,16.56,7.005c9.906,0,16.56-3.623,16.56-7.005V181.962c0-4.39-8.331-6.686-16.56-6.686 s-16.56,2.296-16.56,6.686v56.195c0,8.317-6.742,15.059-15.059,15.059h-64.888c-8.317,0-15.059-6.742-15.059-15.059v-56.195 c0-4.39-8.331-6.686-16.56-6.686c-8.23,0-16.562,2.296-16.562,6.686v172.443c0,3.384,6.654,7.005,16.562,7.005 c9.906,0,16.56-3.623,16.56-7.005v-64.476C208.497,281.614,215.239,274.871,223.556,274.871z"></path>{" "}
                  <path d="M316.235,450.258H195.765c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059 h120.471c8.317,0,15.059,6.742,15.059,15.059C331.294,443.516,324.552,450.258,316.235,450.258z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </TooltipWrapper>
        )}
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
        toggle={toggle}
      />
    </aside>
  );
}
