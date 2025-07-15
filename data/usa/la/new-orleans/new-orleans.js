const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "New Orleans";
data[keys.URL_NAME] = "new-orleans";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Trinity Cafe Nebraska",
    [keys.URL]: "https://feedingtampabay.org/ways-we-serve/trinity-cafe",
    [keys.PHONE]: "8132541190",
    [keys.DATE_CHECKED]: "2025-05-26",
    [keys.ADDRESS_1]: "2801 N. Nebraska Ave.",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 11:30am-12:30pm, Sat/Sun 9am-10am",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Catholic Charities Tampa Hope",
    [keys.URL]: "https://www.ccdosp.org/tampa-hope",
    [keys.PHONE]: "8133942881",
    [keys.DATE_CHECKED]: "2025-05-14",
    [keys.ADDRESS_1]: "3704 E. 3rd Avenue",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33605",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Operation PAR",
    [keys.URL]: "https://www.operationpar.org",
    [keys.PHONE]: "7275244311",
    [keys.DATE_CHECKED]: "2025-06-19",
    [keys.ADDRESS_1]: "6150 150th Ave N",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33760",
    [keys.DESCRIPTION]: "Substance abuse recovery",
  },
];

module.exports = data;
