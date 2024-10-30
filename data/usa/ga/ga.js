const { keys, languageCodes } = require( "../../../constants" );
const atlanta = require( "./atlanta/atlanta" );

const data = {};

data[keys.NAME] = "Georgia";
data[keys.URL_NAME] = "ga";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [atlanta];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
