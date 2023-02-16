import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { authInstanceAxios } from "@config/axiosInstance";
import { FETCH_FACILITY_REVIEWS_KEY } from "@config/queryKeys";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import Reviewers from "./Reviewers";
import StarRatings from "./StarRatings";
import WriteReview from "./WriteReview";

const ReviewFacilityModal = ({
  closeReviewModal,
  facility,
  visible,
  setIsSelected,
}) => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [facilityReviewData, setfacilityReviewData] = useState({});

  const fetchFacilityReviews = async () => {
    const result = await authInstanceAxios.get(
      `/review/?facility_id=${facility.id}`
    );
    return result?.data;
  };

  // create a useinfinite query hook
  const {
    status,
    data,
    error,
    isFetching,
    fetchMore,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery(
    [FETCH_FACILITY_REVIEWS_KEY, facility.id],
    fetchFacilityReviews,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.next_page_url) {
          return pages?.length + 1;
        } else refetch;
      },
      getFetchMore: (lastPage, pages) => {
        if (lastPage.length > 0) {
          return pages.length + 1;
        }
        return false;
      },
      // enabled: false,
    }
  );

  if (!visible) return null;

  return (
    <div className="fixed inset-0 w-full flex items-center justify-center z-[3000] ">
      <div
        className="fixed inset-0 w-screen h-screen backdrop-blur-[2px] bg-black/10 z-[2000] "
        onClick={(e) => {
          closeReviewModal(e);
          !!setIsSelected && setIsSelected(null);
        }}
      ></div>
      {!showWriteReview ? (
        <div className="relative z-[2001] w-[80vw] md:w-[40vw] lg:w-[30vw]  aspect-square bg-white font-semibold md:px-8 p-4 font-sans justify-center mx-auto shadow-2xl rounded-md">
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
                <span className="text-[110%] space-x-1 flex justify-start font-semibold">
                  <p>{Math.round(facility.average_rating)}</p>

                  <svg
                    className="w-[10%] aspect-square"
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
                  <p>({data?.pages[0]?.data.length}+)</p>
                  <span
                    onClick={() => {
                      setShowWriteReview(true);
                      refetch();
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
              <span className="lowercase font-extrabold text-[200%]">
                {data?.pages[0]?.data.length}
              </span>
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
          <div className="relative flex flex-col py- border-t border-black/20 h-[10rem] overflow-y-scroll z-[3000]">
            {/* fetch and render list of reviews here */}
            <>
              {status === "loading" && <LoadingSpinner text="loading" />}
              {status === "error" && (
                <div>An error occurred: {error.message}</div>
              )}
              {status === "success" && (
                <>
                  {data?.pages &&
                  Array.isArray(data.pages) &&
                  data?.pages.length !== 0 ? (
                    data?.pages.map((result) => {
                      return result?.data?.map((facilityReview) => (
                        <Reviewers
                          key={facilityReview.id}
                          id={facilityReview.id}
                          rating={facilityReview.rating}
                          content={facilityReview.content}
                          created_at={facilityReview.created_at.slice(0, 10)}
                        />
                      ));
                    })
                  ) : (
                    <div className="w-full h-full mt-4 flex flex-col items-center justify-center text-black/20">
                      {/* you can add svg */}
                      <h4 className="text-xl font-semibold ">
                        Review not found
                      </h4>
                    </div>
                  )}
                  <div>
                    <div
                      disabled={!hasNextPage || isFetchingNextPage}
                      className="w-fit mx-auto pb-4"
                    >
                      {isFetchingNextPage ? (
                        <LoadingSpinner text="loading" />
                      ) : hasNextPage ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault;
                            fetchNextPage();
                          }}
                          className="w-full my-4 px-8 py-2 font-semibold text-primary text-center mx-auto cursor-pointer "
                        >
                          Load more
                        </button>
                      ) : (
                        <div className="w-full h-full my-4 flex flex-col items-center justify-center text-black/20">
                          {/* svg optional */}
                          <h4 className="text-xl font-semibold ">
                            no more reviews
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {isFetching && !isFetchingNextPage ? (
                      <LoadingSpinner text="loading" />
                    ) : null}
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      ) : (
        <div className="relative z-[2001] w-[80vw] md:w-[40vw] lg:w-[30vw]  aspect-square bg-white font-semibold md:p-8 p-4 font-sans justify-center mx-auto shadow-2xl rounded-md transition-all duration-500 ease-in-out transform translate-x-1">
          <WriteReview
            facility={facility}
            onClose={() => {
              setShowWriteReview(false), refetch();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewFacilityModal;
