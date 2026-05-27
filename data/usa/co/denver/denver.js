const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Denver";
data[keys.URL_NAME] = "denver";
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
    [keys.NAME]: "St. Vincent de Paul Dining Hall",
    [keys.URL]: "https://ccsutah.org/programs/st-vincent-de-paul-dining-hall",
    [keys.PHONE]: "8013637710",
    [keys.DATE_CHECKED]: "2026-04-30",
    [keys.ADDRESS_1]: "437 West 200 South",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84101",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11:30am-12:30pm, Sat 10am-11am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every Day 5pm-6pm",
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
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Fourth Street Clinic",
    [keys.URL]: "https://fourthstreetclinic.org",
    [keys.PHONE]: "8013640058",
    [keys.DATE_CHECKED]: "2026-05-18",
    [keys.ADDRESS_1]: "409 West 400 South",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84101",
    [keys.DESCRIPTION]: "Medical care for the homeless",
  },
];

module.exports = data;
