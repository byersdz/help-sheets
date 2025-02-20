const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Jacksonville";
data[keys.URL_NAME] = "jacksonville";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Clara White Mission",
    [keys.URL]: "https://clarawhitemission.org",
    [keys.PHONE]: "9043544162",
    [keys.DATE_CHECKED]: "2025-02-11",
    [keys.ADDRESS_1]: "613 West Ashley Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "To Go Lunch",
        [keys.HOURS]: "Mon/Tue 10am-11:30am",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Wed/Thur 9am-10:30am",
      },
    ],
  },
  {
    [keys.NAME]: "City Rescue Mission",
    [keys.URL]: "https://www.crmjax.org",
    [keys.PHONE]: "9044215161",
    [keys.ADDRESS_1]: "234 W. State St.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-20",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Everyday 4:30pm-5:30pm",
      },
    ],

  },
  {
    [keys.NAME]: "Gleaners Dispatch",
    [keys.URL]: "https://www.gleanersdispatch.org/get-help",
    [keys.PHONE]: "9047776344",
    [keys.DATE_CHECKED]: "2025-02-11",
    [keys.ADDRESS_1]: "4151 Old Middleburg Road N",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32210",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Distribution",
        [keys.HOURS]: "Saturday 8:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Downtown Ecumenical Services",
    [keys.URL]: "https://descjax.org",
    [keys.PHONE]: "9043587955",
    [keys.DATE_CHECKED]: "2025-02-16",
    [keys.ADDRESS_1]: "215 N. Ocean Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DESCRIPTION]: "Also provides financial assistance",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Groceries",
        [keys.HOURS]: "Mon/Wed/Fri 9am-noon",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Mon/Wed/Fri 9am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Catholic Charities Food Pantry",
    [keys.URL]: "https://www.ccbjax.org/food-assistance",
    [keys.PHONE]: "9043544846",
    [keys.DATE_CHECKED]: "2025-02-16",
    [keys.ADDRESS_1]: "1430 Bernita Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32211",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Wed/Fri 8:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Feeding Northeast Florida",
    [keys.URL]: "https://feedingnefl.org/",
    [keys.DATE_CHECKED]: "2025-02-20",
    [keys.PHONE]: "9045131333",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Rescue Mission",
    [keys.URL]: "https://www.crmjax.org",
    [keys.PHONE]: "9044215161",
    [keys.ADDRESS_1]: "234 W. State St.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
  {
    [keys.NAME]: "Trinity Rescue Mission",
    [keys.URL]: "https://trinityrescue.org",
    [keys.PHONE]: "9043551205",
    [keys.ADDRESS_1]: "622 West Union Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
  {
    [keys.NAME]: "Salvation Army Towers Center of Hope",
    [keys.URL]: "https://jacksonville.salvationarmyflorida.org/nefl/the-towers-center-of-hope",
    [keys.PHONE]: "9043568641",
    [keys.ADDRESS_1]: "900 West Adams St",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32204",
    [keys.DATE_CHECKED]: "2025-02-10",
  },
  {
    [keys.NAME]: "Sulzbacher Center",
    [keys.URL]: "https://sulzbacherjax.org/get-help",
    [keys.PHONE]: "9043941356",
    [keys.ADDRESS_1]: "611 E. Adams Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-10",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Sulzbacher Villiage",
    [keys.URL]: "https://sulzbacherjax.org/get-help",
    [keys.PHONE]: "9043944950",
    [keys.ADDRESS_1]: "5455 Springfield Blvd",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32208",
    [keys.DATE_CHECKED]: "2025-02-10",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Hubbard House",
    [keys.URL]: "https://www.hubbardhouse.org",
    [keys.PHONE]: "9043543114",
    [keys.DESCRIPTION]: "Provides shelter for victims of domestic violence",
    [keys.DATE_CHECKED]: "2025-02-10",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "City Rescue Mission Lifebuilders Addiction Recovery",
    [keys.URL]: "https://www.crmjax.org/services/lifebuilders-program",
    [keys.PHONE]: "9043874357",
    [keys.ADDRESS_1]: "426 S. McDuff Ave.",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32254",
    [keys.DATE_CHECKED]: "2025-02-03",
  },
  {
    [keys.NAME]: "Volunteers in Medicine",
    [keys.URL]: "https://www.vimjax.org/",
    [keys.PHONE]: "9043992766",
    [keys.ADDRESS_1]: "3728 Philips Highway",
    [keys.ADDRESS_2]: "Suite #34",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32207",
    [keys.DESCRIPTION]: "Free clinic for the working uninsured",
    [keys.DATE_CHECKED]: "2025-02-17",
  },
  {
    [keys.NAME]: "Jacksonville Housing Authority",
    [keys.URL]: "https://www.jaxha.org",
    [keys.PHONE]: "9046303810",
    [keys.ADDRESS_1]: "1300 N Broad Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32202",
    [keys.DATE_CHECKED]: "2025-02-05",
  },
  {
    [keys.NAME]: "ElderSource",
    [keys.URL]: "https://myeldersource.org",
    [keys.PHONE]: "8882424464",
    [keys.ADDRESS_1]: "10688 Old St. Augustine Road",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32257",
    [keys.DATE_CHECKED]: "2025-02-17",
    [keys.DESCRIPTION]: "Resources for elders and caregivers",
  },
  {
    [keys.NAME]: "NFCAA",
    [keys.URL]: "https://nfcaa.org",
    [keys.PHONE]: "9043987472",
    [keys.ADDRESS_1]: "2055 Reyko Road",
    [keys.ADDRESS_2]: "St. Johns Building, Suite 200",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32207",
    [keys.DATE_CHECKED]: "2025-02-19",
    [keys.DESCRIPTION]: "Utility assistance. Job training assistance",
  },
  {
    [keys.NAME]: "Gateway Community Services",
    [keys.URL]: "https://gatewaycommunity.com",
    [keys.PHONE]: "8773899966",
    [keys.ADDRESS_1]: "555 Stockton Street",
    [keys.CITY]: "Jacksonville",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32204",
    [keys.DATE_CHECKED]: "2025-02-19",
    [keys.DESCRIPTION]: "Addiction treatment",
  },
  {
    [keys.NAME]: "Goodwill",
    [keys.URL]: "https://goodwillnorthfl.org",
    [keys.PHONE]: "9043841361",
    [keys.DATE_CHECKED]: "2025-02-19",
    [keys.DESCRIPTION]: "Employment services",
  },
];

module.exports = data;
