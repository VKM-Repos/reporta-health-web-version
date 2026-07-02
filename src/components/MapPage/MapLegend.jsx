import React, { useState } from "react";

const LEGEND_ITEMS = [
  { color: "#194379", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#194379" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>', title: "Hospital" },
  { color: "#b45309", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>', title: "Pharmacy" },
  { color: "#7c3aed", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>', title: "Diagnostic" },
  { color: "#0e7490", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0e7490" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>', title: "Laboratory" },
];

const MapLegend = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      position: "absolute", bottom: 16, right: 16, zIndex: 1000,
      background: "white", borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)", fontSize: 12,
    }}>
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((v) => !v); }}
        style={{
          display: "flex", alignItems: "center", gap: 6,
          padding: "6px 10px", background: "none", border: "none",
          cursor: "pointer", fontWeight: 600, fontSize: 12, color: "#333",
        }}
      >
        <span>Legend</span>
        <span>{open ? "▾" : "▸"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 10px 8px 10px" }}>
          {LEGEND_ITEMS.map(({ color, svg, title }) => (
            <div key={title} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <div style={{ position: "relative", width: 20, height: 26, flexShrink: 0 }}>
                <div style={{
                  background: "#fff", width: 20, height: 20,
                  borderRadius: "50% 50% 50% 0", transform: "rotate(-45deg)",
                  border: `2px solid ${color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }}>
                  <div style={{ transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}
                    dangerouslySetInnerHTML={{ __html: svg }} />
                </div>
              </div>
              <span>{title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapLegend;
