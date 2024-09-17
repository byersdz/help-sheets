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
  {
    [keys.NAME]: "First Light",
    [keys.URL]: "https://www.firstlightshelter.org",
    [keys.PHONE]: "2053234277",
    [keys.ADDRESS_1]: "2230 Fourth Avenue North",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
    [keys.DATE_CHECKED]: "2024-09-05",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://southernusa.salvationarmy.org/birmingham-al",
    [keys.PHONE]: "2053282420",
    [keys.ADDRESS_1]: "2015 26th Avenue North",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35234",
    [keys.DATE_CHECKED]: "2024-09-05",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Family Connection Youth Shelter",
    [keys.URL]: "http://www.familyconnection-inc.org",
    [keys.PHONE]: "2056636301",
    [keys.ADDRESS_1]: "2 Walker Run",
    [keys.CITY]: "Alabaster",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35007",
    [keys.DATE_CHECKED]: "2024-09-09",
    [keys.SERVES]: [serves.AGE_12_TO_27],
  },
  {
    [keys.NAME]: "Family Promise",
    [keys.URL]: "https://www.familypromisebham.org",
    [keys.PHONE]: "2059180246",
    [keys.ADDRESS_1]: "1016 19th St South",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35205",
    [keys.DATE_CHECKED]: "2024-09-09",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "The Way Station",
    [keys.URL]: "https://www.aidsalabama.org/thewaystation",
    [keys.PHONE]: "2053249822",
    [keys.SERVES]: [serves.AGE_18_TO_24],
    [keys.DATE_CHECKED]: "2024-09-16",
  },
  {
    [keys.NAME]: "Safe House",
    [keys.URL]: "https://safehouse.org/get-help",
    [keys.PHONE]: "2056697233",
    [keys.DESCRIPTION]: "Emergency shelter for individuals and their dependent family members who are fleeing domestic violence",
    [keys.DATE_CHECKED]: "2024-09-16",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Pathways",
    [keys.DESCRIPTION]: "Day Shelter for women and children.",
    [keys.URL]: "https://pathwayshome.org",
    [keys.PHONE]: "2053226854",
    [keys.DATE_CHECKED]: "2024-09-15",
    [keys.ADDRESS_1]: "409 Richard Arrington Jr Blvd N",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
  },
];

module.exports = data;
