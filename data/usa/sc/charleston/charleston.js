const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Charleston";
data[keys.URL_NAME] = "charleston";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Connection Line",
    [keys.URL]: "https://lowcountrycoc.org/gethelp",
    [keys.PHONE]: "8437378357",
    [keys.DATE_CHECKED]: "2025-01-20",
    [keys.DESCRIPTION]: "Helps with connecting to homeless assistance",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Neighbors Together",
    [keys.URL]: "https://neighborstogethersc.org",
    [keys.PHONE]: "8437471788",
    [keys.DATE_CHECKED]: "2025-01-23",
    [keys.ADDRESS_1]: "2105 Cosgrove Ave",
    [keys.CITY]: "North Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29405",
    [keys.DESCRIPTION]: "Food, clothing, medical care, counseling, shelter, financial",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Thur 10:30am-12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "One 80 Place",
    [keys.URL]: "https://www.one80place.org",
    [keys.PHONE]: "8437239477",
    [keys.DATE_CHECKED]: "2025-01-24",
    [keys.ADDRESS_1]: "35 Walnut Street",
    [keys.CITY]: "Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29403",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 1pm-1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Our Lady of Mercy Neighborhood House",
    [keys.URL]: "https://www.olmoutreach.org",
    [keys.PHONE]: "8438058064",
    [keys.DATE_CHECKED]: "2025-01-24",
    [keys.ADDRESS_1]: "77 America St.",
    [keys.CITY]: "Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29403",
    [keys.DESCRIPTION]: "Also provides dental, women's clinic, financial assistance",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri noon-1pm",
      },
      {
        [keys.DESCRIPTION]: "Food & Clothing Assistance",
        [keys.HOURS]: "Mon-Thur 8:30am-11am",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Atlanta Mission Shepherd's Inn",
    [keys.URL]: "https://atlantamission.org/shepherds-inn",
    [keys.PHONE]: "4043672493",
    [keys.ADDRESS_1]: "165 Ivan Allen Blvd. NW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30313",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "The Navigation Center",
    [keys.URL]: "https://thenavigationcenter.org",
    [keys.PHONE]: "8553551200",
    [keys.ADDRESS_1]: "18 Hanover Street",
    [keys.CITY]: "Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29403",
    [keys.DATE_CHECKED]: "2025-01-23",
    [keys.DESCRIPTION]: "Helps homeless and those at-risk to connect with service providers and enroll in programs"
  },
];

module.exports = data;
