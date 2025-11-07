const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Oklahoma City";
data[keys.URL_NAME] = "oklahoma-city";
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
    [keys.NAME]: "The Bridge",
    [keys.URL]: "https://www.bridgehrc.org",
    [keys.PHONE]: "2146701507",
    [keys.DATE_CHECKED]: "2025-10-27",
    [keys.ADDRESS_1]: "1818 Corsicana Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75201",
    [keys.DESCRIPTION]: "Day shelter, night shelter, hygiene supplies, laundry, barbershop, mail",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Every day 7:30am-8:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every day noon-1pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Rescue Mission",
    [keys.URL]: "https://cityrescue.org",
    [keys.PHONE]: "4052322709",
    [keys.DATE_CHECKED]: "2025-11-06",
    [keys.ADDRESS_1]: "800 W. California Ave.",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Jesus House",
    [keys.URL]: "https://jesushouseokc.org/get-help",
    [keys.PHONE]: "4052327164",
    [keys.DATE_CHECKED]: "2025-11-07",
    [keys.ADDRESS_1]: "1335 West Sheridan Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.DESCRIPTION]: "Substance abuse recovery program",
  },
];

module.exports = data;
