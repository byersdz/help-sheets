const { keys, languageCodes } = require( '../../../constants' );
const richmond = require( './richmond/richmond' );

const data = {};

data[keys.NAME] = 'Virginia';
data[keys.ID] = 'virginia';
data[keys.URL_NAME] = 'va';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [richmond];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: '2-1-1 Virginia',
    [keys.DESCRIPTION]: '24/7 phone line to help you find local resources you need.',
    [keys.PHONE]: '211',
    [keys.URL]: 'https://www.211virginia.org',
  },
];

module.exports = data;
