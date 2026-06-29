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

  // added: build list of special service badges to show on the popup
  // only renders the ones that are true on the facility object
  const specialBadges = [
    {
      key: "has_gbv_services",
      label: "GBV Services",
      bg: "bg-pink-100",
      text: "text-pink-700",
      icon: "🛡️",
    },
    {
      key: "has_sarcs",
      label: "SARC",
      bg: "bg-red-100",
      text: "text-red-700",
      icon: "🏥",
    },
    {
      key: "has_fistula_programme",
      label: "Fistula Programme",
      bg: "bg-purple-100",
      text: "text-purple-700",
      icon: "💜",
    },
  ];

  // added: filter to only badges where the facility has that service
  const activeBadges = specialBadges.filter(({ key }) => facility?.[key]);

  return (
    <section className="relative">
      <div className="w-[70vw] md:w-[35vw] lg:w-[25vw] bg-white font-semibold px-2 font-sans">

        {/* Header — unchanged */}
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

          {/* Ratings — unchanged */}
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

        {/* Badges — existing ones unchanged, special service badges added below */}
        <div className="flex flex-wrap gap-1 pb-3">
          {/* unchanged: existing facility feature badges */}
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

          {/* added: special service badges — only render if facility has that service */}
          {activeBadges.map(({ key, label, bg, text, icon }) => (
            <span
              key={key}
              className={`text-[65%] ${bg} ${text} px-2 py-0.5 rounded-full font-bold`}
            >
              {icon} {label}
            </span>
          ))}
        </div>

        {/* Address & Type — unchanged */}
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

        {/* Hours & Phone — unchanged */}
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

        {/* Services — unchanged */}
        <div className="grid grid-cols-1 gap-2 py-2 border-t border-b border-black/20">
          <span className="text-[70%] text-primary font-bold">Services</span>
          <span className="text-[85%] break-words">{facility?.services || "N/A"}</span>
        </div>

        {/* added: GBV profile detail section — only renders if facility has GBV services */}
        {facility?.has_gbv_services && facility?.gbv_profile && (
          <div className="grid grid-cols-1 gap-2 py-2 border-t border-black/20">
            <span className="text-[70%] text-primary font-bold">GBV Services Detail</span>
            {/* added: show target group if available */}
            {facility.gbv_profile?.target_group && (
              <span className="text-[80%] text-black/70">
                Target group: <span className="font-semibold capitalize">{facility.gbv_profile.target_group.replace(/_/g, " ")}</span>
              </span>
            )}
            {/* added: show organisation type if available */}
            {facility.gbv_profile?.organisation_type && (
              <span className="text-[80%] text-black/70">
                Organisation: <span className="font-semibold capitalize">{facility.gbv_profile.organisation_type.replace(/_/g, " ")}</span>
              </span>
            )}
            {/* added: show contact person if available */}
            {facility.gbv_profile?.contact_person && (
              <span className="text-[80%] text-black/70">
                Contact: <span className="font-semibold">{facility.gbv_profile.contact_person}</span>
              </span>
            )}
          </div>
        )}

        {/* added: SARC detail section — only renders if facility has a SARC profile */}
        {facility?.has_sarcs && facility?.sarc_profile && (
          <div className="grid grid-cols-1 gap-2 py-2 border-t border-black/20">
            <span className="text-[70%] text-primary font-bold">SARC Details</span>
            {/* added: show SARC unit name if different from facility name */}
            {facility.sarc_profile?.unit_name && (
              <span className="text-[80%] text-black/70">
                Unit: <span className="font-semibold">{facility.sarc_profile.unit_name}</span>
              </span>
            )}
            {/* added: show SARC hotline if available */}
            {facility.sarc_profile?.hotline_number && (
              <span className="text-[80%] text-black/70">
                Hotline: <span className="font-semibold">{facility.sarc_profile.hotline_number}</span>
              </span>
            )}
          </div>
        )}

        {/* Actions — unchanged */}
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