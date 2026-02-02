const { keys, languageCodes } = require( "../../../constants" );
const sanDiego = require( "./san-diego/san-diego" );
// const albuquerque = require( "./albuquerque/albuquerque" );

const data = {};

data[keys.NAME] = "California";
data[keys.URL_NAME] = "ca";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [sanDiego];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
