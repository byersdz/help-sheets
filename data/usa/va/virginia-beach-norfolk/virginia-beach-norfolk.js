const { keys, languageCodes } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Virginia Beach / Norfolk';
data[keys.URL_NAME] = 'virginia-beach-norfolk';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Virginia Beach Housing Crisis Hotline',
    [keys.DESCRIPTION]: 'The first step in connecting with homeless services and community resources.'
      + ' M-F 8am - 7pm',
    [keys.PHONE]: '7572275932',
    [keys.URL]:
      'https://www.vbgov.com/government/departments/housing-neighborhood-preservation/homelessness/Pages/default.aspx',
    [keys.DATE_CHECKED]: '2021-11-08',
  },
  {
    [keys.NAME]: 'Hampton Roads Housing Crisis Hotline',
    [keys.DESCRIPTION]: 'The first step in connecting with homeless services and community resources.'
      + ' M-F 8am - 7pm',
    [keys.PHONE]: '7575874202',
    [keys.URL]: 'https://www.theplanningcouncil.org/homeless-solutions/housing-crisis-hotline/',
    [keys.DATE_CHECKED]: '2021-11-08',
  },
  {
    [keys.NAME]: 'Samaritan House Domestic Violence Hotline',
    [keys.DESCRIPTION]: 'Housing and services for individuals, children and families experiencing domestic violence',
    [keys.PHONE]: '7574302120',
    [keys.URL]: 'https://SamaritanHouseVA.org',
    [keys.DATE_CHECKED]: '2021-11-11',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Housing Resource Center',
    [keys.PHONE]: '7573855167',
    [keys.URL]:
      // eslint-disable-next-line max-len
      'https://www.vbgov.com/government/departments/housing-neighborhood-preservation/homelessness/Pages/housing-resource-center.aspx',
    [keys.ADDRESS_1]: '104 N. Witchduck Road',
    [keys.CITY]: 'Virginia Beach',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23462',
    [keys.DATE_CHECKED]: '2021-11-08',
    [keys.DESCRIPTION]:
      'One-stop shop of services for families and individuals experiencing homelessness or a housing crisis.'
      + ' Showers, laundry, housing support, cafeteria, health care, and social services',
  },
  {
    [keys.NAME]: 'The Gathering at Scott Memorial UMC',
    [keys.PHONE]: '7574283720',
    [keys.URL]: 'https://www.TheGatheringAtScottMemorialUMC.com/fresh-food-wednesdays',
    [keys.ADDRESS_1]: '409 First Colonial Rd',
    [keys.CITY]: 'Virginia Beach',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23454',
    [keys.DATE_CHECKED]: '2021-11-08',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Wednesday 5pm - 6:30pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Judeo-Christian Outreach Center',
    [keys.PHONE]: '7574912846',
    [keys.URL]: 'https://jcoc.org/about-us/feeding-programs',
    [keys.ADDRESS_1]: '1053 Virginia Beach Blvd',
    [keys.CITY]: 'Virginia Beach',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23451',
    [keys.DATE_CHECKED]: '2021-11-08',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Community Dinner',
        [keys.HOURS]: 'M-F 5pm, Sat-Sun 2pm',
      },
      {
        [keys.DESCRIPTION]: 'Food Pantry',
        [keys.HOURS]: 'Tuesday and Saturday by appointment',
      },
    ],
  },
  {
    [keys.NAME]: 'PiN Ministry',
    [keys.PHONE]: '7579623567',
    [keys.URL]: 'https://www.pinministry.org/need',
    [keys.ADDRESS_1]: '1164 Millers Lane',
    [keys.ADDRESS_2]: 'Suite A',
    [keys.CITY]: 'Virginia Beach',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23451',
    [keys.DATE_CHECKED]: '2021-11-08',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Clothing, Showers, Laundry, Meal (Unhoused only)',
        [keys.HOURS]: 'Mon-Thurs 1pm - 4pm, Sat 11am - 2pm',
      },
      {
        [keys.DESCRIPTION]: 'Clothing for housed',
        [keys.HOURS]: 'Friday 10am - noon',
      },
    ],
  },
  {
    [keys.NAME]: "Potter's House",
    [keys.PHONE]: '7574287727',
    [keys.URL]: 'https://vbumc.org/potters-house',
    [keys.ADDRESS_1]: '1709 Pacific Avenue',
    [keys.CITY]: 'Virginia Beach',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23451',
    [keys.DATE_CHECKED]: '2021-11-08',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Bag Lunch, Food Pantry',
        [keys.HOURS]: 'Tuesday and Thursday 9:30am - 11am',
      },
    ],
  },
  {
    [keys.NAME]: 'Star of the Sea',
    [keys.PHONE]: '7574281244',
    [keys.URL]: 'https://www.StarOfTheSeaParish.com/social-ministry',
    [keys.ADDRESS_1]: '1404 Pacific Avenue',
    [keys.CITY]: 'Virginia Beach',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23451',
    [keys.DATE_CHECKED]: '2021-11-08',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Bag Lunch',
        [keys.HOURS]: 'Wednesday and Friday 9:30am - 11:30am',
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: 'Union Mission',
    [keys.PHONE]: '7576278686',
    [keys.URL]: 'https://www.UnionMissionMinistries.org/get-help',
    [keys.ADDRESS_1]: '5100 E. Virginia Beach Blvd',
    [keys.CITY]: 'Norfolk',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23502',
    [keys.DATE_CHECKED]: '2021-11-11',
    [keys.DESCRIPTION]: 'Men: ext. 200, Women: ext 354, Women w/ children: ext. 351',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'Step Up inc.',
    [keys.DESCRIPTION]: 'Life skills and employment assistance for ex-offenders',
    [keys.URL]: 'http://stepupincorporated.org/index.html',
    [keys.PHONE]: '7575883151',
    [keys.DATE_CHECKED]: '2021-11-11',
    [keys.ADDRESS_1]: '5900 East Va. Beach Blvd',
    [keys.ADDRESS_2]: 'Suite 102',
    [keys.CITY]: 'Norfolk',
    [keys.STATE]: 'VA',
    [keys.ZIP_CODE]: '23502',
  },
  {
    [keys.NAME]: 'Vets House',
    [keys.DESCRIPTION]: '12 month program providing vets with transitional housing and job assistance',
    [keys.URL]: 'http://www.VetsHouseInc.org/',
    [keys.PHONE]: '7577248614',
    [keys.DATE_CHECKED]: '2021-11-11',
  },
];

module.exports = data;
