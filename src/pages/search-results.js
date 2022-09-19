import {useState, useEffect} from 'react'
import SearchHeader from "@components/SearchHeader/SearchHeader";
import SearchQueryResult from "@components/SearchQueryResult/SearchQueryResult";
import { useSearchFacilityStore } from "@store/searchFacility.store";
import { useForm } from "@context/StepperContext";
import SearchForm from '@components/Forms/SearchForm/SearchForm';

export default function SearchResult() {
  const searchResults = useSearchFacilityStore.getState()?.searchResults?.data;
  const [location, setLocation] = useState(null)
  const [filteredResults, setFilteredResults] = useState(useSearchFacilityStore.getState()?.searchResults?.data)
  const [query, setQuery] = useState('')
  
  const {seachFacilityQuery,setSeachFacilityQuery} = useForm()

  useEffect(()=> {
    if(location !== null) {
      let filteredItems = searchResults.filter(result=> result.statename === location)
    setFilteredResults([...filteredItems])
    } else {
      setFilteredResults(useSearchFacilityStore.getState()?.searchResults?.data)
    }
  }, [location, setLocation])




  return (
    <section className="w-full bg-background min-h-screen font-jarkata relative overflow-hidden select-none">
      <SearchHeader />
      <div className="w-[90vw] my-8 mx-auto">
        <p className="text-xs lg:text-sm text-secondary">{searchResults?.length} search results for:</p>
        <div className="flex my-4 justify-items-stretch">
          <h2 className="lg:col-span-2 text-[1.4rem] lg:text-[1.8rem] text-black font-extrabold">
            {searchResults?.length > 0 ? seachFacilityQuery: `No search result for ${seachFacilityQuery} `}
          </h2>
          </div>
              <SearchForm />
        <div className="my-8 ">
          <SearchQueryResult  searchResults={filteredResults || searchResults}/>
        </div>
      </div>
    </section>
  );
}
