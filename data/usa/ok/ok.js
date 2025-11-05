const { keys, languageCodes } = require( "../../../constants" );
const oklahomaCity = require( "./oklahoma-city/oklahoma-city" );

const data = {};

data[keys.NAME] = "Oklahoma";
data[keys.URL_NAME] = "ok";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [oklahomaCity];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
];

module.exports = data;
