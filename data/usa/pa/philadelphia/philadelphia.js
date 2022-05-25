const { keys, languageCodes, serves } = require( '../../../../constants' );

const data = {};

data[keys.NAME] = 'Philadelphia';
data[keys.URL_NAME] = 'philadelphia';
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  'usa-shelter-directory',
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: 'Homelessness Prevention Hotline',
    [keys.PHONE]: '2156867177',
    [keys.URL]: 'https://www.phila.gov/departments/office-of-homeless-services',
    [keys.DATE_CHECKED]: '2021-10-04',
  },
  {
    [keys.NAME]: 'Philadelphia Domestic Violence Hotline',
    [keys.DESCRIPTION]: 'Crisis intervention, safety planning, resources and referrals',
    [keys.PHONE]: '8667233014',
    [keys.COUNTRY_CODE]: '1',
    [keys.URL]: 'https://www.WomenAgainstAbuse.org/get-help/pdvh',
    [keys.DATE_CHECKED]: '2021-10-04',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: 'Sunday Breakfast Rescue Mission',
    [keys.PHONE]: '2159226400',
    [keys.PHONE_EXTENSION]: '1050',
    [keys.URL]: 'https://sundaybreakfast.org/get-help-now',
    [keys.ADDRESS_1]: '302 N. 13th Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19107',
    [keys.DATE_CHECKED]: '2021-10-04',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Breakfast',
        [keys.HOURS]: 'Everyday, arrive before 7am',
      },
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Everyday, arrive before noon',
      },
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Everyday, arrive before 6:30pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Old Pine Community Center',
    [keys.PHONE]: '2156272493',
    [keys.URL]: 'https://oldpinecommunitycenter.org/programs-services',
    [keys.ADDRESS_1]: '401 Lombard Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19147',
    [keys.DATE_CHECKED]: '2021-10-05',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Brown Bag Breakfast and Lunch',
        [keys.HOURS]: 'Monday - Friday 7am',
      },
    ],
  },
  {
    [keys.NAME]: 'St. Francis Inn',
    [keys.PHONE]: '2154235845',
    [keys.URL]: 'http://StFrancisInn.org',
    [keys.ADDRESS_1]: '2441 Kensington Ave',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19125',
    [keys.DATE_CHECKED]: '2021-10-05',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Takeaway Breakfast',
        [keys.HOURS]: 'Tuesday, Wednesday, Thursday 10am - 11am',
      },
      {
        [keys.DESCRIPTION]: 'Sit down meal',
        [keys.HOURS]: 'Monday-Thursday 4:30pm - 6pm, Friday-Sunday 11:30am - 1pm',
      },
    ],
  },
  {
    [keys.NAME]: "Marie's Closet",
    [keys.PHONE]: '2156341510',
    [keys.URL]: 'http://StFrancisInn.org',
    [keys.ADDRESS_1]: '2439 Kensington Ave',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19125',
    [keys.DATE_CHECKED]: '2021-10-05',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Clothing Closet',
        [keys.HOURS]: 'Wednesday and Thursday 9:30am - 11:30am',
      },
    ],
  },
  {
    [keys.NAME]: 'Hub of Hope',
    [keys.PHONE]: '2153095225',
    [keys.URL]: 'https://www.projecthome.org/hub-hope',
    [keys.DESCRIPTION]: 'Provides case management and peer support',
    [keys.ADDRESS_1]: '1400 Arch Street',
    [keys.ADDRESS_2]: 'Sub Concourse Level, Municipal Services Building',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19102',
    [keys.DATE_CHECKED]: '2021-10-23',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Coffee',
        [keys.HOURS]: 'M - F 8am - noon',
      },
      {
        [keys.DESCRIPTION]: 'Showers',
        [keys.HOURS]: 'M - F 8am - 3:15pm',
      },
      {
        [keys.DESCRIPTION]: 'Laundry',
        [keys.HOURS]: 'M - F 8am - 2:15pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Chosen 300',
    [keys.PHONE]: '2157659807',
    [keys.URL]: 'http://chosen300.org',
    [keys.ADDRESS_1]: '1116 Spring Garden Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19123',
    [keys.DATE_CHECKED]: '2021-10-23',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'M/W/F: 6pm, Sat: 5pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Broad St. Ministry',
    [keys.PHONE]: '2157354847',
    [keys.URL]: 'https://www.BroadStreetMinistry.org/radical_hospitality-detail/social-services',
    [keys.ADDRESS_1]: '315 South Broad street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19107',
    [keys.DATE_CHECKED]: '2021-10-25',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Friday 11:30am - 1pm',
      },
      {
        [keys.DESCRIPTION]: 'Mail',
        [keys.HOURS]: 'Monday - Friday 11:30am - 3pm',
      },
      {
        [keys.DESCRIPTION]: 'Clothing Closet',
        [keys.HOURS]: 'Tuesdays and Thursdays 11:30am - 1pm',
      },
    ],
  },
  {
    [keys.NAME]: "St. John's Hospice",
    [keys.PHONE]: '2155637763',
    [keys.URL]: 'https://SaintJohnsHospice.org/all-programs',
    [keys.ADDRESS_1]: '1221 Race St',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19107',
    [keys.DATE_CHECKED]: '2021-10-25',
    [keys.DESCRIPTION]: 'Also provides showers and mail service',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Friday noon - 1pm',
      },
      {
        [keys.DESCRIPTION]: 'Dinner',
        [keys.HOURS]: 'Friday and Monday 4pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Church of the Advocate',
    [keys.PHONE]: '2159788000',
    [keys.URL]: 'http://www.ChurchOfTheAdvocate.org/hours-and-services.html',
    [keys.ADDRESS_1]: '1801 West Diamond Street',
    [keys.ADDRESS_2]: 'Main entrance: 2121 Gratz Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19121',
    [keys.DATE_CHECKED]: '2021-10-25',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Friday noon - 1pm',
      },
    ],
  },
  {
    [keys.NAME]: 'Kensington Meal Site',
    [keys.URL]: 'https://www.StepUpPhilly.org/meals',
    [keys.ADDRESS_1]: '1829 E Clearfield Street',
    [keys.ADDRESS_2]: '(Corner of Clearfield + Ruth Streets)',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19134',
    [keys.DATE_CHECKED]: '2021-10-25',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday - Friday 12:30pm - 3pm',
      },
    ],
  },
  {
    [keys.NAME]: 'South Philly Meal Site',
    [keys.URL]: 'https://www.StepUpPhilly.org/meals',
    [keys.ADDRESS_1]: '2230 S. 8th Street',
    [keys.ADDRESS_2]: '(Francis Scott Key School, 8th and Wolf Streets)',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19148',
    [keys.DATE_CHECKED]: '2021-10-25',
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: 'Lunch',
        [keys.HOURS]: 'Monday Tuesdays Wednesdays Fridays 11:30am - 2pm',
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
  {
    [keys.NAME]: 'Appletree Family Central Intake Center',
    [keys.DESCRIPTION]: 'Intake Mon-Fri 7am to 5pm',
    [keys.PHONE]: '2156867150',
    [keys.ADDRESS_1]: '1430 Cherry St',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19102',
    [keys.DATE_CHECKED]: '2021-10-04',
  },
  {
    [keys.NAME]: 'Roosevelt Darby Center',
    [keys.DESCRIPTION]: 'Intake Mon-Fri 7am to 5pm',
    [keys.PHONE]: '2156853700',
    [keys.ADDRESS_1]: '802 N Broad St',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19130',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2021-10-04',
  },
  {
    [keys.NAME]: 'Station House',
    [keys.DESCRIPTION]: 'Intake 5pm - 7am weekdays, all day weekends and holidays',
    [keys.PHONE]: '2152259230',
    [keys.ADDRESS_1]: '2601 N. Broad Street',
    [keys.ADDRESS_2]: 'Rear Entrance',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19132',
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: '2021-10-05',
  },
  {
    [keys.NAME]: 'Gaudenzia’s House of Passage',
    [keys.DESCRIPTION]: 'Intake 5pm - 7am weekdays, all day weekends and holidays',
    [keys.PHONE]: '2677137778',
    [keys.ADDRESS_1]: '111 N. 49th St.',
    [keys.ADDRESS_2]: 'at the corner of 48th St. and Haverford Ave., entrance on 48th Street',
    [keys.CITY]: 'Philadelphia',
    [keys.STATE]: 'PA',
    [keys.ZIP_CODE]: '19139',
    [keys.SERVES]: [serves.WOMEN],
    [keys.DATE_CHECKED]: '2021-10-05',
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
