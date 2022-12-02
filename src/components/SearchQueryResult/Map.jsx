import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import useGetLocation from "@hooks/useGetLocation.hook";

import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import ReportFacilityModal from "@components/Facility/ReportFacilityModal";



const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [35, 50],
});


const iconP = L.icon({
  iconUrl: "health-worker.svg",
  iconSize: [35, 35],
});

export default function Maps({ className, data }) {
  const location = useGetLocation();
  const [showModal, setShowModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false);

  const closeReportModal = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowReportModal(false);
  };
  const closeReportModalOnFormSubmit = () => {
    setShowReportModal(false);
  }

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  }

  return (
    <div className={className}>
      {location.loaded && !location.error && (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={14}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
          />
          <Marker
            icon={iconP}
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Circle
              center={[location.coordinates.lat, location.coordinates.lng]}
              pathOptions={{ fillColor: "blue" }}
              radius={800}
            />
            <Popup>You are here</Popup>
          </Marker>

          {data?.pages && Array.isArray(data.pages) && data?.pages.length !== 0
            ? data?.pages.map((result) => {
              return result?.data?.map((facility) => (
                <Marker
                  key={facility.id}
                  position={[facility?.latitude, facility?.longitude]}
                  icon={icon}
                >
                  <Popup maxWidth={400} minWidth={400} maxHeight={420} minHeight={420}>
                    <div className="text-sm font-semibold px-5">
                      <div className="flex flex-col ">
                        <div className="flex gap-4 items-center -mb-8 ">
                          <div className="">
                            <svg width="50" height="50" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2.36108" y="2.26904" width="77" height="77" rx="38.5" fill="white" />
                              <path d="M28.1461 57.769V25.9856H33.1803V39.9788H47.8988V25.9856H52.8903V57.769H47.8988V44.4584H33.1803V57.769H28.1461Z" fill="#242F9B" />
                              <rect x="2.36108" y="2.26904" width="77" height="77" rx="38.5" stroke="#242F9B" stroke-width="3" />
                            </svg>
                          </div>
                          <p className="text-primary font-extrabold text-xl font-sans w-full"> {facility.reg_fac_name}</p>
                        </div>
                        <div className="flex justify-center py-2 items-center text-primary gap-5">
                          <span className="text-sm flex justify-center items-center gap-1 font-sans font-semibold">{facility.average_rating}
                            {!showReportModal && <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.98116 2.81658L10.0078 4.86992C10.1478 5.15575 10.5212 5.42992 10.8362 5.48242L12.697 5.79158C13.887 5.98992 14.167 6.85325 13.3095 7.70492L11.8628 9.15158C11.6178 9.39658 11.4837 9.86908 11.5595 10.2074L11.9737 11.9983C12.3003 13.4157 11.5478 13.9641 10.2937 13.2233L8.54949 12.1908C8.23449 12.0041 7.71533 12.0041 7.39449 12.1908L5.65033 13.2233C4.40199 13.9641 3.64366 13.4099 3.97033 11.9983L4.38449 10.2074C4.46033 9.86908 4.32616 9.39658 4.08116 9.15158L2.63449 7.70492C1.78283 6.85325 2.05699 5.98992 3.24699 5.79158L5.10783 5.48242C5.41699 5.42992 5.79033 5.15575 5.93033 4.86992L6.95699 2.81658C7.51699 1.70242 8.42699 1.70242 8.98116 2.81658Z" fill="#242F9B" stroke="#242F9B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>}
                            (200)</span>
                          <button className="border border-primary font-sans font-light text-xs text-black rounded-md py-1 px-3">Reviews</button>
                        </div>
                      </div>
                      <hr className="text-slate-300" />
                      <div className="flex gap-5 py-2 divide-x divide-slate-300">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-sans font-light">Address</span>
                          <span className="text-sm font-sans lowercase w-48">{facility.street_name ? facility.street_name : 'N/A'}</span>
                        </div>
                        <div className="px-5 flex flex-col gap-1">
                          <span className="text-xs font-sans font-light">Ownership</span>
                          <span className="text-sm font-sans ">{facility.ownership ? facility.ownership : 'N/A'}</span>
                        </div>
                      </div>
                      <hr className="text-slate-300" />
                      <div className="flex gap-5 py-2 divide-x divide-slate-300">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-sans font-light">Operation Hours</span>
                          <span className="text-sm font-sans w-48">{facility.operational_hours ? facility.operational_hours : 'N/A'}</span>
                        </div>
                        <div className="px-5 flex flex-col gap-1">
                          <span className="text-xs font-sans font-light">Phone Number</span>
                          <span className="text-sm font-sans">{facility.phone_number ? facility.phone_number : 'N/A'}</span>
                        </div>
                      </div>

                      <hr className="text-slate-300" />
                      <div className=" flex flex-col gap-1">
                        <span className="text-xs font-sans font-light">Services</span>
                        <span className="text-sm font-sans">{facility.services ? facility.services : 'N/A'}</span>
                        {console.log(facility)}
                      </div>
                      <div className="flex justify-center gap-20 py-5">
                        <button onClick={() => setShowReportModal(true)} className="text-danger font-sans font-light text-sm underline">Report facility</button>
                        <button className="bg-primary font-sans font-light text-sm px-6 py-2 rounded-md text-white">Get Direction</button>
                      </div>
                      {/* <NewReportFacilityModal
                        onClose={closeReportModal}
                        visible={showReportModal}
                      /> */}
                      <ReportFacilityModal
                        onClose={closeReportModal}
                        visible={showReportModal}
                        facility={facility}
                        onSubmitClose={closeReportModalOnFormSubmit}
                      />

                    </div>
                  </Popup>
                </Marker>
              ));
            })
            : "no map found"}

          <LocationMarker />
        </MapContainer>
      )}
    </div>
  );
}
