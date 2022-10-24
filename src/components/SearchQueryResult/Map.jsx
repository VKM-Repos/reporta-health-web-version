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
                  <Popup>
                    <div className="text-sm lowercase font-semibold">
                      {facility.reg_fac_name}
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
