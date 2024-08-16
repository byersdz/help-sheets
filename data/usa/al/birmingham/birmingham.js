const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Birmingham";
data[keys.URL_NAME] = "birmingham";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Lukes UMC",
    [keys.URL]: "https://stlukesumc.org/hunger-ministries",
    [keys.PHONE]: "9014526262",
    [keys.DATE_CHECKED]: "2024-07-05",
    [keys.ADDRESS_1]: "480 S. Highland",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38111",
    [keys.DESCRIPTION]: "Also provides food pantry",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Sun 8am - 9am",
      },
      {
        [keys.DESCRIPTION]: "Supper",
        [keys.HOURS]: "Sat 4:30pm - 5:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Memphis Union Mission",
    [keys.URL]: "https://memphisunionmission.org",
    [keys.PHONE]: "9015268403",
    [keys.ADDRESS_1]: "383 Poplar Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
    [keys.DATE_CHECKED]: "2024-06-27",
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Hospitality Hub",
    [keys.DESCRIPTION]: "A centralized hub of information and services for homeless persons.",
    [keys.URL]: "https://www.hospitalityhub.org",
    [keys.PHONE]: "9017301736",
    [keys.DATE_CHECKED]: "2024-04-30",
    [keys.ADDRESS_1]: "590 Washington Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
  },
];

module.exports = data;
