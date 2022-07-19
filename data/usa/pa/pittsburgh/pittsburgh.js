const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Pittsburgh';
data[keys.URL_NAME] = 'pittsburgh';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Allegheny Link',
    [keys.PHONE]: '8667302368',
    [keys.URL]: 'https://www.alleghenycounty.us/Human-Services/About/Contact/Allegheny-Link.aspx',
    [keys.DATE_CHECKED]: '2022-07-19',
    [keys.DESCRIPTION]:
      'Assistance finding emergency shelters, rental assistance, and longer term homeless programs. M-F 8am-7pm',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Sunday Breakfast Rescue Mission',
    [keys.PHONE]: '2159226400',
    [keys.PHONE_EXTENSION]: '1050',
    [keys.URL]: 'https://sundaybreakfast.org/get-help-now',
    [keys.ADDRESS_1]: '302 N. 13th Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19107',
    [keys.DATE_CHECKED]: '2021-10-04',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Everyday, arrive before 7am',
      },
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Everyday, arrive before noon',
      },
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Everyday, arrive before 6:30pm',
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: 'Sunday Breakfast Rescue Mission',
    [keys.DESCRIPTION]: 'Arrive before 7pm for a bed',
    [keys.PHONE]: '2159226400',
    [keys.PHONE_EXTENSION]: '1050',
    [keys.URL]: 'https://sundaybreakfast.org/get-help-now',
    [keys.ADDRESS_1]: '302 N. 13th Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19107',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2021-10-04',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'Philadelphia Eviction Prevention Project',
    [keys.DESCRIPTION]: 'Get help if you are facing eviction',
    [keys.PHONE]: '2674432500',
    [keys.URL]: 'http://www.phillytenant.org/',
    [keys.DATE_CHECKED]: '2021-10-04',
  },
];

module.exports = data;
