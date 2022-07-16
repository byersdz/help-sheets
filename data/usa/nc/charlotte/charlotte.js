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
    [keys.NAME]: 'Coordinated Entry',
    [keys.PHONE]: '7042849665',
    [keys.URL]: 'https://www.mecknc.gov/CommunitySupportServices/HomelessServices/Pages/CoordinatedAssessment.aspx',
    [keys.DESCRIPTION]: 'Your first step to connect to homeless services and homelessness '
      + 'prevention resources in Mecklenburg County.',
    [keys.DATE_CHECKED]: '2021-07-15',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Homeless Resource Center',
    [keys.URL]: 'https://www.mecknc.gov/CommunitySupportServices/HomelessServices/Pages/HomelessResourceCenter.aspx',
    [keys.ADDRESS_1]: '618 N. College Street',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28202',
    [keys.DATE_CHECKED]: '2021-07-15',
    [keys.DESCRIPTION]: 'Outreach, referral and case management services',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Mon / Thur / Fri 5pm - 6:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Saturday 8:30am - 10am',
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
