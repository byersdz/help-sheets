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
    [keys.NAME]: 'Greater Pittsburgh Community Food Bank',
    [keys.PHONE]: '4124603663',
    [keys.PHONE_EXTENSION]: '655',
    [keys.URL]: 'https://pittsburghfoodbank.org/find-food/get-help',
    [keys.DATE_CHECKED]: '2022-07-20',
    [keys.DESCRIPTION]: 'Find local food resources',
  },
  {
    [keys.NAME]: 'Jubilee Soup Kitchen',
    [keys.PHONE]: '4122615417',
    [keys.URL]: 'https://www.jubileesoupkitchen.com',
    [keys.ADDRESS_1]: '2005 Wyandotte St.',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15219',
    [keys.DATE_CHECKED]: '2022-07-19',
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
    [keys.DATE_CHECKED]: '2022-07-19',
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
  {
    [keys.NAME]: 'Shiloh Community Missionary Baptist Church',
    [keys.PHONE]: '4124418710',
    [keys.URL]: 'https://www.scmbcpgh.org/',
    [keys.ADDRESS_1]: '6940 Frankstown Avenue',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15208',
    [keys.DATE_CHECKED]: '2022-07-19',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Tues / Thur noon - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Rainbow Kitchen',
    [keys.PHONE]: '4124641892',
    [keys.URL]: 'https://www.rainbowkitchen.org/what-we-do/anti-hunger-program-areas',
    [keys.ADDRESS_1]: '135 East 9th Avenue',
    [keys.CITY]: 'Homestead',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15120',
    [keys.DATE_CHECKED]: '2022-07-19',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Mon - Fri: 9:30am - 10:30am',
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
    [keys.DATE_CHECKED]: '2022-07-19',
  },
  {
    [keys.NAME]: "Pleasant Valley Men's Shelter",
    [keys.PHONE]: '4123214272',
    [keys.URL]: 'http://ncmin.org/pleasant-valley-mens-shelter',
    [keys.ADDRESS_1]: '1601 Brighton Road',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15212',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2022-07-20',
  },
  {
    [keys.NAME]: 'East End Cooperative Ministry',
    [keys.PHONE]: '4123457135',
    [keys.URL]: 'https://www.eecm.org/housingandemployment',
    [keys.ADDRESS_1]: '6140 Station Street',
    [keys.CITY]: 'Pittsburgh',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '15206',
    [keys.DATE_CHECKED]: '2022-07-20',
    [keys.SERVES]: [serves.MEN],
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
