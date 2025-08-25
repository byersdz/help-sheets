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
  {
    [keys.NAME]: "Magnificat House",
    [keys.URL]: "https://mhihouston.org/need-assistance",
    [keys.PHONE]: "7135294231",
    [keys.DATE_CHECKED]: "2025-08-19",
    [keys.ADDRESS_1]: "1410 Elgin St",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
  },
  {
    [keys.NAME]: "Bay Area Homeless Services",
    [keys.URL]: "https://bahs-shelter.org",
    [keys.PHONE]: "2818371654",
    [keys.DATE_CHECKED]: "2025-08-21",
    [keys.ADDRESS_1]: "3406 Wisconsin St",
    [keys.CITY]: "Baytown",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77520",
  },
  {
    [keys.NAME]: "Family Promise",
    [keys.URL]: "https://fplh.org/get-help",
    [keys.PHONE]: "2814413754",
    [keys.DATE_CHECKED]: "2025-08-25",
    [keys.ADDRESS_1]: "111 South Avenue G.",
    [keys.CITY]: "Humble",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77338",
    [keys.SERVES]: [serves.FAMILIES],
  },
  {
    [keys.NAME]: "The Mission of Yahweh",
    [keys.URL]: "https://missionofyahweh.org",
    [keys.PHONE]: "7139300667",
    [keys.DATE_CHECKED]: "2025-08-25",
    [keys.ADDRESS_1]: "10247 Algiers Road",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77041",
    [keys.SERVES]: [serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Covenant House",
    [keys.URL]: "https://www.covenanthousetx.org",
    [keys.PHONE]: "7135232231",
    [keys.DATE_CHECKED]: "2025-08-25",
    [keys.ADDRESS_1]: "1111 Lovett Blvd.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77006",
    [keys.SERVES]: [serves.AGE_18_TO_24],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://salvationarmyhouston.org",
    [keys.PHONE]: "7132242875",
    [keys.DATE_CHECKED]: "2025-08-19",
  },
];

module.exports = data;
