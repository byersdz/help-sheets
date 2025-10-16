const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Austin";
data[keys.URL_NAME] = "austin";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
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
  {
    [keys.NAME]: "Angel House Soup Kitchen",
    [keys.URL]: "https://www.austinbaptistchapel.com",
    [keys.PHONE]: "5126432327",
    [keys.DATE_CHECKED]: "2025-10-10",
    [keys.ADDRESS_1]: "908 E Cesar Chavez St.",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78702",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Everyday 9:30am-10am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Everyday 11am-12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Caritas Community Kitchen",
    [keys.URL]: "https://caritasofaustin.org",
    [keys.PHONE]: "5124794610",
    [keys.DATE_CHECKED]: "2025-10-11",
    [keys.ADDRESS_1]: "611 Neches Street",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11am-12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Sunrise Homeless Navigation Center",
    [keys.URL]: "https://sunrisenavigationcenter.org/get-help",
    [keys.PHONE]: "5123682685",
    [keys.DATE_CHECKED]: "2025-10-12",
    [keys.ADDRESS_1]: "4430 Menchaca Rd",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78745",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food, Day Center",
        [keys.HOURS]: "Mon-Fri 9am-1pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Fri 9am-11am",
      },
    ],
  },
  {
    [keys.NAME]: "Central Presbyterian Church",
    [keys.URL]: "https://cpcaustin.org/ministries-fellowship/neighbors/central-mission",
    [keys.PHONE]: "5124722445",
    [keys.DATE_CHECKED]: "2025-10-12",
    [keys.ADDRESS_1]: "200 E. 8th Street",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast, Toiletries, Clothing",
        [keys.HOURS]: "Thursday 8am-11am",
      },
    ],
  },
  {
    [keys.NAME]: "Community of Christ",
    [keys.URL]: "https://ccox82.wixsite.com/austin-cofchrist",
    [keys.DATE_CHECKED]: "2025-10-13",
    [keys.ADDRESS_1]: "2132 Bluebonnet Lane",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78704",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Sunday 9am-9:30am",
      },
    ],
  },
  {
    [keys.NAME]: "First United Methodist",
    [keys.URL]: "https://www.fumcaustin.org",
    [keys.DATE_CHECKED]: "2025-10-13",
    [keys.PHONE]: "5124785684",
    [keys.ADDRESS_1]: "1201 Lavaca Street",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Tue/Thur 5:15am-7:15am",
      },
    ],
  },
  {
    [keys.NAME]: "University Baptist Church",
    [keys.URL]: "https://www.ubcaustin.org",
    [keys.DATE_CHECKED]: "2025-10-16",
    [keys.PHONE]: "5124788559",
    [keys.ADDRESS_1]: "2130 Guadalupe St",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78705",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Thursday 5pm-6pm",
      },
    ],
  },
  {
    [keys.NAME]: "University United Methodist Church",
    [keys.URL]: "https://www.uumc.org/open-door",
    [keys.DATE_CHECKED]: "2025-10-16",
    [keys.PHONE]: "5124789387",
    [keys.ADDRESS_1]: "2409 Guadalupe St",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78705",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Saturday 8am-9:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Mobile Loaves & Fishes",
    [keys.URL]: "https://mlf.org/truck-schedules",
    [keys.DATE_CHECKED]: "2025-10-15",
    [keys.PHONE]: "5123287299",
    [keys.DESCRIPTION]: "Food Truck, multiple locations",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Austin Shelter for Women and Children",
    [keys.URL]: "https://salvationarmytexas.org",
    [keys.PHONE]: "5129330600",
    [keys.DATE_CHECKED]: "2025-09-30",
    [keys.ADDRESS_1]: "4613 Tannehill Ln",
    [keys.ADDRESS_2]: "Bldg 3",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78721",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Eighth Street Shelter",
    [keys.URL]: "https://urban-alchemy.us/cities/austin",
    [keys.PHONE]: "5125221097",
    [keys.DATE_CHECKED]: "2025-10-03",
    [keys.ADDRESS_1]: "501 East 8th St.",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.SERVES]: [serves.WOMEN, serves.TRANSGENDER],
  },
  {
    [keys.NAME]: "Austin Resource Center for the Homeless",
    [keys.URL]: "https://urban-alchemy.us/cities/austin",
    [keys.PHONE]: "5125221097",
    [keys.DATE_CHECKED]: "2025-10-03",
    [keys.ADDRESS_1]: "500 E 7th Street",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78701",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "SAFE",
    [keys.URL]: "https://www.safeaustin.org",
    [keys.PHONE]: "5122677233",
    [keys.DATE_CHECKED]: "2025-10-06",
    [keys.DESCRIPTION]: "Emergency and transitional shelter for individuals and families escaping domestic violence",
  },
  {
    [keys.NAME]: "Casa Marianella",
    [keys.URL]: "https://www.casamarianella.org",
    [keys.PHONE]: "5123855571",
    [keys.DATE_CHECKED]: "2025-10-07",
    [keys.ADDRESS_1]: "821 Gunter Street",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78702",
    [keys.DESCRIPTION]: "Shelter and support services for displaced immigrants",
  },
  {
    [keys.NAME]: "LifeWorks",
    [keys.URL]: "https://www.lifeworksaustin.org",
    [keys.PHONE]: "5127352400",
    [keys.DATE_CHECKED]: "2025-10-08",
    [keys.ADDRESS_1]: "835 North Pleasant Valley Road",
    [keys.CITY]: "Austin",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "78702",
    [keys.DESCRIPTION]: "Emergency shelter for individuals 17 years old and younger",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Harris County Domestic Violence Coordinating Council",
    [keys.URL]: "https://www.hcdvcc.org/resourcesforsurvivors",
    [keys.PHONE]: "2814003680",
    [keys.DATE_CHECKED]: "2025-09-28",
    [keys.ADDRESS_1]: "2990 Richmond Ave.",
    [keys.ADDRESS_2]: "Ste. 550",
    [keys.CITY]: "Houston",
    [keys.STATE]: "TX",
    [keys.ZIP_CODE]: "77098",
    [keys.DESCRIPTION]: "Resources for survivors of domestic violence",
  },
];

module.exports = data;
