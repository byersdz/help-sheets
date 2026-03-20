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
    [keys.NAME]: "Courtyard Homeless Resource Center",
    [keys.URL]: "https://www.lasvegasnevada.gov/Residents/Resident-Services/Homeless-Services",
    [keys.PHONE]: "7022296117",
    [keys.DESCRIPTION]: "A starting point where homeless individuals can go to access resources all in one place",
    [keys.DATE_CHECKED]: "2026-03-17",
    [keys.ADDRESS_1]: "314 Foremaster Lane",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89101",
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
  {
    [keys.NAME]: "Catholic Charities",
    [keys.URL]: "https://www.catholiccharities.com/programs/community-meal-st-vincent-lied-dining-facility",
    [keys.PHONE]: "7023852662",
    [keys.DATE_CHECKED]: "2026-03-20",
    [keys.ADDRESS_1]: "1501 Las Vegas Blvd North",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89101",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Daily 10am-11am",
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
