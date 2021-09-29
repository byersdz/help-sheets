const { keys, languageCodes } = require( '../../../constants' );
const baltimore = require( './baltimore/baltimore' );

const data = {};

data[keys.NAME] = 'Maryland';
data[keys.URL_NAME] = 'md';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [baltimore];

data[keys.EXCLUDE_LIST] = [
  '211-usa',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-md',
    [keys.NAME]: '2-1-1 Maryland',
    [keys.DESCRIPTION]: '24/7 phone line to help you find local resources you need.',
    [keys.PHONE]: '211',
    [keys.URL]: 'https://211md.org',
  },
];

module.exports = data;
