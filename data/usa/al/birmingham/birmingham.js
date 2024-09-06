const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Birmingham";
data[keys.URL_NAME] = "birmingham";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Coordinated Entry",
    [keys.URL]: "https://www.oneroofonline.org/coordinated-entry-for-clients",
    [keys.PHONE]: "2052548833",
    [keys.ADDRESS_1]: "1515 6th Ave South",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35233",
    [keys.DATE_CHECKED]: "2024-08-20",
    [keys.DESCRIPTION]: "Talk to Coordinated Entry staff to determine your eligibility for local housing assistance programs",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Lukes UMC",
    [keys.URL]: "https://stlukesumc.org/hunger-ministries",
    [keys.PHONE]: "9014526262",
    [keys.DATE_CHECKED]: "2024-07-05",
    [keys.ADDRESS_1]: "480 S. Highland",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38111",
    [keys.DESCRIPTION]: "Also provides food pantry",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Sun 8am - 9am",
      },
      {
        [keys.DESCRIPTION]: "Supper",
        [keys.HOURS]: "Sat 4:30pm - 5:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Firehouse Ministries",
    [keys.URL]: "https://firehouseshelter.com",
    [keys.PHONE]: "2052529571",
    [keys.ADDRESS_1]: "626 2nd Ave N",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
    [keys.DATE_CHECKED]: "2024-09-05",
    [keys.DESCRIPTION]: "Emergency shelter, day shelter, case management",
    [keys.SERVES]: [serves.MEN],
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every day 11:30am",
      },
      {
        [keys.DESCRIPTION]: "Clothes Closet",
        [keys.HOURS]: "Mon/Wed/Fri 1pm - 3pm",
      },
    ]
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Hospitality Hub",
    [keys.DESCRIPTION]: "A centralized hub of information and services for homeless persons.",
    [keys.URL]: "https://www.hospitalityhub.org",
    [keys.PHONE]: "9017301736",
    [keys.DATE_CHECKED]: "2024-04-30",
    [keys.ADDRESS_1]: "590 Washington Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
  },
];

module.exports = data;
