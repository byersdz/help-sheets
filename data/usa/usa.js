const { keys, languageCodes, priorities } = require( '../../constants' );
const virginia = require( './va/va' );

const data = {};

data[keys.NAME] = 'United States of America';
data[keys.ID] = 'usa';
data[keys.URL_NAME] = 'usa';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.STATES] = [virginia];

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
    [keys.DESCRIPTION]: 'The Lifeline provides 24/7, free and confidential support for people in distress',
    [keys.PHONE]: '18002738255',
    [keys.URL]: 'https://suicidepreventionlifeline.org',
    [keys.PRIORITY]: priorities.LOW,
  },
  {
    [keys.NAME]: 'National Human Trafficking Hotline',
    [keys.DESCRIPTION]: 'Call if you or someone you know is a victim of human trafficking',
    [keys.PHONE]: '18883737888',
    [keys.URL]: 'https://humantraffickinghotline.org',
    [keys.PRIORITY]: priorities.LOW,
  },
];

module.exports = data;
