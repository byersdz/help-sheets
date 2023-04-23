const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Cincinnati";
data[keys.URL_NAME] = "cincinnati";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Hotline",
    [keys.URL]: "https://www.columbus.gov/COVID19resources/humanservices",
    [keys.PHONE]: "6142747000",
    [keys.DATE_CHECKED]: "2022-03-04",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "The Open Shelter",
    [keys.URL]: "https://theopenshelter.org/programming",
    [keys.PHONE]: "6142222885",
    [keys.DATE_CHECKED]: "2023-03-08",
    [keys.ADDRESS_1]: "1037 Parsons Ave",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43206",
    [keys.DESCRIPTION]: "Day shelter and advocacy center",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Mon - Fri 10am",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tuesday",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Columbus Free Clinic",
    [keys.URL]: "https://columbusfreeclinic.com",
    [keys.PHONE]: "6144048417",
    [keys.DATE_CHECKED]: "2023-03-17",
    [keys.ADDRESS_1]: "2231 North High Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43201",
  },
];

module.exports = data;
