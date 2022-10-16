const { keys, languageCodes } = require( "../../../constants" );
const boston = require( './boston/boston' );

const data = {};

data[keys.NAME] = "Massachussetts";
data[keys.URL_NAME] = "ma";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [boston];

data[keys.EXCLUDE_LIST] = [
  "211-usa",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.ID]: "211-ma",
    [keys.NAME]: "Mass 211",
    [keys.DESCRIPTION]: "Call for help to find local resources you need.",
    [keys.PHONE]: "211",
    [keys.URL]: "https://mass211.org",
    [keys.DATE_CHECKED]: "2022-10-16",
  },
];

module.exports = data;
