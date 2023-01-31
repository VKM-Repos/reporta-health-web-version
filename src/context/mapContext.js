import React, { createContext, useState, useEffect } from 'react';
import { useLeaflet } from 'react-leaflet';
import { flyTo } from 'leaflet';
import { Routing } from 'leaflet-routing-machine';

const MapContext = createContext({});

const MapContextProvider = ({ children }) => {
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [facilities, setFacilities] = useState(null);
    const [searchFacilities, setSearchFacilities] = useState(null);

    const { map } = useLeaflet();

    const flyToHandler = (facility) => {
        flyTo(facility.latlng, facility.zoom);
        const routing = new Routing({
            waypoints: [facility.latlng, facility.destination],
            routeWhileDragging: true,
        });
        routing.addTo(map);
    };

    useEffect(() => {
        setFacilities(facilities);
        setSearchFacilities(searchFacilities);
    }, [facilities, searchFacilities]);

    return (
        <MapContext.Provider
            value={{
                selectedFacility,
                showPopup,
                facilities,
                setFacilities,
                searchFacilities,
                setSearchFacilities,
                flyTo: flyToHandler,

            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export { MapContext, MapContextProvider };