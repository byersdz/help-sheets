const { keys, languageCodes } = require( '../../../constants' );
const philadelphia = require( './philadelphia/philadelphia' );
const pittsburgh = require( './pittsburgh/pittsburgh' );

const data = {};

data[keys.NAME] = 'Pennsylvania';
data[keys.URL_NAME] = 'pa';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [philadelphia, pittsburgh];

data[keys.EXCLUDE_LIST] = [
  '211-usa',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-pa',
    [keys.NAME]: '2-1-1 Pennsylvania',
    [keys.DESCRIPTION]: '24/7 phone line to help you find local resources you need.',
    [keys.PHONE]: '211',
    [keys.URL]: 'https://www.pa211.org',
    [keys.DATE_CHECKED]: '2021-10-04',
  },
];

module.exports = data;
