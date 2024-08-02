const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Memphis";
data[keys.URL_NAME] = "memphis";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Lukes UMC",
    [keys.URL]: "https://stlukesumc.org/hunger-ministries",
    [keys.PHONE]: "9014526262",
    [keys.DATE_CHECKED]: "2024-07-05",
    [keys.ADDRESS_1]: "480 S. Highland",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38111",
    [keys.DESCRIPTION]: "Also provides food pantry",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Sun 8am - 9am",
      },
      {
        [keys.DESCRIPTION]: "Supper",
        [keys.HOURS]: "Sat 4:30pm - 5:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "First Presbyterian Church",
    [keys.URL]: "http://www.firstpresmemphis.org",
    [keys.PHONE]: "9015255619",
    [keys.DATE_CHECKED]: "2024-07-05",
    [keys.ADDRESS_1]: "166 Poplar Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38103",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Hot Lunch",
        [keys.HOURS]: "Sun 1:15pm",
      },
    ],
  },
  {
    [keys.NAME]: "Idlewild Presbyterian Church",
    [keys.URL]: "https://idlewildchurch.org/outreach-2",
    [keys.PHONE]: "9017264681",
    [keys.DATE_CHECKED]: "2024-07-07",
    [keys.ADDRESS_1]: "1750 Union Avenue",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Thur 4pm",
      },
    ],
  },
  {
    [keys.NAME]: "St. John's UMC",
    [keys.URL]: "https://www.stjohnsmidtown.org",
    [keys.PHONE]: "9017264104",
    [keys.DATE_CHECKED]: "2024-07-07",
    [keys.ADDRESS_1]: "1207 Peabody Ave.",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Tue, Sat 3:30pm - 5:30pm",
      },
      {
        [keys.DESCRIPTION]: "Pantry",
        [keys.HOURS]: "1st and 3rd Thur 10am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Grace-St. Luke's",
    [keys.URL]: "https://www.gracestlukes.org/more-than-a-meal",
    [keys.PHONE]: "9012727425",
    [keys.DATE_CHECKED]: "2024-07-07",
    [keys.ADDRESS_1]: "1720 Peabody Ave.",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Sun 4pm - 5pm",
      },
    ],
  },
  {
    [keys.NAME]: "Catholic Charities Midtown Outreach",
    [keys.URL]: "https://ccwtn.org/our-services/hungry",
    [keys.PHONE]: "9017224700",
    [keys.DATE_CHECKED]: "2024-07-12",
    [keys.ADDRESS_1]: "85 N Cleveland Avenue",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal Bags",
        [keys.HOURS]: "Mon - Fri 8am - 10am",
      },
    ],
  },
  {
    [keys.NAME]: "St. Patrick Catholic Church",
    [keys.URL]: "http://stpatsmemphis.org",
    [keys.PHONE]: "9015272542",
    [keys.DATE_CHECKED]: "2024-07-12",
    [keys.ADDRESS_1]: "277 S 4th St.",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38126",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Wed/Thur 1pm - 2:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Memphis Rox",
    [keys.URL]: "https://www.memphisrox.org/programs",
    [keys.PHONE]: "9014016104",
    [keys.DATE_CHECKED]: "2024-07-12",
    [keys.ADDRESS_1]: "879 E McLemore Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38106",
    [keys.DESCRIPTION]: "Also provides after school program, free menstrual products",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon - Fri 11am - 1pm",
      },
      {
        [keys.DESCRIPTION]: "Community Closet",
        [keys.HOURS]: "Tue 10am - 1pm",
      },
    ],
  },
  {
    [keys.NAME]: "OUTMemphis",
    [keys.URL]: "https://www.outmemphis.org",
    [keys.PHONE]: "9012786422",
    [keys.DATE_CHECKED]: "2024-07-12",
    [keys.ADDRESS_1]: "892 S Cooper St.",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Thu 4pm - 6pm",
      },
    ],
  },
  {
    [keys.NAME]: "Manna House",
    [keys.URL]: "https://www.mannahousememphis.org",
    [keys.PHONE]: "901-334-5832",
    [keys.DATE_CHECKED]: "2024-08-01",
    [keys.ADDRESS_1]: "1268 Jefferson Avenue",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38104",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon, Thur 8am - 10:30am",
      },
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Mon 5pm",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Memphis Union Mission",
    [keys.URL]: "https://memphisunionmission.org",
    [keys.PHONE]: "9015268403",
    [keys.ADDRESS_1]: "383 Poplar Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
    [keys.DATE_CHECKED]: "2024-06-27",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Calvary Rescue Mission",
    [keys.URL]: "https://calvaryrescuemission.org",
    [keys.PHONE]: "9017752570",
    [keys.ADDRESS_1]: "960 S. Third St.",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38106",
    [keys.DATE_CHECKED]: "2024-06-27",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Agape Child and Family Services",
    [keys.URL]: "https://agapemeanslove.org/how-we-love/homeless",
    [keys.PHONE]: "9013233600",
    [keys.DATE_CHECKED]: "2024-07-04",
    [keys.ADDRESS_1]: "3160 Directors Row",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38131",
    [keys.DESCRIPTION]: "Serves homeless women, pregnant women, and mothers with up to 3 children with transitional housing and support.",
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://southernusa.salvationarmy.org/memphis",
    [keys.PHONE]: "9015438586",
    [keys.DATE_CHECKED]: "2024-07-04",
    [keys.ADDRESS_1]: "696 Jackson Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
    [keys.SERVES]: [serves.WOMEN, serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Room in the Inn",
    [keys.URL]: "https://ritimemphis.org",
    [keys.PHONE]: "9014670122",
    [keys.DATE_CHECKED]: "2024-05-16",
    [keys.ADDRESS_1]: "409 Ayers Street",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
    [keys.DESCRIPTION]: "Emergency Congregational Winter Shelter, Nov 1 - Mar 31",
  },
  {
    [keys.NAME]: "Dorothy Day House",
    [keys.URL]: "https://www.dorothydaymemphis.org",
    [keys.PHONE]: "9017266760",
    [keys.DATE_CHECKED]: "2024-05-16",
    [keys.SERVES]: [serves.FAMILIES],
  },
  {
    [keys.NAME]: "Living for Christ Restoration House",
    [keys.DESCRIPTION]: "$13 nightly",
    [keys.URL]: "https://lfcrestorationhouse.wixsite.com/shelter",
    [keys.PHONE]: "9017914022",
    [keys.ADDRESS_1]: "3095 Thomas Street",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38127",
    [keys.DATE_CHECKED]: "2024-06-27",
  },
  {
    [keys.NAME]: "Youth Emergency Center",
    [keys.DESCRIPTION]: "Wrap-around support for LGBTQ+ young adults ages 16-24 in crisis.",
    [keys.URL]: "https://www.outmemphis.org/metamorphosis-2",
    [keys.PHONE]: "9012786422",
    [keys.ADDRESS_1]: "2055 Southern Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38114",
    [keys.DATE_CHECKED]: "2024-06-27",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Hospitality Hub",
    [keys.DESCRIPTION]: "A centralized hub of information and services for homeless persons.",
    [keys.URL]: "https://www.hospitalityhub.org",
    [keys.PHONE]: "9017301736",
    [keys.DATE_CHECKED]: "2024-04-30",
    [keys.ADDRESS_1]: "590 Washington Ave",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38105",
  },
  {
    [keys.NAME]: "Her Faith Ministries",
    [keys.URL]: "https://herfaithministries.org",
    [keys.PHONE]: "9013243705",
    [keys.DATE_CHECKED]: "2024-07-04",
    [keys.ADDRESS_1]: "3396 Park Avenue",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38111",
    [keys.DESCRIPTION]: "Provides rent assistance, clothing, emergency food, support, and transportation.",
    [keys.SERVES]: [serves.WOMEN_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Mission Possible",
    [keys.URL]: "https://www.missionpossiblecosm.com",
    [keys.PHONE]: "9014584357",
    [keys.DATE_CHECKED]: "2024-07-19",
    [keys.ADDRESS_1]: "2400 Poplar Avenue",
    [keys.ADDRESS_2]: "#428",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38112",
    [keys.DESCRIPTION]: "Clothing, non perishable food, counseling",
  },
  {
    [keys.NAME]: "Asha's Refuge",
    [keys.URL]: "https://ashasrefuge.org",
    [keys.PHONE]: "9015009200",
    [keys.DATE_CHECKED]: "2024-07-26",
    [keys.ADDRESS_1]: "200 East Parkway North",
    [keys.ADDRESS_2]: "3rd floor",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38112",
    [keys.DESCRIPTION]: "Support for the rights of refugees from other countries, community and client education, "
      + "assistance learning English",
  },
  {
    [keys.NAME]: "Latino Memphis",
    [keys.URL]: "https://latinomemphis.org",
    [keys.PHONE]: "9013665882",
    [keys.DATE_CHECKED]: "2024-07-26",
    [keys.ADDRESS_1]: "6041 Mt Moriah Ext.",
    [keys.ADDRESS_2]: "Suite #16",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38115",
    [keys.DESCRIPTION]: "Education, justice, health services, and advocacy for the betterment "
      + "of the Memphis Hispanic Community.",
  },
  {
    [keys.NAME]: "Livitup",
    [keys.URL]: "https://www.livitupinc.org",
    [keys.PHONE]: "9017614277",
    [keys.DATE_CHECKED]: "2024-08-01",
    [keys.ADDRESS_1]: "6949 Appling Farms Parkway",
    [keys.ADDRESS_2]: "Suite 112",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38133",
    [keys.DESCRIPTION]: "Personal assistance for adults with disabilities",
  },
  {
    [keys.NAME]: "Memphis Addiction Help",
    [keys.URL]: "https://memphisaddictionhelp.org",
    [keys.PHONE]: "9012720003",
    [keys.DATE_CHECKED]: "2024-08-01",
  },
];

module.exports = data;
