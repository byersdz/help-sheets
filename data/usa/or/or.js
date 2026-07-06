const { keys, languageCodes } = require( "../../../constants" );
const portland = require( "./portland/portland" );

const data = {};

data[keys.NAME] = "Oregon";
data[keys.URL_NAME] = "or";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [portland];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
