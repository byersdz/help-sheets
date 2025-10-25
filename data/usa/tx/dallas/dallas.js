const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Dallas";
data[keys.URL_NAME] = "dallas";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Housing Forward Homeless Crisis Help Line",
    [keys.URL]: "https://www.mdhadallas.org/help-resources",
    [keys.PHONE]: "8884116802",
    [keys.DATE_CHECKED]: "2025-10-22",
    [keys.DESCRIPTION]: "Call if you are currently experiencing homelessness",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Trinity Center",
    [keys.URL]: "https://www.trinitycenteraustin.org/programs",
    [keys.DATE_CHECKED]: "2025-10-09",
    [keys.ADDRESS_1]: "304 E. 7th St",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.DESCRIPTION]: "Also provides clothing closet, bus passes, limited financial assistance",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 9am-9:30am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon-Thur 4pm-4:30pm, Sun 3:30pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Thur 2pm-6pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "The Bridge",
    [keys.URL]: "https://www.bridgehrc.org",
    [keys.PHONE]: "2146701507",
    [keys.DATE_CHECKED]: "2025-10-22",
    [keys.ADDRESS_1]: "1818 Corsicana Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75201",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Dallas Life",
    [keys.URL]: "https://dallaslife.org",
    [keys.PHONE]: "2144211380",
    [keys.DATE_CHECKED]: "2025-10-23",
    [keys.ADDRESS_1]: "1100 Cadiz Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75215",
    [keys.DESCRIPTION]: "$15 a night, first 3 days free",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Austin Street Center",
    [keys.URL]: "https://austinstreet.org/get-help",
    [keys.PHONE]: "2144284242",
    [keys.DATE_CHECKED]: "2025-10-24",
    [keys.ADDRESS_1]: "1717 Jeffries Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75226",
    [keys.DESCRIPTION]: "Serves women 18+, men 45+",
  },
  {
    [keys.NAME]: "Union Gospel Mission Men's Shelter",
    [keys.URL]: "https://ugmdallas.org/calvert-place-mens-shelter",
    [keys.PHONE]: "2146376117",
    [keys.DATE_CHECKED]: "2025-10-24",
    [keys.ADDRESS_1]: "3211 Irving Blvd.",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75247",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Union Gospel Mission Women's Shelter",
    [keys.URL]: "https://ugmdallas.org/shelter-and-housing-for-women-and-children",
    [keys.PHONE]: "2146382988",
    [keys.DATE_CHECKED]: "2025-10-24",
    [keys.ADDRESS_1]: "4815 Cass Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75235",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Home Point",
    [keys.URL]: "https://homepoint.org",
    [keys.PHONE]: "2148284244",
    [keys.DATE_CHECKED]: "2025-10-25",
    [keys.ADDRESS_1]: "2800 Live Oak Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75204",
    [keys.DESCRIPTION]: "Housing programs. Rent / Utility assistance.",
  },
];

module.exports = data;
