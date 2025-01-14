const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Atlanta";
data[keys.URL_NAME] = "atlanta";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Gateway Center Coordinated Entry",
    [keys.URL]: "http://www.gatewayctr.org/coordinated-entry-services",
    [keys.PHONE]: "4042156600",
    [keys.ADDRESS_1]: "275 Pryor Street SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.DATE_CHECKED]: "2024-11-06",
    [keys.DESCRIPTION]: "Mon - Fri 9am - 4pm, signup begins at 7am",
  },
  {
    [keys.NAME]: "Salvation Army Red Shield Services",
    [keys.URL]: "https://southernusa.salvationarmy.org/metro-atlanta/red-shield-services",
    [keys.PHONE]: "4044862700",
    [keys.ADDRESS_1]: "469 Marietta Street",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30313",
    [keys.DATE_CHECKED]: "2024-11-06",
  },
  {
    [keys.NAME]: "Crossroads",
    [keys.URL]: "https://crossroadsatlanta.org/need-help",
    [keys.PHONE]: "4702251995",
    [keys.ADDRESS_1]: "420 Courtland Street",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30308",
    [keys.DATE_CHECKED]: "2024-11-18",
    [keys.DESCRIPTION]: "Mon - Fri 9:30am - 1:30pm",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "First Presbyterian Church",
    [keys.URL]: "https://www.firstpresatl.org/community-ministries",
    [keys.PHONE]: "4048928461",
    [keys.DATE_CHECKED]: "2024-11-18",
    [keys.ADDRESS_1]: "1328 Peachtree St. NE",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30309",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch / Toiletries",
        [keys.HOURS]: "Tue/Thur 1pm - 3pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing Corner",
        [keys.HOURS]: "Mon/Thur 1pm - 3pm",
      },
    ],
  },
  {
    [keys.NAME]: "Trinity Table",
    [keys.URL]: "https://www.atlantatrinity.org/trinitytable",
    [keys.PHONE]: "4046596236",
    [keys.DATE_CHECKED]: "2024-11-22",
    [keys.ADDRESS_1]: "265 Washington St. SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal / Clothing",
        [keys.HOURS]: "Sunday noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Francis Table",
    [keys.URL]: "https://www.catholicshrineatlanta.org/saint-francis-table",
    [keys.PHONE]: "4045211866",
    [keys.DATE_CHECKED]: "2024-11-25",
    [keys.ADDRESS_1]: "48 Martin Luther King Jr. Dr. SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Saturday 10am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Hosea Helps: The Care Center",
    [keys.URL]: "https://4hosea.org/programs/care-center",
    [keys.PHONE]: "4047553353",
    [keys.DATE_CHECKED]: "2024-11-27",
    [keys.ADDRESS_1]: "2545 Forrest Hills Dr. SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30315",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Emergency Groceries",
        [keys.HOURS]: "Tue-Thur 11am - 5pm",
      },
    ],
  },
  {
    [keys.NAME]: "Intown Cares",
    [keys.URL]: "https://intowncares.org/what-we-do/foodprograms",
    [keys.PHONE]: "4045906956",
    [keys.DATE_CHECKED]: "2024-12-01",
    [keys.ADDRESS_1]: "1026 Ponce de Leon Ave NE",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30306",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Sat 10am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Central United Methodist Church",
    [keys.URL]: "https://www.centralumcatl.org/cumc-food-pantry",
    [keys.PHONE]: "4045244263",
    [keys.DATE_CHECKED]: "2024-12-03",
    [keys.ADDRESS_1]: "501 M.L.K. Jr Dr SW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30314",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "2nd and last Wed, 9am-1pm",
      },
    ],
    [keys.DESCRIPTION]: "Pantry only open one Wednesday in Nov/Dec"
  },
  {
    [keys.NAME]: "Shallowford Presbyterian Church",
    [keys.URL]: "https://www.shallowford.org/food-pantry",
    [keys.PHONE]: "4043211844",
    [keys.DATE_CHECKED]: "2024-12-06",
    [keys.ADDRESS_1]: "2375 Shallowford Road",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30345",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Wed/Thur 1pm - 3pm",
      },
    ],
    [keys.DESCRIPTION]: "Reservation recommended"
  },
  {
    [keys.NAME]: "Greater Piney Grove Baptist Church",
    [keys.URL]: "https://greaterpineygrove.church",
    [keys.PHONE]: "4043770561",
    [keys.DATE_CHECKED]: "2024-12-13",
    [keys.ADDRESS_1]: "1879 Glenwood Avenue, S.E",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30316",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Thursday 11am-2pm",
      },
    ],
  },
  {
    [keys.NAME]: "Hope Atlanta Women's Community Kitchen",
    [keys.URL]: "https://hopeatlanta.org/outreach-center",
    [keys.PHONE]: "4048177070",
    [keys.DATE_CHECKED]: "2024-12-13",
    [keys.ADDRESS_1]: "458 Ponce de Leon Ave. NE",
    [keys.ADDRESS_2]: "Building B, Terrace Level",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30308",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Tue/Wed/Thur 10am-11am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Wed/Thur 11am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "FOCUS Atlanta",
    [keys.URL]: "https://focusatlanta.org/where-we-work",
    [keys.PHONE]: "8662673083",
    [keys.PHONE_EXTENSION]: "709",
    [keys.DATE_CHECKED]: "2024-12-29",
    [keys.ADDRESS_1]: "543 Cherokee Ave SE",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30312",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Continental Breakfast",
        [keys.HOURS]: "Mon-Fri 7:30am",
      },
      {
        [keys.DESCRIPTION]: "Hot Breakfast",
        [keys.HOURS]: "Mon-Fri 9am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri after service",
      },
    ],
  },
  {
    [keys.NAME]: "Malachi's Storehouse",
    [keys.URL]: "https://malachis.org",
    [keys.PHONE]: "7704556523",
    [keys.DATE_CHECKED]: "2025-01-05",
    [keys.ADDRESS_1]: "4755 N Peachtree Rd",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30338",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Panty, Clothing",
        [keys.HOURS]: "Wednseday 9am-12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Midtown Assistance Center",
    [keys.URL]: "https://midtownassistancecenter.org",
    [keys.PHONE]: "4046815777",
    [keys.DATE_CHECKED]: "2024-12-24",
    [keys.ADDRESS_1]: "613 Spring St NW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30308",
    [keys.DESCRIPTION]: "Food Pantry, Job Assistance, Emergency Rent and Utility Assistance. Appointment required."
  },
  {
    [keys.NAME]: "Urban Recipe",
    [keys.URL]: "https://urbanrecipe.org",
    [keys.PHONE]: "4046880871",
    [keys.DATE_CHECKED]: "2024-12-24",
    [keys.ADDRESS_1]: "970 Jefferson St. NW",
    [keys.ADDRESS_2]: "Suite 7",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30307",
    [keys.DESCRIPTION]: "Food Co-op, Mobile Pantry"
  },
  {
    [keys.NAME]: "Atlanta Community Food Bank",
    [keys.URL]: "https://www.acfb.org",
    [keys.PHONE]: "4048923333",
    [keys.DATE_CHECKED]: "2024-11-25",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Atlanta Mission Shepherd's Inn",
    [keys.URL]: "https://atlantamission.org/shepherds-inn",
    [keys.PHONE]: "4043672493",
    [keys.ADDRESS_1]: "165 Ivan Allen Blvd. NW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30313",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Atlanta Mission Restoration House",
    [keys.URL]: "https://atlantamission.org/restoration-house",
    [keys.PHONE]: "4045884007",
    [keys.ADDRESS_1]: "655 Ethel St. NW",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30318",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Women's Resource Center",
    [keys.URL]: "https://www.wrcdv.org/get-help",
    [keys.PHONE]: "4046889436",
    [keys.DATE_CHECKED]: "2025-01-02",
    [keys.DESCRIPTION]: "Resources for people experiencing domestic violence",
  },
  {
    [keys.NAME]: "Atlanta Mission Potter's House",
    [keys.URL]: "https://atlantamission.org/potters-house/",
    [keys.PHONE]: "7065438338",
    [keys.ADDRESS_1]: "655 Potter House Rd",
    [keys.CITY]: "Jefferson",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30549",
    [keys.DATE_CHECKED]: "2024-11-20",
    [keys.SERVES]: [serves.MEN],
    [keys.DESCRIPTION]: "Residential recovery program"
  },
  {
    [keys.NAME]: "BCM Georgia",
    [keys.URL]: "https://bcmgeorgia.org/",
    [keys.DATE_CHECKED]: "2025-01-05",
    [keys.DESCRIPTION]: "Rent and utility assistance"
  },
  {
    [keys.NAME]: "Atlanta Legal Aid",
    [keys.URL]: "https://atlantalegalaid.org/get-help",
    [keys.PHONE]: "4045245811",
    [keys.ADDRESS_1]: "54 Ellis St. NE",
    [keys.CITY]: "Atlanta",
    [keys.STATE]: "GA",
    [keys.ZIP_CODE]: "30303",
    [keys.DATE_CHECKED]: "2025-01-14",
    [keys.DESCRIPTION]: "Free civil legal help to individuals who cannot afford a private attorney"
  },
];

module.exports = data;
