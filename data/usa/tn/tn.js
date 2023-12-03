const { keys, languageCodes } = require( "../../../constants" );
const nashville = require( "./nashville/nashville" );

const data = {};

data[keys.NAME] = "Tennessee";
data[keys.URL_NAME] = "tn";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [nashville];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
