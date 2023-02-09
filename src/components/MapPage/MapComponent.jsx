import React, {
  Fragment,
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
  } = useContext(MapContext);

  // console.log("nearestFac", nearestFacilities);
  // console.log("searchFac", searchFacilities);

  // -----------------lOCATE USER BUTTON -----------------------//
  const FlyToLocateUser = ({ latlng }) => {
    const map = useMap(); // available when component nested inside MapContainer
    const fly = () => {
      map.flyTo(latlng, 17, { duration: 2 });
    };
    return (
      <button
        onClick={fly}
        className="p-2 rounded-md bg-black/40 backdrop-blur absolute z-[900] left-2 md:left-6 top-[18%]"
      >
        <svg
          fill="currentColor"
          className="w-[1.5rem] aspect-square"
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

  // RENDER NEAREST FACILITIES MARKER
  // const FacilitiesMarker = () => {
  //   const markerRef = useRef(null);
  //   const map = useMap();

  //   useEffect(() => {
  //     if (markerRef.current) {
  //       // Perform any custom logic on the marker here,
  //       // such as setting the icon, popup content, etc.
  //       // markerRef.current.control._container.style.display = "None";
  //     }
  //     return () => {
  //       markerRef.current = null;
  //     };
  //   }, [markerRef, map]);

  //   return (
  //     <>
  //       {data?.pages.map((result) => {
  //         return result?.data?.map((facility, index) => (
  //           <Fragment key={facility.id}>
  //             <Marker
  //               position={[facility?.latitude, facility?.longitude]}
  //               icon={icon}
  //             >
  //               <Tooltip
  //                 direction="bottom"
  //                 offset={[0, 10]}
  //                 opacity={0.8}
  //                 permanent
  //               >
  //                 <h2 className="text-[100%] font-bold text-primary">
  //                   {facility.reg_fac_name}
  //                 </h2>
  //               </Tooltip>
  //               <Popup maxWidth="auto" maxHeight="auto">
  //                 <PopupInfo
  //                   facility={facility}
  //                   showReportModal={() => {
  //                     setShowReportModal(true);
  //                   }}
  //                   openReviewModal={() => {
  //                     setShowReviewModal(true);
  //                     console.log(facility);
  //                   }}
  //                 />

  //                 {
  //                   <ReportFacilityModal
  //                     onClose={closeReportModal}
  //                     visible={showReportModal}
  //                     facility={facility}
  //                     onSubmitClose={closeReportModalOnFormSubmit}
  //                   />
  //                 }
  //                 {
  //                   <ReviewFacilityModal
  //                     closeReviewModal={closeReviewModal}
  //                     facility={facility}
  //                     visible={showReviewModal}
  //                   />
  //                 }
  //               </Popup>
  //             </Marker>
  //           </Fragment>
  //         ));
  //       })}
  //     </>
  //   );
  // };

  // RENDER GET DIRECTIONS MARKER

  const RouteSummary = ({ distance, time }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-full ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-black bg-black/40 backdrop-blur absolute z-[900] left-2 md:left-6 top-[26%]"
        >
          <svg
            className="w-[1.5rem] aspect-square"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            fill="currentColor"
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
                <path
                  fill="currentColor"
                  d="M27.336,12c0.133,0,0.26-0.053,0.354-0.146l3.99-4c0.195-0.195,0.195-0.512,0-0.707l-3.99-4 C27.596,3.053,27.469,3,27.336,3H18V0.5C18,0.224,17.776,0,17.5,0h-3C14.224,0,14,0.224,14,0.5V3h-3.703C9.521,3,9,3.603,9,4.5v6 c0,0.897,0.521,1.5,1.297,1.5H14v1H4.782c-0.14,0-0.273,0.059-0.368,0.162l-4.108,4.472c-0.175,0.19-0.176,0.482-0.002,0.674 l4.108,4.528C4.507,22.94,4.641,23,4.782,23H14v8c0,0.276,0.224,0.5,0.5,0.5S15,31.276,15,31v-8h2v5c0,0.276,0.224,0.5,0.5,0.5 S18,28.276,18,28v-5h4.674C23.455,23,24,22.383,24,21.5v-7c0-0.883-0.545-1.5-1.326-1.5H18v-1H27.336z M15,1h2v2h-2V1z M10.297,11 C10.051,11,10,10.729,10,10.5v-6C10,4.271,10.051,4,10.297,4h16.832l3.491,3.5L27.128,11H10.297z M22.674,14 C22.943,14,23,14.271,23,14.5v7c0,0.229-0.057,0.5-0.326,0.5H5.004l-3.652-4.026L5.002,14H22.674z M17,13h-2v-1h2V13z"
                ></path>{" "}
                <path
                  fill="currentColor"
                  d="M17.849,19.472c0.827,0,1.5-0.673,1.5-1.5s-0.673-1.5-1.5-1.5s-1.5,0.673-1.5,1.5 S17.022,19.472,17.849,19.472z M17.849,17.472c0.276,0,0.5,0.225,0.5,0.5s-0.224,0.5-0.5,0.5s-0.5-0.225-0.5-0.5 S17.573,17.472,17.849,17.472z"
                ></path>{" "}
                <path
                  fill="currentColor"
                  d="M13.47,19.472c0.827,0,1.5-0.673,1.5-1.5s-0.673-1.5-1.5-1.5s-1.5,0.673-1.5,1.5 S12.643,19.472,13.47,19.472z M13.47,17.472c0.276,0,0.5,0.225,0.5,0.5s-0.224,0.5-0.5,0.5s-0.5-0.225-0.5-0.5 S13.194,17.472,13.47,17.472z"
                ></path>{" "}
                <path
                  fill="currentColor"
                  d="M9.091,19.472c0.827,0,1.5-0.673,1.5-1.5s-0.673-1.5-1.5-1.5s-1.5,0.673-1.5,1.5S8.264,19.472,9.091,19.472 z M9.091,17.472c0.276,0,0.5,0.225,0.5,0.5s-0.224,0.5-0.5,0.5s-0.5-0.225-0.5-0.5S8.815,17.472,9.091,17.472z"
                ></path>{" "}
                <path
                  fill="currentColor"
                  d="M17,7h-2c-0.276,0-0.5,0.224-0.5,0.5S14.724,8,15,8h2c0.276,0,0.5-0.224,0.5-0.5S17.276,7,17,7z"
                ></path>{" "}
                <path
                  fill="currentColor"
                  d="M23,7h-3c-0.276,0-0.5,0.224-0.5,0.5S19.724,8,20,8h3c0.276,0,0.5-0.224,0.5-0.5S23.276,7,23,7z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        {isOpen && (
          <div className="w-fit bg-white text-black">
            <h2>Route Summary:</h2>
            <h3>Total distance: {distance}</h3>
            <h3>Travel Time: {time}</h3>
          </div>
        )}
      </div>
    );
  };

  const GetDirectionToFacilitiesMarker = () => {
    const markerRef = useRef(null);
    const map = useMap(); // available when component nested inside MapContainer
    const controlRef = useRef(null);

    const [routeSummary, setRouteSummary] = useState({
      distance: "",
      time: "",
    });

    useEffect(() => {
      if (markerRef.current) {
        markerRef?.current.openPopup();

        if (!controlRef.current) {
          controlRef.current = L.Routing.control({
            waypoints: [
              L.latLng(location.coordinates.lat, location.coordinates.lng),
              L.latLng(
                selectedDirection?.latitude,
                selectedDirection?.longitude
              ),
            ],
            // lineOptions: {
            //   styles: [{ color: "#242F9B", opacity: 1, weight: 5 }],
            // },
            show: false,
            fitSelectedRoutes: false,
            showAlternatives: false,
            createMarker: function () {
              return null;
            },
            routeWhileDragging: false,
            lineOptions: {
              styles: [
                {
                  color: "blue",
                  opacity: 1,
                  weight: 5,
                },
                {
                  color: "blue",
                  opacity: 1,
                  weight: 5,
                },
                {
                  color: "blue",
                  opacity: 1,
                  weight: 5,
                },
              ],
            },
            router: L.routing.osrmv1({
              serviceUrl: "https://router.project-osrm.org/route/v1",
              useOsrmWith: "viaroute",
            }),
            formatter: new L.Routing.Formatter({
              unit: "imperial",
            }),
            routeLine: function (route, options) {
              return L.polyline(route.coordinates, options);
            },
            altRouteLine: function (route, options) {
              return L.polyline(route.coordinates, options);
            },
            summaryTemplate: (data) => {
              setRouteSummary({ distance: data.distance, time: data.time });
            },
            altRoutes: function (routes) {
              // show only the first alternative
              if (routes.length > 0) {
                return [routes[0]];
              } else {
                return [];
              }
            },
          }).addTo(map);

          return () => {
            if (map.hasLayer(controlRef.current)) {
              controlRef.current.remove();
            }
          };
        }
      }
    });

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
              <Popup maxWidth="auto" maxHeight="auto">
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
        <RouteSummary
          distance={routeSummary.distance}
          time={routeSummary.time}
        />
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
          16,
          { duration: 1 }
        );
        markerRef?.current.openPopup();
        return () => {
          markerRef.current = null;
        };
      }
    }, [map, selectedFacility]);

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
              <Popup maxWidth="auto" maxHeight="auto">
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
      <div className="text-3xl w-screen h-screen text-center">Loading...</div>
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
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
          />

          <UserMarker
            position={[location.coordinates.lat, location.coordinates.lng]}
            text="You are here"
          />
          {/* <FacilitiesMarker /> */}

          {/* <GetDirection /> */}
          <GetDirectionToFacilitiesMarker />
          <SelectedFacilitiesMarker />

          <FlyToLocateUser
            latlng={[location.coordinates.lat, location.coordinates.lng]}
          />
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
