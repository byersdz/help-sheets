const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Raleigh';
data[keys.URL_NAME] = 'raleigh';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Homeless Access Hub',
    [keys.PHONE]: '9194430096',
    [keys.URL]: 'https://PartnershipWake.org/access-hub/',
    [keys.DESCRIPTION]: 'Helpline for our neighbors experiencing homelessness or about to become homeless. '
      + 'Provides referals to emergency shelters. M-F 8am - 5pm',
    [keys.DATE_CHECKED]: '2021-11-15',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Oak City Cares',
    [keys.PHONE]: '9843449599',
    [keys.URL]: 'https://OakCityCares.org/',
    [keys.ADDRESS_1]: '1430 South Wilmington Street',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27603',
    [keys.DATE_CHECKED]: '2021-11-15',
    [keys.DESCRIPTION]: 'Provides coordinated care for the homeless',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Showers and Laundry',
        [keys.HOURS]: 'Monday - Friday 9am - 5pm',
      },
      {
        [keys.DESCRIPTION]: 'Meals',
        [keys.HOURS]: 'Saturday and Sunday: 9am, 12:30pm, 3pm',
      },
    ],
  },
  {
    [keys.NAME]: 'A Place at the Table Cafe',
    [keys.PHONE]: '9193078914',
    [keys.URL]: 'https://TableRaleigh.org',
    [keys.ADDRESS_1]: '300 W. Hargett St',
    [keys.ADDRESS_2]: 'Suite 50',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27601',
    [keys.DATE_CHECKED]: '2021-11-15',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Pay what you can meals',
        [keys.HOURS]: 'Tuesday - Sunday 8am - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: "Shepherd's Table Soup Kitchen",
    [keys.PHONE]: '9198312010',
    [keys.URL]: 'http://www.shepherds-table.org/',
    [keys.ADDRESS_1]: '121 Hillsborough St.',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27603',
    [keys.DATE_CHECKED]: '2021-11-15',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Friday 11am - noon',
      },
    ],
  },
  {
    [keys.NAME]: 'Salvation Army',
    [keys.PHONE]: '9198346733',
    // eslint-disable-next-line max-len
    [keys.URL]: 'https://www.salvationarmycarolinas.org/wakecounty/programs/social-ministries/soup-line/soup-line-assistance',
    [keys.ADDRESS_1]: '1863 Capital Blvd',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27601',
    [keys.DATE_CHECKED]: '2021-11-15',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Monday - Friday 5pm - 6pm',
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
