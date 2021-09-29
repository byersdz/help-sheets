const { keys, languageCodes } = require( '../../../../constants' );

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
];

data[keys.RESOURCES] = [];

module.exports = data;
