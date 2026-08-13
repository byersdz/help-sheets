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
    [keys.NAME]: "Blanchet House of Hospitality",
    [keys.URL]: "https://blanchethouse.org/free-food-meal-services",
    [keys.PHONE]: "5032414340",
    [keys.DATE_CHECKED]: "2026-08-10",
    [keys.ADDRESS_1]: "310 NW Glisan St",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Sat 6:30am-7:25am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Sat 11:30am-12:25pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Sat 5pm-5:55pm",
      },
    ],
  },
  {
    [keys.NAME]: "Operation Nightwatch",
    [keys.URL]: "https://www.operationnightwatch.org",
    [keys.PHONE]: "5032200438",
    [keys.DATE_CHECKED]: "2026-07-29",
    [keys.ADDRESS_1]: "1432 SW 13th Avenue",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97201",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Thur/Fri/Sat 6:30pm-10pm",
      },
    ],
  },
  {
    [keys.NAME]: "Union Gospel Mission",
    [keys.URL]: "https://www.ugmportland.org/homeless-services",
    [keys.PHONE]: "5032744483",
    [keys.DATE_CHECKED]: "2026-08-02",
    [keys.ADDRESS_1]: "3 NW Third Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Wed/Thur/Fri 2pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Wed/Thur/Fri 8pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tue/Wed/Thur/Fri 4pm",
      },
    ],
  },
  {
    [keys.NAME]: "Portland Rescue Mission",
    [keys.URL]: "https://portlandrescuemission.org/what-we-do/our-solution/get-help/burnside",
    [keys.PHONE]: "5039067690",
    [keys.DATE_CHECKED]: "2026-08-07",
    [keys.ADDRESS_1]: "111 West Burnside Street",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Daily 7am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Daily 6pm",
      },
    ],
  },
  {
    [keys.NAME]: "PDX Saints Love Day Center",
    [keys.URL]: "https://pdxsaintslove.org/day-center",
    [keys.DATE_CHECKED]: "2026-07-31",
    [keys.ADDRESS_1]: "247 SE 82nd Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97215",
    [keys.DESCRIPTION]: "Meals, clothing, showers, laundry, hygiene kits, referrals",
  },
  {
    [keys.NAME]: "Transition Projects Resource Center",
    [keys.URL]: "https://www.tprojects.org/resource-center",
    [keys.PHONE]: "5032804700",
    [keys.DATE_CHECKED]: "2026-07-28",
    [keys.ADDRESS_1]: "650 NW Irving Street",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
    [keys.DESCRIPTION]: "Showers, Laundry, Haircuts, Clothing, Medical Clinic, Mail, Referrals",
  },
  {
    [keys.NAME]: "The Wash House",
    [keys.URL]: "https://www.groundscoreassociation.org/laundry",
    [keys.DATE_CHECKED]: "2026-08-13",
    [keys.ADDRESS_1]: "2609 SE 6th Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Free Laundry",
        [keys.HOURS]: "Mon/Wed 9am-5pm, Tue/Thur 10am-2pm",
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
