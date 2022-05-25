const { keys, languageCodes } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Richmond';
data[keys.URL_NAME] = 'richmond';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'The Homeless Connection Line',
    [keys.DESCRIPTION]: 'Call if you are currently homeless or are within 3 days of losing your housing',
    [keys.PHONE]: '8049720813',
    [keys.URL]: 'https://www.homewardva.org/homeless-connection-line',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'Empowernet Hotline',
    [keys.DESCRIPTION]: '24/7 assistance line for victims of domestic violence',
    [keys.PHONE]: '8046126126',
    [keys.URL]: 'https://empowernetva.org',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'FeedMore Hunger Hotline',
    [keys.DESCRIPTION]: 'Find local emergency food resources',
    [keys.PHONE]: '8045212500',
    [keys.PHONE_EXTENSION]: '631',
    [keys.URL]: 'https://feedmore.org/agency-network/agency-locator',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'Second Presbyterian Church',
    [keys.PHONE]: '8046499148',
    [keys.URL]: 'https://www.2presrichmond.org/opportunities/',
    [keys.ADDRESS_1]: '5 North Fifth Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23219',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday 11:30 am - 12:45pm',
      },
    ],
  },
  {
    [keys.NAME]: "Richmond's First Baptist Church",
    [keys.URL]: 'https://www.fbcrichmond.org/service-missions/local/',
    [keys.ADDRESS_1]: '2709 Monument Ave',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Hot Meals',
        [keys.HOURS]: 'Wednesday 6pm - 7pm',
      },
      {
        [keys.DESCRIPTION]: 'Clothes closet',
        [keys.HOURS]: 'Monday and Wednesday 11am - 2pm',
      },
      {
        [keys.DESCRIPTION]: 'Showers / Food Pantry',
        [keys.HOURS]: 'Monday and Thursday 11am - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Commonwealth Catholic Charities of Virginia',
    [keys.PHONE]: '8042855900',
    [keys.URL]: 'https://www.cccofva.org',
    [keys.ADDRESS_1]: '1601 Rolling Hills Drive',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23229',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.DESCRIPTION]: 'housing/financial counseling; immigration services',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry - once per 30 days',
        [keys.HOURS]: 'Tuesday / Wednesday / Thursday 9am - 12pm',
      },
      {
        [keys.DESCRIPTION]: 'Baby Clothes - 4x per year',
        [keys.HOURS]: 'Tuesday / Wednesday / Thursday 10am - 12pm',
      },
    ],
  },
  {
    [keys.NAME]: "St. Peter's Catholic Church",
    [keys.PHONE]: '8046434315',
    [keys.URL]: 'https://stpeterchurch1834.org',
    [keys.ADDRESS_1]: '800 East Grace Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23218',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Hot Meals',
        [keys.HOURS]: 'Tuesday 11:45am - 12:30pm, Wednesday 4pm - 4:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Shower / Pantry',
        [keys.HOURS]: 'Tuesday 1pm - 3pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Oregon Hill Baptist Center',
    [keys.PHONE]: '8046481353',
    [keys.URL]: 'https://www.richmondbaptist.org/oregon-hill',
    [keys.ADDRESS_1]: '400 S. Pine Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Bagged Lunch',
        [keys.HOURS]: 'Thursday 10am - 11am',
      },
    ],
  },
  {
    [keys.NAME]: "St. Paul's Episcopal Church",
    [keys.PHONE]: '8046433589',
    [keys.URL]: 'https://www.stpaulsrva.org',
    [keys.ADDRESS_1]: '815 E Grace St',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23219',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Bagged Lunch',
        [keys.HOURS]: 'Thursday 10:30am - 12pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Centenary United Methodist',
    [keys.PHONE]: '8046488319',
    [keys.URL]: 'https://centumc.org',
    [keys.ADDRESS_1]: '411 E Grace ST',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23219',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Bagged Lunch',
        [keys.HOURS]: 'Friday 11am - 12:30pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Grace and Holy Trinity Episcopal Church',
    [keys.PHONE]: '8043595628',
    [keys.URL]: 'https://ghtc.org',
    [keys.ADDRESS_1]: '8 North Laurel Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'To Go Lunch',
        [keys.HOURS]: 'Friday 12pm - 1pm',
      },
    ],
  },
  {
    [keys.NAME]: "St. Mark's Episcopal Church",
    [keys.PHONE]: '8043584771',
    [keys.URL]: 'https://www.stmarksrva.org',
    [keys.ADDRESS_1]: '520 North Arthur Ashe Boulevard',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: '2nd and 4th Saturdays of the month, 9am - 10:30am',
      },
    ],
  },
  {
    [keys.NAME]: "Shepherd's Way Relief Center",
    [keys.PHONE]: '8045627490',
    [keys.URL]: 'https://www.ourshepherdsway.org',
    [keys.ADDRESS_1]: '400 East Main Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23219',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals, Food Pantry, Clothes, Toiletries',
        [keys.HOURS]: 'Mon / Tue / Wed: 9am - 10:30am. Sat: 12pm - 1pm. Sun: 8:30am - 9:30am',
      },
    ],
  },
  {
    [keys.NAME]: 'Bon Air Baptist Church',
    [keys.PHONE]: '8042721475',
    [keys.URL]: 'https://bonairbaptist.org',
    [keys.ADDRESS_1]: '2531 Buford Road',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23235',
    [keys.DATE_CHECKED]: '2021-10-03',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Drive thru food pantry',
        [keys.HOURS]: 'Wednesday 3 - 4:30pm',
      },
    ],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'The Daily Planet',
    [keys.DESCRIPTION]: 'Mental Health. in/out-patient substance abuse services. '
      + 'Vision, medical, and dental. Call for intake appointments.',
    [keys.URL]: 'https://dailyplanetva.org/',
    [keys.PHONE]: '8047832505',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'CARITAS The Healing Place for Men',
    [keys.DESCRIPTION]: 'No cost residential recovery program. Call for intake.',
    [keys.URL]: 'https://www.caritasva.org/get-help/get-sober',
    [keys.PHONE]: '8042301184',
    [keys.ADDRESS_1]: '700 Dinwiddie Avenue',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23224',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'CARITAS The Healing Place for Women',
    [keys.DESCRIPTION]: 'No cost residential recovery program. Call for intake.',
    [keys.URL]: 'https://www.caritasva.org/get-help/get-sober',
    [keys.PHONE]: '8044183049',
    [keys.ADDRESS_1]: '2220 Stockton Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23224',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'Richmond Behavioral Health Authority',
    [keys.DESCRIPTION]: '24/7 crisis intervention services.',
    [keys.URL]: 'https://www.rbha.org',
    [keys.PHONE]: '8048194100',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'OAR of Richmond',
    [keys.DESCRIPTION]: 'Re-entry services for adults post-incarceration',
    [keys.URL]: 'https://www.oarric.org',
    [keys.PHONE]: '8046432746',
    [keys.ADDRESS_1]: '3111 W Clay Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23230',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'REAL LIFE',
    [keys.DESCRIPTION]: 'Services for people impacted by incarceration, homelessness, or substance use disorder',
    [keys.URL]: 'https://reallifeprogram.org',
    [keys.PHONE]: '8043223311',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'RVA Light',
    [keys.DESCRIPTION]: 'Coffee. Safe place to sit indoors. Connect with local resources',
    [keys.URL]: 'https://www.rvalight.com',
    [keys.PHONE]: '8044477087',
    [keys.ADDRESS_1]: '504 West Broad Street',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'Housing Resource Line',
    [keys.DESCRIPTION]: 'Connect to programs and services to help with housing',
    [keys.URL]: 'https://pharva.com/housing-hotline',
    [keys.PHONE]: '8044225061',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'Warm Line',
    [keys.DESCRIPTION]: 'Peer-to-peer mental health support',
    [keys.URL]: 'https://mhav.org/support/warm-line',
    [keys.PHONE]: '8664006428',
    [keys.COUNTRY_CODE]: '1',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
];

module.exports = data;
