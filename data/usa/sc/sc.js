const { keys, languageCodes } = require( "../../../constants" );
const charleston = require('./charleston/charleston');

const data = {};

data[keys.NAME] = "South Carolina";
data[keys.URL_NAME] = "sc";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [charleston];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
