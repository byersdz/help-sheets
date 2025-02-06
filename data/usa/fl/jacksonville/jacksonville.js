const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Jacksonville";
data[keys.URL_NAME] = "jacksonville";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Connection Line",
    [keys.URL]: "https://lowcountrycoc.org/gethelp",
    [keys.PHONE]: "8437378357",
    [keys.DATE_CHECKED]: "2025-01-20",
    [keys.DESCRIPTION]: "Helps with connecting to homeless assistance",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Neighbors Together",
    [keys.URL]: "https://neighborstogethersc.org",
    [keys.PHONE]: "8437471788",
    [keys.DATE_CHECKED]: "2025-01-23",
    [keys.ADDRESS_1]: "2105 Cosgrove Ave",
    [keys.CITY]: "North Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29405",
    [keys.DESCRIPTION]: "Food, clothing, medical care, counseling, shelter, financial",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Thur 10:30am-12:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Rescue Mission",
    [keys.URL]: "https://www.crmjax.org",
    [keys.PHONE]: "9044215161",
    [keys.ADDRESS_1]: "234 W. State St.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
  {
    [keys.NAME]: "Trinity Rescue Mission",
    [keys.URL]: "https://trinityrescue.org",
    [keys.PHONE]: "9043551205",
    [keys.ADDRESS_1]: "622 West Union Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "City Rescue Mission Lifebuilders Addiction Recovery",
    [keys.URL]: "https://www.crmjax.org/services/lifebuilders-program",
    [keys.PHONE]: "9043874357",
    [keys.ADDRESS_1]: "426 S. McDuff Ave.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32254",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
  {
    [keys.NAME]: "Jacksonville Housing Authority",
    [keys.URL]: "https://www.jaxha.org",
    [keys.PHONE]: "9046303810",
    [keys.ADDRESS_1]: "1300 N Broad Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-05",
  },
];

module.exports = data;
