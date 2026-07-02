import React, { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { MapContext } from "@context/mapContext";
import { icon } from "../../../constants/mapIcons";
import PopupInfo from "@components/MapPage/PopupInfo";
import ReportFacilityModal from "@components/Facility/ReportFacilityModal";

const DirectionsMarker = ({ userLocation }) => {
  const map = useMap();
  const markerRef = useRef(null);
  const { selectedDirection, routingControl, setRoutingControl } = useContext(MapContext);
  const [showReportModal, setShowReportModal] = useState(false);

  const closeReportModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    setShowReportModal(false);
  };

  const removeRoutingControl = useCallback(() => {
    if (routingControl !== null) {
      map?.removeControl(routingControl);
      setRoutingControl(null);
    }
  }, [map, routingControl, setRoutingControl]);

  const addRoutingControl = useCallback(() => {
    if (routingControl !== null) removeRoutingControl();

    const control = L.Routing.control({
      waypoints: [
        L.latLng(userLocation.lat, userLocation.lng),
        L.latLng(selectedDirection?.location?.latitude, selectedDirection?.location?.longitude),
      ],
      show: false,
      fitSelectedRoutes: selectedDirection ? false : true,
      showAlternatives: false,
      createMarker: () => null,
      summaryTemplate:
        `<h2 style="font-size: 1.5rem;">{name}</h2>` +
        `<h3 style="font-size: 1.1rem;">Distance: {distance}</h3>` +
        `<h3 style="font-size: 1.1rem; padding-bottom: 1.5rem;">Time: {time}</h3>`,
      routeWhileDragging: false,
      lineOptions: {
        styles: [{ color: "#242F9B", opacity: 1, weight: 5 }],
      },
    }).addTo(map);
    setRoutingControl(control);
  }, [map, routingControl, removeRoutingControl, selectedDirection, userLocation, setRoutingControl]);

  const updateRoutingControl = useCallback(() => {
    routingControl?.getPlan().setWaypoints([
      L.latLng(userLocation.lat, userLocation.lng),
      L.latLng(selectedDirection?.location?.latitude, selectedDirection?.location?.longitude),
    ]);
  }, [routingControl, userLocation, selectedDirection]);

  useEffect(() => {
    if (markerRef.current) {
      !routingControl ? addRoutingControl() : updateRoutingControl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addRoutingControl, updateRoutingControl]);

  if (!selectedDirection) return null;

  return (
    <Fragment>
      <Marker
        position={[selectedDirection?.location?.latitude, selectedDirection?.location?.longitude]}
        ref={markerRef}
        icon={icon}
      >
        <Popup maxWidth="auto" maxHeight="auto" offset={[0, 150]}>
          <PopupInfo
            facility={selectedDirection}
            showReportModal={() => setShowReportModal(true)}
          />
        </Popup>
      </Marker>
      <ReportFacilityModal
        onClose={closeReportModal}
        visible={showReportModal}
        facility={selectedDirection}
        onSubmitClose={() => setShowReportModal(false)}
      />
    </Fragment>
  );
};

export default DirectionsMarker;
