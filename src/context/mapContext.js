import React, { createContext, useState, useEffect } from 'react';

export const MapContext = createContext({});

const MapContextProvider = ({ children }) => {
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [selectedDirection, setSelectedDirection] = useState(null);
    const [nearestFacilities, setNearestFacilities] = useState(null);
    const [searchFacilities, setSearchFacilities] = useState(null);


    useEffect(() => {
        setSelectedFacility(selectedFacility)
        setNearestFacilities(nearestFacilities);
        setSearchFacilities(searchFacilities);
        setSelectedDirection(selectedDirection);
    }, [nearestFacilities, searchFacilities, selectedFacility, selectedDirection]);

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
                setSelectedDirection
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export default MapContextProvider;