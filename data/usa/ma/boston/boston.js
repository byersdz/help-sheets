const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Boston";
data[keys.URL_NAME] = "boston";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "South Buffalo Community Table",
    [keys.URL]: "https://www.sbcommunitytable.com",
    [keys.PHONE]: "7168223193",
    [keys.DATE_CHECKED]: "2022-10-03",
    [keys.ADDRESS_1]: "187 Southside Pkwy",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14220",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon - Thur 4pm - 5pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Buffalo City Mission",
    [keys.URL]: "https://www.buffalocitymission.org/what-we-do/get-help-now",
    [keys.PHONE]: "7168548181",
    [keys.PHONE_EXTENSION]: "432",
    [keys.ADDRESS_1]: "100 E. Tupper St",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14203",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-09-29",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "every day, 8:30am, 11:30am, 4pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tues / Thur noon - 3pm",
      },
    ],
  },
];

data[keys.RESOURCES] = [];

module.exports = data;
