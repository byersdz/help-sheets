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
    [keys.NAME]: "First Presbyterian Church",
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
  {
    [keys.NAME]: "Trinity Table",
    [keys.URL]: "https://www.atlantatrinity.org/trinitytable",
    [keys.PHONE]: "4046596236",
    [keys.DATE_CHECKED]: "2024-11-22",
    [keys.ADDRESS_1]: "265 Washington St. SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal / Clothing",
        [keys.HOURS]: "Sunday noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Francis Table",
    [keys.URL]: "https://www.catholicshrineatlanta.org/saint-francis-table",
    [keys.PHONE]: "4045211866",
    [keys.DATE_CHECKED]: "2024-11-25",
    [keys.ADDRESS_1]: "48 Martin Luther King Jr. Dr. SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Saturday 10am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Atlanta Community Food Bank",
    [keys.URL]: "https://www.acfb.org",
    [keys.PHONE]: "4048923333",
    [keys.DATE_CHECKED]: "2024-11-25",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Atlanta Mission Shepherd's Inn",
    [keys.URL]: "https://atlantamission.org/shepherds-inn",
    [keys.PHONE]: "4043672493",
    [keys.ADDRESS_1]: "165 Ivan Allen Blvd. NW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30313",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Atlanta Mission Restoration House",
    [keys.URL]: "https://atlantamission.org/restoration-house",
    [keys.PHONE]: "4045884007",
    [keys.ADDRESS_1]: "655 Ethel St. NW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30318",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Atlanta Mission Potter's House",
    [keys.URL]: "https://atlantamission.org/potters-house/",
    [keys.PHONE]: "7065438338",
    [keys.ADDRESS_1]: "655 Potter House Rd",
    [keys.CITY]: "Jefferson",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30549",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.MEN],
    [keys.DESCRIPTION]: "Residential recovery program"
  },
];

module.exports = data;
