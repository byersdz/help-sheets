const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Seattle";
data[keys.URL_NAME] = "seattle";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Seattle Indian Center",
    [keys.URL]: "https://seattleindiancenter.org/programs",
    [keys.PHONE]: "2063298700",
    [keys.DATE_CHECKED]: "2026-10-18",
    [keys.ADDRESS_1]: "624 South Dearborn Street",
    [keys.CITY]: "Seattle",
    [keys.STATE]: "WA",
    [keys.ZIP_CODE]: "98134",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fr 9am-10am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri noon-1:15pm",
      },
    ],
  },
  {
    [keys.NAME]: "Bread of life Mission",
    [keys.URL]: "https://breadoflifemission.org/get-help",
    [keys.PHONE]: "2066823579",
    [keys.PHONE_EXTENSION]: "100",
    [keys.DATE_CHECKED]: "2026-10-15",
    [keys.ADDRESS_1]: "97 S. Main St",
    [keys.CITY]: "Seattle",
    [keys.STATE]: "WA",
    [keys.ZIP_CODE]: "98104",
    [keys.DESCRIPTION]: "Day shelter with showers, mail, bus passes, computers, and social services",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Nightwatch Shelter",
    [keys.URL]: "https://www.seattlenightwatch.org/get-help/nightwatch-shelter",
    [keys.PHONE]: "2063292099",
    [keys.DATE_CHECKED]: "2026-10-10",
    [keys.ADDRESS_1]: "302 14th Ave S",
    [keys.CITY]: "Seattle",
    [keys.STATE]: "WA",
    [keys.ZIP_CODE]: "98144",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Union Gospel Mission",
    [keys.URL]: "https://www.ugm.org",
    [keys.PHONE]: "2065014357",
    [keys.DATE_CHECKED]: "2026-10-14",
    [keys.ADDRESS_1]: "318 2nd Ave Extension S",
    [keys.CITY]: "Seattle",
    [keys.STATE]: "WA",
    [keys.ZIP_CODE]: "98104",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "William Booth Center",
    [keys.URL]: "https://seattle.salvationarmy.org/seattle_services/william-booth-center",
    [keys.PHONE]: "2063815707",
    [keys.DATE_CHECKED]: "2026-10-15",
    [keys.ADDRESS_1]: "811 Maynard Ave. S.",
    [keys.CITY]: "Seattle",
    [keys.STATE]: "WA",
    [keys.ZIP_CODE]: "98134",
    [keys.SERVES]: [serves.MEN, serves.VETERANS],
  },
  {
    [keys.NAME]: "St. Martin de Porres Shelter",
    [keys.URL]: "https://ccsww.org/services/st-martin-de-porres-shelter/",
    [keys.PHONE]: "2063236341",
    [keys.DATE_CHECKED]: "2026-10-11",
    [keys.ADDRESS_1]: "1561 Alaskan Way South",
    [keys.CITY]: "Seattle",
    [keys.STATE]: "WA",
    [keys.ZIP_CODE]: "98134",
    [keys.DESCRIPTION]: "Serves men 50 years or older",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Outside In",
    [keys.URL]: "https://outsidein.org",
    [keys.PHONE]: "5035353860",
    [keys.DATE_CHECKED]: "2026-08-19",
    [keys.ADDRESS_1]: "1132 SW 13th Ave",
    [keys.CITY]: "Portland",
    [keys.STATE]: "OR",
    [keys.ZIP_CODE]: "97205",
    [keys.DESCRIPTION]: "Medical services",
  },
];

module.exports = data;
