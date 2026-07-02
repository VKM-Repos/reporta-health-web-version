import React from "react";
import { Marker, Popup } from "react-leaflet";
import { iconP, iconPing } from "../../../constants/mapIcons";

const UserMarker = ({ position, text }) => {
  return (
    <Marker icon={iconP} position={position}>
      <Marker position={position} icon={iconPing} />
      <Popup>{text}</Popup>
    </Marker>
  );
};

export default UserMarker;
