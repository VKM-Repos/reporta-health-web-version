import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { MapContext } from "@context/mapContext";
import { getFacilityIcon } from "../../../constants/facilityIcons";
import PopupInfo from "@components/MapPage/PopupInfo";
import ReportFacilityModal from "@components/Facility/ReportFacilityModal";
import ReviewFacilityModal from "@components/MapPage/ReviewFacilityModal";

const SelectedFacilityMarker = () => {
  const map = useMap();
  const markerRef = useRef(null);
  const { selectedFacility } = useContext(MapContext);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const closeReviewModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    setShowReviewModal(false);
  };

  const closeReportModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    setShowReportModal(false);
  };

  useEffect(() => {
    if (!selectedFacility) return;
    map.panTo(
      [selectedFacility?.location?.latitude, selectedFacility?.location?.longitude],
      { animate: true, duration: 1 }
    );
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [selectedFacility, map]);

  if (!selectedFacility) return null;

  return (
    <Fragment>
      <Marker
        position={[selectedFacility?.location?.latitude, selectedFacility?.location?.longitude]}
        icon={getFacilityIcon(selectedFacility.facility_type, selectedFacility)}
        ref={markerRef}
      >
        <Popup maxWidth="auto" maxHeight="auto" offset={[0, 150]}>
          <PopupInfo
            facility={selectedFacility}
            showReportModal={() => setShowReportModal(true)}
            openReviewModal={() => setShowReviewModal(true)}
          />
        </Popup>
      </Marker>
      <ReportFacilityModal
        onClose={closeReportModal}
        visible={showReportModal}
        facility={selectedFacility}
        onSubmitClose={() => setShowReportModal(false)}
      />
      <ReviewFacilityModal
        closeReviewModal={closeReviewModal}
        facility={selectedFacility}
        visible={showReviewModal}
      />
    </Fragment>
  );
};

export default SelectedFacilityMarker;
