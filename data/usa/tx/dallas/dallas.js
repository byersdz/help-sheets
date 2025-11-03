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
    [keys.NAME]: "The Bridge",
    [keys.URL]: "https://www.bridgehrc.org",
    [keys.PHONE]: "2146701507",
    [keys.DATE_CHECKED]: "2025-10-27",
    [keys.ADDRESS_1]: "1818 Corsicana Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75201",
    [keys.DESCRIPTION]: "Day shelter, night shelter, hygiene supplies, laundry, barbershop, mail",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Every day 7:30am-8:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Every day noon-1pm",
      },
    ],
  },
  {
    [keys.NAME]: "SoupMobile",
    [keys.URL]: "https://soupmobile.org",
    [keys.PHONE]: "2146556396",
    [keys.DATE_CHECKED]: "2025-10-27",
    [keys.ADDRESS_1]: "2490 Coombs Street",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75215",
    [keys.DESCRIPTION]: "Mobile soup kitchen",
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
  {
    [keys.NAME]: "Genesis Women's Shelter",
    [keys.URL]: "https://www.genesisshelter.org",
    [keys.PHONE]: "2149464357",
    [keys.DATE_CHECKED]: "2025-10-29",
    [keys.ADDRESS_1]: "2023 Lucas Drive",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75219",
    [keys.DESCRIPTION]: "Shelter for women experiencing domestic abuse",
  },
  {
    [keys.NAME]: "Hope's Door",
    [keys.URL]: "https://hdnbc.org/find-help-now",
    [keys.PHONE]: "9722760057",
    [keys.DATE_CHECKED]: "2025-10-30",
    [keys.DESCRIPTION]: "Shelter for victims of domestic violence",
  },
  {
    [keys.NAME]: "Emily's Place",
    [keys.URL]: "https://www.emilysplacetx.org",
    [keys.PHONE]: "9724247775",
    [keys.DATE_CHECKED]: "2025-10-31",
    [keys.DESCRIPTION]: "Transitional housing for women experiencing domestic violence",
  },
  {
    [keys.NAME]: "Women in Need",
    [keys.URL]: "https://www.wintexas.org",
    [keys.PHONE]: "9034544357",
    [keys.DATE_CHECKED]: "2025-11-02",
    [keys.DESCRIPTION]: "Shelter for victims of domestic violence",
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
  {
    [keys.NAME]: "Resource Center",
    [keys.URL]: "https://myresourcecenter.org",
    [keys.PHONE]: "2145215124",
    [keys.DATE_CHECKED]: "2025-10-28",
    [keys.ADDRESS_1]: "5750 Cedar Springs Rd.",
    [keys.CITY]: "Dallas",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "75235",
    [keys.DESCRIPTION]: "LGBTQIA+ health and wellness",
  },
];

module.exports = data;
