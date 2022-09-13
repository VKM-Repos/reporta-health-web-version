import {useState, useEffect} from 'react'
import SearchHeader from "@components/SearchHeader/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import { useSearchFacilityStore } from "@store/searchFacility.store";
import { set } from 'lodash';
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import { useSearchFacility } from '@hooks/useSearchFacility'
import { useForm } from "@context/StepperContext";

export default function SearchResult() {
  const searchResults = useSearchFacilityStore.getState()?.searchResults?.data;
  const [location, setLocation] = useState(null)
  const [filteredResults, setFilteredResults] = useState(useSearchFacilityStore.getState()?.searchResults?.data)
  const [query, setQuery] = useState('')
  
  const {seachFacilityQuery,setSeachFacilityQuery} = useForm()
  const handeleChangeLocation = (location) => {
    setLocation(location)
  }
  useEffect(()=> {
    if(location !== null) {
      let filteredItems = searchResults.filter(result=> result.statename === location)
    setFilteredResults([...filteredItems])
    } else {
      setFilteredResults(useSearchFacilityStore.getState()?.searchResults?.data)
    }
  }, [location, setLocation])

  const { mutate, isLoading } = useSearchFacility();

  const handleChange = (events)=> {
    setQuery(events.target.value);
  }
  const searchFacility = () =>{
    mutate(query)
    setLocation(null)
    isLoading? console.log('loading') : console.log('loaded')
  }

  return (
    <section className="w-full bg-background min-h-screen font-jarkata relative overflow-hidden select-none">
      <SearchHeader searchResults={searchResults} handeleChangeLocation={handeleChangeLocation} />
      <div className="w-[90vw] my-8 mx-auto">
        <p className="text-xs lg:text-sm text-secondary">{searchResults.length} search results for:</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-stretch">
          <h2 className="lg:col-span-2 text-[1.4rem] lg:text-[1.8rem] text-black font-extrabold">
            {searchResults.length > 0 ? seachFacilityQuery: `No search result for ${seachFacilityQuery} `}
          </h2>
          <div className="grid grid-cols-2 gap-5 justify-items-stretch bg-white p-2 rounded-md">
            {/* search input */}
            <div className="flex flex-row items-center justify-start  px-2 lg:px-4 rounded-md bg-gray">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                    stroke="#9F9F9F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
                    stroke="#9F9F9F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                className="w-full px-2 py-4 bg-gray focus:outline-none text-xs lg:text-sm"
                type="text"
                placeholder="Search"
                name="query"
                onChange={handleChange}
              />
            </div>
           <button
            type="button"
            value="Find facility"
            className="w-full lg:col-span-1 col-span-2 py-4 text-xs lg:text-sm rounded-md bg-primary hover:bg-opacity-90 cursor-pointer text-white"
            disabled={isLoading}
            onClick={searchFacility}
            >
            {isLoading ? <LoadingSpinner text="Searching for facility..." /> : "Find facility"}
            </button>
          </div>
        </div>
        <div className="my-8 lg:my-16">
          <SearchQueryResult  searchResults={filteredResults || searchResults}/>
        </div>
      </div>
    </section>
  );
}
