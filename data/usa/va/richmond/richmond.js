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
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'The Daily Planet',
    [keys.DESCRIPTION]: 'Mental Health. in/out-patient substance abuse services. '
      + 'Vision, medical, and dental. Call for intake appointments.',
    [keys.URL]: 'https://dailyplanetva.org/',
    [keys.PHONE]: '8047832505',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Richmond's First Baptist Church",
    [keys.URL]: 'https://www.fbcrichmond.org/',
    [keys.ADDRESS_1]: '2709 Monument Ave',
    [keys.CITY]: 'Richmond',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23220',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Fellowship and hot meal',
        [keys.HOURS]: 'Thursdays 6pm - 8:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Clothes closet',
        [keys.HOURS]: 'M/W 10am - 12pm',
      },
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'M/W/Sat 10am - 12pm',
      },
    ],
  },
];

module.exports = data;
