import React, { useEffect, useState } from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import useGetLocation from "@hooks/useGetLocation.hook";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import MapLegend from "@components/MapPage/MapLegend";
import ZoomControl from "@components/MapPage/map-controls/ZoomControl";
import ToggleDirectionButton from "@components/MapPage/map-controls/ToggleDirectionButton";
import LocateMeButton from "@components/MapPage/map-controls/LocateMeButton";
import UserMarker from "@components/MapPage/markers/UserMarker";
import ClusterLayer from "@components/MapPage/markers/ClusterLayer";
import DirectionsMarker from "@components/MapPage/markers/DirectionsMarker";
import SelectedFacilityMarker from "@components/MapPage/markers/SelectedFacilityMarker";

const MapComponent = ({ className }) => {
  const location = useGetLocation();
  const [position, setPosition] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        },
        (err) => {
          console.error("Geolocation error:", err.code, err.message);
        }
      );
    }
  }, []);

  if (!Object.keys(position).length) {
    return (
      <div className="text-3xl flex justify-center items-center w-screen h-screen text-center">
        <LoadingSpinner text="" />
      </div>
    );
  }

  return (
    <div className={className} style={{ position: "relative" }}>
      {location.loaded && !location.error && (
        <>
          <MapContainer
            center={[position.lat, position.lng]}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
            />

            <ClusterLayer />
            <SelectedFacilityMarker />
            <DirectionsMarker userLocation={location.coordinates} />
            <UserMarker
              position={[location.coordinates.lat, location.coordinates.lng]}
              text="You are here"
            />

            <div className="flex flex-col items-center justify-center space-y-1 px-2 py-4 rounded-md bg-black/40 backdrop-blur-sm absolute z-[900] left-[0.1rem] md:left-[0.2rem] top-[17%]">
              <LocateMeButton latlng={[location.coordinates.lat, location.coordinates.lng]} />
              <ToggleDirectionButton />
              <ZoomControl />
            </div>
          </MapContainer>

          <MapLegend />
        </>
      )}
    </div>
  );
};

export default MapComponent;
