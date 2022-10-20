import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [35, 50],
});

const position = [9.082, 8.6753];

export default function Maps({ facilityInfo, className }) {
  return (
    <div className={className}>
      <MapContainer
        center={position}
        zoom={10}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=8L7fs9mdkhXHT8JP63RZ"
        />

        {facilityInfo?.map((result, id) => (
          <Marker
            key={id}
            position={[result.latitude, result.longitude]}
            icon={icon}
          >
            <Popup>
              <div className="text-sm lowercase font-semibold">
                {result.reg_fac_name}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
