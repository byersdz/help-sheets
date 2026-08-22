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
  {
    [keys.NAME]: "PDX 311",
    [keys.URL]: "https://www.portland.gov/311",
    [keys.PHONE]: "311",
    [keys.DATE_CHECKED]: "2026-07-15",
    [keys.DESCRIPTION]: "Your first call to help with any questions or local government service needs within Multnomah County",
  },
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
  {
    [keys.NAME]: "Outside In Day Program",
    [keys.URL]: "https://outsidein.org/young-adult-services/meals-housing-and-support",
    [keys.PHONE]: "5034323986",
    [keys.DATE_CHECKED]: "2026-08-19",
    [keys.ADDRESS_1]: "1132 SW 13th Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97205",
    [keys.DESCRIPTION]: "Serves youth ages 16-24, Meals, Shower, Laundry, Mail, Referrals",
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
    [keys.NAME]: "Bethanie’s Room Women’s Shelter",
    [keys.URL]: "https://blanchethouse.org/portland-womens-shelter-bethanies-room",
    [keys.PHONE]: "9713587774",
    [keys.DATE_CHECKED]: "2026-08-13",
    [keys.ADDRESS_1]: "1015 NW 17th Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97209",
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
  {
    [keys.NAME]: "The Hope Centers",
    [keys.URL]: "https://www.helpinghandsreentry.org/hope-centers",
    [keys.PHONE]: "5037384321",
    [keys.DATE_CHECKED]: "2026-08-20",
    [keys.DESCRIPTION]: "Emergency shelter and transitional housing",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Outside In",
    [keys.URL]: "https://outsidein.org",
    [keys.PHONE]: "5035353860",
    [keys.DATE_CHECKED]: "2026-08-19",
    [keys.ADDRESS_1]: "1132 SW 13th Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97205",
    [keys.DESCRIPTION]: "Medical services",
  },
  {
    [keys.NAME]: "Behavioral Health Resource Center",
    [keys.URL]: "https://multco.us/info/behavioral-health-resource-center",
    [keys.PHONE]: "5039884100",
    [keys.DATE_CHECKED]: "2026-08-20",
    [keys.ADDRESS_1]: "333 SW Park Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97205",
    [keys.DESCRIPTION]: "Drop-in day center with shelter and temporary housing",
  },
  {
    [keys.NAME]: "Prism Health",
    [keys.URL]: "https://www.prismhealth.org",
    [keys.PHONE]: "5034457699",
    [keys.DATE_CHECKED]: "2026-08-22",
    [keys.ADDRESS_1]: "2236 SE Belmont St",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97214",
    [keys.DESCRIPTION]: "LGBTQ-focused health services, testing, and counseling.",
  },
];

module.exports = data;
