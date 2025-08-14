const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "New Orleans";
data[keys.URL_NAME] = "new-orleans";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Lantern Light",
    [keys.URL]: "https://www.lanternlight.org",
    [keys.PHONE]: "5042735573",
    [keys.PHONE_EXTENSION]: "115",
    [keys.DATE_CHECKED]: "2025-07-31",
    [keys.ADDRESS_1]: "1803 Gravier St.",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 1pm (door closes at 1pm)",
      },
    ],
  },
  {
    [keys.NAME]: "Ozanam Inn",
    [keys.URL]: "https://www.ozanaminn.org",
    [keys.PHONE]: "5045231184",
    [keys.DATE_CHECKED]: "2025-08-04",
    [keys.ADDRESS_1]: "2239 Poydras Street",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70119",
    [keys.DESCRIPTION]: "Also provides clothing",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Everyday 6am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Everyday 2pm",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Everyday 6pm",
      },
    ],
  },
  {
    [keys.NAME]: "St. George's Episcopal",
    [keys.URL]: "https://www.stgeorge-nola.org/outreach-ministries",
    [keys.PHONE]: "5048992811",
    [keys.DATE_CHECKED]: "2025-08-04",
    [keys.ADDRESS_1]: "4600 St. Charles Avenue",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70115",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Thur 9am-10:30am, Sun 8:30am-9:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Giving Hope East",
    [keys.URL]: "https://givinghopenola.org",
    [keys.PHONE]: "5049401592",
    [keys.DATE_CHECKED]: "2025-08-08",
    [keys.ADDRESS_1]: "13040 I-10 Service Road",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70128",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Thurs-Sat 8am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Giving Hope West Bank",
    [keys.URL]: "https://givinghopenola.org",
    [keys.PHONE]: "5049401592",
    [keys.DATE_CHECKED]: "2025-08-08",
    [keys.ADDRESS_1]: "5151 Lapalco Blvd.",
    [keys.CITY]: "Marrero",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70072",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon-Wed 10am-2pm",
      },
    ],
  },
  {
    [keys.NAME]: "Grace at the Greenlight",
    [keys.URL]: "https://graceatthegreenlight.org",
    [keys.PHONE]: "5042394544",
    [keys.DATE_CHECKED]: "2025-08-08",
    [keys.ADDRESS_1]: "400 N. Rampart St.",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Every day 6:30am-7:30am",
      },
      {
        [keys.DESCRIPTION]: "Clothing Closet",
        [keys.HOURS]: "Tue/Thur/Sun 6:30am-7:30am",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "New Orleans Mission",
    [keys.URL]: "https://neworleansmission.org",
    [keys.PHONE]: "5045232116",
    [keys.DATE_CHECKED]: "2025-07-18",
    [keys.ADDRESS_1]: "1130 Oretha Castle Haley Blvd.",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70113",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Ozanam Inn",
    [keys.URL]: "https://www.ozanaminn.org",
    [keys.PHONE]: "5045231184",
    [keys.DATE_CHECKED]: "2025-07-23",
    [keys.ADDRESS_1]: "2239 Poydras Street",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70119",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Salvation Army Center of Hope",
    [keys.URL]: "https://southernusa.salvationarmy.org/new-orleans/center-of-hope",
    [keys.PHONE]: "5048994569",
    [keys.DATE_CHECKED]: "2025-07-23",
    [keys.ADDRESS_1]: "4500 S. Claiborne Ave",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70125",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Covenant House",
    [keys.URL]: "https://www.covenanthousenola.org/get-help-now",
    [keys.PHONE]: "5045841111",
    [keys.DATE_CHECKED]: "2025-07-30",
    [keys.ADDRESS_1]: "611 North Rampart Street",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.DESCRIPTION]: "Serves ages 16-22",
  },
  {
    [keys.NAME]: "Hagar's House",
    [keys.URL]: "https://fgca.squarespace.com/about/news/hagarshouse",
    [keys.PHONE]: "5042105064",
    [keys.DATE_CHECKED]: "2025-07-30",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN, serves.TRANSGENDER],
  },
  {
    [keys.NAME]: "Metro Mission",
    [keys.URL]: "http://www.mccagno.org/",
    [keys.PHONE]: "8884111333",
    [keys.DATE_CHECKED]: "2025-07-30",
    [keys.DESCRIPTION]: "Domestic violence shelter",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Health Care for the Homeless",
    [keys.URL]: "https://nola.gov/next/health-care-for-the-homeless/home",
    [keys.PHONE]: "5046582785",
    [keys.DATE_CHECKED]: "2025-08-08",
    [keys.ADDRESS_1]: "2222 Simon Bolivar Ave",
    [keys.ADDRESS_2]: "2nd Floor",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70113",
  },
  {
    [keys.NAME]: "Harry Tompson Center",
    [keys.URL]: "https://www.harrytompsoncenter.org",
    [keys.PHONE]: "5042735547",
    [keys.DATE_CHECKED]: "2025-08-08",
    [keys.ADDRESS_1]: "1803 Gravier St.",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.DESCRIPTION]: "Day Shelter",
  },
  {
    [keys.NAME]: "Unity of Greater New Orleans",
    [keys.URL]: "https://unitygno.org",
    [keys.PHONE]: "5048214496",
    [keys.DATE_CHECKED]: "2025-08-11",
    [keys.ADDRESS_1]: "2475 Canal Street",
    [keys.ADDRESS_2]: "Suite 300",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70119",
    [keys.DESCRIPTION]: "Temporary grant for rent/utilities/deposit assistance",
  },
  {
    [keys.NAME]: "Traveler's Aid Society",
    [keys.URL]: "https://travelersaidsocietyneworleans.org",
    [keys.PHONE]: "5046582944",
    [keys.DATE_CHECKED]: "2025-08-11",
    [keys.ADDRESS_1]: "1530 Gravier St",
    [keys.CITY]: "New Orleans",
    [keys.STATE]: "LA",
    [keys.ZIP_CODE]: "70112",
    [keys.DESCRIPTION]: "Housing resources",
  },
  {
    [keys.NAME]: "Catholic Charities Archdiocese of New Orleans",
    [keys.URL]: "https://www.ccano.org",
    [keys.PHONE]: "8668912210",
    [keys.DATE_CHECKED]: "2025-08-12",
    [keys.DESCRIPTION]: "Case management, direct assistance",
  },
  {
    [keys.NAME]: "City of Kenner Community Resource Centers",
    [keys.URL]: "https://www.kenner.la.us/469/3844/Community-Resource-Centers",
    [keys.PHONE]: "5044687564",
    [keys.DATE_CHECKED]: "2025-08-12",
  },
  {
    [keys.NAME]: "Jefferson Community Action Programs",
    [keys.URL]: "https://www.jeffparish.gov/358/Community-Centers",
    [keys.PHONE]: "5047366900",
    [keys.DATE_CHECKED]: "2025-08-12",
    [keys.DESCRIPTION]: "Community Centers. Emergency food assistance, rent/utility assistance",
  },
];

module.exports = data;
