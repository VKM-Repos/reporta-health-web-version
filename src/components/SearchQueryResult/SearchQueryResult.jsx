import Image from "next/image";
import React, { useState } from "react";
import map from "@assets/images/map.svg";
// import Map from "@components/Map/Map";
import dynamic from 'next/dynamic'
const Map = dynamic(() => import("@components/Map/Map"), { ssr: false });


const SearchQueryResult = (props) => {
  const searchResultData = props.searchResults
  const [currentPage, setCurrentPage] = useState(1)
  const [resultPerPage, setResultPerPage] = useState(4)

  const indexOfLastItem = currentPage * resultPerPage;
  const indexOfFirstItem = indexOfLastItem - resultPerPage;
  const currentResults = searchResultData?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const preveousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (indexOfLastItem === searchResultData.length) return false;
    setCurrentPage(currentPage + 1);
  };
  return (
    <section>
      <div className="z-1 h-full grid bg-white grid-cols-1 lg:grid-cols-2  justify-items-stretch">
      <div className="relative lg:px-4 pt-2 flex flex-col-reverse lg:flex-col items-start justify-between">
        <div className="w-full h-[40rem] lg:h-[41rem] flex flex-col  items-start justify-start">
          {currentResults?.map((result, id) => (
            <div
              key={id}
              className="w-full lg:h-[10rem] bg-transparent hover:bg-background lg:border-none border-b border-black border-opacity-20 px-4 py-4 cursor-pointer lg:rounded-md flex flex-row items-center"
            >
              <div className="basis-4/5 flex flex-col items-start justify-start">
                <h3 className="font-extrabold text-sm text-black text-opacity-80 lg:text-xl lowercase first-letter:uppercase">
                  {result.reg_fac_name}
                </h3>
                <span className="my-2 flex flex-row font-semibold items-center justify-between text-primary text-xs lg:text-sm">
                  <span className="mr-2">{result.average_rating || 5.8}</span>
                 
                  
                <span className="mr-2">
                      ({result.average_rating || 200})
                    </span>
                    &bull;
                    <span className="mx-2">{result.facility_level}</span>
                  </span>
                  <h6 className="text-secondary text-xs lg:text-sm">
                    {result.street_name ? result.street_name + ", " : null}{" "}
                    {" " + result.statename}
                  </h6>
                  <h6 className="my-2 text-primary text-xs lg:text-sm">
                    Open {result.operational_hours || 24} hours
                  </h6>
                </div>
                <div className="basis-1/5 flex flex-col items-end lg:items-center justify-start">
                  <span className="lg:p-4 p-2 text-primary  hover:scale-95 ease-out duration-300  bg-[#E3E9FF] hover:bg-primary hover:text-white rounded-full">
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
                  <h6 className="my-2 text-primary  text-xs lg:text-sm">
                    Directions
                  </h6>
                </div>
              </div>
            ))}


          </div>
              {/* buttons */}
        <div className=" w-full text-xs lg:text-lg lg:border-t border-b border-gray  grid grid-cols-10 items-center justify-items-stretch py-1">
           {/* prev button */}
            <button onClick={preveousPage} className={`flex items-center justify-center  hover:scale-110 ease-out duration-300  ${indexOfFirstItem !== 0 ? "text-primary cursor-pointer" : "text-secondary cursor-not-allowed"} `}>
              <svg className="w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 516" fill="currentColor" xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M85.333,256.001L426.667,512V0L85.333,256.001z M409.551,477.769L113.86,256.001L409.551,34.232V477.769z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="375.423,307.19 375.423,403.445 235.667,294.747 225.159,308.258 392.54,438.442 392.54,307.19 		"/>
                    </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
              </svg>
            </button>
            
            {/* pagination */}
            <div className="mx-2 col-span-4 h-10 bg-background"></div>

           
        
            <button disabled={indexOfLastItem < searchResultData?.length ? false : true} onClick={nextPage} className={`flex items-center justify-center  hover:scale-110 ease-out duration-300 ${indexOfLastItem < searchResultData?.length ? "text-primary cursor-pointer" : "text-secondary cursor-not-allowed"} `}>  
              <svg className="w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" fill="currentColor" xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M85.333,0v512l341.334-255.999L85.333,0z M102.449,34.232L398.14,255.999L102.449,477.768V34.232z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon points="119.459,73.558 119.459,204.81 136.576,204.81 136.576,108.555 276.332,217.254 286.839,203.744 		"/>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
              </svg>
            </button>
       
            
            <span className="text-right px-2 col-span-4 font-semibold text-black text-opacity-40">Results: 1 - 4 of 10</span>
      </div>
      </div>
        
          <Map currentResults={currentResults} />
      
      </div>

  
    </section>
  );
};

export default SearchQueryResult;
