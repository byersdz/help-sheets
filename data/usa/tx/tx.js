const { keys, languageCodes } = require( "../../../constants" );
const houston = require( "./houston/houston" );

const data = {};

data[keys.NAME] = "Texas";
data[keys.URL_NAME] = "tx";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [houston];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
