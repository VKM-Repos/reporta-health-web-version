import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import { authInstanceAxios } from "@config/axiosInstance";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const WriteReview = ({ facility, onClose }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  //creating IP state
  const [ip, setIP] = useState("");

  const handleStarClick = (value) => {
    setRating(value + 1);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    // console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

  const reviewData = {
    facility_id: facility.id,
    user_id: "ab70ca3b6587d2e0",
    content: review || "no review",
    rating: rating,
    // ip: ip,
  };

  const reviewFacility = async () => {
    const res = await authInstanceAxios
      .post("/review", reviewData)
      .then((res) => {
        if (res.status === 200) setSuccessMsg(true);

        setTimeout(() => {
          setReview("");
          setRating(0);
          onClose();
        }, 3000);

        //  history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  };

  const handleSubmit = (e) => {
    // Perform any logic for submitting the form data here, such as making an API call, etc.
    e.preventDefault();
    setIsLoading(true);

    const newErrors = {};
    if (!review) {
      // newErrors.review = "content is required";
      setReview(review);
    }
    if (!rating) {
      newErrors.rating = "your rating is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      reviewFacility();
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex my-4 w-full items-center justify-center">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              onClick={() => handleStarClick(i)}
              key={i}
              className={` aspect-square w-[10%]`}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.98116 2.81658L10.0078 4.86992C10.1478 5.15575 10.5212 5.42992 10.8362 5.48242L12.697 5.79158C13.887 5.98992 14.167 6.85325 13.3095 7.70492L11.8628 9.15158C11.6178 9.39658 11.4837 9.86908 11.5595 10.2074L11.9737 11.9983C12.3003 13.4157 11.5478 13.9641 10.2937 13.2233L8.54949 12.1908C8.23449 12.0041 7.71533 12.0041 7.39449 12.1908L5.65033 13.2233C4.40199 13.9641 3.64366 13.4099 3.97033 11.9983L4.38449 10.2074C4.46033 9.86908 4.32616 9.39658 4.08116 9.15158L2.63449 7.70492C1.78283 6.85325 2.05699 5.98992 3.24699 5.79158L5.10783 5.48242C5.41699 5.42992 5.79033 5.15575 5.93033 4.86992L6.95699 2.81658C7.51699 1.70242 8.42699 1.70242 8.98116 2.81658Z"
                fill={i < rating ? "#242F9B" : ""}
                stroke="#242F9B"
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
        <textarea
          className="w-full h-[7rem] p-2 border border-black/20  rounded-sm focus:outline-none "
          value={review}
          placeholder="Describe your experience (Optional)"
          onChange={handleReviewChange}
        />
        {successMsg && (
          <p className=" text-success font-thin text-xs mt-0">
            Review successful
          </p>
        )}
        {errors.rating && (
          <p className="text-danger text-xs mt-0">{errors.rating}</p>
        )}
        <div className="w-full flex items-center space-x-2 justify-center">
          <button
            onClick={onClose}
            className=" text-black/50 py-2 px-4 mt-4 "
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-primary text-center text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-dark"
            type="submit"
          >
            {isLoading && !errors.rating ? (
              <LoadingSpinner text="submitting" />
            ) : (
              "submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
