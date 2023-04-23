const { keys, languageCodes } = require( "../../../constants" );

const cincinnati = require( './cincinnati/cincinnati' );
const cleveland = require( './cleveland/cleveland' );
const columbus = require( './columbus/columbus' );

const data = {};

data[keys.NAME] = "Ohio";
data[keys.URL_NAME] = "oh";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [ cincinnati, cleveland, columbus];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

module.exports = data;
