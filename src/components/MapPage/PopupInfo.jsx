import { MapContext } from "@context/mapContext";
import React, { useContext } from "react";
import StarRatings from "./StarRatings";
import useGetLocation from "@hooks/useGetLocation.hook";

export default function PopupInfo({ facility, showReportModal, openReviewModal }) {
  const { setSelectedDirection } = useContext(MapContext);
  const location = useGetLocation();

  const handleGetDirection = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=" +
        location.coordinates.lat + "," + location.coordinates.lng +
        "&destination=" +
        facility?.location?.latitude + "," + facility?.location?.longitude +
        "&travelmode=driving"
    );
  };

  const operatingHours = facility?.operating_hours
    ? Object.entries(facility.operating_hours)
        .map(([day, hours]) => `${day}: ${hours}`)
        .join(" · ")
    : "N/A";
console.log("operating_hours:", facility?.operating_hours);
console.log("services:", facility?.services);
console.log("phone_number:", facility?.phone_number);
  return (
    <section className="relative">
      <div className="w-[70vw] md:w-[35vw] lg:w-[25vw] bg-white font-semibold px-2 font-sans">
        
        {/* Header */}
        <div className="flex flex-col py-4">
          <div className="grid grid-cols-4 items-center gap-2">
            <svg className="w-[60%] aspect-square" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.36108" y="2.26904" width="77" height="77" rx="38.5" fill="white" />
              <path d="M28.1461 57.769V25.9856H33.1803V39.9788H47.8988V25.9856H52.8903V57.769H47.8988V44.4584H33.1803V57.769H28.1461Z" fill="#242F9B" />
              <rect x="2.36108" y="2.26904" width="77" height="77" rx="38.5" stroke="#242F9B" strokeWidth="3" />
            </svg>
            <div className="col-span-3">
              <p className="text-primary font-extrabold text-[120%]">{facility?.name || "N/A"}</p>
              <span className="text-[70%] text-black/50 capitalize">{facility?.facility_type || ""}</span>
            </div>
          </div>

          {/* Ratings */}
          <div className="grid grid-cols-4 items-center mt-2">
            <div />
            <div className="col-span-3 flex items-center space-x-2">
              <StarRatings className="w-[40%]" rating={Math.round(facility?.average_rating)} />
              <span className="text-xs text-black/50">({facility?.total_reviews ?? 0})</span>
              {openReviewModal && (
                <div
                  onClick={openReviewModal}
                  className="text-black/80 font-extrabold px-3 border border-primary py-1 text-[90%] rounded-md cursor-pointer lg:transition ease-in-out lg:hover:scale-95 duration-300"
                >
                  Reviews
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1 pb-3">
          {facility?.is_verified && (
            <span className="text-[65%] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">✓ Verified</span>
          )}
          {facility?.has_emergency_service && (
            <span className="text-[65%] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">🚨 Emergency</span>
          )}
          {facility?.has_wheelchair_access && (
            <span className="text-[65%] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">♿ Accessible</span>
          )}
          {facility?.has_parking && (
            <span className="text-[65%] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-bold">🅿 Parking</span>
          )}
        </div>

        {/* Address & Type */}
        <div className="grid grid-cols-7 gap-2 py-2 border-t border-black/20">
          <div className="flex flex-col col-span-4">
            <span className="text-[70%] text-primary font-bold">Address</span>
            <span className="text-[85%] lowercase">
              {facility?.address ? `${facility.address}, ${facility?.city || ""}, ${facility?.state || ""}` : "N/A"}
            </span>
          </div>
          <div className="w-full h-full border-r border-black/20" />
          <div className="flex flex-col col-span-2">
            <span className="text-[70%] text-primary font-bold">Type</span>
            <span className="text-[85%] capitalize">{facility?.facility_type || "N/A"}</span>
          </div>
        </div>

        {/* Hours & Phone */}
        <div className="grid grid-cols-7 gap-2 py-2 border-t border-black/20">
          <div className="flex flex-col col-span-3">
            <span className="text-[70%] text-primary font-bold">Operation Hours</span>
            <span className="text-[80%]">{operatingHours}</span>
          </div>
          <div className="w-full h-full border-r border-black/20" />
          <div className="flex flex-col col-span-3">
            <span className="text-[70%] text-primary font-bold">Phone</span>
           <span className="text-[85%]">{facility?.phone_number ? String(facility.phone_number) : "N/A"}</span>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-2 py-2 border-t border-b border-black/20">
          <span className="text-[70%] text-primary font-bold">Services</span>
          <span className="text-[85%] break-words">{facility?.services || "N/A"}</span>
        </div>

        {/* Actions */}
        <div className="w-full grid grid-cols-2 items-center py-4">
          {showReportModal && (
            <button
              onClick={() => showReportModal()}
              className="text-danger font-bold w-fit text-[90%] underline"
            >
              Report facility
            </button>
          )}
          <button
            onClick={handleGetDirection}
            className="bg-primary w-fit text-[90%] font-light px-3 py-2 rounded-md text-white justify-self-end lg:transition ease-in-out lg:hover:scale-95 duration-300"
          >
            Get Direction
          </button>
        </div>

      </div>
    </section>
  );
}