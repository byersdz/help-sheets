const { keys, languageCodes } = require( "../../../constants" );
const phoenix = require( "./phoenix/phoenix" );

const data = {};

data[keys.NAME] = "Arizona";
data[keys.URL_NAME] = "az";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [phoenix];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
