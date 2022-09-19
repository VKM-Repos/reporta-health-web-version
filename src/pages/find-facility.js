import { useState, useEffect } from "react";
import SearchHeader from "@components/SearchHeader/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import { useFetchNearestFacilityStore } from "@store/fetchNearestFacility.store";
import SearchForm from "@components/Forms/SearchForm/SearchForm";

export default function FetchResult() {
  const fetchResults =
    useFetchNearestFacilityStore.getState()?.fetchResults?.data;
  const [location, setLocation] = useState(null);
  const [filteredResults, setFilteredResults] = useState(
    useFetchNearestFacilityStore.getState()?.fetchResults?.data
  );

  const handeleChangeLocation = (location) => {
    setLocation(location);
  };
  useEffect(() => {
    if (location !== null) {
      let filteredItems = fetchResults.filter(
        (result) => result.statename === location
      );
      setFilteredResults([...filteredItems]);
    } else {
      setFilteredResults(
        useFetchNearestFacilityStore.getState()?.fetchResults?.data
      );
    }
  }, [location, setLocation]);



  return (
    <section className="w-full bg-background min-h-screen font-jarkata relative overflow-hidden select-none">
      <SearchHeader handeleChangeLocation={handeleChangeLocation} />

      <div></div>
      <div className="w-[90vw] my-8 mx-auto">
        <SearchForm />
        <div className="my-8 lg:my-16">
          <SearchQueryResult fetchResults={filteredResults || fetchResults} />
        </div>
      </div>
    </section>
  );
}
