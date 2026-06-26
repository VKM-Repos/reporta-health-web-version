const FACILITY_ICONS_SVG = {
  hospital:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#194379" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital-icon lucide-hospital"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>`,
  diagnostic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-activity-icon lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>`,
  laboratory: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-activity-icon lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>`,
  pharmacy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pill-icon lucide-pill"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`
};

const FACILITY_TYPE_COLORS = {
  hospital:   "#194379",
  clinic:     "#0f6b4f",
  pharmacy:   "#b45309",
  diagnostic: "#7c3aed",
  laboratory: "#0e7490",
};

export const getFacilityIcon = (facilityType) => {
  const svg = FACILITY_ICONS_SVG[facilityType?.toLowerCase()] || FACILITY_ICONS_SVG.hospital;
  const color = FACILITY_TYPE_COLORS[facilityType?.toLowerCase()] || "#64748b";

return L.divIcon({
    className: "",
    html: `
      <div style="
        position: relative;
        width: 36px;
        height: 44px;
        display: flex;
        flex-direction: column;
        align-items: center;
      ">
        <!-- pin head -->
        <div style="
          background: #fff;
          width: 36px;
          height: 36px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid ${color};
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        ">
          <div style="transform: rotate(45deg); display: flex; align-items: center; justify-content: center;">
            ${svg}
          </div>
        </div>
      </div>
    `,
    iconSize: [36, 44],
    iconAnchor: [18, 44], // changed: anchor at bottom tip of pin
    popupAnchor: [0, -44],
  });
};