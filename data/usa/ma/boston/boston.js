const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Boston";
data[keys.URL_NAME] = "boston";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Office of Housing Stability",
    [keys.URL]: "https://www.boston.gov/departments/housing/services-those-experiencing-homeless",
    [keys.PHONE]: "6176354200",
    [keys.DATE_CHECKED]: "2022-10-18",
    [keys.DESCRIPTION]: "Call if you are at immediate risk of becoming homeless. Mon - Fri 9am - 5pm",
  },
];

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
    [keys.NAME]: "Southampton Shelter",
    [keys.URL]: "https://www.bhchp.org/about/locations/southampton-street-shelter",
    [keys.PHONE]: "6175345395",
    [keys.ADDRESS_1]: "112 Southampton Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
];

data[keys.RESOURCES] = [];

module.exports = data;
