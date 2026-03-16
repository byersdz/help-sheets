const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Las Vegas";
data[keys.URL_NAME] = "las-vegas";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "211",
    [keys.URL]: "https://211la.org/",
    [keys.PHONE]: "211",
    [keys.DESCRIPTION]: "For more information and referrals for all health and human services",
    [keys.DATE_CHECKED]: "2026-02-11",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Midnight Mission",
    [keys.URL]: "https://www.midnightmission.org/our-services/emergency-services/food",
    [keys.PHONE]: "2136249258",
    [keys.DATE_CHECKED]: "2026-03-10",
    [keys.ADDRESS_1]: "601 S. San Pedro St",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90014",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Every day 6:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Sat 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 4:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Union Rescue Mission",
    [keys.URL]: "https://urm.org/get-help",
    [keys.PHONE]: "2133476351",
    [keys.DATE_CHECKED]: "2026-02-18",
    [keys.ADDRESS_1]: "545 S. San Pedro St.",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90013",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "San Fernando Valley Community Mental Health Center",
    [keys.URL]: "https://www.movinglivesforward.org",
    [keys.PHONE]: "8189014830",
    [keys.DATE_CHECKED]: "2026-02-16",
    [keys.ADDRESS_1]: "16650 Sherman Way",
    [keys.CITY]: "Van Nuys",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "91406",
  },
];

module.exports = data;
