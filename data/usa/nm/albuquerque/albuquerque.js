const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Albuquerque";
data[keys.URL_NAME] = "albuquerque";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Jesus House",
    [keys.URL]: "https://jesushouseokc.org/our-programs",
    [keys.PHONE]: "4052327164",
    [keys.DATE_CHECKED]: "2025-11-07",
    [keys.ADDRESS_1]: "1335 West Sheridan Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 4pm-5pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Wednesday 8am",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Gateway West",
    [keys.URL]: "https://www.cabq.gov/health-housing-homelessness/gateway-system-of-care/gateway-west",
    [keys.PHONE]: "5058399193",
    [keys.DATE_CHECKED]: "2025-11-29",
    [keys.ADDRESS_1]: "7440 Jim McDowell NW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87121",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Jesus House",
    [keys.URL]: "https://jesushouseokc.org/get-help",
    [keys.PHONE]: "4052327164",
    [keys.DATE_CHECKED]: "2025-11-07",
    [keys.ADDRESS_1]: "1335 West Sheridan Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.DESCRIPTION]: "Substance abuse recovery program",
  },
];

module.exports = data;
