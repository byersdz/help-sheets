const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Austin";
data[keys.URL_NAME] = "austin";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Crossroads",
    [keys.URL]: "https://crossroadsatparkplace.org",
    [keys.PHONE]: "7132523604",
    [keys.DATE_CHECKED]: "2025-08-26",
    [keys.ADDRESS_1]: "7843 Park Place Blvd.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77087",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Tue/Thur 7:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Thur 11:15am",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Austin Shelter for Women and Children",
    [keys.URL]: "https://salvationarmytexas.org",
    [keys.PHONE]: "5129330600",
    [keys.DATE_CHECKED]: "2025-09-30",
    [keys.ADDRESS_1]: "4613 Tannehill Ln",
    [keys.ADDRESS_2]: "Bldg 3",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78721",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Harris County Domestic Violence Coordinating Council",
    [keys.URL]: "https://www.hcdvcc.org/resourcesforsurvivors",
    [keys.PHONE]: "2814003680",
    [keys.DATE_CHECKED]: "2025-09-28",
    [keys.ADDRESS_1]: "2990 Richmond Ave.",
    [keys.ADDRESS_2]: "Ste. 550",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77098",
    [keys.DESCRIPTION]: "Resources for survivors of domestic violence",
  },
];

module.exports = data;
