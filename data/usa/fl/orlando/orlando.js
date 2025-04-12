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
  {
    [keys.NAME]: "Coalition for the Homeless",
    [keys.URL]: "https://www.centralfloridahomeless.org",
    [keys.PHONE]: "4076525310",
    [keys.DATE_CHECKED]: "2025-04-11",
    [keys.ADDRESS_1]: "18 North Terry Avenue",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32801",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Rescue Outreach Mission",
    [keys.URL]: "https://romcfl.org",
    [keys.PHONE]: "4073218224",
    [keys.DATE_CHECKED]: "2025-04-10",
    [keys.ADDRESS_1]: "1701 W 13th St.",
    [keys.CITY]: "Sanford",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32771",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://orlando.salvationarmyflorida.org",
    [keys.PHONE]: "4074238581",
    [keys.PHONE_EXTENSION]: "26480",
    [keys.DATE_CHECKED]: "2025-04-10",
    [keys.ADDRESS_1]: "624 Lexington Ave.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32804",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "H.O.M.E Orlando",
    [keys.URL]: "https://aspirehealthpartners.com/program-details/?program=37",
    [keys.PHONE]: "4079320413",
    [keys.DATE_CHECKED]: "2025-04-11",
    [keys.ADDRESS_1]: "924 Determination Way",
    [keys.CITY]: "Kissimmee",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "34741",
    [keys.SERVES]: [serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Covenant House",
    [keys.URL]: "https://www.covenanthousefl.org",
    [keys.PHONE]: "4074820404",
    [keys.DATE_CHECKED]: "2025-04-11",
    [keys.ADDRESS_1]: "711 N Magnolia Ave",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32803",
    [keys.SERVES]: [serves.AGE_18_TO_22],
  },
];

data[keys.RESOURCES] = [

];

module.exports = data;
