const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Cleveland";
data[keys.URL_NAME] = "cleveland";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Shelter Coordinated Intake",
    [keys.URL]: "https://hhs.cuyahogacounty.us/programs/detail/if-you-need-shelter",
    [keys.PHONE]: "2166746700",
    [keys.DATE_CHECKED]: "2022-12-13",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter. M-F 8am-8pm",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Francis House",
    [keys.URL]: "https://stfrancishouse.org",
    [keys.PHONE]: "6175424211",
    [keys.DESCRIPTION]: 'Also provides clothing, medical care, mailroom, art therapy',
    [keys.DATE_CHECKED]: "2022-11-13",
    [keys.ADDRESS_1]: "39 Boylston Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02116",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "every day 7:30am - 9am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "every day 11:30am - 1pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Fri 7am-10:40am, Sat/Sun 8am-2pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Southampton Shelter",
    [keys.URL]:
      "https://www.boston.gov/government/cabinets/boston-public-health-commission/homeless-services/emergency-shelter",
    [keys.PHONE]: "6175345395",
    [keys.ADDRESS_1]: "112 Southampton Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Boston Health Care for the Homeless",
    [keys.URL]: "https://www.bhchp.org/patients",
    [keys.PHONE]: "8576541600",
    [keys.ADDRESS_1]: "780 Albany Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.DATE_CHECKED]: "2022-11-17",
  },
];

module.exports = data;
