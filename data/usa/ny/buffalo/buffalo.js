const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Buffalo';
data[keys.URL_NAME] = 'buffalo';
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
