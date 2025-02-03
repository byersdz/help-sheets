const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Jacksonville";
data[keys.URL_NAME] = "jacksonville";
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
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Star Gospel Mission",
    [keys.URL]: "https://www.stargospelmission.org",
    [keys.PHONE]: "8437222473",
    [keys.ADDRESS_1]: "474 Meeting Street",
    [keys.CITY]: "Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29403",
    [keys.DATE_CHECKED]: "2025-01-28",
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
