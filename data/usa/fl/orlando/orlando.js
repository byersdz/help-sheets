const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Orlando";
data[keys.URL_NAME] = "orlando";
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
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Orlando Rescue Mission Project Hope",
    [keys.URL]: "https://www.ourm.org/need-help",
    [keys.PHONE]: "4074233596",
    [keys.DATE_CHECKED]: "2025-04-09",
    [keys.ADDRESS_1]: "3300 W. Colonial Dr.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32808",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Orlando Rescue Mission Family Hope",
    [keys.URL]: "https://www.ourm.org/need-help",
    [keys.PHONE]: "4074232131",
    [keys.DATE_CHECKED]: "2025-04-09",
    [keys.ADDRESS_1]: "1525 W. Washington St.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32805",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES, serves.SINGLE_MOTHERS, serves.SINGLE_FATHERS],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Catholic Charities Homeless Prevention and Rapid Re-Housing",
    [keys.URL]: "https://www.ccadm.org/sh_projects/homeless-prevention-and-rapid-re-housing-miami-dade-county",
    [keys.PHONE]: "3055733333",
    [keys.DATE_CHECKED]: "2025-03-14",
    [keys.ADDRESS_1]: "3620 NW 1st Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.DESCRIPTION]: "Provides assistance and referrals to individuals and families to prevent homelessness",
  },
];

module.exports = data;
