const { keys, languageCodes, priorities } = require( '../../../constants' );
const richmond = require( './richmond/richmond' );

const data = {};

data[keys.NAME] = 'Virginia';
data[keys.URL_NAME] = 'va';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [richmond];

data[keys.EXCLUDE_LIST] = [
  '211-usa',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-va',
    [keys.NAME]: '2-1-1 Virginia',
    [keys.DESCRIPTION]: '24/7 phone line to help you find local resources you need.',
    [keys.PHONE]: '211',
    [keys.URL]: 'https://www.211virginia.org',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'Virginia Veteran and Family Support',
    [keys.DESCRIPTION]: 'Information/referrals to resources for homeless veterans in Virginia; '
      + 'Care/Health/PTSD services',
    [keys.PHONE]: '18772851299',
    [keys.URL]: 'https://www.dvs.virginia.gov/virginia-veteran-and-family-support-2',
    [keys.PRIORITY]: priorities.LOW,
  },
];

module.exports = data;
