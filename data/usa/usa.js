const { keys, languageCodes, priorities } = require( '../../constants' );
const maryland = require( './md/md' );
const virginia = require( './va/va' );

const data = {};

data[keys.NAME] = 'United States of America';
data[keys.URL_NAME] = 'usa';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.STATES] = [maryland, virginia];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: '211-usa',
    [keys.NAME]: '211',
    [keys.DESCRIPTION]: 'Phone line to connect to local resources.',
    [keys.URL]: 'https://www.211.org',
    [keys.PHONE]: '211',
  },
  {
    [keys.ID]: 'usa-shelter-directory',
    [keys.NAME]: 'Homeless Shelter Directory',
    [keys.DESCRIPTION]: 'A directory to find homeless shelters and free food resources near you.',
    [keys.URL]: 'https://www.HomelessShelterDirectory.org',
    [keys.PRIORITY]: priorities.LOW,
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: 'US Department of Veterans Affairs',
    [keys.DESCRIPTION]: '24/7 Homeless Call Center Hotline',
    [keys.PHONE]: '18774243838',
    [keys.URL]: 'https://www.va.gov/homeless',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.NAME]: 'National Suicide Prevention Lifeline',
    [keys.DESCRIPTION]: 'Provides 24/7, free and confidential support for people in distress',
    [keys.PHONE]: '18002738255',
    [keys.URL]: 'https://suicidepreventionlifeline.org',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.NAME]: 'National Domestic Violence Hotline',
    [keys.DESCRIPTION]: '24-hour confidential service for survivors, victims and those affected by domestic violence',
    [keys.PHONE]: '18007997233',
    [keys.URL]: 'https://www.thehotline.org',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.NAME]: 'National Runaway Safeline',
    [keys.DESCRIPTION]: '24/7 crisis line for runaway and homeless youth',
    [keys.PHONE]: '18007862929',
    [keys.URL]: 'https://www.1800runaway.org',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.NAME]: 'National Human Trafficking Hotline',
    [keys.DESCRIPTION]: 'Call if you or someone you know is a victim of human trafficking',
    [keys.PHONE]: '18883737888',
    [keys.URL]: 'https://humantraffickinghotline.org',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.NAME]: 'Free Mobile Phone Service',
    [keys.DESCRIPTION]: "The FCC's Lifeline program provides free mobile phone service"
      + ' for qualifying low income individuals.',
    [keys.URL]: 'https://www.safelinkwireless.com',
    [keys.ALT_URL]: 'https://www.assurancewireless.com',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.ID]: 'find-treatment-gov',
    [keys.NAME]: 'FindTreatment.gov',
    [keys.DESCRIPTION]: 'Directory of providers treating substance use disorders, addiction, and mental illness',
    [keys.URL]: 'https://FindTreatment.gov/',
    [keys.PHONE]: '18006624357',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.ID]: 'free-dental-us',
    [keys.NAME]: 'FreeDentalCare.us',
    [keys.DESCRIPTION]: 'Directory of free and low cost dental clinics',
    [keys.URL]: 'https://www.FreeDentalCare.us/',
    [keys.PRIORITY]: priorities.LOW,
  },
];

module.exports = data;
