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
                    <Popup>
                      <div className="w-64 h-24 p-4 text-sm lowercase font-semibold">
                        {facility.reg_fac_name}
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
