import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Marker,
  Popup,
  TileLayer,
  Map,
  useMapEvents,
  Circle,
  Tooltip,
  withLeaflet,
  MapContainer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { createControlComponent } from "@react-leaflet/core";

import ReportFacilityModal from "@components/Facility/ReportFacilityModal";
import useGetLocation from "@hooks/useGetLocation.hook";
import { useFetchNearestFacilities } from "@hooks/useFetchNearestFacility.hook";
import PopupInfo from "@components/MapPage/PopupInfo";
import { MapContext } from "@context/mapContext";
import ReviewFacilityModal from "./ReviewFacilityModal";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import CustomTooltip from "./CustomTooltip";

const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [30, 45],
});
const iconPing = L.divIcon({
  className: "rounded-full bg-primary animate-pulse",
  iconSize: [35, 35],
});

const iconP = L.icon({
  iconUrl: "health-worker.svg",
  iconSize: [25, 25],
});

const MapComponent = ({ className }) => {
  const location = useGetLocation();
  const [position, setPosition] = useState({});
  const [showReportModal, setShowReportModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error("Geolocation is not supported by your browser.");
        }
      );
    }
  }, []);
  const { data } = useFetchNearestFacilities();

  const {
    selectedFacility,
    selectedDirection,
    nearestFacilities,
    searchFacilities,
    routingControl,
    setRoutingControl,
  } = useContext(MapContext);

  // ___________________Zoom control ------------
  const ZoomControl = () => {
    const map = useMap();

    const handleZoomIn = () => {
      map.zoomIn();
    };

    const handleZoomOut = () => {
      map.zoomOut();
    };

    return (
      <div className="flex flex-col items-center justify-center space-y-1">
        <p className="text-[80%] text-black/40 font-bold">zoom</p>
        <CustomTooltip text="hello">
          <button
            className="bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full w-[2rem] aspect-square text-[150%] transition-all ease-in-out duration-150 "
            onClick={handleZoomIn}
          >
            +
          </button>
        </CustomTooltip>
        <button
          className="bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full w-[2rem] aspect-square text-[150%] transition-all ease-in-out duration-150 "
          onClick={handleZoomOut}
        >
          -
        </button>
      </div>
    );
  };

  // -----------------Toggle direction -----------------------//
  const ToggleDirection = () => {
    const [showDirections, setShowDirections] = useState(true);
    const map = useMap();

    const toggleDirections = () => {
      const routingContainer = document.querySelector(
        ".leaflet-routing-container"
      );
      if (map && routingContainer.style.display === "block") {
        setShowDirections((routingContainer.style.display = "none"));
      } else {
        setShowDirections((routingContainer.style.display = "block"));
      }
    };

    return (
      <button className="focus:outline-none" onClick={toggleDirections}>
        {/* {showDirections ? "Hide" : "Show"} */}
        <svg
          fill="currentColor"
          className="w-[1.9rem] aspect-square bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full p-1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M 16 3 C 15.23 3 14.457 3.293 13.875 3.875 L 13.75 4.03125 L 4.03125 13.75 L 3.875 13.875 C 2.711 15.039 2.711 16.961 3.875 18.125 L 13.875 28.125 C 15.039 29.289 16.961 29.289 18.125 28.125 L 28.125 18.125 C 29.289 16.961 29.289 15.039 28.125 13.875 L 18.125 3.875 C 17.543 3.293 16.77 3 16 3 z M 16 5 C 16.254 5 16.51975 5.08225 16.71875 5.28125 L 26.71875 15.28125 C 27.11675 15.67925 27.11675 16.31975 26.71875 16.71875 L 16.71875 26.71875 C 16.32075 27.11675 15.68025 27.11675 15.28125 26.71875 L 5.28125 16.71875 C 4.88325 16.32075 4.88325 15.68025 5.28125 15.28125 L 15.28125 5.28125 C 15.48025 5.08225 15.746 5 16 5 z M 17 11 L 17 14 L 13 14 C 11.895 14 11 14.895 11 16 L 11 19 L 13 19 L 13 16 L 17 16 L 17 19 L 21 15 L 17 11 z"></path>
          </g>
        </svg>
      </button>
    );
  };

  // -----------------lOCATE USER BUTTON -----------------------//
  const FlyToLocateUser = ({ latlng }) => {
    const map = useMap(); // available when component nested inside MapContainer
    const fly = () => {
      map.flyTo(latlng, 17, { duration: 2 });
    };
    return (
      <button onClick={fly} className="">
        <svg
          fill="currentColor"
          className="w-[1.7rem] aspect-square bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full p-1"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 493.242 493.242"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M325.42,277.975v38.539c81.537,12.266,129.332,42.092,129.332,64.984c0,29.521-79.18,70.689-208.131,70.689 c-128.95,0-208.131-41.169-208.131-70.689c0-22.893,47.796-52.719,129.35-64.984v-38.555C77.221,290.91,0,326.248,0,381.498 c0,70.912,127.07,109.18,246.621,109.18s246.621-38.267,246.621-109.18C493.242,326.248,416.039,290.927,325.42,277.975z"></path>{" "}
              <path d="M167.395,222.214c7.088,0,13.492-4.189,16.313-10.691l15.088-34.571v178.053c0,10.737,8.699,19.436,19.438,19.436 c10.737,0,19.435-8.699,19.435-19.436V235.819h17.922v119.186c0,10.737,8.699,19.436,19.438,19.436 c10.738,0,19.436-8.699,19.436-19.436V176.936l15.087,34.588c2.82,6.501,16.315,10.691,16.315,10.691 c5.99,0,11.613-3.026,14.896-8.046c3.298-5.035,3.824-11.358,1.418-16.87l-36.737-84.28c-6.66-15.277-21.763-25.171-38.444-25.171 h-40.735c-16.682,0-31.785,9.877-38.444,25.171l-36.754,84.28c-2.39,5.496-1.864,11.835,1.435,16.87 C155.778,219.187,161.387,222.214,167.395,222.214z"></path>{" "}
              <path d="M246.621,74.321c12.73,0,23.865-6.692,30.221-16.712c3.538-5.545,5.657-12.092,5.657-19.151 c0-19.835-16.074-35.893-35.878-35.893c-19.803,0-35.861,16.059-35.861,35.893c0,7.06,2.117,13.607,5.641,19.166 C222.771,67.629,233.891,74.321,246.621,74.321z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    );
  };

  // ---------------------MARKERS----------------------------------------------------//

  // RENDER USER MARKER
  const UserMarker = ({ position, text }) => {
    const map = useMap();

    const markerRef = useRef(null);
    useEffect(() => {
      if (markerRef.current) {
        // Perform any custom logic on the marker here,
        // such as setting the icon, popup content, etc.
      }
    }, [map]);

    return (
      <Marker icon={iconP} position={position} ref={markerRef}>
        <Marker position={position} icon={iconPing}></Marker>
        <Popup>{text}</Popup>
      </Marker>
    );
  };

  const closeReviewModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowReviewModal(false);
  };

  // const closeReportModal = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   setShowReportModal(false);
  // };

  // const closeReportModalOnFormSubmit = () => {
  //   setShowReportModal(false);
  // };

  // RENDER NEAREST FACILITIES MARKER
  const FacilitiesMarker = () => {
    const markerRef = useRef(null);
    const map = useMap();
    const [isSelected, setIsSelected] = useState(null);
    const [openReport, setOpenReport] = useState(null);
    const [openReview, setOpenReview] = useState(null);

    const closeReportModal = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setOpenReport(false);
    };

    const closeReportModalOnFormSubmit = () => {
      setOpenReview(false);
    };

    useEffect(() => {}, [isSelected]);

    return (
      <>
        {data?.pages.map((result) => {
          return result?.data?.map((facility, index) => (
            <Fragment key={facility.id}>
              <Marker
                position={[facility?.latitude, facility?.longitude]}
                icon={icon}
                ref={markerRef}
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
                <Popup maxWidth="auto" maxHeight="auto" offset={[0, 150]}>
                  <PopupInfo
                    facility={facility}
                    showReportModal={() => {
                      setIsSelected(facility);
                      setOpenReport(true);
                      setOpenReview(false);
                    }}
                    openReviewModal={() => {
                      setIsSelected(facility);
                      setOpenReview(true);
                      setOpenReport(false);
                    }}
                  />
                </Popup>
              </Marker>
              {isSelected?.latitude === facility.latitude && (
                <ReportFacilityModal
                  onClose={closeReportModal}
                  visible={!!isSelected && openReport}
                  facility={facility}
                  onSubmitClose={closeReportModalOnFormSubmit}
                  setIsSelected={setIsSelected}
                />
              )}

              {isSelected?.latitude === facility.latitude && (
                <ReviewFacilityModal
                  closeReviewModal={closeReviewModal}
                  facility={facility}
                  visible={!!isSelected && openReview}
                  // visible={showReviewModal}
                  setIsSelected={setIsSelected}
                />
              )}
            </Fragment>
          ));
        })}
      </>
    );
  };

  // RENDER GET DIRECTIONS MARKER

  const GetDirectionToFacilitiesMarker = () => {
    const map = useMap();
    const markerRef = useRef(null);

    useEffect(() => {
      if (markerRef.current) {
        // markerRef?.current.openPopup();

        !routingControl ? addRoutingControl() : updateRoutingControl();
      }
    }, [addRoutingControl, updateRoutingControl]);

    const addRoutingControl = useCallback(() => {
      if (routingControl !== null) removeRoutingControl();

      const control = L.Routing.control({
        waypoints: [
          L.latLng(location.coordinates.lat, location.coordinates.lng),
          L.latLng(selectedDirection?.latitude, selectedDirection?.longitude),
        ],
        show: false,
        fitSelectedRoutes: selectedDirection ? false : true,
        showAlternatives: false,
        createMarker: function () {
          return null;
        },
        summaryTemplate:
          `<h2 style="font-size: 1.5rem;">{name}</h2>` +
          `<h3 style="font-size: 1.1rem;">Distance: {distance}</h3>` +
          `<h3 style="font-size: 1.1rem; padding-bottom: 1.5rem;">Time: {time}</h3>`,
        routeWhileDragging: false,
        lineOptions: {
          styles: [
            {
              color: "#242F9B",
              opacity: 1,
              weight: 5,
            },
          ],
        },
      }).addTo(map);
      setRoutingControl(control);
    }, [map, removeRoutingControl]);

    const removeRoutingControl = useCallback(() => {
      if (routingControl !== null) {
        map?.removeControl(routingControl);
        setRoutingControl(null);
      }
    }, [map]);

    const updateRoutingControl = useCallback(() => {
      routingControl
        .getPlan()
        .setWaypoints([
          L.latLng(location.coordinates.lat, location.coordinates.lng),
          L.latLng(selectedDirection?.latitude, selectedDirection?.longitude),
        ]);
    }, []);

    return (
      <>
        {selectedDirection ? (
          <Fragment>
            <Marker
              position={[
                selectedDirection?.latitude,
                selectedDirection?.longitude,
              ]}
              ref={markerRef}
              icon={icon}
            >
              <Popup maxWidth="auto" maxHeight="auto" offset={[0, 150]}>
                <PopupInfo
                  facility={selectedDirection}
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

  // RENDER SELECTED FACILITIES MARKER
  const SelectedFacilitiesMarker = () => {
    const markerRef = useRef(null);
    const map = useMap(); // available when component nested inside MapContainer

    const [showReportModal, setShowReportModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    const closeReviewModal = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setShowReviewModal(false);
    };

    const closeReportModal = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setShowReportModal(false);
    };

    const closeReportModalOnFormSubmit = () => {
      setShowReportModal(false);
    };

    useEffect(() => {
      if (markerRef.current) {
        // Perform any custom logic on the marker here,
        // such as setting the icon, popup content, etc.
        map.flyTo(
          [selectedFacility?.latitude, selectedFacility?.longitude],
          18,
          { duration: 4 }
        );

        markerRef?.current.openPopup();
        return () => {
          markerRef.current = null;
        };
      }
    }, [map]);

    return (
      <>
        {selectedFacility && (
          <Fragment>
            <Marker
              position={[
                selectedFacility?.latitude,
                selectedFacility?.longitude,
              ]}
              icon={icon}
              ref={markerRef}
            >
              <Popup maxWidth="auto" maxHeight="auto" offset={[0, 150]}>
                <PopupInfo
                  facility={selectedFacility}
                  showReportModal={() => {
                    setShowReportModal(true);
                  }}
                  openReviewModal={() => {
                    setShowReviewModal(true);
                  }}
                />
              </Popup>
            </Marker>
            <ReportFacilityModal
              onClose={closeReportModal}
              visible={showReportModal}
              facility={selectedFacility}
              onSubmitClose={closeReportModalOnFormSubmit}
            />
            <ReviewFacilityModal
              closeReviewModal={closeReviewModal}
              facility={selectedFacility}
              visible={showReviewModal}
            />
          </Fragment>
        )}
      </>
    );
  };

  if (!Object.keys(position).length) {
    return (
      <div className="text-3xl flex justify-center items-center w-screen h-screen text-center">
        <LoadingSpinner text="" />
      </div>
    );
  }

  return (
    <div className={className}>
      {location.loaded && !location.error && (
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

          <FacilitiesMarker />
          <SelectedFacilitiesMarker />
          <GetDirectionToFacilitiesMarker />
          <UserMarker
            position={[location.coordinates.lat, location.coordinates.lng]}
            text="You are here"
          />

          <div className="flex flex-col items-center justify-center space-y-1 px-2 py-4 rounded-md bg-black/40 backdrop-blur-sm absolute z-[900] left-[0.1rem] md:left-[0.2rem] top-[17%]">
            <FlyToLocateUser
              latlng={[location.coordinates.lat, location.coordinates.lng]}
            />

            <ToggleDirection />
            <ZoomControl />
          </div>
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
