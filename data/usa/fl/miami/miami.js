const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Miami";
data[keys.URL_NAME] = "miami";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Clara White Mission",
    [keys.URL]: "https://clarawhitemission.org",
    [keys.PHONE]: "9043544162",
    [keys.DATE_CHECKED]: "2025-02-11",
    [keys.ADDRESS_1]: "613 West Ashley Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "To Go Lunch",
        [keys.HOURS]: "Mon/Tue 10am-11:30am",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Wed/Thur 9am-10:30am",
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
];

module.exports = data;
