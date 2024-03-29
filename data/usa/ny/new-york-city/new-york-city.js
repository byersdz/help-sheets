const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'New York City';
data[keys.URL_NAME] = 'new-york-city';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
  'food-pantries-org',
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
    [keys.NAME]: 'Food Help NYC',
    [keys.URL]: 'https://foodhelp.nyc.gov',
    [keys.DESCRIPTION]: 'Web app to find food pantry and soup kitchen locations in NYC',
    [keys.DATE_CHECKED]: '2022-07-31',
  },
  {
    [keys.NAME]: 'NYC Hunger Hotline',
    [keys.PHONE]: '8668888777',
    [keys.DESCRIPTION]: 'Call to find food resources',
    [keys.DATE_CHECKED]: '2022-08-18',
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
  {
    [keys.NAME]: 'All Angels Church',
    [keys.URL]: 'https://allangelschurch.com/community-ministries/get-services/#cm-pathways',
    [keys.PHONE]: '2123629300',
    [keys.DATE_CHECKED]: '2022-08-18',
    [keys.ADDRESS_1]: '251 W 80th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10024',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Tues / Thur 9am',
      },
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'Tues / Thur 8am - 2pm',
      },
      {
        [keys.DESCRIPTION]: 'Medical Care',
        [keys.HOURS]: 'Tues / Thur 8am - noon',
      },
    ],
  },
  {
    [keys.NAME]: 'Broadway Community',
    [keys.URL]: 'https://broadwaycommunity.org',
    [keys.PHONE]: '2128646100',
    [keys.PHONE_EXTENSION]: '120',
    [keys.DATE_CHECKED]: '2022-08-18',
    [keys.ADDRESS_1]: '601 W 114th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10025',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Mon / Wed / Fri 12:30pm - 1:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'Mon / Wed / Fri 10:30am - noon',
      },
      {
        [keys.DESCRIPTION]: 'Medical Care',
        [keys.HOURS]: 'Mon 1pm - 4pm, Wed 10am - 4pm',
      },
    ],
  },
  {
    [keys.NAME]: "St. John's Bread & Life",
    [keys.URL]: 'https://breadandlife.org',
    [keys.PHONE]: '7185740058',
    [keys.DATE_CHECKED]: '2022-07-31',
    [keys.ADDRESS_1]: '795 Lexington Avenue',
    [keys.CITY]: 'Brooklyn',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '11221',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Mon - Thur 9:30am - noon',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Mon - Thur 8am - 3pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Masbia Boro Park',
    [keys.URL]: 'https://www.masbia.org/masbia_boro_park',
    [keys.PHONE]: '7189724446',
    [keys.PHONE_EXTENSION]: '205',
    [keys.DATE_CHECKED]: '2022-08-01',
    [keys.ADDRESS_1]: '5402 New Utrecht Avenue',
    [keys.CITY]: 'Brooklyn',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '11219',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Kosher Meals',
        [keys.HOURS]: 'Mon - Thur 3pm - 8pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Mon/Tue 9am-8pm, Wed/Thur 11am-10pm, Fri 7am-2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Neighbors Together',
    [keys.URL]: 'https://neighborstogether.org/community-cafe',
    [keys.PHONE]: '7184987256',
    [keys.DATE_CHECKED]: '2022-08-01',
    [keys.ADDRESS_1]: '2094 Fulton St',
    [keys.CITY]: 'Brooklyn',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '11233',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Mon - Fri: noon - 2pm',
      },
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Mon - Thur: 4pm - 6pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Part of the Solution',
    [keys.URL]: 'https://potsbronx.org/english/programs',
    [keys.PHONE]: '7182204892',
    [keys.DATE_CHECKED]: '2022-08-02',
    [keys.ADDRESS_1]: '2759 Webster Avenue',
    [keys.CITY]: 'Bronx',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10458',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Mon - Sat: 12:30pm - 3pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Mon - Sat: 8:30am - 11am',
      },
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'Mon - Fri: 8:30am - 11am',
      },
    ],
  },
  {
    [keys.NAME]: 'Masbia of Queens',
    [keys.URL]: 'https://www.masbiaqueens.org/getfood',
    [keys.PHONE]: '7189724446',
    [keys.PHONE_EXTENSION]: '207',
    [keys.DATE_CHECKED]: '2022-08-02',
    [keys.ADDRESS_1]: '105-47 64th Road',
    [keys.CITY]: 'Queens',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '11375',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Mon - Thur: 3pm - 8pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'by appointment',
      },
    ],
  },
  {
    [keys.NAME]: 'Grand Central Food Program',
    [keys.URL]: 'https://www.coalitionforthehomeless.org/our-programs/food/grand-central-food-program',
    [keys.DATE_CHECKED]: '2022-07-27',
    [keys.DESCRIPTION]: 'Every night vans deliver food. Visit website for route schedule',
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: '30th Street Mens Intake Shelter',
    [keys.DESCRIPTION]: 'Intake, Assessment, and General Population shelter for homeless men',
    [keys.URL]: 'https://www1.nyc.gov/site/dhs/shelter/singleadults/single-adults-applying.page',
    [keys.PHONE]: '311',
    [keys.ADDRESS_1]: '400 East 30th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10016',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2022-07-30',
  },
  {
    [keys.NAME]: 'Brooklyn Womens Intake Shelter',
    [keys.DESCRIPTION]: 'Intake and assesment for homeless women',
    [keys.URL]: 'https://www1.nyc.gov/site/dhs/shelter/singleadults/single-adults-applying.page',
    [keys.PHONE]: '7184837700',
    [keys.ADDRESS_1]: '116 Williams Avenue',
    [keys.CITY]: 'Brooklyn',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '11207',
    [keys.SERVES]: [serves.WOMEN],
    [keys.DATE_CHECKED]: '2022-07-30',
  },
  {
    [keys.NAME]: 'Adult Family Intake Center',
    [keys.DESCRIPTION]: 'Intake and assesment for couples / families with adult children',
    [keys.URL]: 'https://www1.nyc.gov/site/dhs/shelter/families/adult-families-applying.page',
    [keys.PHONE]: '2124814704',
    [keys.ADDRESS_1]: '400-430 East 30th Street',
    [keys.CITY]: 'New York',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10016',
    [keys.SERVES]: [serves.COUPLES, serves.FAMILIES_WITHOUT_CHILDREN],
    [keys.DATE_CHECKED]: '2022-07-31',
  },
  {
    [keys.NAME]: 'PATH',
    [keys.DESCRIPTION]: 'Intake and assesment for families with children',
    [keys.URL]: 'https://www1.nyc.gov/site/dhs/shelter/families/families-with-children-applying.page',
    [keys.PHONE]: '7185036400',
    [keys.ADDRESS_1]: '151 East 151st Street',
    [keys.CITY]: 'The Bronx',
    [keys.STATE]: 'NY',
    [keys.ZIP_CODE]: '10451',
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
    [keys.DATE_CHECKED]: '2022-07-31',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'NYC Well',
    [keys.DESCRIPTION]: 'NYC Well is your connection to free, confidential mental health support.',
    [keys.PHONE]: '8886929355',
    [keys.URL]: 'https://nycwell.cityofnewyork.us/en',
    [keys.DATE_CHECKED]: '2022-08-17',
  },
];

module.exports = data;
