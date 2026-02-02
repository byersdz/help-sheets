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
    [keys.NAME]: "Andre House",
    [keys.URL]: "https://andrehouse.org/what-we-do",
    [keys.PHONE]: "6022550580",
    [keys.DATE_CHECKED]: "2026-01-13",
    [keys.ADDRESS_1]: "213 S. 11th Ave",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85007",
    [keys.DESCRIPTION]: "Also provides showers, hygiene kits",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Sat-Thur 5pm-6pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tue/Thur 12:30pm-3pm, Sat 1pm-3pm",
      },
      {
        [keys.DESCRIPTION]: "Laundry",
        [keys.HOURS]: "Mon-Wed 8:30am-noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
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
