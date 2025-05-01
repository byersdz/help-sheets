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
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Daily Bread - Downtown",
    [keys.URL]: "https://www.christianservicecenter.org/dailybread",
    [keys.PHONE]: "4074252523",
    [keys.DATE_CHECKED]: "2025-04-19",
    [keys.ADDRESS_1]: "808 W. Central Blvd.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32805",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri noon-1pm, Sun 11am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Daily Bread - West Orange",
    [keys.URL]: "https://www.christianservicecenter.org/dailybread",
    [keys.PHONE]: "4076566678",
    [keys.DATE_CHECKED]: "2025-04-19",
    [keys.ADDRESS_1]: "300 West Franklin Street",
    [keys.CITY]: "Ocoee",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "34761",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 11am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Coalition for the Homeless",
    [keys.URL]: "https://www.centralfloridahomeless.org",
    [keys.PHONE]: "4076525300",
    [keys.DATE_CHECKED]: "2025-04-24",
    [keys.ADDRESS_1]: "18 North Terry Avenue",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32801",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 6:45pm",
      },
      {
        [keys.DESCRIPTION]: "Men's showers and laundry",
        [keys.HOURS]: "Mon-Thu 9am-11:30am",
      },
      {
        [keys.DESCRIPTION]: "Women's showers and laundry",
        [keys.HOURS]: "Mon-Thu 1pm-3pm",
      },
    ],
  },
  {
    [keys.NAME]: "Samaritan Resource Center",
    [keys.URL]: "https://samaritanresourcecenter.org",
    [keys.PHONE]: "4074820600",
    [keys.DATE_CHECKED]: "2025-04-12",
    [keys.ADDRESS_1]: "9837 E Colonial Dr.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32817",
    [keys.DESCRIPTION]: "Showers, laundry, hygiene kits, employment help, help with benefits",
  },
  {
    [keys.NAME]: "Pathways Drop In Center",
    [keys.URL]: "https://pathlighthome.org/pathways-drop-in",
    [keys.PHONE]: "4078435530",
    [keys.DATE_CHECKED]: "2025-04-13",
    [keys.ADDRESS_1]: "1313 30th Street",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32805",
    [keys.DESCRIPTION]: "Showers, laundry, case management, employment support",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri noon-3pm",
      },
    ],
  },
  {
    [keys.NAME]: "The Sharing Center",
    [keys.URL]: "https://pathlighthome.org/pathways-drop-in",
    [keys.PHONE]: "4072609155",
    [keys.DATE_CHECKED]: "2025-04-15",
    [keys.ADDRESS_1]: "600 North Highway 17-92",
    [keys.ADDRESS_2]: "Suite 130",
    [keys.CITY]: "Longwood",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32750",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Oasis: showers, laundry, hygiene",
        [keys.HOURS]: "Mon-Fri 8am-noon",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon-Fri 9am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Loaves & Fishes",
    [keys.URL]: "https://loavesandfishesapopka.com/need-help",
    [keys.PHONE]: "4078866005",
    [keys.DATE_CHECKED]: "2025-04-24",
    [keys.ADDRESS_1]: "206 East 8th St.",
    [keys.CITY]: "Apopka",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32703",
    [keys.DESCRIPTION]: "Food, Toiletries, Financial Assistance",
  },
  {
    [keys.NAME]: "Straight Street",
    [keys.URL]: "https://www.straightst.org",
    [keys.DATE_CHECKED]: "2025-04-26",
    [keys.ADDRESS_1]: "808 W. Central Blvd.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32805",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11:30am-1:30pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Fri 5:30pm-7pm",
      },
    ],
  },
  {
    [keys.NAME]: "Agape Mission Market",
    [keys.URL]: "https://cflcc.org/mission-markets",
    [keys.DATE_CHECKED]: "2025-04-28",
    [keys.PHONE]: "4076581818",
    [keys.ADDRESS_1]: "1771 N Semoran Blvd",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32807",
    [keys.DESCRIPTION]: "Food Pantry, appointment only",
  },
  {
    [keys.NAME]: "Harvest Time International",
    [keys.URL]: "https://www.harvesttime.org/assistance.html",
    [keys.DATE_CHECKED]: "2025-04-30",
    [keys.PHONE]: "4078785531",
    [keys.ADDRESS_1]: "225 Harvest Time Drive",
    [keys.CITY]: "Sanford",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32771",
    [keys.DESCRIPTION]: "Food, Clothing, Household supplies. Application required",
  },
  {
    [keys.NAME]: "Second Harvest Food Bank",
    [keys.URL]: "https://www.feedhopenow.org",
    [keys.PHONE]: "4072951066",
    [keys.DATE_CHECKED]: "2025-04-26",
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
    [keys.PHONE]: "4076525300",
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
