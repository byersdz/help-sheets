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
  {
    [keys.NAME]: "North Charleston Dream Center",
    [keys.URL]: "https://seacoastdreamcenter.org",
    [keys.PHONE]: "8433751099",
    [keys.DATE_CHECKED]: "2025-01-27",
    [keys.ADDRESS_1]: "5505 N Rhett Ave",
    [keys.CITY]: "North Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29406",
    [keys.DESCRIPTION]: "Also provides medical clinic",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Pantry",
        [keys.HOURS]: "Thursday 8:30am",
      },
    ],
  },
  {
    [keys.NAME]: "East Cooper Community Outreach",
    [keys.URL]: "https://eccocharleston.org",
    [keys.PHONE]: "8438499220",
    [keys.DATE_CHECKED]: "2025-01-26",
    [keys.ADDRESS_1]: "1145 Six Mile Road",
    [keys.CITY]: "Mount Pleasant",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29466",
    [keys.DESCRIPTION]: "Food assistance, medical, dental, clothing, financial assistance",
  },
  {
    [keys.NAME]: "Lowcountry Food Bank",
    [keys.URL]: "https://lowcountryfoodbank.org",
    [keys.PHONE]: "8437478146",
    [keys.PHONE_EXTENSION]: "100",
    [keys.DATE_CHECKED]: "2025-01-26",
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
  {
    [keys.NAME]: "One 80 Place",
    [keys.URL]: "https://www.one80place.org",
    [keys.PHONE]: "8437239477",
    [keys.DATE_CHECKED]: "2025-01-28",
    [keys.ADDRESS_1]: "35 Walnut Street",
    [keys.CITY]: "Charleston",
    [keys.STATE]: "SC",
    [keys.ZIP_CODE]: "29403",
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
