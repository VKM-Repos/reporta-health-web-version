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

import ReportFacilityModal from "@components/Facility/ReportFacilityModal";

import useGetLocation from "@hooks/useGetLocation.hook";

import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";

import PopupInfo from "./PopupInfo";

const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [35, 50],
});

const iconP = L.icon({
  iconUrl: "health-worker.svg",
  iconSize: [35, 35],
});

export default function Maps({ className, data }) {
  // How to pass the coords of nearest facility and search facility coords data into this page
  // import their apis here
  // Import search facility data

  const location = useGetLocation();

  const [showModal, setShowModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const closeReportModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowReportModal(false);
  };
  const closeReportModalOnFormSubmit = () => {
    setShowReportModal(false);
  };

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
              radius={600}
            />
            <Popup>You are here</Popup>
          </Marker>
          {/* here should be a better place to do that the data 
            is coming from here and it is being passed down as a prop in the export default
             so that we can use the map component to pass the actual data there
                */}
          {data?.pages && Array.isArray(data.pages) && data?.pages.length !== 0
            ? data?.pages.map((result) => {
                return result?.data?.map((facility) => (
                  <>
                    <Marker
                      key={facility.id}
                      // TODO: nearest facility coords or search facility coords
                      //
                      position={[facility?.latitude, facility?.longitude]}
                      icon={icon}
                    >
                      <Popup maxWidth="auto" maxHeight="auto">
                        <PopupInfo
                          facility={facility}
                          showReportModal={() => {
                            setShowReportModal(true);
                          }}
                        />
                      </Popup>
                    </Marker>
                    <ReportFacilityModal
                      onClose={closeReportModal}
                      visible={showReportModal}
                      facility={facility}
                      onSubmitClose={closeReportModalOnFormSubmit}
                    />
                  </>
                ));
              })
            : "no map found"}

          <LocationMarker />
        </MapContainer>
      )}
    </div>
  );
}
