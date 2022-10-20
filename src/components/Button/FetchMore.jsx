import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";
import ReactDOM from "react-dom";

function FetchMore({ fetchMore, isLoading, prefetchMore }) {
  return (
    <>
      <div
        className="w-fit mx-auto px-6 py-2 text-xs rounded-md bg-primary lg:transition ease-in-out lg:hover:scale-95 duration-300 cursor-pointer text-white my-4"
        onClick={() => fetchMore(true)}
      >
        {isLoading ? <LoadingSpinner text="Fetching..." /> : <p>Fetch more</p>}
      </div>
    </>
  );
}

export default FetchMore;
