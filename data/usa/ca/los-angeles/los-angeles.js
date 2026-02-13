const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Los Angeles";
data[keys.URL_NAME] = "los-angeles";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
  "211-usa",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "211",
    [keys.URL]: "https://211la.org/",
    [keys.PHONE]: "211",
    [keys.DESCRIPTION]: "For more information and referrals for all health and human services",
    [keys.DATE_CHECKED]: "2026-02-11",
  },
  {
    [keys.NAME]: "Los Angeles Homeless Services Authority",
    [keys.URL]: "https://www.lahsa.org/get-help",
    [keys.PHONE]: "2132256581",
    [keys.DATE_CHECKED]: "2026-02-11",
  },
];

data[keys.BASIC_NEEDS] = [
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "The People Concern",
    [keys.URL]: "https://www.thepeopleconcern.org/get-help",
    [keys.PHONE]: "3104504050",
    [keys.DATE_CHECKED]: "2026-02-12",
    [keys.ADDRESS_1]: "503 Olympic Blvd.",
    [keys.CITY]: "Santa Monica",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90401",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Native American Connections",
    [keys.URL]: "https://www.nativeconnections.org",
    [keys.PHONE]: "6022543247",
    [keys.DATE_CHECKED]: "2025-12-31",
    [keys.ADDRESS_1]: "3216 N 3rd St",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85012",
    [keys.DESCRIPTION]: "Addiction recovery, medical services, housing resources",
  },
];

module.exports = data;
