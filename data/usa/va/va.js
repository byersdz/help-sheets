const { keys, languageCodes } = require( '../../../constants' );
const richmond = require( './richmond/richmond' );

const data = {};

data[keys.NAME] = 'Virginia';
data[keys.ID] = 'virginia';
data[keys.URL_NAME] = 'va';

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [richmond];

module.exports = data;
