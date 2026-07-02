// Maps the display labels shown in the facility-type dropdown to the
// backend's FACILITY_TYPES enum values (apps/facilities/models.py)
const FACILITY_TYPE_MAP = {
  "Hospitals": "hospital",
  "Clinics": "clinic",
  "Pharmacies": "pharmacy",
  "Laboratories": "laboratory",
  "Diagnostic Centers": "diagnostic",
  "Maternity Homes": "maternity",
  "Dental Clinics": "dental",
  "Eye Clinics": "eye",
  "Physiotherapy Centers": "physiotherapy",
  "Sexual Assault Referral Centres (SARC)": "sarcs",
  "NGOs / Civil Society Organisations": "ngo",
  "Police / Security": "police",
  "Legal Aid Centres": "legal_aid",
  "Social Welfare Offices": "social_welfare",
  "Shelters / Refuges": "shelter",
  "Primary Health Centres": "phc",
  "Other": "other",
};

export const normalizeFacilityType = (label) => FACILITY_TYPE_MAP[label] || "";

export const normalizeState = (label) =>
  label ? label.replace(" - Abuja", "").trim() : "";
