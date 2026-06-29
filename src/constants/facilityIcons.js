const FACILITY_ICONS_SVG = {
  // unchanged: existing facility type icons
  hospital: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#194379" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>`,
  diagnostic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>`,
  laboratory: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>`,
  pharmacy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,

  // added: GBV-related facility type icons
  // ngo — people/group icon for NGO facilities
  ngo: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#be185d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,

  // police — shield icon for police/security facilities
  police: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,

  // shelter — home icon for temporary accommodation/refuge facilities
  shelter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0369a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,

  // legal_aid — scale/justice icon for legal aid facilities
  legal_aid: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a16207" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,

  // social_welfare — heart icon for psychosocial/counselling facilities
  social_welfare: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#be185d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,

  // sarcs — plus/cross icon for Sexual Assault Referral Centres
  sarcs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>`,

  // clinic — unchanged but explicitly listed so it doesn't fall back to hospital icon
  clinic: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f6b4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>`,
};

const FACILITY_TYPE_COLORS = {
  // unchanged: existing colors
  hospital:   "#194379",
  clinic:     "#0f6b4f",
  pharmacy:   "#b45309",
  diagnostic: "#7c3aed",
  laboratory: "#0e7490",

  // added: colors for GBV-related facility types
  ngo:           "#be185d",
  police:        "#1d4ed8",
  shelter:       "#0369a1",
  legal_aid:     "#a16207",
  social_welfare:"#be185d",
  sarcs:         "#dc2626",
};

export const getFacilityIcon = (facilityType, facility = {}) => {
  const GENERIC_TYPES = ["hospital", "other", "clinic", null, undefined];
  let effectiveType = facilityType?.toLowerCase();
  if (facility.has_sarcs && effectiveType !== "sarcs") {
    effectiveType = "sarcs";
  } else if (facility.has_gbv_services && GENERIC_TYPES.includes(effectiveType)) {
    const orgType = facility.gbv_profile?.organisation_type;
    if (orgType === "police_security") effectiveType = "police";
    else if (orgType === "governmental") effectiveType = "hospital";
    else effectiveType = "ngo";
  } else if (facility.has_fistula_programme && GENERIC_TYPES.includes(effectiveType)) {
    effectiveType = "maternity";
  }
  const svg = FACILITY_ICONS_SVG[effectiveType] || FACILITY_ICONS_SVG.hospital;
  const color = FACILITY_TYPE_COLORS[effectiveType] || "#64748b";

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
    iconAnchor: [18, 44],
    popupAnchor: [0, -44],
  });
};