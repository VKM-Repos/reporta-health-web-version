import React from "react";
import { useMap } from "react-leaflet";
import TooltipWrapper from "@components/Tooltip/TooltipWrapper";

const ZoomControl = () => {
  const map = useMap();
  const handleZoomIn = () => map.zoomIn();
  const handleZoomOut = () => map.zoomOut();

  return (
    <div className="flex flex-col items-center justify-center space-y-1">
      <p className="text-[80%] text-black/40 font-bold">zoom</p>
      <TooltipWrapper text="zoom in">
        <button
          className="flex items-center justify-center bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full w-[2rem] aspect-square text-[150%] transition-all ease-in-out duration-150 "
          onClick={handleZoomIn}
        >
          <svg className="w-[1.2rem] aspect-square" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"></path>
          </svg>
        </button>
      </TooltipWrapper>
      <TooltipWrapper text="zoom out">
        <button
          className="flex items-center justify-center bg-white/30 hover:bg-primary hover:text-white text-black/40 font-extrabold rounded-full w-[2rem] aspect-square text-[150%] transition-all ease-in-out duration-150 "
          onClick={handleZoomOut}
        >
          <svg className="w-[1.2rem] aspect-square" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"></path>
          </svg>
        </button>
      </TooltipWrapper>
    </div>
  );
};

export default ZoomControl;
