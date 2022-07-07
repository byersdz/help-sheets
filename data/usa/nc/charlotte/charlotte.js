const { keys, languageCodes } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Charlotte';
data[keys.URL_NAME] = 'charlotte';
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
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'UNC Health Care Crisis and Assessment Services',
    [keys.DESCRIPTION]: 'Emergency psychiatric evaluations for individuals experiencing'
      + ' acute mental health and/or substance abuse crises',
    [keys.PHONE]: '9849744800',
    [keys.URL]:
      // eslint-disable-next-line max-len
      'https://www.uncmedicalcenter.org/uncmc/hospitals-locations/profile/unc-health-care-crisis-and-assessment-services-at-wakebrook',
    [keys.ADDRESS_1]: '107 Sunnybrook Road',
    [keys.CITY]: 'Raleigh',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '27610',
    [keys.DATE_CHECKED]: '2022-06-27',
  },
];

module.exports = data;
