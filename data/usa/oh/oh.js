const { keys, languageCodes } = require( "../../../constants" );

const cleveland = require( './cleveland/cleveland' );

const data = {};

data[keys.NAME] = "Ohio";
data[keys.URL_NAME] = "oh";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [cleveland];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;