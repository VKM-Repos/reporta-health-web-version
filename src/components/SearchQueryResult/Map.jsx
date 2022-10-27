import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";

const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [35, 50],
});

export default function Maps({ className }) {
  const { data, status, fetchNextPage, hasNextPage } =
    useFetchNearestFacilities();

  const geoPosition = [9.0570752, 7.471104];

  console.log("geooo", geoPosition);

  return (
    <div className={className}>
      <MapContainer
        center={geoPosition}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=8L7fs9mdkhXHT8JP63RZ"
        />

        {data?.pages && Array.isArray(data.pages) && data?.pages.length !== 0
          ? data?.pages.map((result) => {
              return result?.data?.map((facility) => (
                <Marker
                  key={facility.id}
                  position={[facility.latitude, facility.longitude]}
                  icon={icon}
                >
                  <Popup maxWidth={500} minWidth={480}>
                    <div className="text-sm lowercase font-semibold px-5">
                      <div>
                        <div className="flex gap-4 items-center w-[]">
                          <div className="w-20">
                            <svg width="80" height="80" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2.36108" y="2.26904" width="77" height="77" rx="38.5" fill="white" />
                              <path d="M28.1461 57.769V25.9856H33.1803V39.9788H47.8988V25.9856H52.8903V57.769H47.8988V44.4584H33.1803V57.769H28.1461Z" fill="#242F9B" />
                              <rect x="2.36108" y="2.26904" width="77" height="77" rx="38.5" stroke="#242F9B" stroke-width="3" />
                            </svg>
                          </div>
                          <p className="text-primary font-medium text-xl w-full"> {facility.reg_fac_name}</p>
                        </div>
                        <div className="flex justify-items-center text-primary gap-5">
                          <p>4.1 start (200)</p>
                          <button className="border text-light text-xs rounded-md h-5 px-3">Reviews</button>
                        </div>
                      </div>
                     
                    </div>
                  </Popup>
                </Marker>
              ));
            })
          : "no facility found"}
      </MapContainer>
    </div>
  );
}
