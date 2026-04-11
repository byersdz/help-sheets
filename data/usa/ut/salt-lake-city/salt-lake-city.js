const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Salt Lake City";
data[keys.URL_NAME] = "salt-lake-city";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Shelter the Homeless Hotline",
    [keys.URL]: "https://homelessutah.org",
    [keys.PHONE]: "8019909999",
    [keys.DESCRIPTION]: "If you or someone you know is experiencing or at risk of homelessness, call for shelter and assistance",
    [keys.DATE_CHECKED]: "2026-04-11",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Las Vegas Rescue Mission",
    [keys.URL]: "https://vegasrescue.org/meals",
    [keys.PHONE]: "7023821766",
    [keys.DATE_CHECKED]: "2026-03-18",
    [keys.ADDRESS_1]: "480 West Bonanza Rd",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89106",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Daily 5pm-6pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Las Vegas Rescue Mission",
    [keys.URL]: "https://vegasrescue.org/emergencyshelter",
    [keys.PHONE]: "7023821766",
    [keys.DATE_CHECKED]: "2026-03-18",
    [keys.ADDRESS_1]: "480 West Bonanza Rd",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89106",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "HELP of Southern Nevada",
    [keys.URL]: "https://www.helpsonv.org",
    [keys.PHONE]: "7023694357",
    [keys.DATE_CHECKED]: "2026-03-25",
    [keys.ADDRESS_1]: "1640 E. Flamingo Rd.",
    [keys.ADDRESS_2]: "#100",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89119",
    [keys.DESCRIPTION]: "Housing programs, referrals, and support services",
  },
];

module.exports = data;
