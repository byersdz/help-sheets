const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Nashville";
data[keys.URL_NAME] = "nashville";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Coordinated Shelter Access",
    [keys.URL]: "https://louhomeless.org/news/gethelp",
    [keys.PHONE]: "5026372337",
    [keys.DATE_CHECKED]: "2022-07-19",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
    [keys.ADDRESS_1]: "1300 S. 4th Street",
    [keys.ADDRESS_2]: "#250",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40208",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Salvation Army Center of Hope",
    [keys.URL]: "https://southernusa.salvationarmy.org/louisville/center-of-hope",
    [keys.PHONE]: "5026714900",
    [keys.DATE_CHECKED]: "2023-08-11",
    [keys.ADDRESS_1]: "911 S. Brook Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Every day 6:45am - 7:30am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day: Women 4:45pm, Men 5:15pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Wayside Christian Mission",
    [keys.URL]: "https://www.waysidechristianmission.org/ways-to-get-help",
    [keys.PHONE]: "5025843711",
    [keys.DATE_CHECKED]: "2023-08-15",
    [keys.ADDRESS_1]: "432 East Jefferson Street St",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Re:Center Ministries",
    [keys.DESCRIPTION]: "Womens day shelter, Mens emergency shelter, residential recovery program",
    [keys.URL]: "https://recenterministries.org",
    [keys.PHONE]: "5025846543",
    [keys.DATE_CHECKED]: "2023-08-16",
    [keys.ADDRESS_1]: "733 East Jefferson Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
  },
];

module.exports = data;
