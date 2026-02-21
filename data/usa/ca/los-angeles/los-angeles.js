const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Los Angeles";
data[keys.URL_NAME] = "los-angeles";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
  "211-usa",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "211",
    [keys.URL]: "https://211la.org/",
    [keys.PHONE]: "211",
    [keys.DESCRIPTION]: "For more information and referrals for all health and human services",
    [keys.DATE_CHECKED]: "2026-02-11",
  },
  {
    [keys.NAME]: "Los Angeles Homeless Services Authority",
    [keys.URL]: "https://www.lahsa.org/get-help",
    [keys.PHONE]: "2132256581",
    [keys.DATE_CHECKED]: "2026-02-11",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Joseph Center",
    [keys.URL]: "https://stjosephctr.org/if-you-need-help/",
    [keys.PHONE]: "3103996878",
    [keys.DATE_CHECKED]: "2026-02-13",
    [keys.ADDRESS_1]: "404 Lincoln Blvd",
    [keys.CITY]: "Venice",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90291",
    [keys.DESCRIPTION]: "hot showers, clothing and hygiene kits, mail, basic medical, case management services",
  },
  {
    [keys.NAME]: "Downtown Women's Center",
    [keys.URL]: "https://downtownwomenscenter.org/get-help",
    [keys.PHONE]: "2132132874",
    [keys.DATE_CHECKED]: "2026-02-17",
    [keys.ADDRESS_1]: "442 S. San Pedro Street",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90013",
    [keys.SERVES]: [serves.WOMEN],
    [keys.DESCRIPTION]: "Also provides mail, showers, bathroom, health services",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Daily 7:30am-8:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Daily 11:30am-12:30am, Thur 11am-noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Union Rescue Mission",
    [keys.URL]: "https://urm.org/get-help",
    [keys.PHONE]: "2133476351",
    [keys.DATE_CHECKED]: "2026-02-18",
    [keys.ADDRESS_1]: "545 S. San Pedro St.",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90013",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "The People Concern",
    [keys.URL]: "https://www.thepeopleconcern.org/get-help",
    [keys.PHONE]: "3104504050",
    [keys.DATE_CHECKED]: "2026-02-12",
    [keys.ADDRESS_1]: "503 Olympic Blvd.",
    [keys.CITY]: "Santa Monica",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90401",
  },
  {
    [keys.NAME]: "Midnight Mission",
    [keys.URL]: "https://www.midnightmission.org/our-services/emergency-services/shelter",
    [keys.PHONE]: "2136249258",
    [keys.DATE_CHECKED]: "2026-02-13",
    [keys.ADDRESS_1]: "601 S. San Pedro St",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90014",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Hope the Mission",
    [keys.URL]: "https://hopethemission.org/our-programs/navigation-job-centers",
    [keys.PHONE]: "8183017988",
    [keys.DATE_CHECKED]: "2026-02-15",
    [keys.ADDRESS_1]: "11839 Sherman Way",
    [keys.CITY]: "North Hollywood",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "91605",
  },
  {
    [keys.NAME]: "Winter Shelter Program",
    [keys.URL]: "https://www.lahsa.org/winter-shelter",
    [keys.PHONE]: "211",
    [keys.DATE_CHECKED]: "2026-02-19",
    [keys.DESCRIPTION]: "Nov 1 - March 31. Various locations",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "San Fernando Valley Community Mental Health Center",
    [keys.URL]: "https://www.movinglivesforward.org",
    [keys.PHONE]: "8189014830",
    [keys.DATE_CHECKED]: "2026-02-16",
    [keys.ADDRESS_1]: "16650 Sherman Way",
    [keys.CITY]: "Van Nuys",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "91406",
  },
  {
    [keys.NAME]: "Volunteers of America",
    [keys.URL]: "https://voala.org",
    [keys.PHONE]: "2133891500",
    [keys.DATE_CHECKED]: "2026-02-17",
    [keys.ADDRESS_1]: "3600 Wilshire Blvd",
    [keys.ADDRESS_2]: "Suite 1500",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90010",
  },
  {
    [keys.NAME]: "Weingart Acceess Center",
    [keys.URL]: "https://www.weingart.org/access-center",
    [keys.PHONE]: "2138335020",
    [keys.DATE_CHECKED]: "2026-02-19",
    [keys.ADDRESS_1]: "501 E 6th Street",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90021",
    [keys.DESCRIPTION]: "Homeless services and referrals",
  },
  {
    [keys.NAME]: "HOPICS Navigation Center",
    [keys.URL]: "https://www.hopics.org/need-help",
    [keys.PHONE]: "3238149100",
    [keys.DATE_CHECKED]: "2026-02-19",
    [keys.ADDRESS_1]: "729 W. Manchester Avenue",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90044",
    [keys.DESCRIPTION]: "Homeless services and referrals",
  },
  {
    [keys.NAME]: "Watts Labor Community Access Center",
    [keys.URL]: "https://wlcac.org/services/houseless-services",
    [keys.PHONE]: "3235634721",
    [keys.DATE_CHECKED]: "2026-02-21",
    [keys.ADDRESS_1]: "958 E 108th Street",
    [keys.CITY]: "Los Angeles",
    [keys.STATE]: "CA",
    [keys.ZIP_CODE]: "90059",
    [keys.DESCRIPTION]: "Homeless services and referrals",
  },
];

module.exports = data;
