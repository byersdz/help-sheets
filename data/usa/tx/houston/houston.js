const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Houston";
data[keys.URL_NAME] = "houston";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Crossroads",
    [keys.URL]: "https://crossroadsatparkplace.org",
    [keys.PHONE]: "7132523604",
    [keys.DATE_CHECKED]: "2025-08-26",
    [keys.ADDRESS_1]: "7843 Park Place Blvd.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77087",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Tue/Thur 7:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Thur 11:15am",
      },
    ],
  },
  {
    [keys.NAME]: "The Beacon",
    [keys.URL]: "https://www.beaconhomeless.org/gethelp",
    [keys.PHONE]: "7132209737",
    [keys.DATE_CHECKED]: "2025-08-28",
    [keys.ADDRESS_1]: "1212 Prairie Street",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77002",
    [keys.DESCRIPTION]: "Also provides showers and laundry",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Thur-Mon 7am-9:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Thur-Mon 11am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Martha's Kitchen",
    [keys.URL]: "https://stmartha.com/marthas-kitchen",
    [keys.PHONE]: "7132242522",
    [keys.DATE_CHECKED]: "2025-09-04",
    [keys.ADDRESS_1]: "322 South Jensen Dr",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77003",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "1000 Hills Ministry",
    [keys.URL]: "https://1000hills.org",
    [keys.PHONE]: "2817878275",
    [keys.DATE_CHECKED]: "2025-09-10",
    [keys.ADDRESS_1]: "2800 St. Charles St.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Sat 7:30pm, Sun 3pm",
      },
    ],
  },
  {
    [keys.NAME]: "Emergency Aid Coalition",
    [keys.URL]: "https://eachouston.org/services",
    [keys.PHONE]: "7133433061",
    [keys.DATE_CHECKED]: "2025-09-12",
    [keys.ADDRESS_1]: "5401 Fannin St.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
    [keys.DESCRIPTION]: "Groceries and clothing, by appointment only",
  },
  {
    [keys.NAME]: "Rose of Sharon",
    [keys.URL]: "https://www.roseofsharon4thward.org/s-projects-basic",
    [keys.PHONE]: "7136511215",
    [keys.DATE_CHECKED]: "2025-09-14",
    [keys.ADDRESS_1]: "1106 Valentine St.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77019",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Thur 11am, Sat 11:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Trinity Episcopal Church",
    [keys.URL]: "https://www.trinitymidtown.org/our-community/outreach/sandwich-makers",
    [keys.PHONE]: "7135284100",
    [keys.DATE_CHECKED]: "2025-09-14",
    [keys.ADDRESS_1]: "1015 Holman St.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Fri 5:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Montrose Street Reach",
    [keys.URL]: "https://www.montrosestreetreach.com/what-we-do.html",
    [keys.PHONE]: "2816824379",
    [keys.DATE_CHECKED]: "2025-09-16",
    [keys.ADDRESS_1]: "1206 Lovett Blvd",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77006",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Thursday 6pm",
      },
    ],
  },
  {
    [keys.NAME]: "Montrose Street Reach - Morning Outreach",
    [keys.URL]: "https://www.montrosestreetreach.com/what-we-do.html",
    [keys.PHONE]: "2816824379",
    [keys.DATE_CHECKED]: "2025-09-16",
    [keys.ADDRESS_1]: "2121 Main St",
    [keys.DESCRIPTION]: "Old Greyhound Bus Station",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food",
        [keys.HOURS]: "Tue/Wed 10am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Cy-Fair Helping Hands",
    [keys.URL]: "https://www.cyfairhelpinghands.org/homeless-services",
    [keys.PHONE]: "2818581222",
    [keys.DATE_CHECKED]: "2025-09-18",
    [keys.ADDRESS_1]: "9204 Emmott Road",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77040",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal, Shower, Laundry",
        [keys.HOURS]: "Tue/Wed 10am-1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Salvation Army Young Adult Resource Center",
    [keys.URL]: "https://salvationarmyhouston.org/houston/YARC",
    [keys.PHONE]: "7137520677",
    [keys.DATE_CHECKED]: "2025-09-19",
    [keys.ADDRESS_1]: "1621 McGowen St",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
    [keys.DESCRIPTION]: "Meals, Shower, Laundry",
    [keys.SERVES]: [serves.YOUTH],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Star of Hope",
    [keys.URL]: "https://www.sohmission.org",
    [keys.PHONE]: "7137480700",
    [keys.DATE_CHECKED]: "2025-08-17",
    [keys.ADDRESS_1]: "1811 Ruiz St.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77002",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Star of Hope Women and Family",
    [keys.URL]: "https://www.sohmission.org",
    [keys.PHONE]: "7137480700",
    [keys.DATE_CHECKED]: "2025-08-17",
    [keys.ADDRESS_1]: "2575 Reed Road",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77051",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Magnificat House",
    [keys.URL]: "https://mhihouston.org/need-assistance",
    [keys.PHONE]: "7135294231",
    [keys.DATE_CHECKED]: "2025-08-19",
    [keys.ADDRESS_1]: "1410 Elgin St",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77004",
  },
  {
    [keys.NAME]: "Bay Area Homeless Services",
    [keys.URL]: "https://bahs-shelter.org",
    [keys.PHONE]: "2818371654",
    [keys.DATE_CHECKED]: "2025-08-21",
    [keys.ADDRESS_1]: "3406 Wisconsin St",
    [keys.CITY]: "Baytown",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77520",
  },
  {
    [keys.NAME]: "Family Promise",
    [keys.URL]: "https://fplh.org/get-help",
    [keys.PHONE]: "2814413754",
    [keys.DATE_CHECKED]: "2025-08-25",
    [keys.ADDRESS_1]: "111 South Avenue G.",
    [keys.CITY]: "Humble",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77338",
    [keys.SERVES]: [serves.FAMILIES],
  },
  {
    [keys.NAME]: "The Mission of Yahweh",
    [keys.URL]: "https://missionofyahweh.org",
    [keys.PHONE]: "7139300667",
    [keys.DATE_CHECKED]: "2025-08-25",
    [keys.ADDRESS_1]: "10247 Algiers Road",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77041",
    [keys.SERVES]: [serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Covenant House",
    [keys.URL]: "https://www.covenanthousetx.org",
    [keys.PHONE]: "7135232231",
    [keys.DATE_CHECKED]: "2025-08-25",
    [keys.ADDRESS_1]: "1111 Lovett Blvd.",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77006",
    [keys.SERVES]: [serves.AGE_18_TO_24],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://salvationarmyhouston.org",
    [keys.PHONE]: "7132242875",
    [keys.DATE_CHECKED]: "2025-08-19",
  },
];

module.exports = data;
