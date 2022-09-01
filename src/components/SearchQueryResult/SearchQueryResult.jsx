import Image from "next/image";
import React, {useState} from "react";
import map from "@assets/images/map.svg";

const SearchQueryResult = (props) => {
  const searchResultData = props.searchResults
  const [currentPage, setCurrentPage] = useState(1)
  const [resultPerPage, setResultPerPage] = useState(4)

  const indexOfLastItem = currentPage * resultPerPage
  const indexOfFirstItem = indexOfLastItem - resultPerPage
  const currentResults = searchResultData.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div>
      <section className="grid bg-white grid-cols-1 lg:grid-cols-2 gap-2 justify-items-stretch">
      <div className="lg:p-4 flex flex-col  items-start justify-start">
        {currentResults?.map((result, id) => (
          <div
            key={id}
            className="w-full bg-transparent hover:bg-background px-4 py-4 cursor-pointer rounded-md flex flex-row "
          >
            <div className="basis-4/5 flex flex-col items-start justify-start">
              <h3 className="font-extrabold text-sm lg:text-xl">
                {result.reg_fac_name}
              </h3>
              <span className="my-2 flex flex-row font-semibold items-center justify-between text-primary text-xs lg:text-lg">
                <span className="mr-2">{result.average_rating || 5.8}</span>
                <span className="mr-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00936 2.04754L9.03602 4.10087C9.17602 4.38671 9.54936 4.66087 9.86436 4.71337L11.7252 5.02254C12.9152 5.22087 13.1952 6.08421 12.3377 6.93587L10.891 8.38254C10.646 8.62754 10.5119 9.10004 10.5877 9.43837L11.0019 11.2292C11.3285 12.6467 10.576 13.195 9.32186 12.4542L7.57769 11.4217C7.26269 11.235 6.74352 11.235 6.42269 11.4217L4.67852 12.4542C3.43019 13.195 2.67186 12.6409 2.99852 11.2292L3.41269 9.43837C3.48852 9.10004 3.35436 8.62754 3.10936 8.38254L1.66269 6.93587C0.811024 6.08421 1.08519 5.22087 2.27519 5.02254L4.13602 4.71337C4.44519 4.66087 4.81852 4.38671 4.95852 4.10087L5.98519 2.04754C6.54519 0.933372 7.45519 0.933372 8.00936 2.04754Z"
                      fill="#242F9B"
                      stroke="#242F9B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="mr-2">({result.average_rating || 200})</span>
                &bull;
                <span className="mx-2">{result.facility_level}</span>
              </span>
              <h6 className="text-primary text-xs lg:text-sm">
               {result.street_name? result.street_name +', ': null }  {' ' + result.statename}
              </h6>
              <h6 className="my-2 text-primary text-xs lg:text-sm">
                Open {result.operational_hours || 24} hours
              </h6>
            </div>
            <div className="basis-1/5 flex flex-col items-end lg:items-center justify-start">
              <span className="lg:p-4 p-2  bg-[#E3E9FF] rounded-full">
                <svg
                  className="lg:w-8 lg:h-8 w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.07006 4.6C2.87006 1.14 8.08006 1.14 8.87006 4.6C9.34006 6.63 8.05006 8.35 6.93006 9.42C6.11006 10.2 4.82006 10.19 4.00006 9.42C2.89006 8.35 1.60006 6.63 2.07006 4.6Z"
                    stroke="#242F9B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.07 16.6C15.87 13.14 21.11 13.14 21.91 16.6C22.38 18.63 21.09 20.35 19.96 21.42C19.14 22.2 17.84 22.19 17.02 21.42C15.89 20.35 14.6 18.63 15.07 16.6Z"
                    stroke="#242F9B"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12.0002 5H14.6802C16.5302 5 17.3902 7.29 16.0002 8.51L8.01019 15.5C6.62019 16.71 7.48019 19 9.32019 19H12.0002"
                    stroke="#242F9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.48622 5.5H5.49777"
                    stroke="#242F9B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.4862 17.5H18.4978"
                    stroke="#242F9B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h6 className="my-2 text-primary  text-xs lg:text-sm">
                Directions
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        {" "}
        <Image src={map} alt="google maps" />
      </div>
    </section>
    </div>
  );
};

export default SearchQueryResult;
