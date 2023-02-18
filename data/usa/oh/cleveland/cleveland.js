const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Cleveland";
data[keys.URL_NAME] = "cleveland";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Shelter Coordinated Intake",
    [keys.URL]: "https://hhs.cuyahogacounty.us/programs/detail/if-you-need-shelter",
    [keys.PHONE]: "2166746700",
    [keys.DATE_CHECKED]: "2022-12-13",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter. M-F 8am-8pm",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Augustine Hunger Center",
    [keys.URL]: "https://www.ccdocle.org/locations/st-augustine-hunger-center",
    [keys.PHONE]: "2163773725",
    [keys.DATE_CHECKED]: "2023-01-08",
    [keys.ADDRESS_1]: "2486 W 14th St",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "every day 11am - 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Fri 4pm - 5pm",
      },
    ],
  },
  {
    [keys.NAME]: "Cosgrove Center",
    [keys.URL]: "https://www.ccdocle.org/locations/bishop-william-m-cosgrove-center",
    [keys.PHONE]: "2167818262",
    [keys.DATE_CHECKED]: "2023-02-13",
    [keys.ADDRESS_1]: "1736 Superior Ave",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44114",
    [keys.DESCRIPTION]: 'Also provides food pantry, clothing closet, and emergency financial assistance',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 8am - 9am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri noon - 1:30pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Fri 9:30am - 11:30am",
      },
    ],
  },
  {
    [keys.NAME]: "St. Herman House",
    [keys.URL]: "https://sainthermans.org/our-work/",
    [keys.PHONE]: "2169613806",
    [keys.DATE_CHECKED]: "2023-02-13",
    [keys.ADDRESS_1]: "4410 Franklin Blvd",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.DESCRIPTION]: 'Also provides food pantry, toilets, and emergency shelter',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Everyday 7:30am-8am, 11:30am-noon, 5:30pm-6pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Mon and Fri 1pm - 2pm",
      },
      {
        [keys.DESCRIPTION]: "Hygiene Items",
        [keys.HOURS]: "Everyday noon-12:30pm, 6pm-6:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "St. Malachi Parish",
    [keys.URL]: "https://www.stmalachi.org/ministries/back-door-ministry",
    [keys.PHONE]: "2168615343",
    [keys.DATE_CHECKED]: "2023-02-14",
    [keys.ADDRESS_1]: "2459 Washington Ave.",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 10am - 1pm, Sat 9am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Patrick Parish",
    [keys.URL]: "https://stpatrickbridge.org/saint-vincent-de-paul-society",
    [keys.PHONE]: "2166316872",
    [keys.PHONE_EXTENSION]: '1',
    [keys.DATE_CHECKED]: "2023-02-14",
    [keys.ADDRESS_1]: "3602 Bridge Avenue",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Hot Meals",
        [keys.HOURS]: "Tuesday and Thursday 5pm - 6pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "1st 3rd and 5th Wednesdays, 9:30am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "West Side Catholic Center",
    [keys.URL]: "https://www.wsccenter.org/resource-center",
    [keys.PHONE]: "2166314741",
    [keys.DATE_CHECKED]: "2023-02-14",
    [keys.ADDRESS_1]: "3135 Lorain Avenue",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.DESCRIPTION]: "Provides a variety of other services including showers, food pantry, mail, and clothing",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Sat 9am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri noon",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Saturday 4:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Faith Baptist Community Center",
    [keys.URL]: "http://freehope.org/services",
    [keys.PHONE]: "2168818816",
    [keys.DATE_CHECKED]: "2023-02-17",
    [keys.ADDRESS_1]: "2355 East 55th Street",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Wednesday following 11:30am service",
      },
      {
        [keys.DESCRIPTION]: "Clothing Store",
        [keys.HOURS]: "Wednesday after lunch",
      },
      {
        [keys.DESCRIPTION]: "Medical Services",
        [keys.HOURS]: "Thursday 9:30am - 4pm, Saturday 9:30am - noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Men's Public Shelter",
    [keys.URL]: "https://www.lutheranmetro.org/what-we-do/programs/housing-and-shelter/",
    [keys.PHONE]: "2165660047",
    [keys.ADDRESS_1]: "2100 Lakeside Avenue",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44114",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-12-13",
  },
  {
    [keys.NAME]: "St. Herman House",
    [keys.URL]: "https://sainthermans.org/our-work/",
    [keys.PHONE]: "2169613806",
    [keys.DATE_CHECKED]: "2023-02-13",
    [keys.ADDRESS_1]: "4410 Franklin Blvd",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Boston Health Care for the Homeless",
    [keys.URL]: "https://www.bhchp.org/patients",
    [keys.PHONE]: "8576541600",
    [keys.ADDRESS_1]: "780 Albany Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.DATE_CHECKED]: "2022-11-17",
  },
];

module.exports = data;
