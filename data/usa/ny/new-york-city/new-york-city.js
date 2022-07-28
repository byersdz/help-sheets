const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'New York City';
data[keys.URL_NAME] = 'new-york-city';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Crisis Intervention Hotline',
    [keys.PHONE]: '8883582384',
    [keys.URL]: 'https://www.coalitionforthehomeless.org/',
    [keys.DATE_CHECKED]: '2022-07-27',
    [keys.DESCRIPTION]:
      'Call if you have questions about accessing shelter or other services, or if you have been denied shelter',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Greater Pittsburgh Community Food Bank',
    [keys.PHONE]: '4124603663',
    [keys.PHONE_EXTENSION]: '655',
    [keys.URL]: 'https://pittsburghfoodbank.org/find-food/get-help',
    [keys.DATE_CHECKED]: '2022-07-20',
    [keys.DESCRIPTION]: 'Find local food resources',
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: 'Light of Life Rescue Mission',
    [keys.DESCRIPTION]: 'Also serves breakfast and dinner',
    [keys.PHONE]: '4122586100',
    [keys.URL]: 'https://www.lightoflife.org',
    [keys.ADDRESS_1]: '913 Western Ave.',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15233',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2022-07-19',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'Healthcare for the Homeless',
    [keys.DESCRIPTION]: 'Provides healthcare and social services',
    [keys.PHONE]: '4122444775',
    [keys.URL]: 'https://pchspitt.org/healthcare-services/health-care-for-the-homeless/',
    [keys.DATE_CHECKED]: '2022-07-21',
  },
];

module.exports = data;
