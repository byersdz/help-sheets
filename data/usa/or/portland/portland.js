const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Portland";
data[keys.URL_NAME] = "portland";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
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
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Portland Rescue Mission",
    [keys.URL]: "https://portlandrescuemission.org",
    [keys.PHONE]: "5039067690",
    [keys.DATE_CHECKED]: "2026-07-15",
    [keys.ADDRESS_1]: "111 West Burnside Street",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "City Team",
    [keys.URL]: "https://www.cityteam.org/get-help/portland",
    [keys.PHONE]: "5032319334",
    [keys.DATE_CHECKED]: "2026-07-15",
    [keys.ADDRESS_1]: "526 SE Grand Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97214",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "SAFES Women's Shelter",
    [keys.URL]: "https://safes.salvationarmy.org",
    [keys.PHONE]: "5032270810",
    [keys.DATE_CHECKED]: "2026-07-15",
    [keys.ADDRESS_1]: "30 SW 2nd Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97204",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Porch Light Shelter",
    [keys.URL]: "https://janusyouth.org/homeless-youth",
    [keys.PHONE]: "5033807200",
    [keys.DATE_CHECKED]: "2026-07-18",
    [keys.ADDRESS_1]: "1635 SW Alder Street",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97205",
    [keys.SERVES]: [serves.YOUTH],
    [keys.DESCRIPTION]: "Ages 16-24",
  },
  {
    [keys.NAME]: "Central Church of the Nazarene Shelter",
    [keys.URL]: "https://www.agapevillagepdx.org/shelter",
    [keys.PHONE]: "5037606272",
    [keys.DATE_CHECKED]: "2026-07-18",
    [keys.ADDRESS_1]: "9715 SE Powell Blvd",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97266",
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://portland.salvationarmy.org/portland2/provide-shelter",
    [keys.PHONE]: "9713404010",
    [keys.DATE_CHECKED]: "2026-07-23",
    [keys.ADDRESS_1]: "5325 N Williams Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97217",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "The Gathering Place",
    [keys.URL]: "https://tgpdenver.org",
    [keys.PHONE]: "3033214198",
    [keys.DATE_CHECKED]: "2026-06-16",
    [keys.ADDRESS_1]: "1535 N. High St.",
    [keys.CITY]: "Denver",
    [keys.STATE]: "CO",
    [keys.ZIP_CODE]: "80218",
    [keys.DESCRIPTION]: "Provides low-barrier care to women, gender-diverse people, and children facing homelessness",
  },
];

module.exports = data;
