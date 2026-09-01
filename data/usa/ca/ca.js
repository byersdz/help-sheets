const { keys, languageCodes } = require( "../../../constants" );

const losAngeles = require( "./los-angeles/los-angeles" );
const sanFrancisco = require( "./san-francisco/san-francisco" );

const data = {};

data[keys.NAME] = "California";
data[keys.URL_NAME] = "ca";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [losAngeles, sanFrancisco];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
