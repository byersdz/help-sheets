const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Columbus";
data[keys.URL_NAME] = "columbus";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Hotline",
    [keys.URL]: "https://www.columbus.gov/COVID19resources/humanservices",
    [keys.PHONE]: "6142747000",
    [keys.DATE_CHECKED]: "2022-03-04",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
  },
  {
    [keys.NAME]: "LSS Choices",
    [keys.URL]: "https://lssnetworkofhope.org/choices",
    [keys.PHONE]: "6142244663",
    [keys.DATE_CHECKED]: "2022-03-04",
    [keys.DESCRIPTION]: "Call if you seeking shelter from an abusive intimate partner.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Augustine Hunger Center",
    [keys.URL]: "https://www.ccdocle.org/locations/st-augustine-hunger-center",
    [keys.PHONE]: "2163773725",
    [keys.DATE_CHECKED]: "2023-01-08",
    [keys.ADDRESS_1]: "2486 W 14th St",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44113",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "every day 11am - 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Fri 4pm - 5pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Men's Public Shelter",
    [keys.URL]: "https://www.lutheranmetro.org/what-we-do/programs/housing-and-shelter",
    [keys.PHONE]: "2165660047",
    [keys.ADDRESS_1]: "2100 Lakeside Avenue",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44114",
    [keys.SERVES]: [serves.MEN],
    [keys.DESCRIPTION]: "Use Coordinated Intake",
    [keys.DATE_CHECKED]: "2022-12-13",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Step Forward",
    [keys.URL]: "https://www.stepforwardtoday.org",
    [keys.PHONE]: "2166969077",
    [keys.ADDRESS_1]: "1801 Superior Avenue",
    [keys.ADDRESS_2]: "Suite 400",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44114",
    [keys.DESCRIPTION]: "Emergency Assistance, Energy assistance, Proffesional Development, Personal Development",
    [keys.DATE_CHECKED]: "2023-02-21",
  },
];

module.exports = data;
