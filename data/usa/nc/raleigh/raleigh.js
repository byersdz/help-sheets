const { keys, languageCodes } = require( '../../../../constants' );

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
    [keys.NAME]: 'Dorcas Ministries',
    [keys.PHONE]: '9194699861',
    [keys.PHONE_EXTENSION]: '203',
    [keys.URL]: 'https://dorcascary.org/services',
    [keys.ADDRESS_1]: '187 High House Road',
    [keys.CITY]: 'Cary',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27511',
    [keys.DATE_CHECKED]: '2022-06-07',
    [keys.DESCRIPTION]: 'Also provides financial assistance and career training',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Monday - Friday 9am - 3pm. Sat 10am - 2pm',
      },
      {
        [keys.DESCRIPTION]: 'Mobile Health Clinic',
        [keys.HOURS]: 'Tuesday 10am - 2pm, 1st and 3rd Sat 10am - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'First Baptist Church',
    [keys.PHONE]: '9198324485',
    [keys.URL]: 'https://fbcraleigh.org/serve/serve-locally',
    [keys.ADDRESS_1]: '99 N. Salisbury Street',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27604',
    [keys.DATE_CHECKED]: '2022-06-07',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Clothing Closet',
        [keys.HOURS]: 'Monday 10am - noon',
      },
    ],
  },
  {
    [keys.NAME]: 'Community Helpers Service Center',
    [keys.PHONE]: '9192664050',
    [keys.URL]: 'https://communityhelpersservicesc.com/our-work',
    [keys.ADDRESS_1]: '111-B N. First Avenue',
    [keys.CITY]: 'Knightdale',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27545',
    [keys.DATE_CHECKED]: '2022-06-07',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Emergency Food Pantry',
        [keys.HOURS]: 'Mon Tues Fri 10am - 1pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry last name A-K',
        [keys.HOURS]: 'Wed 10am - 1pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry last name L-Z',
        [keys.HOURS]: 'Thur 10am - 1pm',
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
  {
    [keys.NAME]: "Women's Center of Wake County",
    [keys.PHONE]: '9198293711',
    [keys.URL]: 'https://www.wcwc.org/get-help',
    [keys.ADDRESS_1]: '400 S. West St',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27601',
    [keys.DATE_CHECKED]: '2021-11-16',
    [keys.DESCRIPTION]: 'Provides meals, clothng, and services for homeless women',
  },
  {
    [keys.NAME]: 'White Oak Foundation',
    [keys.PHONE]: '9193626799',
    [keys.URL]: 'https://www.wofnc.org/food_pantry',
    [keys.ADDRESS_1]: '1624 White Oak Church Road',
    [keys.CITY]: 'Apex',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27523',
    [keys.DATE_CHECKED]: '2022-06-22',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Wednesday and Friday noon - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Catholic Parish Outreach',
    [keys.PHONE]: '9198730245',
    [keys.URL]: 'https://www.catholiccharitiesraleigh.org/cpo',
    [keys.ADDRESS_1]: '2013 Raleigh Blvd',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27604',
    [keys.DATE_CHECKED]: '2022-06-22',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Mon / Wed / Thur / Fri 8:30am - 11:30am',
      },
    ],
  },
  // {
  //   [keys.NAME]: 'Love Wins Community Engagement Center',
  //   [keys.PHONE]: '9192632907',
  //   [keys.URL]: 'https://LoveWinscCEC.org/',
  //   [keys.ADDRESS_1]: '622 Maywood Ave',
  //   [keys.CITY]: 'Raleigh',
  //   [keys.STATE]: 'NC',
  //   [keys.ZIP_CODE]: '27631',
  //   [keys.DATE_CHECKED]: '2021-11-16',
  //   [keys.DESCRIPTION]: 'Also provides food pantry and hygiene packs.',
  //   [keys.PROVIDES]: [
  //     {
  //       [keys.DESCRIPTION]: 'to go breakfast',
  //       [keys.HOURS]: 'Monday - Friday 9:15am - 10:15am',
  //     },
  //     {
  //       [keys.DESCRIPTION]: 'to go lunch',
  //       [keys.HOURS]: 'Monday - Friday 11:45am - 12:45pm',
  //     },
  //     {
  //       [keys.DESCRIPTION]: 'to go dinner',
  //       [keys.HOURS]: 'Tuesday - Thursday 5:45pm - 6:45pm',
  //     },
  //   ],
  // },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: 'Raleigh Rescue Mission',
    [keys.PHONE]: '9198289014',
    [keys.URL]: 'https://www.raleighrescue.org/our-solution/get-help-today',
    [keys.ADDRESS_1]: '314 E. Hargett St.',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27601',
    [keys.DATE_CHECKED]: '2022-06-09',
  },
  {
    [keys.NAME]: 'The Carying Place',
    [keys.DESCRIPTION]: 'Provides transitional housing for working homeless families',
    [keys.PHONE]: '9194621800',
    [keys.URL]: 'https://www.thecaryingplace.org/programs/transitional-housing',
    [keys.ADDRESS_1]: '491 James Jackson Ave',
    [keys.CITY]: 'Cary',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27513',
    [keys.DATE_CHECKED]: '2022-06-09',
  },
  {
    [keys.NAME]: 'Wrenn House',
    [keys.DESCRIPTION]: 'Homeless shelter for youth ages 10 - 17',
    [keys.PHONE]: '9198333312',
    [keys.URL]: 'https://www.havenhousenc.org/wrennhouse',
    [keys.ADDRESS_1]: '908 W. Morgan Street',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27603',
    [keys.DATE_CHECKED]: '2022-06-22',
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
