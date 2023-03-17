const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Columbus";
data[keys.URL_NAME] = "columbus";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Hotline",
    [keys.URL]: "https://www.columbus.gov/COVID19resources/humanservices",
    [keys.PHONE]: "6142747000",
    [keys.DATE_CHECKED]: "2022-03-04",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
  },
  {
    [keys.NAME]: "LSS Choices",
    [keys.URL]: "https://lssnetworkofhope.org/choices",
    [keys.PHONE]: "6142244663",
    [keys.DATE_CHECKED]: "2022-03-04",
    [keys.DESCRIPTION]: "Call if you seeking shelter from an abusive intimate partner.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "The Open Shelter",
    [keys.URL]: "https://theopenshelter.org/programming",
    [keys.PHONE]: "6142222885",
    [keys.DATE_CHECKED]: "2023-03-08",
    [keys.ADDRESS_1]: "1037 Parsons Ave",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43206",
    [keys.DESCRIPTION]: "Day shelter and advocacy center",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Mon - Fri 10am",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tuesday",
      },
    ],
  },
  {
    [keys.NAME]: "Stowe Mission",
    [keys.URL]: "https://stowemission.org",
    [keys.PHONE]: "6144458400",
    [keys.DATE_CHECKED]: "2023-03-08",
    [keys.ADDRESS_1]: "888 Parsons Avenue",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43206",
    [keys.DESCRIPTION]: "Also provides dental and vision clinic",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Fri 11am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Dream Center",
    [keys.URL]: "https://www.columbusdreamcenter.org/services",
    [keys.PHONE]: "6145473138",
    [keys.DATE_CHECKED]: "2023-03-10",
    [keys.ADDRESS_1]: "38 W Greenwood Ave",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43201",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon/Tue/Wed/Fri 9:30am - 10am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Mon/Tue/Thu/Fri 7pm - 7:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Holy Family Soup Kitchen",
    [keys.URL]: "https://holyfamilycolumbus.org/hfsk",
    [keys.PHONE]: "6142214323",
    [keys.DATE_CHECKED]: "2023-03-10",
    [keys.ADDRESS_1]: "588 W. Gay Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43215",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Sack Lunch",
        [keys.HOURS]: "Mon-Fri 9am - noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Lawrence Haven",
    [keys.URL]: "https://www.svdpcolumbus.org/st_lawrence_haven",
    [keys.PHONE]: "6142412569",
    [keys.DATE_CHECKED]: "2023-03-10",
    [keys.ADDRESS_1]: "244 E. Rich Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43215",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Mon-Thur 1:30pm - 3:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Bethany Presbyterian",
    [keys.URL]: "https://www.bethanycolumbus.com",
    [keys.PHONE]: "6142537489",
    [keys.DATE_CHECKED]: "2023-03-10",
    [keys.ADDRESS_1]: "206 N. Garfield Avenue",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Saturday 11:30am - 1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "First English Lutheran",
    [keys.URL]: "https://felccolumbus.com/community",
    [keys.PHONE]: "6142523191",
    [keys.DATE_CHECKED]: "2023-03-14",
    [keys.ADDRESS_1]: "1015 E Main Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43205",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Sunday 9am",
      },
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Thursday 5:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Feed My Sheep Ministries",
    [keys.URL]: "https://feedmysheepministry.com/",
    [keys.PHONE]: "6147215414",
    [keys.DATE_CHECKED]: "2023-03-14",
    [keys.ADDRESS_1]: "2364 W Broad St",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43204",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Saturday 9am",
      },
      {
        [keys.DESCRIPTION]: "Dinner, clothing, basic necessities",
        [keys.HOURS]: "Tuesday 6:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Columbus Relief",
    [keys.URL]: "https://www.cbusrelief.org/ministries",
    [keys.PHONE]: "6145172038",
    [keys.DATE_CHECKED]: "2023-03-16",
    [keys.ADDRESS_1]: "800 Frebis Ave",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43206",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Saturday 11:30am - 1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Clintonville CRC",
    [keys.URL]: "https://www.clintonvillecrc.org/family-services",
    [keys.PHONE]: "6142688118",
    [keys.DATE_CHECKED]: "2023-03-16",
    [keys.ADDRESS_1]: "14 W. Lakeview Ave.",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mo/Tu/Th/Fr noon - 4:15pm",
      },
      {
        [keys.DESCRIPTION]: "Fresh Produce",
        [keys.HOURS]: "Wednesday noon - 4:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Victory Ministries",
    [keys.URL]: "https://www.victorycoh.org/essential-services",
    [keys.PHONE]: "6142527996",
    [keys.DATE_CHECKED]: "2023-03-14",
    [keys.ADDRESS_1]: "3964 East Main Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43213",
    [keys.DESCRIPTION]: "Food pantry and clothing by appointment.",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Men's Public Shelter",
    [keys.URL]: "https://www.lutheranmetro.org/what-we-do/programs/housing-and-shelter",
    [keys.PHONE]: "2165660047",
    [keys.ADDRESS_1]: "2100 Lakeside Avenue",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44114",
    [keys.SERVES]: [serves.MEN],
    [keys.DESCRIPTION]: "Use Coordinated Intake",
    [keys.DATE_CHECKED]: "2022-12-13",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Step Forward",
    [keys.URL]: "https://www.stepforwardtoday.org",
    [keys.PHONE]: "2166969077",
    [keys.ADDRESS_1]: "1801 Superior Avenue",
    [keys.ADDRESS_2]: "Suite 400",
    [keys.CITY]: "Cleveland",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "44114",
    [keys.DESCRIPTION]: "Emergency Assistance, Energy assistance, Proffesional Development, Personal Development",
    [keys.DATE_CHECKED]: "2023-02-21",
  },
];

module.exports = data;
