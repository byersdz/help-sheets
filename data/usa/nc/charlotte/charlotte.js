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
  {
    [keys.NAME]: 'Roof Above Day Services Center',
    [keys.URL]: 'https://www.roofabove.org/get-help',
    [keys.ADDRESS_1]: '945 N College St',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '282026',
    [keys.DATE_CHECKED]: '2021-07-16',
    [keys.DESCRIPTION]: 'Homeless resources, showers, laundry, restrooms',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Every day 11:15am - 12:15pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Mission City Church',
    [keys.URL]: 'https://themissioncity.org/missions',
    [keys.PHONE]: '7043926978',
    [keys.ADDRESS_1]: '608 Valleydale Road',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28214',
    [keys.DATE_CHECKED]: '2021-07-16',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'First and third Thursday of month, noon - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Loaves and Fishes',
    [keys.URL]: 'https://loavesandfishes.org/need-food-were-here-to-help',
    [keys.PHONE]: '7045234333',
    [keys.DATE_CHECKED]: '2021-07-16',
    [keys.DESCRIPTION]: 'Food Pantry, referral required',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'Crisis Assistance Ministry',
    [keys.DESCRIPTION]:
      'Emergency rent and utility assistance, clothing, household goods, furniture, beds, and appliances',
    [keys.URL]: 'https://www.crisisassistance.org/programs/basic-needs',
    [keys.PHONE]: '7043713001',
    [keys.DATE_CHECKED]: '2022-07-16',
  },
  {
    [keys.NAME]: 'DIGLIT at Charlotte Mecklenburg Library',
    [keys.DESCRIPTION]: 'Technology training and skills development courses',
    [keys.URL]: 'https://www.cmlibrary.org/digilit',
    [keys.DATE_CHECKED]: '2022-07-16',
  },
];

module.exports = data;
