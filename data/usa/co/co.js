const { keys, languageCodes } = require( "../../../constants" );
const denver = require( "./denver/denver" );

const data = {};

data[keys.NAME] = "Colorado";
data[keys.URL_NAME] = "co";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [denver];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
