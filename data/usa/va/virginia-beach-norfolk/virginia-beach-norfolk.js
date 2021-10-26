const { keys, languageCodes } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Virginia Beach / Norfolk';
data[keys.URL_NAME] = 'virginia-beach-norfolk';
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
];

module.exports = data;
