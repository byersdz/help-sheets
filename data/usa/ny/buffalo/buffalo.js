const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Buffalo";
data[keys.URL_NAME] = "buffalo";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
  "211-ny",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "211 WNY",
    [keys.PHONE]: "211",
    [keys.URL]: "http://www.211wny.org",
    [keys.DATE_CHECKED]: "2022-09-07",
    [keys.DESCRIPTION]:
      "Call for referrals for homeless shelters, food, health, employment services, and more.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "South Buffalo Community Table",
    [keys.URL]: "https://www.sbcommunitytable.com",
    [keys.PHONE]: "7168223193",
    [keys.DATE_CHECKED]: "2022-10-03",
    [keys.ADDRESS_1]: "187 Southside Pkwy",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14220",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon - Thur 4pm - 5pm",
      },
    ],
  },
  {
    [keys.NAME]: "Matt Urban Center",
    [keys.URL]: "http://urbanctr.org",
    [keys.PHONE]: "7168937222",
    [keys.DATE_CHECKED]: "2022-10-03",
    [keys.ADDRESS_1]: "385 Paderewski Drive",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14212",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon - Fri 2pm - 5pm",
      },
    ],
  },
  {
    [keys.NAME]: "The Genesis Center",
    [keys.URL]: "https://www.thegenesiscenter.us",
    [keys.PHONE]: "7168221901",
    [keys.DATE_CHECKED]: "2022-10-03",
    [keys.ADDRESS_1]: "2161 Seneca Street",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14210",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon/Wed/Fri 4pm - 6pm",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Sat 10:30am - 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Thurs 9:30am - 12:30pm, 5pm - 6pm",
      },
    ],
  },
  {
    [keys.NAME]: "Big Big Table",
    [keys.URL]: "https://www.bigbigtable.org",
    [keys.PHONE]: "7163818954",
    [keys.DATE_CHECKED]: "2022-10-03",
    [keys.ADDRESS_1]: "272 Hudson Street",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14201",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Pay as you can lunch",
        [keys.HOURS]: "Mon-Fri 11am - 2:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Friends of Night People",
    [keys.URL]: "https://friendsofnightpeople.com",
    [keys.PHONE]: "7168845375",
    [keys.DATE_CHECKED]: "2022-10-04",
    [keys.ADDRESS_1]: "394 Hudson Street",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14201",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 9am - 11am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every Day 5pm - 7pm",
      },
      {
        [keys.DESCRIPTION]: "Medical Care",
        [keys.HOURS]: "1st and 3rd Tues, 5pm - 7pm",
      },
    ],
  },
  {
    [keys.NAME]: "Gerard Place",
    [keys.URL]: "https://gerardplace.org/services/food-distribution",
    [keys.PHONE]: "7168979948",
    [keys.DATE_CHECKED]: "2022-10-16",
    [keys.ADDRESS_1]: "2515 Bailey Avenue",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14215",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon / Wed 3:30pm - 5:30pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon / Wed 3:30pm - 5:30pm, Fri 10am - 11:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Society of St. Vincent de Paul",
    [keys.URL]: "http://svdpwny.org/dining-room",
    [keys.PHONE]: "7168823360",
    [keys.PHONE_EXTENSION]: '5',
    [keys.DATE_CHECKED]: "2022-10-16",
    [keys.ADDRESS_1]: "1298 Main Street",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14209",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "M/T/W/F/Sa 11am - noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Buffalo City Mission",
    [keys.URL]: "https://www.buffalocitymission.org/what-we-do/get-help-now",
    [keys.PHONE]: "7168548181",
    [keys.PHONE_EXTENSION]: "432",
    [keys.ADDRESS_1]: "100 E. Tupper St",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14203",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-09-29",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "every day, 8:30am, 11:30am, 4pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tues / Thur noon - 3pm",
      },
    ],
  },
  {
    [keys.NAME]: "Cornerstone Manor",
    [keys.URL]: "https://www.buffalocitymission.org/what-we-do/get-help-now",
    [keys.PHONE]: "7168548181",
    [keys.PHONE_EXTENSION]: "111",
    [keys.ADDRESS_1]: "150 E North St",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14203",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
    [keys.DATE_CHECKED]: "2022-09-29",
  },
  {
    [keys.NAME]: "Little Portion Friary",
    [keys.URL]: "https://www.littleportionfriary.com",
    [keys.PHONE]: "7168825705",
    [keys.ADDRESS_1]: "1305 Main Street",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14209",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-09-29",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "NYC Well",
    [keys.DESCRIPTION]: "NYC Well is your connection to free, confidential mental health support.",
    [keys.PHONE]: "8886929355",
    [keys.URL]: "https://nycwell.cityofnewyork.us/en",
    [keys.DATE_CHECKED]: "2022-08-17",
  },
];

module.exports = data;
