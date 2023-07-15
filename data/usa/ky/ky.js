const { keys, languageCodes } = require( "../../../constants" );
const louisville = require( "./louisville/louisville" );

const data = {};

data[keys.NAME] = "Kentucky";
data[keys.URL_NAME] = "ky";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [louisville];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
