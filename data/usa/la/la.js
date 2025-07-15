const { keys, languageCodes } = require( "../../../constants" );
const newOrleans = require( "./new-orleans/new-orleans" );

const data = {};

data[keys.NAME] = "Louisiana";
data[keys.URL_NAME] = "la";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [newOrleans];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
