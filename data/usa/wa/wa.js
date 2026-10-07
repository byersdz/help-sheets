const { keys, languageCodes } = require( "../../../constants" );

const seattle = require( "./seattle/seattle" );

const data = {};

data[keys.NAME] = "Washington";
data[keys.URL_NAME] = "wa";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [seattle];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
