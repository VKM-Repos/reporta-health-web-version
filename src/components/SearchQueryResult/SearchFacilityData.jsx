import React from "react";
import FacilityInfo from "./FacilityInfo";

export default function SearchFacilityData({ dataArray }) {
  return (
    <div className="flex flex-col">
      {dataArray && Array.isArray(dataArray) && dataArray.length !== 0 ? (
        dataArray?.map((facility) => (
          <FacilityInfo
            key={facility.id}
            reg_fac_name={facility.reg_fac_name}
            average_rating={facility.average_rating}
            facility_level={facility.facility_level}
            street_name={facility.street_name}
            statename={facility.statename}
            operational_hours={facility.operational_hours}
            services={facility.services}
          />
        ))
      ) : (
        <div className="w-full h-full mt-[5rem] flex flex-col items-center justify-center text-black/20">
          <svg
            className="w-1/3"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="icons_Q2" data-name="icons Q2" fill="currentColor">
                <path d="M24,2C14.1,2,7,10.1,7,20S18.5,41.3,22.6,45.4a1.9,1.9,0,0,0,2.8,0C29.5,41.3,41,30.1,41,20S33.9,2,24,2Zm0,8a8.7,8.7,0,0,1,4.8,1.4L16.4,23.8A8.7,8.7,0,0,1,15,19,9,9,0,0,1,24,10Zm0,18a8.7,8.7,0,0,1-4.8-1.4L31.6,14.2A8.7,8.7,0,0,1,33,19,9,9,0,0,1,24,28Z" />
              </g>
            </g>
          </svg>
          <h4 className="text-xl font-semibold ">Location not found</h4>
        </div>
      )}
    </div>
  );
}
