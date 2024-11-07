const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Atlanta";
data[keys.URL_NAME] = "atlanta";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Gateway Center Coordinated Entry",
    [keys.URL]: "http://www.gatewayctr.org/coordinated-entry-services",
    [keys.PHONE]: "4042156600",
    [keys.ADDRESS_1]: "275 Pryor Street SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.DATE_CHECKED]: "2024-11-06",
    [keys.DESCRIPTION]: "Mon - Fri 9am - 4pm, signup begins at 7am",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Church of the Reconciler",
    [keys.URL]: "http://www.churchofthereconciler.com",
    [keys.PHONE]: "2053246402",
    [keys.DATE_CHECKED]: "2024-09-27",
    [keys.ADDRESS_1]: "112 14th Street North",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Mon - Thur 9am to 2pm",
      },
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "3rd Sunday 9:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "1st, 2nd, 4th Sunday 11am",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Firehouse Ministries",
    [keys.URL]: "https://firehouseshelter.com",
    [keys.PHONE]: "2052529571",
    [keys.ADDRESS_1]: "626 2nd Ave N",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
    [keys.DATE_CHECKED]: "2024-09-05",
    [keys.DESCRIPTION]: "Emergency shelter, day shelter, case management",
    [keys.SERVES]: [serves.MEN],
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every day 11:30am",
      },
      {
        [keys.DESCRIPTION]: "Clothes Closet",
        [keys.HOURS]: "Mon/Wed/Fri 1pm - 3pm",
      },
    ]
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Pathways",
    [keys.DESCRIPTION]: "Day Shelter for women and children.",
    [keys.URL]: "https://pathwayshome.org",
    [keys.PHONE]: "2053226854",
    [keys.DATE_CHECKED]: "2024-09-15",
    [keys.ADDRESS_1]: "409 Richard Arrington Jr Blvd N",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
  },
];

module.exports = data;
