import { useState, useEffect } from "react";
import SearchHeader from "@components/SearchHeader/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import { useFetchNearestFacilityStore } from "@store/fetchNearestFacility.store";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import { useFetchNearestFacility } from "@hooks/useFetchNearestFacility.hook";
import SearchForm from "@components/Forms/SearchForm/SearchForm";

export default function FetchResult() {
  const fetchResults =
    useFetchNearestFacilityStore.getState()?.fetchResults?.data;
  const [location, setLocation] = useState(null);
  const [filteredResults, setFilteredResults] = useState(
    useFetchNearestFacilityStore.getState()?.fetchResults?.data
  );
  const [query, setQuery] = useState("");

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

  const { mutate, isLoading } = useFetchNearestFacility();

  const handleChange = (events) => {
    setQuery(events.target.value);
  };
  const fetchNearestFacility = () => {
    mutate(query);
    setLocation(null);
    // setFilteredResults(fetchResults)
    isLoading ? console.log("loading") : console.log("loaded");
  };

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
