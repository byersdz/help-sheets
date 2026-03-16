const { keys, languageCodes } = require( "../../../constants" );
const lasVegas = require( "./las-vegas/las-vegas" );

const data = {};

data[keys.NAME] = "Nevada";
data[keys.URL_NAME] = "nv";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [lasVegas];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
