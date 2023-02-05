import { useContext, useState } from "react";
import dynamic from "next/dynamic";
import MapLayout from "@components/Layout/mapLayout";
import Sidenav from "@components/MapPage/Sidenav";
import MapHeader from "@components/MapPage/MapHeader";
// import Map from "@components/SearchPage/Map"

const Map = dynamic(() => import("@components/MapPage/Map"), {
  ssr: false,
});


export default function SearchResult() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="flex">
      <MapHeader />
      <Map className="z-30 w-screen h-screen" />

      <div className="flex absolute ">
        <Sidenav />
      </div>
    </div>
  );
}
