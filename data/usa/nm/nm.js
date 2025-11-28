const { keys, languageCodes } = require( "../../../constants" );
const albuquerque = require( "./albuquerque/albuquerque" );

const data = {};

data[keys.NAME] = "New Mexico";
data[keys.URL_NAME] = "nm";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [albuquerque];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
