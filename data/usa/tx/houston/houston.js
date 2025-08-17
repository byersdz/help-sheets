const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Houston";
data[keys.URL_NAME] = "houston";
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
    [keys.NAME]: "Star of Hope",
    [keys.URL]: "https://www.sohmission.org",
    [keys.PHONE]: "7137480700",
    [keys.DATE_CHECKED]: "2025-08-17",
    [keys.ADDRESS_1]: "1811 Ruiz St.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77002",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Star of Hope Women and Family",
    [keys.URL]: "https://www.sohmission.org",
    [keys.PHONE]: "7137480700",
    [keys.DATE_CHECKED]: "2025-08-17",
    [keys.ADDRESS_1]: "2575 Reed Road",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77051",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Health Care for the Homeless",
    [keys.URL]: "https://nola.gov/next/health-care-for-the-homeless/home",
    [keys.PHONE]: "5046582785",
    [keys.DATE_CHECKED]: "2025-08-08",
    [keys.ADDRESS_1]: "2222 Simon Bolivar Ave",
    [keys.ADDRESS_2]: "2nd Floor",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70113",
  },
];

module.exports = data;
