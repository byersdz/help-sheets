const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Salt Lake City";
data[keys.URL_NAME] = "salt-lake-city";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Shelter the Homeless Hotline",
    [keys.URL]: "https://homelessutah.org",
    [keys.PHONE]: "8019909999",
    [keys.DESCRIPTION]: "If you or someone you know is experiencing or at risk of homelessness, call for shelter and assistance",
    [keys.DATE_CHECKED]: "2026-04-11",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Vincent de Paul Dining Hall",
    [keys.URL]: "https://ccsutah.org/programs/st-vincent-de-paul-dining-hall",
    [keys.PHONE]: "8013637710",
    [keys.DATE_CHECKED]: "2026-04-30",
    [keys.ADDRESS_1]: "437 West 200 South",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84101",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11:30am-12:30pm, Sat 10am-11am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every Day 5pm-6pm",
      },
    ],
  },
  {
    [keys.NAME]: "Salt Lake City Mission",
    [keys.URL]: "https://saltlakecitymission.org/daily-meal-outreach-and-day-center",
    [keys.PHONE]: "8013556310",
    [keys.DATE_CHECKED]: "2026-05-05",
    [keys.ADDRESS_1]: "1151 S. Redwood Rd",
    [keys.ADDRESS_2]: "#106",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84104",
    [keys.DESCRIPTION]: "Food pantry and clothing by appointment",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11am-1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Hildegarde's Food pantry",
    [keys.URL]: "https://stmarksutah.org/foodpantry",
    [keys.PHONE]: "8013282303",
    [keys.DATE_CHECKED]: "2026-05-06",
    [keys.ADDRESS_1]: "231 E 100 S",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84111",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Wed/Fri 11am-1:30pm, Thur 5pm-6:30pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Gail Miller Resource Center",
    [keys.URL]: "https://theroadhome.org/resourcecenter/gail-miller-resource-center",
    [keys.PHONE]: "8014565900",
    [keys.DATE_CHECKED]: "2026-04-13",
    [keys.ADDRESS_1]: "242 W. Paramount Ave.",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84115",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Geraldine E. King Resource Center",
    [keys.URL]: "https://www.voaut.org/get-help/adult-homeless-services",
    [keys.PHONE]: "8019909999",
    [keys.DATE_CHECKED]: "2026-04-15",
    [keys.ADDRESS_1]: "131 E 700 S",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84111",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Pamela Atkinson Resource Center",
    [keys.URL]: "https://theroadhome.org/resourcecenter/south-salt-lake-mens-resource-center",
    [keys.PHONE]: "8013594142",
    [keys.DATE_CHECKED]: "2026-04-16",
    [keys.ADDRESS_1]: "3380 South 1000 West",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84119",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Family Promise",
    [keys.URL]: "https://familypromisesaltlake.org",
    [keys.PHONE]: "8019618622",
    [keys.DATE_CHECKED]: "2026-04-16",
    [keys.ADDRESS_1]: "814 West 800 South",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84104",
    [keys.SERVES]: [serves.FAMILIES],
  },
  {
    [keys.NAME]: "Connie Crosby Family Resource Center",
    [keys.URL]: "https://theroadhome.org/resourcecenter/connie-crosby-family-resource-center",
    [keys.PHONE]: "8015691201",
    [keys.DATE_CHECKED]: "2026-04-18",
    [keys.ADDRESS_1]: "529 W. 9th Ave",
    [keys.CITY]: "Midvale",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84047",
    [keys.SERVES]: [serves.FAMILIES],
  },
  {
    [keys.NAME]: "Rescue Mission of Salt Lake Men's Center",
    [keys.URL]: "https://rescuesaltlake.org/get-help",
    [keys.PHONE]: "8013551302",
    [keys.DATE_CHECKED]: "2026-04-19",
    [keys.ADDRESS_1]: "463 S 400 W",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84101",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Rescue Mission of Salt Lake Women's Center",
    [keys.URL]: "https://rescuesaltlake.org/get-help",
    [keys.PHONE]: "8015215925",
    [keys.DATE_CHECKED]: "2026-04-19",
    [keys.ADDRESS_1]: "1165 S State Street",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84111",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "YWCA Shelter (Domestic Violence)",
    [keys.URL]: "https://www.ywcautah.org/survivor-services",
    [keys.PHONE]: "8015378600",
    [keys.DATE_CHECKED]: "2026-04-21",
    [keys.ADDRESS_1]: "322 East 300 South",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84111",
  },
  {
    [keys.NAME]: "Salt Lake County Youth Services",
    [keys.URL]: "https://www.saltlakecounty.gov/youth",
    [keys.PHONE]: "3854684500",
    [keys.DATE_CHECKED]: "2026-04-23",
    [keys.ADDRESS_1]: "177 West Price Avenue",
    [keys.CITY]: "Salt Lake City",
    [keys.STATE]: "UT",
    [keys.ZIP_CODE]: "84115",
    [keys.DESCRIPTION]: "Safety, shelter, and support to at-risk and under-served youth and families residing in Salt lake County",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "HELP of Southern Nevada",
    [keys.URL]: "https://www.helpsonv.org",
    [keys.PHONE]: "7023694357",
    [keys.DATE_CHECKED]: "2026-03-25",
    [keys.ADDRESS_1]: "1640 E. Flamingo Rd.",
    [keys.ADDRESS_2]: "#100",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89119",
    [keys.DESCRIPTION]: "Housing programs, referrals, and support services",
  },
];

module.exports = data;
