const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Louisville";
data[keys.URL_NAME] = "louisville";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Coordinated Shelter Access",
    [keys.URL]: "https://louhomeless.org/news/gethelp",
    [keys.PHONE]: "5026372337",
    [keys.DATE_CHECKED]: "2022-07-19",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
    [keys.ADDRESS_1]: "1300 S. 4th Street",
    [keys.ADDRESS_2]: "#250",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40208",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Salvation Army Center of Hope",
    [keys.URL]: "https://southernusa.salvationarmy.org/louisville/center-of-hope",
    [keys.PHONE]: "5026714900",
    [keys.DATE_CHECKED]: "2023-08-11",
    [keys.ADDRESS_1]: "911 S. Brook Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Every day 6:45am - 7:30am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day: Women 4:45pm, Men 5:15pm",
      },
    ],
  },
  {
    [keys.NAME]: "Cathedral of the Assumption",
    [keys.URL]: "https://www.cathedraloftheassumption.org/social-concerns/daily-lunch-program/",
    [keys.PHONE]: "5025822971",
    [keys.DATE_CHECKED]: "2023-08-11",
    [keys.ADDRESS_1]: "433 S. Fifth Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every day 12:15pm - 1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Fourth Avenue United Methodist Church",
    [keys.URL]: "https://www.fourthavenue.us/ministries",
    [keys.PHONE]: "5025852176",
    [keys.DATE_CHECKED]: "2023-08-13",
    [keys.ADDRESS_1]: "318 West Saint Catherine Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon/Tue/Thur/Fri/Sat noon - 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Medical Clinic",
        [keys.HOURS]: "4th Thursday 11am - 1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Franciscan Kitchen",
    [keys.URL]: "https://franciscankitchen.org/",
    [keys.PHONE]: "5025890140",
    [keys.DATE_CHECKED]: "2023-08-13",
    [keys.ADDRESS_1]: "748 S Preston St",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon - Fri 10:30am - 12:30pm",
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
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Cincinnati Health Network / McMicken Integrated Care Clinic",
    [keys.DESCRIPTION]: "Healthcare for the homeless",
    [keys.URL]: "https://cincinnatihealthnetwork.org/index.php?page=programs-services",
    [keys.PHONE]: "5133867899",
    [keys.DATE_CHECKED]: "2023-07-06",
    [keys.ADDRESS_1]: "40 E McMicken Ave",
    [keys.ADDRESS_2]: "2nd floor",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
  },
];

module.exports = data;
