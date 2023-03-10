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
    [keys.NAME]: "The Open Shelter",
    [keys.URL]: "https://theopenshelter.org/programming",
    [keys.PHONE]: "6142222885",
    [keys.DATE_CHECKED]: "2023-03-08",
    [keys.ADDRESS_1]: "1037 Parsons Ave",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43206",
    [keys.DESCRIPTION]: "Day shelter and advocacy center",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Mon - Fri 10am",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tuesday",
      },
    ],
  },
  {
    [keys.NAME]: "Stowe Mission",
    [keys.URL]: "https://stowemission.org",
    [keys.PHONE]: "6144458400",
    [keys.DATE_CHECKED]: "2023-03-08",
    [keys.ADDRESS_1]: "888 Parsons Avenue",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43206",
    [keys.DESCRIPTION]: "Also provides dental and vision clinic",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Dream Center",
    [keys.URL]: "https://www.columbusdreamcenter.org/services",
    [keys.PHONE]: "6145473138",
    [keys.DATE_CHECKED]: "2023-03-10",
    [keys.ADDRESS_1]: "38 W Greenwood Ave",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43201",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon/Tue/Wed/Fri 9:30am - 10am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon/Tue/Thu/Fri 7pm - 7:30pm",
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
