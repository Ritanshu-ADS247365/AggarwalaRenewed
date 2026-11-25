export const site = {
  name: "Aggarwala",
  legalName: "Aggarwala Inc.",
  tagline: "Accelerating business growth",
  email: "info@aggarwala.us",

  addressLines: ["2093, Philadelphia, Pike 4656 Claymont", "DE 19703, USA"],
  copyright: `© Copyright Aggarwala ${new Date().getFullYear()}`,
} as const;

/** Automatically displays the current date. */
export const LEGAL_LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});