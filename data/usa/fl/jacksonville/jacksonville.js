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
  {
    [keys.NAME]: "Salvation Army Towers Center of Hope",
    [keys.URL]: "https://jacksonville.salvationarmyflorida.org/nefl/the-towers-center-of-hope",
    [keys.PHONE]: "9043568641",
    [keys.ADDRESS_1]: "900 West Adams St",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32204",
    [keys.DATE_CHECKED]: "2025-02-10",
  },
  {
    [keys.NAME]: "Sulzbacher Center",
    [keys.URL]: "https://sulzbacherjax.org/get-help",
    [keys.PHONE]: "9043941356",
    [keys.ADDRESS_1]: "611 E. Adams Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-10",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Sulzbacher Villiage",
    [keys.URL]: "https://sulzbacherjax.org/get-help",
    [keys.PHONE]: "9043944950",
    [keys.ADDRESS_1]: "5455 Springfield Blvd",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32208",
    [keys.DATE_CHECKED]: "2025-02-10",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES_WITH_CHILDREN],
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
