const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Baltimore';
data[keys.URL_NAME] = 'baltimore';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Baltimore City Shelter Hotline',
    [keys.DESCRIPTION]: 'Call to connect with an emergency shelter for the night. Open 9:30am - 9pm M-F',
    [keys.PHONE]: '4439849540',
    [keys.URL]: 'https://homeless.baltimorecity.gov/get-help-now',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Beans and Bread',
    [keys.PHONE]: '4107321892',
    [keys.URL]: 'https://www.VincentBaltimore.org/what-we-do/homelessness/beans-and-bread',
    [keys.ADDRESS_1]: '400 S. Bond Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21231',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Monday - Friday 8:30am - 9:30am',
      },
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Saturday, last Sunday of month 11:30am - 1:30pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Fransiscan Center',
    [keys.PHONE]: '4104675340',
    [keys.URL]: 'https://fcbmore.org',
    [keys.DESCRIPTION]: 'Also provides mens proffesional attire for job interviews and a food pantry.',
    [keys.ADDRESS_1]: '101 W. 23rd Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21218',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Friday 10am - 1pm',
      },
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Tuesday and Wednesday 5:30pm - 7pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Our Daily Bread',
    [keys.PHONE]: '6676003400',
    [keys.URL]: 'https://www.catholiccharities-md.org/services/our-daily-bread-hot-meal-program',
    [keys.ADDRESS_1]: '725 Fallsway',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Monday - Friday 7:45am - 8:15am',
      },
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Every day 10:30am - 12:30pm',
      },
    ],
  },
  {
    [keys.NAME]: "Paul's Place",
    [keys.PHONE]: '4106250775',
    [keys.URL]: 'https://PaulsPlaceOutreach.org/services/support-services',
    [keys.DESCRIPTION]: 'Also provides laundry service and clothing marketplace',
    [keys.ADDRESS_1]: '1118 Ward Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21230',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Hot Lunch',
        [keys.HOURS]: 'M-F 11am - 12:30pm',
      },
      {
        [keys.DESCRIPTION]: 'Emergency Food Pantry',
        [keys.HOURS]: 'M-F 8am - 11am',
      },
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'M-F 8am - 10am, 12:45pm - 2pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Manna House',
    [keys.PHONE]: '4108893001',
    [keys.URL]: 'https://MannaHouseInc.org/',
    [keys.ADDRESS_1]: '435 East 25th Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21218',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Every day 8am - 10:15am',
      },
    ],
  },
  {
    [keys.NAME]: 'Generosity Global',
    [keys.URL]: 'https://GenerosityGlobal.org/selfless-saturday',
    [keys.ADDRESS_1]: '407 E Saratoga Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Hot Lunch, Clothing Closet',
        [keys.HOURS]: 'Second Saturday of month: 11am - noon',
      },
    ],
  },
  {
    [keys.NAME]: 'Generosity Shower',
    [keys.URL]: 'https://GenerosityGlobal.org/generosity-shower',
    [keys.ADDRESS_1]: '450 N Front Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'M-F: 9am - 1pm',
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: 'Helping Up Mission',
    [keys.PHONE]: '4106757500',
    [keys.PHONE_EXTENSION]: '1196',
    [keys.URL]: 'https://HelpingUpMission.org/get-help',
    [keys.ADDRESS_1]: '1029 E Baltimore St',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: 'Baltimore Rescue Mission',
    [keys.PHONE]: '4103422533',
    [keys.URL]: 'https://BaltimoreRescueMission.org',
    [keys.ADDRESS_1]: '4 N Central Ave',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: 'Baltimore Outreach Services',
    [keys.PHONE]: '4107521285',
    [keys.URL]: 'https://www.BaltimoreOutreach.org',
    [keys.ADDRESS_1]: '701 S. Charles Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21230',
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: 'Karis Home',
    [keys.PHONE]: '4103421323',
    [keys.URL]: 'https://BaltimoreRescueMission.org/ministries/karis-home',
    [keys.ADDRESS_1]: '1228 E Baltimore St',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: 'MCVET',
    [keys.PHONE]: '4105769626',
    [keys.URL]: 'https://www.mcvet.org/',
    [keys.ADDRESS_1]: '301 N. High Street',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.SERVES]: [serves.VETERANS],
  },
  {
    [keys.NAME]: 'Project PLASE',
    [keys.PHONE]: '4108371400',
    [keys.PHONE_EXTENSION]: '221',
    [keys.URL]: 'https://projectplase.org/need-housing',
    [keys.ADDRESS_1]: '1814 Maryland Avenue',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21201',
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: 'Weinberg Housing and Resource Center',
    [keys.PHONE]: '6676003230',
    [keys.URL]: 'https://www.CatholicCharities-md.org/services/weinberg-housing-resource-center',
    [keys.ADDRESS_1]: '620 Fallsway',
    [keys.CITY]: 'Baltimore',
    [keys.STATE]: 'MD',
    [keys.ZIP_CODE]: '21202',
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
];

data[keys.RESOURCES] = [];

module.exports = data;
