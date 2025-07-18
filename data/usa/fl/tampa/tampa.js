const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Tampa";
data[keys.URL_NAME] = "tampa";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Trinity Cafe Nebraska",
    [keys.URL]: "https://feedingtampabay.org/ways-we-serve/trinity-cafe",
    [keys.PHONE]: "8132541190",
    [keys.DATE_CHECKED]: "2025-05-26",
    [keys.ADDRESS_1]: "2801 N. Nebraska Ave.",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 11:30am-12:30pm, Sat/Sun 9am-10am",
      },
    ],
  },
  {
    [keys.NAME]: "Trinity Cafe at Feeding Pinellas",
    [keys.URL]: "https://feedingtampabay.org/ways-we-serve/trinity-cafe",
    [keys.PHONE]: "8132541190",
    [keys.DATE_CHECKED]: "2025-05-26",
    [keys.ADDRESS_1]: "6330 54th Ave N.",
    [keys.CITY]: "St. Petersburg",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33709",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 11:30am-12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Thur/Fri 1:30pm-4:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "The Bistro at Causeway Center",
    [keys.URL]: "https://feedingtampabay.org/ways-we-serve/trinity-cafe",
    [keys.PHONE]: "8132541190",
    [keys.DATE_CHECKED]: "2025-05-26",
    [keys.ADDRESS_1]: "3624 Causeway Blvd",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33619",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon/Wed 11am-2pm",
      },
    ],
  },
  {
    [keys.NAME]: "Metropolitan Ministries Metro Market",
    [keys.URL]: "https://www.metromin.org/get-help",
    [keys.PHONE]: "8132091200",
    [keys.DATE_CHECKED]: "2025-05-15",
    [keys.ADDRESS_1]: "2301 N Tampa St",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
    [keys.DESCRIPTION]: "Also provide meals in multiple locations, see website for details",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Groceries",
        [keys.HOURS]: "Mon-Fri 9am-5pm",
      },
    ],
  },
  {
    [keys.NAME]: "Beaming Hope Church",
    [keys.URL]: "https://beaminghope.org",
    [keys.PHONE]: "7272163364",
    [keys.DATE_CHECKED]: "2025-06-04",
    [keys.ADDRESS_1]: "11000 110TH Ave N",
    [keys.CITY]: "Largo",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33778",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Groceries",
        [keys.HOURS]: "Tue 11:30am-12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Clearview UMC",
    [keys.URL]: "https://clearviewumc.org/food",
    [keys.PHONE]: "7275224673",
    [keys.DATE_CHECKED]: "2025-06-04",
    [keys.ADDRESS_1]: "4515 38th Ave N",
    [keys.CITY]: "St. Petersburg",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33713",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Free Food",
        [keys.HOURS]: "Sat 8:15am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Daystar Life Center",
    [keys.URL]: "https://daystarlife.org",
    [keys.PHONE]: "7278250442",
    [keys.DATE_CHECKED]: "2025-06-08",
    [keys.ADDRESS_1]: "1055 28th Street South",
    [keys.CITY]: "St. Petersburg",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33712",
    [keys.DESCRIPTION]: "Food Pantry, Clothing Closet, Rent/Utility Assistance",
  },
  {
    [keys.NAME]: "Hope Villiages of America",
    [keys.URL]: "https://hopevillagesofamerica.org/help/#food",
    [keys.PHONE]: "7274434031",
    [keys.DATE_CHECKED]: "2025-06-15",
    [keys.ADDRESS_1]: "700 Druid Road",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33756",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon-Fri 12:30pm-3:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Wesley UMC",
    [keys.URL]: "https://www.wesleystpete.org/food-pantry-thrift-store-aa-more",
    [keys.PHONE]: "7278964797",
    [keys.DATE_CHECKED]: "2025-06-16",
    [keys.ADDRESS_1]: "301 37th Avenue North",
    [keys.CITY]: "St. Petersburg",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33704",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon/Wed/Fri 9am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Vincent de Paul Community Kitchen",
    [keys.URL]: "https://clearwatersvdp.org/kitchen",
    [keys.PHONE]: "7274413790",
    [keys.DATE_CHECKED]: "2025-06-15",
    [keys.ADDRESS_1]: "1345 Park Street",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33756",
  },
  {
    [keys.NAME]: "Feeding Tampa Bay",
    [keys.URL]: "https://feedingtampabay.org",
    [keys.PHONE]: "8132541190",
    [keys.DATE_CHECKED]: "2025-05-26",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Catholic Charities Tampa Hope",
    [keys.URL]: "https://www.ccdosp.org/tampa-hope",
    [keys.PHONE]: "8133942881",
    [keys.DATE_CHECKED]: "2025-05-14",
    [keys.ADDRESS_1]: "3704 E. 3rd Avenue",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33605",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "The Spring",
    [keys.URL]: "https://thespring.org/get-help/shelter",
    [keys.PHONE]: "8132477233",
    [keys.DATE_CHECKED]: "2025-05-14",
    [keys.DESCRIPTION]: "Shelter for survivors of domestic violence and their children",
  },
  {
    [keys.NAME]: "The Community Housing Solutions Center",
    [keys.URL]: "https://www.covebh.org/community-housing-solutions-center",
    [keys.PHONE]: "8136218781",
    [keys.DATE_CHECKED]: "2025-05-15",
    [keys.ADDRESS_1]: "3630 N. 50th Street",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33619",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Metropolitan Ministries",
    [keys.URL]: "https://www.metromin.org/get-help",
    [keys.PHONE]: "8132091000",
    [keys.DATE_CHECKED]: "2025-05-15",
    [keys.ADDRESS_1]: "2002 N. Florida Ave",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://southernusa.salvationarmy.org/florida",
    [keys.PHONE]: "8135490641",
    [keys.DATE_CHECKED]: "2025-05-16",
    [keys.ADDRESS_1]: "1514 N. Florida Avenue",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
  },
  {
    [keys.NAME]: "St. Vincent de Paul CARE Center",
    [keys.URL]: "https://www.svdpsp.org/programs/homeless-services/care-center",
    [keys.PHONE]: "7279548676",
    [keys.DATE_CHECKED]: "2025-05-20",
    [keys.ADDRESS_1]: "401 15th St N",
    [keys.CITY]: "St. Petersburg",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33705",
  },
  {
    [keys.NAME]: "Dawning Family Services",
    [keys.URL]: "https://www.dawningfamilyservices.org/get-help",
    [keys.PHONE]: "8138752024",
    [keys.DATE_CHECKED]: "2025-05-22",
    [keys.ADDRESS_1]: "6718 N Armenia Ave",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33604",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Operation PAR",
    [keys.URL]: "https://www.operationpar.org",
    [keys.PHONE]: "7275244311",
    [keys.DATE_CHECKED]: "2025-06-19",
    [keys.ADDRESS_1]: "6150 150th Ave N",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33760",
    [keys.DESCRIPTION]: "Substance abuse recovery",
  },
  {
    [keys.NAME]: "Pinellas Ex-offender Re-entry Coalition",
    [keys.URL]: "https://exoffender.org",
    [keys.PHONE]: "8555057372",
    [keys.DATE_CHECKED]: "2025-06-24",
    [keys.ADDRESS_1]: "12810 US HWY 19 N",
    [keys.ADDRESS_2]: "Suite 1",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33764",
    [keys.DESCRIPTION]: "Job, housing, and education assistance for ex-offenders",
  },
  {
    [keys.NAME]: "Gulf Coast Jewish Family and Community Services",
    [keys.URL]: "https://gulfcoastjfcs.org",
    [keys.PHONE]: "7274791800",
    [keys.DATE_CHECKED]: "2025-07-04",
    [keys.ADDRESS_1]: "14041 Icot Boulevard",
    [keys.CITY]: "Clearwater",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33760",
    [keys.DESCRIPTION]: "affordable housing, rent and utility assistance, and more",
  },
  {
    [keys.NAME]: "Reach St. Pete",
    [keys.URL]: "https://reachstpete.org/get-help",
    [keys.PHONE]: "7272758655",
    [keys.DATE_CHECKED]: "2025-07-04",
    [keys.DESCRIPTION]: "Limited utility and rent assistance",
  },
];

module.exports = data;
