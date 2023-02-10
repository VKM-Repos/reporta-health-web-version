import React from "react";
import Reviewers from "./Reviewers";
import StarRatings from "./StarRatings";

const ReviewFacilityModal = ({ closeReviewModal, facility, visible }) => {
  if (!visible) return null;
  console.log(facility.id);
  return (
    <div className="fixed inset-0 w-full flex items-center justify-center z-[3000]">
      <div
        className="fixed inset-0 w-screen h-screen backdrop-blur-[2px] bg-black/10 z-[2000] "
        onClick={closeReviewModal}
      ></div>
      <div className="relative z-[2001] w-[80vw] md:w-[40vw] lg:w-[30vw]  aspect-square bg-white font-semibold md:p-8 p-4 font-sans justify-center mx-auto shadow-2xl rounded-md">
        <div className="flex flex-col py-4">
          <div className="grid grid-cols-4 pb-2 -space-y-2 items-center">
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
                <span
                  onClick={() => {
                    console.log("clicked");
                  }}
                  className=" whitespace-nowrap text-black/80 font-extrabold px-1 border border-primary py-1 text-[90%] rounded-md lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer"
                >
                  write a review
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 py-2 border-t border-black/20">
          <div className="flex flex-col col-span-2">
            <span className="text-[70%] text-primary font-bold">
              Total Reviews
            </span>
            <span className=" lowercase font-extrabold text-[200%]">200</span>
          </div>
          <div className="w-full h-full border-r border-black/20"></div>
          <div className="flex flex-col col-span-4">
            <span className="text-[70%] text-primary font-bold">
              Average Rating
            </span>
            <span className="w-full space-x-2 items-center flex lowercase font-extrabold text-[200%]">
              <p>{Math.round(facility.average_rating)}</p>
              <StarRatings
                className={"w-[10%]"}
                rating={facility.average_rating}
              />
            </span>
          </div>
        </div>

        {/* reviewers list */}
        <div className="flex flex-col py- border-t border-black/20 max-h-[8rem] overflow-y-scroll">
          <Reviewers rating={facility.average_rating} />
          <Reviewers rating={facility.average_rating} />
          <Reviewers rating={facility.average_rating} />
          <Reviewers rating={facility.average_rating} />
        </div>
      </div>
    </div>
  );
};

export default ReviewFacilityModal;
