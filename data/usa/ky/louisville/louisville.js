const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Louisville";
data[keys.URL_NAME] = "louisville";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Central Access Point Line",
    [keys.URL]: "https://www.strategiestoendhomelessness.org/what-we-do/prevention-and-shelter-diversion/",
    [keys.PHONE]: "5133817233",
    [keys.DATE_CHECKED]: "2022-04-23",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "City Gospel Mission",
    [keys.URL]: "https://www.citygospelmission.org/get-help",
    [keys.PHONE]: "5132415525",
    [keys.DATE_CHECKED]: "2023-04-23",
    [keys.ADDRESS_1]: "1805 Dalton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45214",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 7pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Gospel Mission",
    [keys.URL]: "https://www.citygospelmission.org/get-help",
    [keys.PHONE]: "5132415525",
    [keys.DATE_CHECKED]: "2023-04-23",
    [keys.ADDRESS_1]: "1805 Dalton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45214",
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Cincinnati Health Network / McMicken Integrated Care Clinic",
    [keys.DESCRIPTION]: "Healthcare for the homeless",
    [keys.URL]: "https://cincinnatihealthnetwork.org/index.php?page=programs-services",
    [keys.PHONE]: "5133867899",
    [keys.DATE_CHECKED]: "2023-07-06",
    [keys.ADDRESS_1]: "40 E McMicken Ave",
    [keys.ADDRESS_2]: "2nd floor",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
  },
];

module.exports = data;
