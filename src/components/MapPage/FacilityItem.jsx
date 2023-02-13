import React from "react";
import StarRatings from "./StarRatings";

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
    <div className="w-full lg:h-fit bg-transparent hover:bg-black/20 border-b hover:rounded-md border-black/20 px-2 py-3 flex items-center lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer overflow-x-hidden">
      <div onClick={getFacility} className=" w-full">
        <h3 className=" text-sm font-semibold text-black  lg:text-[90%] lowercase first-letter:uppercase max-w-[97%] truncate">
          {reg_fac_name}
        </h3>
        <div className="w-full grid grid-cols-1 mt-2 gap-2 items-center  justify-items-stretch">
          <div className="flex flex-col space-y-2 items-start justify-start">
            <span className="">
              <StarRatings
                className="w-[1rem]"
                rating={Math.round(average_rating)}
              />
            </span>
            <span className="my-1 flex flex-row font-semibold items-center justify-between text-black/70 text-xs">
              <span className="mr-1 font-semibold text-black/60">
                {services[0]}
              </span>
              &bull;
              <span className="mx-1 font-semibold text-black/60">
                {facility_level}
              </span>
            </span>
            <h6 className=" text-xs font-bold text-black/60 lowercase first-letter:uppercase max-w-[97%] truncate">
              {street_name ? street_name + ", " : null} {" " + statename}
            </h6>
            <h6 className="my-1 text-primary font-bold text-xs">
              Open {operational_hours || 24} hours
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityItem;
