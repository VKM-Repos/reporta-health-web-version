import React, { createContext, useState, useEffect } from 'react';

export const MapContext = createContext({});

const MapContextProvider = ({ children }) => {
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [selectedDirection, setSelectedDirection] = useState(null);
    const [nearestFacilities, setNearestFacilities] = useState(null);
    const [searchFacilities, setSearchFacilities] = useState(null);
    const [routingControl, setRoutingControl] = useState(null);

    // added: global services filter so ClusterLayer can react to chip selections
    const [servicesFilter, setServicesFilter] = useState({
        has_gbv_services: false,
        has_sarcs: false,
        has_fistula_programme: false,
    });
    // added: shared location/facility-type filters so ClusterLayer can react to them too
    const [locationInput, setLocationInput] = useState("");
    const [facilityTypeInput, setFacilityTypeInput] = useState("");

    useEffect(() => {
        setSelectedFacility(selectedFacility)
        setNearestFacilities(nearestFacilities);
        setSearchFacilities(searchFacilities);
        setSelectedDirection(selectedDirection);
    }, [nearestFacilities, searchFacilities, selectedFacility, selectedDirection, routingControl]);

    return (
        <MapContext.Provider
            value={{
                nearestFacilities,
                setNearestFacilities,
                searchFacilities,
                setSearchFacilities,
                selectedFacility,
                setSelectedFacility,
                selectedDirection,
                setSelectedDirection,
                setRoutingControl,
                routingControl,
                servicesFilter,         // added: expose filter state
                setServicesFilter,      // added: expose filter setter
                locationInput,          // added: expose location filter
                setLocationInput,
                facilityTypeInput,      // added: expose facility type filter
                setFacilityTypeInput,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export default MapContextProvider;