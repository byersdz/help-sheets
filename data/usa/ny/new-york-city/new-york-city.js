const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'New York City';
data[keys.URL_NAME] = 'new-york-city';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Crisis Intervention Hotline',
    [keys.PHONE]: '8883582384',
    [keys.URL]: 'https://www.coalitionforthehomeless.org/',
    [keys.DATE_CHECKED]: '2022-07-27',
    [keys.DESCRIPTION]:
      'Call if you have questions about accessing shelter or other services, or if you have been denied shelter',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Grand Central Food Program',
    [keys.URL]: 'https://www.coalitionforthehomeless.org/our-programs/food/grand-central-food-program',
    [keys.DATE_CHECKED]: '2022-07-27',
    [keys.DESCRIPTION]: 'Every night vans deliver food. Visit website for route schedule',
  },
  {
    [keys.NAME]: 'The Bowery Mission',
    [keys.URL]: 'https://www.bowery.org/get-help',
    [keys.PHONE]: '2122266214',
    [keys.DATE_CHECKED]: '2022-07-28',
    [keys.ADDRESS_1]: '227 Bowery',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10002',
    [keys.DESCRIPTION]: 'Also provides food pantry and  residential program',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Every day: 8am, 1pm, 5pm',
      },
      {
        [keys.DESCRIPTION]: 'Showers & Clothing',
        [keys.HOURS]: 'Men: Mon-Fri 9:30am-noon, Women: Thur 9:30am-noon. Signup at 6:45am',
      },
      {
        [keys.DESCRIPTION]: 'Medical Care',
        [keys.HOURS]: 'Tues 9am-2pm, Thur 3pm-5pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Holy Apostles',
    [keys.URL]: 'https://holyapostlesnyc.org',
    [keys.PHONE]: '2129240167',
    [keys.DATE_CHECKED]: '2022-07-28',
    [keys.ADDRESS_1]: '296 9th Ave',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10001',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Hot meals',
        [keys.HOURS]: 'Mon - Fri 10:30am - 12:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Tue / Wed / Thur 1:30pm - 3:30pm',
      },
    ],
  },
  {
    [keys.NAME]: 'NY Common Pantry',
    [keys.URL]: 'https://nycommonpantry.org',
    [keys.PHONE]: '9177209700',
    [keys.DATE_CHECKED]: '2022-07-28',
    [keys.ADDRESS_1]: '8 East 109th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10029',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Hot meals',
        [keys.HOURS]: 'Mon - Fri 2:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Brown Bag Lunch',
        [keys.HOURS]: 'Sat / Sun 4pm - 5pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Community Kitchen of West Harlem',
    [keys.URL]: 'https://www.foodbanknyc.org/community-kitchen',
    [keys.PHONE]: '2125667855',
    [keys.DATE_CHECKED]: '2022-07-30',
    [keys.ADDRESS_1]: '252 W 116th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10026',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Mon - Fri 4pm - 6pm',
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: '30th Street Men’s Intake Shelter',
    [keys.DESCRIPTION]: 'Intake, Assessment, and General Population shelter for homeless men',
    [keys.PHONE]: '311',
    [keys.ADDRESS_1]: '400 East 30th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10016',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2022-07-30',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'Healthcare for the Homeless',
    [keys.DESCRIPTION]: 'Provides healthcare and social services',
    [keys.PHONE]: '4122444775',
    [keys.URL]: 'https://pchspitt.org/healthcare-services/health-care-for-the-homeless/',
    [keys.DATE_CHECKED]: '2022-07-21',
  },
];

module.exports = data;
