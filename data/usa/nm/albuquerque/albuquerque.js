const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Albuquerque";
data[keys.URL_NAME] = "albuquerque";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "HopeWorks",
    [keys.URL]: "https://hopeworksnm.org/get-help",
    [keys.PHONE]: "5058439405",
    [keys.DATE_CHECKED]: "2025-12-08",
    [keys.ADDRESS_1]: "1201 3rd St NW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87102",
    [keys.DESCRIPTION]: "Day shelter, clothing",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Coffee & meal checkin",
        [keys.HOURS]: "Mon-Fri 8am-10am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 10am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Good Shepherd Center",
    [keys.URL]: "https://www.gscnm.org/services",
    [keys.PHONE]: "5052432527",
    [keys.DATE_CHECKED]: "2025-12-04",
    [keys.ADDRESS_1]: "218 Iron Avenue SW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87102",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Mon/Tue/Wed/Fri 2pm, Sat 11:30am",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Mon/Tue/Wed/Fri 9am-11am",
      },
    ],
  },
  {
    [keys.NAME]: "The Rock at Noonday",
    [keys.URL]: "https://www.therockabq.com",
    [keys.PHONE]: "5052468001",
    [keys.DATE_CHECKED]: "2025-12-10",
    [keys.ADDRESS_1]: "2400 2nd St NW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87102",
    [keys.DESCRIPTION]: "Also provides showers, clothing, hair cuts",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Tue-Fri 8:30am-9am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue-Fri 11am-11:30am",
      },
    ],
  },
  {
    [keys.NAME]: "God's Warehouse",
    [keys.URL]: "https://www.godswarehouses.org",
    [keys.PHONE]: "5052662535",
    [keys.DATE_CHECKED]: "2025-12-15",
    [keys.ADDRESS_1]: "8011 Central Ave NE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87108",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Tue/Fri 3pm-6pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tuesday 3pm-6pm",
      },
      {
        [keys.DESCRIPTION]: "Food Boxes",
        [keys.HOURS]: "3rd Friday 11am-1pm",
      },
    ],
  },
  {
    [keys.NAME]: "All Nations Wellness & Healing Center",
    [keys.URL]: "https://www.fnch.org/services/all-nation-wellness-and-healing-center",
    [keys.PHONE]: "5057172704",
    [keys.DATE_CHECKED]: "2025-12-11",
    [keys.ADDRESS_1]: "6416 Zuni Rd SE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87108",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 8am-9:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri noon-1:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Gateway West",
    [keys.URL]: "https://www.cabq.gov/health-housing-homelessness/gateway-system-of-care/gateway-west",
    [keys.PHONE]: "5058399193",
    [keys.DATE_CHECKED]: "2025-11-29",
    [keys.ADDRESS_1]: "7440 Jim McDowell NW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87121",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Housing Navigation Center at Gateway",
    [keys.URL]: "https://www.cabq.gov/health-housing-homelessness/gateway-system-of-care/gateway-center",
    [keys.PHONE]: "5055378588",
    [keys.DATE_CHECKED]: "2025-12-01",
    [keys.ADDRESS_1]: "5400 Gibson Blvd SE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87108",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Barret Foundation",
    [keys.URL]: "https://www.barrettfoundation.org",
    [keys.PHONE]: "5052434887",
    [keys.DATE_CHECKED]: "2025-12-02",
    [keys.ADDRESS_1]: "10300 Constitution Ave. NE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87112",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Casa Q",
    [keys.URL]: "https://www.casaq.org",
    [keys.PHONE]: "5058722099",
    [keys.DATE_CHECKED]: "2025-12-02",
    [keys.DESCRIPTION]: "Shelter for LGBTQ+ youth",
  },
  {
    [keys.NAME]: "New Day Youth and Family Services",
    [keys.URL]: "https://www.ndnm.org/safe-home.html",
    [keys.PHONE]: "5059381060",
    [keys.DATE_CHECKED]: "2025-12-03",
    [keys.ADDRESS_1]: "2820 Ridgecrest SE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87108",
    [keys.SERVES]: [serves.YOUTH],
  },
  {
    [keys.NAME]: "Good Shepherd Center",
    [keys.URL]: "https://www.gscnm.org",
    [keys.PHONE]: "5052432527",
    [keys.DATE_CHECKED]: "2025-12-04",
    [keys.ADDRESS_1]: "218 Iron Avenue SW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87102",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Heading Home",
    [keys.URL]: "https://headinghome.org/get-help/#shelter-respite",
    [keys.PHONE]: "5053444340",
    [keys.DATE_CHECKED]: "2025-12-05",
    [keys.ADDRESS_1]: "715 Candelaria NE",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87107",
    [keys.DESCRIPTION]: "No walk ins, call ahead for referral.",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Joy Junction",
    [keys.URL]: "https://www.joyjunction.org/homeless-shelter",
    [keys.PHONE]: "5058776967",
    [keys.DATE_CHECKED]: "2025-12-12",
    [keys.ADDRESS_1]: "4500 2nd St. SW",
    [keys.CITY]: "Albuquerque",
    [keys.STATE]: "NM",
    [keys.ZIP_CODE]: "87105",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "SAFE House",
    [keys.URL]: "https://www.safehousenm.org",
    [keys.PHONE]: "5052474219",
    [keys.DATE_CHECKED]: "2025-12-05",
    [keys.DESCRIPTION]: "Shelter for survivors of domestic violence",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Jesus House",
    [keys.URL]: "https://jesushouseokc.org/get-help",
    [keys.PHONE]: "4052327164",
    [keys.DATE_CHECKED]: "2025-11-07",
    [keys.ADDRESS_1]: "1335 West Sheridan Ave",
    [keys.CITY]: "Oklahoma City",
    [keys.STATE]: "OK",
    [keys.ZIP_CODE]: "73106",
    [keys.DESCRIPTION]: "Substance abuse recovery program",
  },
];

module.exports = data;
