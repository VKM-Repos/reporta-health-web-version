import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Marker, Popup, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import { MapContext } from "@context/mapContext";
import { normalizeState, normalizeFacilityType } from "@libs/normalizeFilters";
import { useFacilityClusters } from "@hooks/useFacilityClusters.hook";
import { getFacilityIcon } from "../../../constants/facilityIcons";
import { fetchFacilityById } from "@services/query/fetchFacilityClusters.service";
import PopupInfo from "@components/MapPage/PopupInfo";
import ReviewFacilityModal from "@components/MapPage/ReviewFacilityModal";

const ClusterLayer = () => {
  const map = useMap();
  const { data, fetchByBounds, fetchNearby } = useFacilityClusters();
  const { servicesFilter, locationInput, facilityTypeInput } = useContext(MapContext);
  const [selectedPopupFacility, setSelectedPopupFacility] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const closeReviewModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    setShowReviewModal(false);
  };

  const modeRef = useRef("loading"); // 'nearby' | 'browse'
  const moveTimerRef = useRef(null);
  const zoomTimerRef = useRef(null);
  const servicesFilterRef = useRef(servicesFilter);
  const locationFilterRef = useRef(normalizeState(locationInput));
  const facilityTypeFilterRef = useRef(normalizeFacilityType(facilityTypeInput));
  const coordsRef = useRef(null);
  const lastBboxFetchRef = useRef("");
  const lastNearbyFetchRef = useRef("");
  const prevFilterRef = useRef("");
  const filterTimerRef = useRef(null);

  const getBboxString = () => {
    const bounds = map.getBounds();
    return `${bounds.getWest()},${bounds.getSouth()},${bounds.getEast()},${bounds.getNorth()}`;
  };

  useEffect(() => { servicesFilterRef.current = servicesFilter; }, [servicesFilter]);
  useEffect(() => { locationFilterRef.current = normalizeState(locationInput); }, [locationInput]);
  useEffect(() => { facilityTypeFilterRef.current = normalizeFacilityType(facilityTypeInput); }, [facilityTypeInput]);

  // combines the three filter refs into one params object for fetch calls
  const getActiveFilters = useCallback(() => {
    const filters = { ...servicesFilterRef.current };
    if (locationFilterRef.current) filters.state = locationFilterRef.current;
    if (facilityTypeFilterRef.current) filters.facility_type = facilityTypeFilterRef.current;
    return filters;
  }, []);

  const handleFetchByBounds = useCallback(() => {
    const bbox = getBboxString();
    const filters = getActiveFilters();
    const url = bbox + ":" + map.getZoom() + ":" + JSON.stringify(filters);
    if (lastBboxFetchRef.current === url) return;
    lastBboxFetchRef.current = url;
    fetchByBounds(bbox, map.getZoom(), filters);
  }, [map, fetchByBounds, getActiveFilters]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          modeRef.current = "nearby";
          coordsRef.current = { lat: coords.latitude, lng: coords.longitude };
          map.setView([coords.latitude, coords.longitude], 13, { animate: true });
          fetchNearby(coords.latitude, coords.longitude, map.getZoom(), 10, getActiveFilters());
        },
        () => {
          modeRef.current = "browse";
          handleFetchByBounds();
        },
        { timeout: 6000, maximumAge: 0 }
      );
    } else {
      modeRef.current = "browse";
      handleFetchByBounds();
    }

    const handleMoveEnd = () => {
      modeRef.current = "browse";
      clearTimeout(moveTimerRef.current);
      moveTimerRef.current = setTimeout(handleFetchByBounds, 1000);
    };

    const handleZoomEnd = () => {
      modeRef.current = "browse";
      clearTimeout(zoomTimerRef.current);
      clearTimeout(moveTimerRef.current);
      zoomTimerRef.current = setTimeout(handleFetchByBounds, 200);
    };

    map.on("moveend", handleMoveEnd);
    map.on("zoomend", handleZoomEnd);

    return () => {
      map.off("moveend", handleMoveEnd);
      map.off("zoomend", handleZoomEnd);
      clearTimeout(moveTimerRef.current);
      clearTimeout(zoomTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, handleFetchByBounds, fetchNearby]);

  // re-fetch when service chips, location, or facility type change
  useEffect(() => {
    const filterKey = JSON.stringify(servicesFilter) + "|" + locationInput + "|" + facilityTypeInput;
    if (filterKey === prevFilterRef.current) return;
    prevFilterRef.current = filterKey;
    clearTimeout(filterTimerRef.current);
    filterTimerRef.current = setTimeout(() => {
      const filters = getActiveFilters();
      if (modeRef.current === "nearby" && coordsRef.current) {
        const url = "nearby:" + coordsRef.current.lat + ":" + coordsRef.current.lng + ":" + JSON.stringify(filters);
        if (lastNearbyFetchRef.current === url) return;
        lastNearbyFetchRef.current = url;
        fetchNearby(coordsRef.current.lat, coordsRef.current.lng, map.getZoom(), 10, filters);
        return;
      }
      handleFetchByBounds();
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesFilter, locationInput, facilityTypeInput]);

  const handleClusterZoomIn = (lat, lng, bounds) => {
    if (bounds) {
      map.fitBounds([
        [bounds.min_lat, bounds.min_lng],
        [bounds.max_lat, bounds.max_lng],
      ]);
    } else {
      map.setView([lat, lng], map.getZoom() + 3, { animate: true });
    }
  };

  if (!data) return null;

  if (data.type === "clusters") {
    return (
      <>
        {data.results.map((c, i) => {
          if (!c.lat || !c.lng) return null;
          return (
            <Marker
              key={i}
              position={[c.lat, c.lng]}
              icon={L.divIcon({
                className: "",
                html: `<div style="
                  background:#0f6b4f;color:#fff;border-radius:50%;
                  width:40px;height:40px;display:flex;align-items:center;justify-content:center;
                  font-weight:700;font-size:13px;border:2px solid #fff;
                  box-shadow:0 2px 8px rgba(0,0,0,0.25);cursor:pointer;
                ">${c.count > 999 ? Math.round(c.count / 1000) + "k" : c.count}</div>`,
                iconSize: [40, 40],
                iconAnchor: [20, 20],
              })}
              eventHandlers={{ click: () => handleClusterZoomIn(c.lat, c.lng, c.bounds) }}
            >
              <Popup>
                {c.label && <div className="font-bold text-primary">{c.label}</div>}
                <div>{c.count} facilities</div>
                {c.avg_rating && <div>⭐ {c.avg_rating} avg rating</div>}
              </Popup>
            </Marker>
          );
        })}
      </>
    );
  }

  // type === "facilities"
  return (
    <>
      {data.results.map((facility) => (
        <Marker
          key={facility.id}
          position={[facility?.location?.latitude, facility?.location?.longitude]}
          icon={getFacilityIcon(facility.facility_type, facility)}
          eventHandlers={{
            click: async () => {
              const full = await fetchFacilityById(facility.id);
              setSelectedPopupFacility(full);
            },
          }}
        >
          <Tooltip direction="bottom" offset={[0, 10]} opacity={0.8}>
            <h2 className="text-[100%] font-bold text-primary">{facility.name}</h2>
          </Tooltip>
          <Popup maxWidth="auto" maxHeight="auto" offset={[0, 150]}>
            {selectedPopupFacility?.id === facility.id ? (
              <PopupInfo
                facility={selectedPopupFacility}
                openReviewModal={() => setShowReviewModal(true)}
              />
            ) : (
              <div className="p-4 text-sm text-black/50">Loading...</div>
            )}
          </Popup>
        </Marker>
      ))}
      {selectedPopupFacility && (
        <ReviewFacilityModal
          closeReviewModal={closeReviewModal}
          facility={selectedPopupFacility}
          visible={showReviewModal}
          setIsSelected={setSelectedPopupFacility}
        />
      )}
    </>
  );
};

export default ClusterLayer;
