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
  {
    [keys.NAME]: "Beulah Presbyterian",
    [keys.URL]: "http://www.beulahpres.org/open-table.html",
    [keys.PHONE]: "5022393231",
    [keys.DATE_CHECKED]: "2023-09-14",
    [keys.ADDRESS_1]: "6704 Bardstown Road",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40291",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Tue 5:30pm - 6:15pm",
      },
    ],
  },
  {
    [keys.NAME]: "Hip Hop Cares Outreach",
    [keys.URL]: "https://www.hiphopcares.org/weekly-outreach-events",
    [keys.PHONE]: "5024575317",
    [keys.DATE_CHECKED]: "2023-09-14",
    [keys.DESCRIPTION]: "Overpass between Brook & First on Broadway",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Sunday 11am",
      },
    ],
  },
  {
    [keys.NAME]: "Dare to Care Food Bank",
    [keys.URL]: "https://daretocare.org/need-food/",
    [keys.PHONE]: "5029663821",
    [keys.DATE_CHECKED]: "2023-09-21",
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
  {
    [keys.NAME]: "Center for Women and Families",
    [keys.URL]: "https://www.thecenteronline.org",
    [keys.PHONE]: "5025817222",
    [keys.DESCRIPTION]: "Services for survivors of domestic violence / sexual assault",
    [keys.DATE_CHECKED]: "2023-09-10",
    [keys.ADDRESS_1]: "927 S. 2nd Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
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
  {
    [keys.NAME]: "St. John Center",
    [keys.DESCRIPTION]: "Day Shelter; Social Services Center",
    [keys.URL]: "https://www.stjohncenter.org/seeking-help/",
    [keys.PHONE]: "5025686758",
    [keys.DATE_CHECKED]: "2023-09-12",
    [keys.ADDRESS_1]: "700 E. Muhammad Ali Blvd",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "FHC Phoenix Health Care for the Homeless",
    [keys.URL]: "https://www.fhclouisville.org/locations/phoenix-health-care-for-the-homeless/",
    [keys.PHONE]: "5025686972",
    [keys.DATE_CHECKED]: "2023-09-21",
    [keys.ADDRESS_1]: "712 E. Muhammad Ali Blvd",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40202",
  },
  {
    [keys.NAME]: "Family Community Clinic",
    [keys.URL]: "https://famcomclinic.org",
    [keys.PHONE]: "5023848444",
    [keys.DESCRIPTION]: 'Health care for the uninsured',
    [keys.DATE_CHECKED]: "2023-09-24",
    [keys.ADDRESS_1]: "1420 E Washington Street",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40206",
  },
  {
    [keys.NAME]: "Kentucky Health Justice Network",
    [keys.URL]: "https://www.kentuckyhealthjusticenetwork.org",
    [keys.PHONE]: "8555764576",
    [keys.DESCRIPTION]: 'Free inclusive help with reproductive health',
    [keys.DATE_CHECKED]: "2023-09-24",
  },
  {
    [keys.NAME]: "Bside U for life",
    [keys.URL]: "https://www.bsideu.org/",
    [keys.PHONE]: "5025899400",
    [keys.DESCRIPTION]: 'Pro life services for unplanned pregnancies',
    [keys.DATE_CHECKED]: "2023-09-27",
    [keys.ADDRESS_1]: "701 W. Muhammad Ali Blvd",
    [keys.CITY]: "Louisville",
    [keys.STATE]: "KY",
    [keys.ZIP_CODE]: "40203",
  },
];

module.exports = data;
