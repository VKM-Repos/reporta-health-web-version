import React, { useState } from "react";

export default function PopupInfo({ facility, showReportModal, getDirection }) {
  return (
    <section className="relative">
      <div className="w-[70vw] md:w-[35vw] lg:w-[25vw] aspect-square bg-white font-semibold px-2 font-sans">
        <div className="flex flex-col py-4">
          <div className="grid grid-cols-4 -space-y-2 items-center">
            <svg
              className="w-[60%] aspect-square"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.36108"
                y="2.26904"
                width="77"
                height="77"
                rx="38.5"
                fill="white"
              />
              <path
                d="M28.1461 57.769V25.9856H33.1803V39.9788H47.8988V25.9856H52.8903V57.769H47.8988V44.4584H33.1803V57.769H28.1461Z"
                fill="#242F9B"
              />
              <rect
                x="2.36108"
                y="2.26904"
                width="77"
                height="77"
                rx="38.5"
                stroke="#242F9B"
                strokeWidth="3"
              />
            </svg>
            <p className="col-span-3 text-primary font-extrabold text-[120%] w-fit">
              {facility.reg_fac_name}
            </p>
          </div>
          <div className="grid grid-cols-4 items-center justify-items-stretch -space-y-2">
            <div className=""></div>
            <div className="col-span-3 flex items-center justify-start space-x-2 text-primary">
              <span className="text-[110%] flex justify-start font-semibold">
                <p>{Math.round(facility.average_rating)}</p>

                <svg
                  className="w-[20%] aspect-square"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.98116 2.81658L10.0078 4.86992C10.1478 5.15575 10.5212 5.42992 10.8362 5.48242L12.697 5.79158C13.887 5.98992 14.167 6.85325 13.3095 7.70492L11.8628 9.15158C11.6178 9.39658 11.4837 9.86908 11.5595 10.2074L11.9737 11.9983C12.3003 13.4157 11.5478 13.9641 10.2937 13.2233L8.54949 12.1908C8.23449 12.0041 7.71533 12.0041 7.39449 12.1908L5.65033 13.2233C4.40199 13.9641 3.64366 13.4099 3.97033 11.9983L4.38449 10.2074C4.46033 9.86908 4.32616 9.39658 4.08116 9.15158L2.63449 7.70492C1.78283 6.85325 2.05699 5.98992 3.24699 5.79158L5.10783 5.48242C5.41699 5.42992 5.79033 5.15575 5.93033 4.86992L6.95699 2.81658C7.51699 1.70242 8.42699 1.70242 8.98116 2.81658Z"
                    fill="#242F9B"
                    stroke="#242F9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="flex space-x-2 items-center">
                <p>(200)</p>
                <p className=" text-black/80 font-extrabold px-3 border border-primary py-1 text-[90%] rounded-md lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer">
                  Reviews
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 py-2 border-t border-black/20">
          <div className="flex flex-col col-span-4">
            <span className="text-[70%] text-primary font-bold">Address</span>
            <span className="text-[100%] lowercase">
              {facility.street_name ? facility.street_name : "N/A"}
            </span>
          </div>
          <div className="w-full h-full border-r border-black/20"></div>
          <div className="flex flex-col col-span-2">
            <span className="text-[70%] text-primary font-bold">Ownership</span>
            <span className="text-[100%] lowercase">
              {facility.ownership ? facility.ownership : "N/A"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 py-2 border-t border-black/20">
          <div className="flex flex-col col-span-2">
            <span className="text-[70%] text-primary font-bold">
              Operation Hours
            </span>
            <span className="text-[100%] lowercase">
              {facility.operational_hours ? facility.operational_hours : "N/A"}
            </span>
          </div>
          <div className="w-full h-full border-r border-black/20"></div>
          <div className="flex flex-col col-span-4">
            <span className="text-[70%] text-primary font-bold">
              Phone Number
            </span>
            <span className="text-[100%] lowercase">
              {facility.phone_number ? facility.phone_number : "N/A"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 py-2 border-t border-b border-black/20">
          <span className="text-[70%] text-primary font-bold">Services</span>
          <span className="text-[100%] break-words overflow-hidden">
            {facility.services ? facility.services.join(", ") : "N/A"}
          </span>
        </div>
        <div className="w-full grid grid-cols-2 items-center justify-items-between py-6">
          <button
            onClick={showReportModal}
            className="text-danger font-bold w-fit text-[90%] underline"
          >
            Report facility
          </button>
          <button
            onClick={getDirection}
            className="bg-primary w-fit text-[90%] font-light px-3 py-2 rounded-md flex items-end justify-self-end text-white lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer"
          >
            Get Direction
          </button>
        </div>
      </div>
    </section>
  );
}
