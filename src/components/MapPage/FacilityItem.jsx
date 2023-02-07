import Image from "next/image";
import React from "react";
import starIcon from "@assets/images/star.svg";

const FacilityItem = ({
  reg_fac_name,
  average_rating,
  facility_level,
  street_name,
  statename,
  operational_hours,
  services,
  getFacility,
}) => {
  return (
    <div className="w-full lg:h-fit bg-transparent hover:bg-black/20 border-b hover:rounded-md border-black/20 px-2 py-3 flex flex-row items-center lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer">
      <div
        onClick={getFacility}
        className="basis-4/5 flex flex-col items-start justify-start"
      >
        <h3 className="font-extrabold text-xs text-black  lg:text-sm lowercase first-letter:uppercase">
          {reg_fac_name}
        </h3>
        <span className="my-1 flex flex-row font-semibold items-center justify-between text-black/70 text-xs">
          <span className="mr-1">
            <Image src={starIcon} width="15" height="15" alt="" />{" "}
          </span>
          <span className="mr-1 font-semibold  text-black/60">
            {Math.round(average_rating) || "No ratings"}
          </span>
          &bull;
          <span className="mx-1 font-semibold text-black/60">
            {services[0]}
          </span>
          &bull;
          <span className="mx-1 font-semibold text-black/60">
            {facility_level}
          </span>
        </span>
        <h6 className=" text-xs font-bold text-black/60 lowercase first-letter:uppercase">
          {street_name ? street_name + ", " : null} {" " + statename}
        </h6>
        <h6 className="my-1 text-primary font-bold text-xs">
          Open {operational_hours || 24} hours
        </h6>
      </div>
      <div className="basis-1/5 flex flex-col items-end lg:items-center justify-start">
        <span className=" p-2 text-primary  hover:scale-95 ease-out duration-300  bg-black/20 hover:bg-primary hover:text-white rounded-full">
          <svg
            className="w-5 h-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07006 4.6C2.87006 1.14 8.08006 1.14 8.87006 4.6C9.34006 6.63 8.05006 8.35 6.93006 9.42C6.11006 10.2 4.82006 10.19 4.00006 9.42C2.89006 8.35 1.60006 6.63 2.07006 4.6Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15.07 16.6C15.87 13.14 21.11 13.14 21.91 16.6C22.38 18.63 21.09 20.35 19.96 21.42C19.14 22.2 17.84 22.19 17.02 21.42C15.89 20.35 14.6 18.63 15.07 16.6Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.48622 5.5H5.49777"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.4862 17.5H18.4978"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h6 className="my-1 text-primary font-semibold text-xs "></h6>
      </div>
    </div>
  );
};

export default FacilityItem;
