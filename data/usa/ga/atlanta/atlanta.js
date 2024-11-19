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
  {
    [keys.NAME]: "Salvation Army Red Shield Services",
    [keys.URL]: "https://southernusa.salvationarmy.org/metro-atlanta/red-shield-services",
    [keys.PHONE]: "4044862700",
    [keys.ADDRESS_1]: "469 Marietta Street",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30313",
    [keys.DATE_CHECKED]: "2024-11-06",
  },
  {
    [keys.NAME]: "Crossroads",
    [keys.URL]: "https://crossroadsatlanta.org/need-help",
    [keys.PHONE]: "4702251995",
    [keys.ADDRESS_1]: "420 Courtland Street",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30308",
    [keys.DATE_CHECKED]: "2024-11-18",
    [keys.DESCRIPTION]: "Mon - Fri 9:30am - 1:30pm",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "First Presbyterian Chirch",
    [keys.URL]: "https://www.firstpresatl.org/community-ministries",
    [keys.PHONE]: "4048928461",
    [keys.DATE_CHECKED]: "2024-11-18",
    [keys.ADDRESS_1]: "1328 Peachtree St. NE",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30309",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch / Toiletries",
        [keys.HOURS]: "Tue/Thur 1pm - 3pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing Corner",
        [keys.HOURS]: "Mon/Thur 1pm - 3pm",
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
