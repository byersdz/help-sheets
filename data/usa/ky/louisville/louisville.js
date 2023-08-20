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
  {
    [keys.NAME]: "Lord's Kitchen",
    [keys.URL]: "https://www.thelordskitchen.com",
    [keys.PHONE]: "5024130198",
    [keys.DATE_CHECKED]: "2023-08-13",
    [keys.ADDRESS_1]: "1811 Standard Ave",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40210",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon/Tue/Thur/Fri/Sat 12:15pm - 1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Open Hand Kitchen",
    [keys.URL]: "https://www.svdplou.org/feeding/",
    [keys.PHONE]: "5025842480",
    [keys.DATE_CHECKED]: "2023-08-14",
    [keys.ADDRESS_1]: "1026 South Jackson St",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every Day: noon",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every Day: 5pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Thur 9am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Feed the City",
    [keys.URL]: "http://www.feedthecityky.com",
    [keys.PHONE]: "5027725384",
    [keys.DATE_CHECKED]: "2023-08-14",
    [keys.ADDRESS_1]: "1100 South 26th Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40210",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon - Sat 1pm - 4pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Wayside Christian Mission",
    [keys.URL]: "https://www.waysidechristianmission.org/ways-to-get-help",
    [keys.PHONE]: "5025843711",
    [keys.DATE_CHECKED]: "2023-08-15",
    [keys.ADDRESS_1]: "432 East Jefferson Street St",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Ozanam Inn",
    [keys.URL]: "https://www.svdplou.org/housing-shelter/",
    [keys.PHONE]: "5025842480",
    [keys.PHONE_EXTENSION]: '241',
    [keys.DATE_CHECKED]: "2023-08-18",
    [keys.ADDRESS_1]: "1034 S. Jackson St",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
    [keys.SERVES]: [serves.MEN, serves.VETERANS],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Re:Center Ministries",
    [keys.DESCRIPTION]: "Womens day shelter, Mens emergency shelter, residential recovery program",
    [keys.URL]: "https://recenterministries.org",
    [keys.PHONE]: "5025846543",
    [keys.DATE_CHECKED]: "2023-08-16",
    [keys.ADDRESS_1]: "733 East Jefferson Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
  },
  {
    [keys.NAME]: "The Healing Place, Men's Campus",
    [keys.DESCRIPTION]: "Provides food, shelter, clothing, and recovery services to those seeking help for addiction",
    [keys.URL]: "https://thehealingplace.org/get-help-now",
    [keys.PHONE]: "5025854848",
    [keys.DATE_CHECKED]: "2023-08-19",
    [keys.ADDRESS_1]: "1020 W. Market",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
  },
  {
    [keys.NAME]: "The Healing Place, Women's Campus",
    [keys.DESCRIPTION]: "Provides food, shelter, clothing, and recovery services to those seeking help for addiction",
    [keys.URL]: "https://thehealingplace.org/get-help-now",
    [keys.PHONE]: "5025854848",
    [keys.DATE_CHECKED]: "2023-08-19",
    [keys.ADDRESS_1]: "1503 S. 15th",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40210",
  },
];

module.exports = data;
