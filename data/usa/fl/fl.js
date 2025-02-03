const { keys, languageCodes } = require( "../../../constants" );
const jacksonville = require( "./jacksonville/jacksonville" );
const data = {};

data[keys.NAME] = "Florida";
data[keys.URL_NAME] = "fl";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [jacksonville];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
