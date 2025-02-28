const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Miami";
data[keys.URL_NAME] = "miami";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Assistance HELPLINE",
    [keys.URL]: "https://www.miami.gov/My-Government/Departments/Human-Services/Homeless-Assistance",
    [keys.PHONE]: "8779944357",
    [keys.ADDRESS_1]: "111 NW 1st Street",
    [keys.ADDRESS_2]: "1st Floor",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33128",
    [keys.DATE_CHECKED]: "2025-02-25",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Camillus House Day Center",
    [keys.URL]: "https://www.camillus.org/need-help",
    [keys.PHONE]: "3053741065",
    [keys.DATE_CHECKED]: "2025-02-26",
    [keys.ADDRESS_1]: "1603 NW 7th Avenue",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33136",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 8:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Thur 12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Miami Rescue Mission",
    [keys.URL]: "https://caringplace.org",
    [keys.PHONE]: "3055712211",
    [keys.DATE_CHECKED]: "2025-02-28",
    [keys.ADDRESS_1]: "2020 NW 1st Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 3pm-5pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Rescue Mission",
    [keys.URL]: "https://www.crmjax.org",
    [keys.PHONE]: "9044215161",
    [keys.ADDRESS_1]: "234 W. State St.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "City Rescue Mission Lifebuilders Addiction Recovery",
    [keys.URL]: "https://www.crmjax.org/services/lifebuilders-program",
    [keys.PHONE]: "9043874357",
    [keys.ADDRESS_1]: "426 S. McDuff Ave.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32254",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
];

module.exports = data;
