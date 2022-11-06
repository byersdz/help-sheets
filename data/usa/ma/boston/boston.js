const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Boston";
data[keys.URL_NAME] = "boston";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Office of Housing Stability",
    [keys.URL]: "https://www.boston.gov/departments/housing/services-those-experiencing-homeless",
    [keys.PHONE]: "6176354200",
    [keys.DATE_CHECKED]: "2022-10-18",
    [keys.DESCRIPTION]: "Call if you are at immediate risk of becoming homeless. Mon - Fri 9am - 5pm",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "South Buffalo Community Table",
    [keys.URL]: "https://www.sbcommunitytable.com",
    [keys.PHONE]: "7168223193",
    [keys.DATE_CHECKED]: "2022-10-03",
    [keys.ADDRESS_1]: "187 Southside Pkwy",
    [keys.CITY]: "Buffalo",
    [keys.STATE]: "NY",
    [keys.ZIP_CODE]: "14220",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon - Thur 4pm - 5pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Southampton Shelter",
    [keys.URL]:
      "https://www.boston.gov/government/cabinets/boston-public-health-commission/homeless-services/emergency-shelter",
    [keys.PHONE]: "6175345395",
    [keys.ADDRESS_1]: "112 Southampton Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
  {
    [keys.NAME]: "Woods Mullen Shelter",
    [keys.URL]:
      "https://www.boston.gov/government/cabinets/boston-public-health-commission/homeless-services/emergency-shelter",
    [keys.PHONE]: "6175347100",
    [keys.ADDRESS_1]: "794 Massachusetts Ave",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
  {
    [keys.NAME]: "Pine Street Inn",
    [keys.URL]: "https://www.pinestreetinn.org/about-us/find-help-guest",
    [keys.PHONE]: "6178929228",
    [keys.DESCRIPTION]: "Call for triage",
    [keys.ADDRESS_1]: "444 Harrison Ave",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
  {
    [keys.NAME]: "New England Center and Home for Veterans",
    [keys.URL]: "https://nechv.org",
    [keys.PHONE]: "6173711800",
    [keys.ADDRESS_1]: "17 Court St",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02108",
    [keys.SERVES]: [serves.VETERANS],
    [keys.DATE_CHECKED]: "2022-11-05",
  },
  {
    [keys.NAME]: "Bridge Over Troubled Waters",
    [keys.URL]: "https://www.bridgeotw.org/gethelp",
    [keys.PHONE]: "6174239575",
    [keys.ADDRESS_1]: "47 West Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02111",
    [keys.SERVES]: [serves.AGE_14_TO_24],
    [keys.DATE_CHECKED]: "2022-11-05",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Boston Night Center",
    [keys.URL]: "https://www.baycovehumanservices.org/homeless-services",
    [keys.PHONE]: "8572960322",
    [keys.DESCRIPTION]: "Overnight drop-in shelter. No beds. 8:30pm - 6:30 am",
    [keys.ADDRESS_1]: "31 Bowker St.",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02114",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-11-05",
  },
];

module.exports = data;
