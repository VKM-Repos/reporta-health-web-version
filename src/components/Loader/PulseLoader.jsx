import React from "react";

const PulseLoader = () => {
  const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className="p-2 w-full">
      {arr.map((array) => (
        <div
          key={array.id}
          className=" w-full lg:h-[8rem] lg:border-none border-b border-black border-opacity-20 overflow-hidden py-2 lg:rounded-md flex flex-row items-center"
        >
          <div className="animate-pulse basis-4/5 flex flex-col items-start justify-start">
            <h3 className="w-2/3 h-4 bg-black bg-opacity-20 rounded-lg "></h3>
            <span className="my-2 flex flex-row items-center justify-between ">
              <span className="mr-2 w-8 h-2 bg-black bg-opacity-20 rounded-lg"></span>
              &bull;
              <span className="mr-2 w-16 h-2 bg-black bg-opacity-20 rounded-lg"></span>
              &bull;
              <span className=" w-24 h-2 bg-black bg-opacity-20 rounded-lg"></span>
            </span>
            <h6 className="w-2/3 my-2 h-2 bg-black bg-opacity-20 rounded-lg"></h6>
            <h6 className="w-3/4 h-2 bg-black bg-opacity-20 rounded-lg"></h6>
          </div>
          <div className="animate-pulse basis-1/5 flex flex-col items-end lg:items-center justify-start">
            <span className="w-10 h-10 p-2 bg-black bg-opacity-20 rounded-full"></span>
            <h6 className="my-2 w-16 h-2 bg-black bg-opacity-20 rounded-lg "></h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PulseLoader;
