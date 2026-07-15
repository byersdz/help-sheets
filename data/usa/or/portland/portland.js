const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Portland";
data[keys.URL_NAME] = "portland";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Volunteers of America",
    [keys.URL]: "https://www.voacolorado.org/services/mission-denver-metro",
    [keys.PHONE]: "3032952165",
    [keys.DATE_CHECKED]: "2026-06-07",
    [keys.ADDRESS_1]: "2877 Lawrence Street",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80205",
    [keys.DESCRIPTION]: "Also provides sack lunches, clothing closet, and hygiene kits",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Thur 5pm-6pm, Sun 12:30pm-1:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Portland Rescue Mission",
    [keys.URL]: "https://portlandrescuemission.org",
    [keys.PHONE]: "5039067690",
    [keys.DATE_CHECKED]: "2026-07-15",
    [keys.ADDRESS_1]: "111 West Burnside Street",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "The Gathering Place",
    [keys.URL]: "https://tgpdenver.org",
    [keys.PHONE]: "3033214198",
    [keys.DATE_CHECKED]: "2026-06-16",
    [keys.ADDRESS_1]: "1535 N. High St.",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80218",
    [keys.DESCRIPTION]: "Provides low-barrier care to women, gender-diverse people, and children facing homelessness",
  },
];

module.exports = data;
