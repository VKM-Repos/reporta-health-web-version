import { useContext, useState } from "react";
import dynamic from "next/dynamic";
import Sidenav from "@components/MapPage/Sidenav";
import MapHeader from "@components/MapPage/MapHeader";
// import Map from "@components/SearchPage/Map"

const MapComponent = dynamic(() => import("@components/MapPage/MapComponent"), {
  ssr: false,
});


export default function SearchResult() {

  return (
    <div className="flex w-screen h-screen ">
      <MapHeader />
      <MapComponent className="z-30 w-screen h-screen" />

      <div className="flex absolute ">
        <Sidenav />
      </div>
    </div>
  );
}
