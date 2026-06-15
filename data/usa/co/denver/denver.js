const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Denver";
data[keys.URL_NAME] = "denver";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Shelter the Homeless Hotline",
    [keys.URL]: "https://homelessutah.org",
    [keys.PHONE]: "8019909999",
    [keys.DESCRIPTION]: "If you or someone you know is experiencing or at risk of homelessness, call for shelter and assistance",
    [keys.DATE_CHECKED]: "2026-04-11",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Volunteers of America",
    [keys.URL]: "https://www.voacolorado.org/services/mission-denver-metro",
    [keys.PHONE]: "3032952165",
    [keys.DATE_CHECKED]: "2026-06-07",
    [keys.ADDRESS_1]: "2877 Lawrence Street",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80205",
    [keys.DESCRIPTION]: "Also provides sack lunches, clothing closet, and hygiene kits",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Thur 5pm-6pm, Sun 12:30pm-1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Cathedral Basilica",
    [keys.URL]: "https://www.denvercathedral.org/food-pantry",
    [keys.PHONE]: "3038317010",
    [keys.DATE_CHECKED]: "2026-06-09",
    [keys.ADDRESS_1]: "1530 Logan St.",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sandwiches and Coffee",
        [keys.HOURS]: "Mon-Fri 8am-8:30am",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon-Fri 1pm-1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Holy Ghost Church",
    [keys.URL]: "https://holyghostchurch.org/social-ministry/",
    [keys.PHONE]: "3032973441",
    [keys.DATE_CHECKED]: "2026-06-09",
    [keys.ADDRESS_1]: "1900 California St",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sandwiches",
        [keys.HOURS]: "Mon-Sat 10am-10:30am",
      },
    ],
  },
  {
    [keys.NAME]: "St. Elizabeth Church",
    [keys.URL]: "https://www.stelizabethdenver.org/catholic-links",
    [keys.PHONE]: "3035344014",
    [keys.DATE_CHECKED]: "2026-06-10",
    [keys.ADDRESS_1]: "1060 St Francis Way",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80204",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every day 11am",
      },
    ],
  },
  {
    [keys.NAME]: "Christ's Body Ministries",
    [keys.URL]: "https://christsbody.org/daily-bread",
    [keys.PHONE]: "3038601272",
    [keys.DATE_CHECKED]: "2026-06-11",
    [keys.ADDRESS_1]: "850 Lincoln St.",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast, Clothing, Showers",
        [keys.HOURS]: "Mon-Fri 7am-9am",
      },
    ],
  },
  {
    [keys.NAME]: "St. Francis Center",
    [keys.URL]: "https://www.sfcdenver.org/programs-services/day-services",
    [keys.PHONE]: "3032971576",
    [keys.DATE_CHECKED]: "2026-06-12",
    [keys.ADDRESS_1]: "2323 Curtis Street",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80205",
    [keys.DESCRIPTION]: "Day center with showers, mail, clothing, wellness, and more",
  },
  {
    [keys.NAME]: "Church in the City",
    [keys.URL]: "https://citcba.churchcenter.com",
    [keys.DATE_CHECKED]: "2026-06-14",
    [keys.ADDRESS_1]: "1580 Gaylord St.",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80206",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Bank",
        [keys.HOURS]: "Wednesday 11am-12:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Denver Rescue Mission",
    [keys.URL]: "https://denverrescuemission.org",
    [keys.PHONE]: "3032940157",
    [keys.DATE_CHECKED]: "2026-06-15",
    [keys.ADDRESS_1]: "2222 Lawrence Street",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80205",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Salvation Army Crossroads Center",
    [keys.URL]: "https://crossroadscenter.salvationarmy.org",
    [keys.PHONE]: "7203054640",
    [keys.DATE_CHECKED]: "2026-06-02",
    [keys.ADDRESS_1]: "1901 29TH ST",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80216",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Samaritan House",
    [keys.URL]: "https://ccdenver.org/denver-samaritan-house",
    [keys.PHONE]: "7207999506",
    [keys.DATE_CHECKED]: "2026-06-02",
    [keys.ADDRESS_1]: "4330 E. 48th Ave",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80216",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Urban Peak",
    [keys.URL]: "https://www.urbanpeak.org",
    [keys.PHONE]: "3039742908",
    [keys.DATE_CHECKED]: "2026-06-04",
    [keys.ADDRESS_1]: "1630 S. Acoma St",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80223",
    [keys.DESCRIPTION]: "Serves ages 12 - 24",
  },
  {
    [keys.NAME]: "The Delores Project",
    [keys.URL]: "https://thedeloresproject.org/need-shelter",
    [keys.PHONE]: "3035345411",
    [keys.DATE_CHECKED]: "2026-06-06",
    [keys.SERVES]: [serves.WOMEN, serves.TRANSGENDER],
  },
  {
    [keys.NAME]: "SafeHouse Denver",
    [keys.URL]: "https://safehouse-denver.org",
    [keys.PHONE]: "3033189989",
    [keys.DATE_CHECKED]: "2026-06-15",
    [keys.DESCRIPTION]: "Crisis line and emergency shelter for victims of domestic violence",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Fourth Street Clinic",
    [keys.URL]: "https://fourthstreetclinic.org",
    [keys.PHONE]: "8013640058",
    [keys.DATE_CHECKED]: "2026-05-18",
    [keys.ADDRESS_1]: "409 West 400 South",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84101",
    [keys.DESCRIPTION]: "Medical care for the homeless",
  },
];

module.exports = data;
