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
    [keys.NAME]: 'St. Paul Baptist',
    [keys.URL]: 'https://www.stpaulbaptist.church/about-us/community-outreach/23-about-us/outreach/170-food-pantry',
    [keys.PHONE]: '7043345309',
    [keys.ADDRESS_1]: '1401 Allen St',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28205',
    [keys.DATE_CHECKED]: '2021-07-16',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Second Wednesday of month, 8am - noon',
      },
    ],
  },
  {
    [keys.NAME]: 'Christ the King Church',
    [keys.URL]: 'https://ctkcharlotte.org/foodpantry',
    [keys.PHONE]: '7045870073',
    [keys.ADDRESS_1]: '13501 S Tryon Street',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28278',
    [keys.DATE_CHECKED]: '2021-07-16',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Wednesdays 5pm - 6pm. Closed 3rd Wednesday of month',
      },
    ],
  },
  {
    [keys.NAME]: 'Hope Street Food Pantry',
    [keys.URL]: 'https://hopestreetfoodpantry.com/get-help',
    [keys.PHONE]: '7045849073',
    [keys.ADDRESS_1]: '4100 Johnston Oehler Road',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28269',
    [keys.DATE_CHECKED]: '2021-07-16',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Thursday 4pm - 7pm, 2nd and 4th Tuesday 9:30am - 11:30am',
      },
    ],
  },
  {
    [keys.NAME]: 'St Martin de Porres',
    [keys.URL]: 'https://www.ourladyofconsolation.org',
    [keys.PHONE]: '7048178813',
    [keys.ADDRESS_1]: '1235 Badger Court',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28206',
    [keys.DATE_CHECKED]: '2021-07-18',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Tuesday 10am - noon, Fridays 11:30am - 1pm. Call before arriving for appointment',
      },
    ],
  },
  {
    [keys.NAME]: 'Reeder Memorial Baptist Churck',
    [keys.URL]: 'https://reederministries.org/missions-place/food-pantry',
    [keys.PHONE]: '7048029548',
    [keys.DESCRIPTION]: 'Application required, call for appointment',
    [keys.ADDRESS_1]: '3725 Beatties Ford Rd',
    [keys.CITY]: 'Charlotte',
    [keys.STATE]: 'NC',
    [keys.ZIP_CODE]: '28216',
    [keys.DATE_CHECKED]: '2021-07-18',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Mon / Tue / Thur 10am - 1pm, Thur 3pm - 5:30pm',
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
    [keys.NAME]: 'Carolinas Care Partnership',
    [keys.DESCRIPTION]: 'Connecting those at risk for and living with HIV with the resources and education they need',
    [keys.URL]: 'https://www.carolinascare.org',
    [keys.PHONE]: '7045312467',
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
