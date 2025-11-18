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
    [keys.NAME]: "Jesus House",
    [keys.URL]: "https://jesushouseokc.org/our-programs",
    [keys.PHONE]: "4052327164",
    [keys.DATE_CHECKED]: "2025-11-07",
    [keys.ADDRESS_1]: "1335 West Sheridan Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 4pm-5pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Wednesday 8am",
      },
    ],
  },
  {
    [keys.NAME]: "Homeless Alliance Day Shelter",
    [keys.URL]: "https://www.homelessalliance.org/get-help",
    [keys.PHONE]: "4054158410",
    [keys.DATE_CHECKED]: "2025-11-18",
    [keys.ADDRESS_1]: "1724 NW 4th Street",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.DESCRIPTION]: "Breakfast, lunch, showers, mail, computers, barbershop",
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
  {
    [keys.NAME]: "City Care",
    [keys.URL]: "https://www.citycareokc.org/homelessservices",
    [keys.PHONE]: "4057248439",
    [keys.DATE_CHECKED]: "2025-11-10",
    [keys.ADDRESS_1]: "532 N. Villa Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73107",
  },
  {
    [keys.NAME]: "Homeless Alliance Winter Shelter",
    [keys.URL]: "https://www.homelessalliance.org/campus",
    [keys.PHONE]: "4054158410",
    [keys.DATE_CHECKED]: "2025-11-10",
    [keys.ADDRESS_1]: "1601 NW 4th Street",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.DESCRIPTION]: "Nov 1 - March 31 only",
  },
  {
    [keys.NAME]: "Pivot",
    [keys.URL]: "https://www.pivotok.org",
    [keys.PHONE]: "4052357537",
    [keys.DATE_CHECKED]: "2025-11-11",
    [keys.ADDRESS_1]: "201 NE 50th Street",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73105",
    [keys.DESCRIPTION]: "Shelter for youth 12-17, services for youth 12-24",
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://southernusa.salvationarmy.org/central-oklahoma/emergency-shelter",
    [keys.PHONE]: "4052461133",
    [keys.DATE_CHECKED]: "2025-11-13",
    [keys.ADDRESS_1]: "1001 N Pennsylvania Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73107",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Sisu Youth Services",
    [keys.URL]: "https://sisuyouth.org",
    [keys.PHONE]: "4054597478",
    [keys.DATE_CHECKED]: "2025-11-13",
    [keys.ADDRESS_1]: "2129 NW 30th Street",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73112",
    [keys.DESCRIPTION]: "Shelter for youth 15-22, services for youth 15-24",
  },
  {
    [keys.NAME]: "YWCA",
    [keys.URL]: "https://www.ywcaokc.org/programs/domestic-violence-services",
    [keys.PHONE]: "4059179922",
    [keys.DATE_CHECKED]: "2025-11-14",
    [keys.ADDRESS_1]: "2460 NW 39th St",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73112",
    [keys.DESCRIPTION]: "Shelter for victims of domestic violence",
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
