const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "New Orleans";
data[keys.URL_NAME] = "new-orleans";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Lantern Light",
    [keys.URL]: "https://www.lanternlight.org",
    [keys.PHONE]: "5042735573",
    [keys.PHONE_EXTENSION]: "115",
    [keys.DATE_CHECKED]: "2025-07-31",
    [keys.ADDRESS_1]: "1803 Gravier St.",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 1pm (door closes at 1pm)",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "New Orleans Mission",
    [keys.URL]: "https://neworleansmission.org",
    [keys.PHONE]: "5045232116",
    [keys.DATE_CHECKED]: "2025-07-18",
    [keys.ADDRESS_1]: "1130 Oretha Castle Haley Blvd.",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70113",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Ozanam Inn",
    [keys.URL]: "https://www.ozanaminn.org",
    [keys.PHONE]: "5045231184",
    [keys.DATE_CHECKED]: "2025-07-23",
    [keys.ADDRESS_1]: "2239 Poydras Street",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70119",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Salvation Army Center of Hope",
    [keys.URL]: "https://southernusa.salvationarmy.org/new-orleans/center-of-hope",
    [keys.PHONE]: "5048994569",
    [keys.DATE_CHECKED]: "2025-07-23",
    [keys.ADDRESS_1]: "4500 S. Claiborne Ave",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70125",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Covenant House",
    [keys.URL]: "https://www.covenanthousenola.org/get-help-now",
    [keys.PHONE]: "5045841111",
    [keys.DATE_CHECKED]: "2025-07-30",
    [keys.ADDRESS_1]: "611 North Rampart Street",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.DESCRIPTION]: "Serves ages 16-22",
  },
  {
    [keys.NAME]: "Hagar's House",
    [keys.URL]: "https://fgca.squarespace.com/about/news/hagarshouse",
    [keys.PHONE]: "5042105064",
    [keys.DATE_CHECKED]: "2025-07-30",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN, serves.TRANSGENDER],
  },
  {
    [keys.NAME]: "Metro Mission",
    [keys.URL]: "http://www.mccagno.org/",
    [keys.PHONE]: "8884111333",
    [keys.DATE_CHECKED]: "2025-07-30",
    [keys.DESCRIPTION]: "Domestic violence shelter",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Operation PAR",
    [keys.URL]: "https://www.operationpar.org",
    [keys.PHONE]: "7275244311",
    [keys.DATE_CHECKED]: "2025-06-19",
    [keys.ADDRESS_1]: "6150 150th Ave N",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33760",
    [keys.DESCRIPTION]: "Substance abuse recovery",
  },
];

module.exports = data;
