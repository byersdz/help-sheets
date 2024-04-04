const { keys, languageCodes } = require( "../../../constants" );
const memphis = require( "./memphis/memphis" );
const nashville = require( "./nashville/nashville" );

const data = {};

data[keys.NAME] = "Tennessee";
data[keys.URL_NAME] = "tn";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [memphis, nashville];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Tennessee Redline",
    [keys.URL]: "https://www.taadas.org/tn-redline",
    [keys.PHONE]: "8008899789",
    [keys.DATE_CHECKED]: "2024-03-29",
    [keys.DESCRIPTION]:
      "Connects Tennessee residents with addiction treatment and recovery services.",
  },
];

module.exports = data;
