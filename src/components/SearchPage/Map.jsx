import React, {
  Fragment,
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { createControlComponent } from "@react-leaflet/core";

import ReportFacilityModal from "@components/Facility/ReportFacilityModal";
import useGetLocation from "@hooks/useGetLocation.hook";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import PopupInfo from "@components/SearchQueryResult/PopupInfo";
import { MapContext } from "@context/mapContext";

const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [35, 50],
});
const iconPing = L.divIcon({
  className: "rounded-full bg-primary animate-pulse",
  iconSize: [35, 35],
});

const iconP = L.icon({
  iconUrl: "health-worker.svg",
  iconSize: [25, 25],
});

const Map = ({ className }) => {
  const location = useGetLocation();
  const [showReportModal, setShowReportModal] = useState(false);
  const { data } = useFetchNearestFacilities();

  const {
    selectedFacility,
    selectedDirection,
    nearestFacilities,
    searchFacilities,
  } = useContext(MapContext);
  //   console.log(selectedFacility);

  const [center, setCenter] = useState([
    location.coordinates.lat,
    location.coordinates.lng,
  ]);
  const [zoom, setZoom] = useState(15);

  const closeReportModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowReportModal(false);
  };
  const closeReportModalOnFormSubmit = () => {
    setShowReportModal(false);
  };

  //   RENDER GET DIRECTION TO FACILITY

  const handleDirection = () => {
    const route = L.Routing.control({
      waypoints: [
        L.latLng(location.coordinates.lat, location.coordinates.lng),
        L.latLng(selectedDirection?.latitude, selectedDirection?.longitude),
      ],
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      showControls: false,
      showAlternatives: false,
      collapsible: false,
      showMarkers: false,
      //   fitSelectedRoutes: false,
      lineOptions: {
        styles: [{ color: "blue", opacity: 1, weight: 5 }],
      },
      createMarker: function () {
        return null;
      },
    });

    return route;
  };

  const ShowDirection = createControlComponent(handleDirection);

  //   RENDER FLY TO FACILITY

  const handleFlyTo = () => {
    const routeControl = L.Routing.control({
      waypoints: [
        L.latLng(selectedFacility?.latitude, selectedFacility?.longitude),
        L.latLng(selectedFacility?.latitude, selectedFacility?.longitude),
      ],

      showControls: false,
      showMarkers: false,
      addWaypoints: false,
      fitSelectedRoutes: true,
      createMarker: function () {
        return null;
      },
    });

    return routeControl;

    //
  };
  const FlyToLocation = createControlComponent(handleFlyTo);

  //   Locate me handler
  function HandleLocateUser() {
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

  // RENDER USER MARKER
  const UserMarker = ({ position, text }) => {
    const markerRef = useRef(null);
    useEffect(() => {
      if (markerRef.current) {
        // Perform any custom logic on the marker here,
        // such as setting the icon, popup content, etc.
      }
    }, []);

    return (
      <Marker icon={iconP} position={position} ref={markerRef}>
        <Marker position={position} icon={iconPing}></Marker>
        <Popup>{text}</Popup>
      </Marker>
    );
  };

  // RENDER NEAREST FACILITIES MARKER
  const FacilitiesMarker = () => {
    const markerRef = useRef(null);

    useEffect(() => {
      if (markerRef.current) {
        // Perform any custom logic on the marker here,
        // such as setting the icon, popup content, etc.
        // markerRef.current.control._container.style.display = "None";
      }
    }, [markerRef]);

    return (
      <>
        {data?.pages &&
        Array.isArray(data.pages) &&
        data?.pages.length !== 0 ? (
          data?.pages.map((result) => {
            return result?.data?.map((facility, index) => (
              <Fragment key={facility.id}>
                <Marker
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
              </Fragment>
            ));
          })
        ) : (
          <div className="w-screen h-screen bg-primary ">No map found</div>
        )}
      </>
    );
  };

  // RENDER FACILITIES MARKER
  const SelectedFacilitiesMarker = () => {
    const markerRef = useRef(null);

    useEffect(() => {
      if (markerRef.current) {
        // Perform any custom logic on the marker here,
        // such as setting the icon, popup content, etc.
        markerRef?.current.openPopup();
      }
    }, []);

    return (
      <>
        {selectedFacility ? (
          <Fragment key={selectedFacility.id}>
            <Marker
              position={[
                selectedFacility?.latitude,
                selectedFacility?.longitude,
              ]}
              icon={icon}
              ref={markerRef}
            >
              <Popup maxWidth="auto" maxHeight="auto">
                <PopupInfo
                  facility={selectedFacility}
                  showReportModal={() => {
                    setShowReportModal(true);
                  }}
                />
              </Popup>
            </Marker>
          </Fragment>
        ) : null}
      </>
    );
  };

  // RENDER FACILITY POPUP

  return (
    <div className={className}>
      {location.loaded && !location.error && (
        <MapContainer
          center={
            [location.coordinates.lat, location.coordinates.lng] || center
          }
          zoom={zoom}
          style={{ width: "100%", height: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
          />
          <UserMarker
            position={[location.coordinates.lat, location.coordinates.lng]}
            text="You are here"
          />
          <FacilitiesMarker />
          <SelectedFacilitiesMarker />
          <HandleLocateUser />
          <ShowDirection />
          <FlyToLocation />
        </MapContainer>
      )}
    </div>
  );
};

export default memo(Map);
