const { keys, languageCodes, priorities } = require( "../../../constants" );
const saltLakeCity = require( "./salt-lake-city/salt-lake-city" );

const data = {};

data[keys.NAME] = "Utah";
data[keys.URL_NAME] = "ut";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [saltLakeCity];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Utah Food Bank",
    [keys.URL]: "https://www.utahfoodbank.org",
    [keys.DATE_CHECKED]: "2026-05-17",
    [keys.PRIORITY]: priorities.LOW,
  },
];

module.exports = data;
