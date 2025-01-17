const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Charleston";
data[keys.URL_NAME] = "charleston";
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
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Women's Resource Center",
    [keys.URL]: "https://www.wrcdv.org/get-help",
    [keys.PHONE]: "4046889436",
    [keys.DATE_CHECKED]: "2025-01-02",
    [keys.DESCRIPTION]: "Resources for people experiencing domestic violence",
  },
];

module.exports = data;
