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
    [keys.NAME]: "Church of the Reconciler",
    [keys.URL]: "http://www.churchofthereconciler.com",
    [keys.PHONE]: "2053246402",
    [keys.DATE_CHECKED]: "2024-09-27",
    [keys.ADDRESS_1]: "112 14th Street North",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Mon - Thur 9am to 2pm",
      },
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "3rd Sunday 9:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "1st, 2nd, 4th Sunday 11am",
      },
    ],
  },
  {
    [keys.NAME]: "Grace Episcopal Church",
    [keys.URL]: "https://gracechurchwoodlawn.org",
    [keys.PHONE]: "2055954636",
    [keys.DATE_CHECKED]: "2024-09-29",
    [keys.ADDRESS_1]: "5712 1st Ave. North",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35212",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 8am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri noon, Sat 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "2nd, 3rd, 4th, 5th Tue 8:30am-10am",
      },
    ],
  },
  {
    [keys.NAME]: "Highlands United Methodist Church",
    [keys.URL]: "http://www.highlandsumc.net/community-ministries",
    [keys.PHONE]: "2059338751",
    [keys.DATE_CHECKED]: "2024-09-29",
    [keys.ADDRESS_1]: "1045 20th St S",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35205",
    [keys.DESCRIPTION]: "Refreshments, mail and phone service, needed toiletries",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Hospitality Hour",
        [keys.HOURS]: "Tue / Thur / Fri / Sat 8:30am - 10am",
      },
      {
        [keys.DESCRIPTION]: "Laundry",
        [keys.HOURS]: "Tue / Fri 8:30am - 10am",
      },
      {
        [keys.DESCRIPTION]: "Medical Aid",
        [keys.HOURS]: "Thur 8am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Andrews Episcopal Church",
    [keys.URL]: "https://www.standrewsbham.org",
    [keys.PHONE]: "2052517898",
    [keys.DATE_CHECKED]: "2024-10-04",
    [keys.ADDRESS_1]: "1024 12th St S",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35205",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Sat noon",
      },
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Sunday noon",
      },
    ],
  },
  {
    [keys.NAME]: "Urban Ministry",
    [keys.URL]: "https://www.urban-ministry.org",
    [keys.PHONE]: "2057810517",
    [keys.DATE_CHECKED]: "2024-10-04",
    [keys.ADDRESS_1]: "1229 Cotton Ave SW",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35211",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Pay as you can Cafe",
        [keys.HOURS]: "Mon-Fri 11:30am - 1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Faith Chapel",
    [keys.URL]: "https://www.faithchapel.net/carecenter",
    [keys.PHONE]: "2057859673",
    [keys.DATE_CHECKED]: "2024-10-09",
    [keys.ADDRESS_1]: "921 2nd Ave N",
    [keys.CITY]: "Birmingham",
    [keys.STATE]: "AL",
    [keys.ZIP_CODE]: "35203",
    [keys.DESCRIPTION]: "Day Shelter",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Showers / Laundry",
        [keys.HOURS]: "Tue/Thur/Sat 8:30am - 12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Food for our Journey",
    [keys.URL]: "https://www.foodforourjourney.org",
    [keys.PHONE]: "2052837151",
    [keys.DATE_CHECKED]: "2024-10-06",
    [keys.DESCRIPTION]: "Mobile food truck"
  },
  {
    [keys.NAME]: "Community Food Bank of Central Alabama",
    [keys.URL]: "https://feedingal.org",
    [keys.PHONE]: "2059428911",
    [keys.DATE_CHECKED]: "2024-10-06",
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
    [keys.NAME]: "YWCA Interfaith Hospitality House Shelter",
    [keys.URL]: "https://ywcabham.org/community-housing/interfaith-hospitality-house-ihh",
    [keys.PHONE]: "2055914302",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
    [keys.DATE_CHECKED]: "2024-09-21",
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
