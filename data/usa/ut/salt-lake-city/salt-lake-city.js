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
    [keys.NAME]: "Gail Miller Resource Center",
    [keys.URL]: "https://theroadhome.org/resourcecenter/gail-miller-resource-center",
    [keys.PHONE]: "8014565900",
    [keys.DATE_CHECKED]: "2026-04-13",
    [keys.ADDRESS_1]: "242 W. Paramount Ave.",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84115",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Geraldine E. King Resource Center",
    [keys.URL]: "https://www.voaut.org/get-help/adult-homeless-services",
    [keys.PHONE]: "8019909999",
    [keys.DATE_CHECKED]: "2026-04-15",
    [keys.ADDRESS_1]: "131 E 700 S",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84111",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Pamela Atkinson Resource Center",
    [keys.URL]: "https://theroadhome.org/resourcecenter/south-salt-lake-mens-resource-center",
    [keys.PHONE]: "8013594142",
    [keys.DATE_CHECKED]: "2026-04-16",
    [keys.ADDRESS_1]: "3380 South 1000 West",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84119",
    [keys.SERVES]: [serves.MEN],
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
