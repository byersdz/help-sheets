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
  {
    [keys.NAME]: "Housing Navigation Center at Gateway",
    [keys.URL]: "https://www.cabq.gov/health-housing-homelessness/gateway-system-of-care/gateway-center",
    [keys.PHONE]: "5055378588",
    [keys.DATE_CHECKED]: "2025-12-01",
    [keys.ADDRESS_1]: "5400 Gibson Blvd SE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87108",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Barret Foundation",
    [keys.URL]: "https://www.barrettfoundation.org",
    [keys.PHONE]: "5052434887",
    [keys.DATE_CHECKED]: "2025-12-02",
    [keys.ADDRESS_1]: "10300 Constitution Ave. NE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87112",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Casa Q",
    [keys.URL]: "https://www.casaq.org",
    [keys.PHONE]: "5058722099",
    [keys.DATE_CHECKED]: "2025-12-02",
    [keys.DESCRIPTION]: "Shelter for LGBTQ+ youth",
  },
  {
    [keys.NAME]: "New Day Youth and Family Services",
    [keys.URL]: "https://www.ndnm.org/safe-home.html",
    [keys.PHONE]: "5059381060",
    [keys.DATE_CHECKED]: "2025-12-03",
    [keys.ADDRESS_1]: "2820 Ridgecrest SE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87108",
    [keys.SERVES]: [serves.YOUTH],
  },
  {
    [keys.NAME]: "Good Shepherd Center",
    [keys.URL]: "https://www.gscnm.org",
    [keys.PHONE]: "5052432527",
    [keys.DATE_CHECKED]: "2025-12-04",
    [keys.ADDRESS_1]: "218 Iron Avenue SW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87102",
    [keys.SERVES]: [serves.MEN],
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
