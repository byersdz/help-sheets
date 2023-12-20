const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Nashville";
data[keys.URL_NAME] = "nashville";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Harvest Sound",
    [keys.URL]: "https://harvestsoundinternational.com",
    [keys.PHONE]: "6153271200",
    [keys.DATE_CHECKED]: "2023-12-19",
    [keys.ADDRESS_1]: "1419 Clinton St.",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Thursday 5pm-7pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Nashville Rescue Mission",
    [keys.URL]: "https://nashvillerescuemission.org",
    [keys.PHONE]: "6152552475",
    [keys.DATE_CHECKED]: "2023-12-08",
    [keys.ADDRESS_1]: "639 Lafayette Street",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Room in the Inn",
    [keys.URL]: "https://www.roomintheinn.org",
    [keys.DESCRIPTION]: "Winter Shelter, Transitional Housing",
    [keys.PHONE]: "6152519791",
    [keys.DATE_CHECKED]: "2023-12-08",
    [keys.ADDRESS_1]: "705 Drexel Street",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
  },
  {
    [keys.NAME]: "Cold weather overflow shelter",
    [keys.URL]:
      "https://www.nashville.gov/departments/office-homeless-services/initiatives-and-programs/extreme-weather",
    [keys.PHONE]: "6158626391",
    [keys.DATE_CHECKED]: "2023-12-15",
    [keys.ADDRESS_1]: "3230 Brink Church Pike",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37207",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Re:Center Ministries",
    [keys.DESCRIPTION]: "Womens day shelter, Mens emergency shelter, residential recovery program",
    [keys.URL]: "https://recenterministries.org",
    [keys.PHONE]: "5025846543",
    [keys.DATE_CHECKED]: "2023-08-16",
    [keys.ADDRESS_1]: "733 East Jefferson Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
  },
];

module.exports = data;
