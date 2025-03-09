const { keys, languageCodes, priorities } = require( "../../../constants" );
const jacksonville = require( "./jacksonville/jacksonville" );
const miami = require( "./miami/miami" );
const data = {};

data[keys.NAME] = "Florida";
data[keys.URL_NAME] = "fl";

data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.CITIES] = [jacksonville, miami];

data[keys.EXCLUDE_LIST] = [];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Florida Domestic Violence Hotline",
    [keys.PHONE]: "8005001119",
    [keys.DATE_CHECKED]: "2025-03-09",
    [keys.PRIORITY]: priorities.LOW,
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Farm Share",
    [keys.URL]: "https://www.farmshare.org",
    [keys.PHONE]: "3052463276",
    [keys.DATE_CHECKED]: "2025-03-03",
    [keys.DESCRIPTION]: "Food Bank",
    [keys.PRIORITY]: priorities.LOW,
  },
]

module.exports = data;
