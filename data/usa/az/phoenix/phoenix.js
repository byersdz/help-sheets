const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Phoenix";
data[keys.URL_NAME] = "phoenix";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "HopeWorks",
    [keys.URL]: "https://hopeworksnm.org/get-help",
    [keys.PHONE]: "5058439405",
    [keys.DATE_CHECKED]: "2025-12-08",
    [keys.ADDRESS_1]: "1201 3rd St NW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87102",
    [keys.DESCRIPTION]: "Day shelter, clothing",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Coffee & meal checkin",
        [keys.HOURS]: "Mon-Fri 8am-10am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 10am-noon",
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
  {
    [keys.NAME]: "HomeBase",
    [keys.URL]: "https://www.nativeconnections.org/housing/youth/homebase-youth-services",
    [keys.PHONE]: "6022635531",
    [keys.DATE_CHECKED]: "2026-01-01",
    [keys.ADDRESS_1]: "931 E. Devonshire Ave.",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85014",
    [keys.SERVES]: [serves.AGE_18_TO_24],
  },
  {
    [keys.NAME]: "Phoenix Dream Center",
    [keys.URL]: "https://phoenixdreamcenter.org",
    [keys.PHONE]: "6023468700",
    [keys.DATE_CHECKED]: "2026-01-02",
    [keys.ADDRESS_1]: "3210 Grand Ave",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85017",
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
