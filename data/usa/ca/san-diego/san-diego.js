const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "San Diego";
data[keys.URL_NAME] = "san-diego";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Dreams for Change",
    [keys.URL]: "https://www.dreamsforchange.org/need-help",
    [keys.PHONE]: "6194970236",
    [keys.DATE_CHECKED]: "2026-02-08",
    [keys.ADDRESS_1]: "5605 Imperial Ave",
    [keys.CITY]: "San Diego",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "92114",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Distribution",
        [keys.HOURS]: "Wednesday 10am-noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Dreams for Change Self Parking",
    [keys.URL]: "https://www.dreamsforchange.org/need-help",
    [keys.PHONE]: "6194970236",
    [keys.DATE_CHECKED]: "2026-02-08",
    [keys.DESCRIPTION]: "Various safe parking locations.",
  },
  {
    [keys.NAME]: "Central Arizona Shelter Services",
    [keys.URL]: "https://www.cassaz.org/get-help",
    [keys.PHONE]: "6042566945",
    [keys.DATE_CHECKED]: "2025-12-30",
    [keys.ADDRESS_1]: "204 S 12th Ave",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85007",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Native American Connections",
    [keys.URL]: "https://www.nativeconnections.org",
    [keys.PHONE]: "6022543247",
    [keys.DATE_CHECKED]: "2025-12-31",
    [keys.ADDRESS_1]: "3216 N 3rd St",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85012",
    [keys.DESCRIPTION]: "Addiction recovery, medical services, housing resources",
  },
];

module.exports = data;
