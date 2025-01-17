const { keys, languageCodes, priorities } = require( '../../constants' );
const alabama = require( './al/al' );
const georgia = require( './ga/ga' );
const kentucky = require( './ky/ky' );
const maryland = require( './md/md' );
const massachussetts = require( './ma/ma' );
const newYork = require( './ny/ny' );
const northCarolina = require( './nc/nc' );
const ohio = require( './oh/oh' );
const pennsylvania = require( './pa/pa' );
const southCarolina = require( './sc/sc' );
const tennessee = require( './tn/tn' );
const virginia = require( './va/va' );

const data = {};

data[keys.NAME] = 'United States of America';
data[keys.URL_NAME] = 'usa';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.STATES] = [
  alabama,
  georgia,
  kentucky,
  maryland,
  massachussetts,
  newYork,
  northCarolina,
  ohio,
  pennsylvania,
  southCarolina,
  tennessee,
  virginia,
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-usa',
    [keys.NAME]: '211',
    [keys.DESCRIPTION]: 'Phone line to connect to local resources.',
    [keys.URL]: 'https://www.211.org',
    [keys.PHONE]: '211',
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.ID]: 'usa-shelter-directory',
    [keys.NAME]: 'Homeless Shelter Directory',
    [keys.DESCRIPTION]: 'A directory to find homeless shelters and free food resources near you.',
    [keys.URL]: 'https://www.HomelessShelterDirectory.org',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.ID]: 'food-pantries-org',
    [keys.NAME]: 'FoodPantries.org',
    [keys.DESCRIPTION]: 'A directory to find food pantries near you.',
    [keys.URL]: 'https://www.foodpantries.org/',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2022-07-18',
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'US Department of Veterans Affairs',
    [keys.DESCRIPTION]: '24/7 Homeless Call Center Hotline',
    [keys.PHONE]: '8774243838',
    [keys.COUNTRY_CODE]: '1',
    [keys.URL]: 'https://www.va.gov/homeless',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'National Suicide Prevention Lifeline',
    [keys.DESCRIPTION]: 'Provides 24/7, free and confidential support for people in distress',
    [keys.PHONE]: '8002738255',
    [keys.COUNTRY_CODE]: '1',
    [keys.URL]: 'https://SuicidePreventionLifeline.org',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'National Domestic Violence Hotline',
    [keys.DESCRIPTION]: '24-hour confidential service for survivors, victims and those affected by domestic violence',
    [keys.PHONE]: '8007997233',
    [keys.COUNTRY_CODE]: '1',
    [keys.URL]: 'https://www.TheHotline.org',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'National Runaway Safeline',
    [keys.DESCRIPTION]: '24/7 crisis line for runaway and homeless youth',
    [keys.PHONE]: '8007862929',
    [keys.COUNTRY_CODE]: '1',
    [keys.URL]: 'https://www.1800runaway.org',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'National Human Trafficking Hotline',
    [keys.DESCRIPTION]: 'Call if you or someone you know is a victim of human trafficking',
    [keys.PHONE]: '8883737888',
    [keys.COUNTRY_CODE]: '1',
    [keys.URL]: 'https://HumanTraffickingHotline.org',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.NAME]: 'Free Mobile Phone Service',
    [keys.DESCRIPTION]: "The FCC's Lifeline program provides free mobile phone service"
      + ' for qualifying low income individuals.',
    [keys.URL]: 'https://www.SafeLinkWireless.com',
    [keys.ALT_URL]: 'https://www.AssuranceWireless.com',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.ID]: 'find-treatment-gov',
    [keys.NAME]: 'FindTreatment.gov',
    [keys.DESCRIPTION]: 'Directory of providers treating substance use disorders, addiction, and mental illness',
    [keys.URL]: 'https://FindTreatment.gov/',
    [keys.PHONE]: '8006624357',
    [keys.COUNTRY_CODE]: '1',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
  {
    [keys.ID]: 'free-dental-us',
    [keys.NAME]: 'FreeDentalCare.us',
    [keys.DESCRIPTION]: 'Directory of free and low cost dental clinics',
    [keys.URL]: 'https://www.FreeDentalCare.us/',
    [keys.PRIORITY]: priorities.LOW,
    [keys.DATE_CHECKED]: '2021-10-03',
  },
];

module.exports = data;
