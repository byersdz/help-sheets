const { keys, languageCodes } = require( "../../../constants" );
const birmingham = require( "./birmingham/birmingham" );

const data = {};

data[keys.NAME] = "Alabama";
data[keys.URL_NAME] = "al";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [birmingham];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
