import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  Circle,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

import ReportFacilityModal from "@components/Facility/ReportFacilityModal";
import useGetLocation from "@hooks/useGetLocation.hook";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import { SearchContext } from "@context/searchFacilityContext";
import PopupInfo from "@components/SearchQueryResult/PopupInfo";

const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [35, 50],
});

const iconP = L.icon({
  iconUrl: "health-worker.svg",
  iconSize: [35, 35],
});

const Map = ({ className }) => {
  // const [mapRef, map] = useLeaflet();

  const location = useGetLocation();
  // const [showModal, setShowModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const { data } = useFetchNearestFacilities();
  console.log(data);
  const { searchFacilityData } = useContext(SearchContext);

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
    const locationMap = useMapEvents({
      click() {
        locationMap.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        locationMap.flyTo(e.latlng, locationMap.getZoom());
      },
    });
  }

  return (
    <div className={className}>
      {location.loaded && !location.error && (
        <MapContainer
          // ref={mapRef}
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
          {/* conditionally render the 2 data */}
          {data?.pages && Array.isArray(data.pages) && data?.pages.length !== 0
            ? data?.pages.map((result) => {
                return result?.data?.map((facility, index) => (
                  <>
                    <Marker
                      key={facility.id}
                      // TODO: nearest facility coords or search facility coords
                      position={[facility?.latitude, facility?.longitude]}
                      icon={icon}
                    >
                      <Tooltip
                        direction="bottom"
                        offset={[0, 10]}
                        opacity={0.8}
                        permanent
                      >
                        <h2 className="text-[100%] font-bold text-primary">
                          {facility.reg_fac_name}
                        </h2>
                      </Tooltip>
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
};

export default Map;
