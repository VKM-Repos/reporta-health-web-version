import React from "react";

const FacilityInfo = ({ facilityInfo }) => {
  return (
    <div className="w-full relative lg:px-4 pt-2  flex flex-col-reverse lg:flex-col items-start justify-between">
      <div className="w-full flex flex-col  items-start justify-start">
        {facilityInfo?.map((result) => (
          <div
            key={result.id}
            className="w-full lg:h-[8rem] bg-transparent hover:bg-background lg:border-none border-b border-black border-opacity-20 px-4 py-4 cursor-pointer lg:rounded-md flex flex-row items-center"
          >
            <div className="basis-4/5 flex flex-col items-start justify-start">
              <h3 className="font-extrabold text-sm text-black text-opacity-80 lg:text-sm lowercase first-letter:uppercase">
                {result.reg_fac_name}
              </h3>
              <span className="my-2 flex flex-row font-semibold items-center justify-between text-primary text-xs">
                <span className="mr-2">{result.average_rating || 5.8}</span>
                &bull;
                <span className="mx-2">{result.facility_level}</span>
              </span>
              <h6 className="text-secondary text-xs lowercase first-letter:uppercase">
                {result.street_name ? result.street_name + ", " : null}{" "}
                {" " + result.statename}
              </h6>
              <h6 className="my-2 text-primary text-xs">
                Open {result.operational_hours || 24} hours
              </h6>
            </div>
            <div className="basis-1/5 flex flex-col items-end lg:items-center justify-start">
              <span className=" p-2 text-primary  hover:scale-95 ease-out duration-300  bg-[#E3E9FF] hover:bg-primary hover:text-white rounded-full">
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
              <h6 className="my-2 text-primary  text-xs ">Directions</h6>
            </div>
          </div>
        ))}
      </div>

      {/* buttons */}
    </div>
  );
};

export default FacilityInfo;
