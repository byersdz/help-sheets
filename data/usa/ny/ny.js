const { keys, languageCodes } = require( '../../../constants' );

const newYorkCity = require(  './new-york-city/new-york-city');

const data = {};

data[keys.NAME] = 'New York';
data[keys.URL_NAME] = 'ny';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [newYorkCity];

data[keys.EXCLUDE_LIST] = [
  '211-usa',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-ny',
    [keys.NAME]: '2-1-1 New York',
    [keys.DESCRIPTION]: 'Call for help to find local resources you need.',
    [keys.PHONE]: '211',
    [keys.URL]: 'https://211nys.org',
    [keys.DATE_CHECKED]: '2022-07-21',
  },
];

module.exports = data;
