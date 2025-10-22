const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Dallas";
data[keys.URL_NAME] = "dallas";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Housing Forward Homeless Crisis Help Line",
    [keys.URL]: "https://www.mdhadallas.org/help-resources",
    [keys.PHONE]: "8884116802",
    [keys.DATE_CHECKED]: "2025-10-22",
    [keys.DESCRIPTION]: "Call if you are currently experiencing homelessness",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Trinity Center",
    [keys.URL]: "https://www.trinitycenteraustin.org/programs",
    [keys.DATE_CHECKED]: "2025-10-09",
    [keys.ADDRESS_1]: "304 E. 7th St",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.DESCRIPTION]: "Also provides clothing closet, bus passes, limited financial assistance",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 9am-9:30am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Thur 4pm-4:30pm, Sun 3:30pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Thur 2pm-6pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "The Bridge",
    [keys.URL]: "https://www.bridgehrc.org",
    [keys.PHONE]: "2146701507",
    [keys.DATE_CHECKED]: "2025-10-22",
    [keys.ADDRESS_1]: "1818 Corsicana Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75201",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "ARCH Clinic",
    [keys.URL]: "https://communitycaretx.org/all-locations/austin-resource-center-for-the-homeless-clinic",
    [keys.PHONE]: "5129789920",
    [keys.DATE_CHECKED]: "2025-10-19",
    [keys.ADDRESS_1]: "500 E 7th Street",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.DESCRIPTION]: "Medical care",
  },
];

module.exports = data;
