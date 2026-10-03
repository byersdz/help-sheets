const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "San Francisco";
data[keys.URL_NAME] = "san-francisco";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "San Francisco Service Guide",
    [keys.URL]: "https://www.sfserviceguide.org",
    [keys.DATE_CHECKED]: "2026-09-30",
    [keys.DESCRIPTION]: "Online directory of human services in San Francisco",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Blanchet House of Hospitality",
    [keys.URL]: "https://blanchethouse.org/free-food-meal-services",
    [keys.PHONE]: "5032414340",
    [keys.DATE_CHECKED]: "2026-08-10",
    [keys.ADDRESS_1]: "310 NW Glisan St",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Sat 6:30am-7:25am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Sat 11:30am-12:25pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Sat 5pm-5:55pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Adult Shelter Reservation System",
    [keys.URL]: "https://www.sf.gov/sign-adult-shelter-san-francisco",
    [keys.PHONE]: "6286528000",
    [keys.DATE_CHECKED]: "2026-10-01",
    [keys.ADDRESS_1]: "525 5th Street",
    [keys.CITY]: "San Francisco",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "94107",
    [keys.DESCRIPTION]: "Shelter reservation for single adults",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Dolores Shelter Program",
    [keys.URL]: "https://www.missionaction.org/our-work/housing-shelter/",
    [keys.PHONE]: "4152826209",
    [keys.DATE_CHECKED]: "2026-10-02",
    [keys.ADDRESS_1]: "1050 South Van Ness Avenue",
    [keys.CITY]: "San Francisco",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "94109",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Outside In",
    [keys.URL]: "https://outsidein.org",
    [keys.PHONE]: "5035353860",
    [keys.DATE_CHECKED]: "2026-08-19",
    [keys.ADDRESS_1]: "1132 SW 13th Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97205",
    [keys.DESCRIPTION]: "Medical services",
  },
];

module.exports = data;
