const { keys, languageCodes } = require( '../../../constants' );

const raleigh = require( './raleigh/raleigh' );

const data = {};

data[keys.NAME] = 'North Carolina';
data[keys.URL_NAME] = 'nc';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [raleigh];

data[keys.EXCLUDE_LIST] = [
  '211-usa',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-nc',
    [keys.NAME]: '2-1-1 North Carolina',
    [keys.DESCRIPTION]: '24/7 phone line to help you find local resources you need.',
    [keys.PHONE]: '211',
    [keys.URL]: 'https://nc211.org/',
    [keys.DATE_CHECKED]: '2021-11-11',
  },
];

module.exports = data;
