import L from "leaflet";

export const icon = L.icon({
  iconUrl: "map-marker.png",
  iconSize: [30, 45],
});

export const iconPing = L.divIcon({
  className: "rounded-full bg-primary animate-pulse",
  iconSize: [35, 35],
});

export const iconP = L.icon({
  iconUrl: "health-worker.svg",
  iconSize: [25, 25],
});
