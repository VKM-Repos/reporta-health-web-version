import { createContext, useState, useContext, useMemo } from "react";


export const SearchContext = createContext({});

// export const useSearchFacility = () => useContext(SearchContext);


export const SearchContextProvider = ({ children }) => {
    const [searchFacilityData, setSearchFacilityData] = useState('name');
    const value = useMemo(() => ({
        searchFacilityData, setSearchFacilityData
    }), [searchFacilityData])

    return (
        <SearchContext.Provider
            value={value}
        >
            {children}
        </SearchContext.Provider>
    );
};
