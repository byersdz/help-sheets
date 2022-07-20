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
    [keys.NAME]: 'Jubilee Soup Kitchen',
    [keys.PHONE]: '4122615417',
    [keys.URL]: 'https://www.jubileesoupkitchen.com',
    [keys.ADDRESS_1]: '2005 Wyandotte St.',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15219',
    [keys.DATE_CHECKED]: '2021-07-19',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Everyday 11am - noon',
      },
    ],
  },
  {
    [keys.NAME]: 'East End Cooperative Ministry',
    [keys.PHONE]: '4123615549',
    [keys.URL]: 'https://www.eecm.org/communityfoodservices',
    [keys.ADDRESS_1]: '6140 Station Street',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15206',
    [keys.DATE_CHECKED]: '2021-07-19',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Mon - Fri: noon - 1:15pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Mon - Fri: 9:30am - 11:30am, 1pm - 3pm',
      },
    ],
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
