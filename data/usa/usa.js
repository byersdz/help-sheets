const { keys, languageCodes } = require( '../../constants' );
const virginia = require( './va/va' );

const data = {};

data[keys.NAME] = 'United States of America';
data[keys.ID] = 'usa';
data[keys.URL_NAME] = 'usa';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.STATES] = [virginia];

module.exports = data;
