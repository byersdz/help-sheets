const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Cincinnati";
data[keys.URL_NAME] = "cincinnati";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Central Access Point Line",
    [keys.URL]: "https://www.strategiestoendhomelessness.org/what-we-do/prevention-and-shelter-diversion/",
    [keys.PHONE]: "5133817233",
    [keys.DATE_CHECKED]: "2022-04-23",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "City Gospel Mission",
    [keys.URL]: "https://www.citygospelmission.org/get-help",
    [keys.PHONE]: "5132415525",
    [keys.DATE_CHECKED]: "2023-04-23",
    [keys.ADDRESS_1]: "1805 Dalton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45214",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 7pm",
      },
    ],
  },
  {
    [keys.NAME]: "First Lutheran Church",
    [keys.URL]: "https://www.firstlutherancincy.org/service-1",
    [keys.PHONE]: "5134210065",
    [keys.DATE_CHECKED]: "2023-04-27",
    [keys.ADDRESS_1]: "1208 Race Street",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Last Monday of month - noon",
      },
      {
        [keys.DESCRIPTION]: "Clothing Closet",
        [keys.HOURS]: "2nd Monday of month - noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Gospel Mission",
    [keys.URL]: "https://www.citygospelmission.org/get-help",
    [keys.PHONE]: "5132415525",
    [keys.DATE_CHECKED]: "2023-04-23",
    [keys.ADDRESS_1]: "1805 Dalton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45214",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Columbus Free Clinic",
    [keys.URL]: "https://columbusfreeclinic.com",
    [keys.PHONE]: "6144048417",
    [keys.DATE_CHECKED]: "2023-03-17",
    [keys.ADDRESS_1]: "2231 North High Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43201",
  },
];

module.exports = data;
