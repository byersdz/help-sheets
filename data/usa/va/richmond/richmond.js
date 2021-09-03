const { keys, languageCodes } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Richmond';
data[keys.ID] = 'richmond-va';
data[keys.URL_NAME] = 'richmond';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'The Homeless Connection Line',
    [keys.DESCRIPTION]: 'Call if you are currently homeless or are within 3 days of losing your housing',
    [keys.PHONE]: '8049720813',
    [keys.URL]: 'https://www.homewardva.org/homeless-connection-line',
  },
  {
    [keys.NAME]: 'Empowernet Hotline',
    [keys.DESCRIPTION]: '24/7 assistance line for victims of domestic violence',
    [keys.PHONE]: '8046126126',
    [keys.URL]: 'https://empowernetva.org',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'FeedMore Hunger Hotline',
    [keys.DESCRIPTION]: 'Find local emergency food resources',
    [keys.PHONE]: '8045212500',
    [keys.PHONE_EXTENSION]: '631',
    [keys.URL]: 'https://feedmore.org/agency-network/agency-locator',
  },
  {
    [keys.NAME]: "Richmond's First Baptist Church",
    [keys.URL]: 'https://www.fbcrichmond.org/service-missions/local/',
    [keys.ADDRESS_1]: '2709 Monument Ave',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
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
    [keys.DESCRIPTION]: 'housing/financial counseling; immigration services',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry - once per 30 days',
        [keys.HOURS]: 'Tuesday/Wednesday/Thursday 9am - 12pm',
      },
      {
        [keys.DESCRIPTION]: 'Baby Clothes - 4x per year',
        [keys.HOURS]: 'Tuesday/Wednesday/Thursday 10am - 12pm',
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
  },
  {
    [keys.NAME]: 'Richmond Behavioral Health Authority',
    [keys.DESCRIPTION]: '24/7 crisis intervention services.',
    [keys.URL]: 'https://www.rbha.org',
    [keys.PHONE]: '8048194100',
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
  },
  {
    [keys.NAME]: 'REAL LIFE',
    [keys.DESCRIPTION]: 'Services for people impacted by incarceration, homelessness, or substance use disorder',
    [keys.URL]: 'https://reallifeprogram.org',
    [keys.PHONE]: '8043223311',
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
  },
  {
    [keys.NAME]: 'Housing Resource Line',
    [keys.DESCRIPTION]: 'Connect to programs and services to help with housing',
    [keys.URL]: 'https://pharva.com/housing-hotline',
    [keys.PHONE]: '8044225061',
  },
  {
    [keys.NAME]: 'Warm Line',
    [keys.DESCRIPTION]: 'Peer-to-peer mental health support',
    [keys.URL]: 'https://mhav.org/support/warm-line',
    [keys.PHONE]: '18664006428',
  },
];

module.exports = data;
