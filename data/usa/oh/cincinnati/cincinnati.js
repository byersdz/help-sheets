const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Cincinnati";
data[keys.URL_NAME] = "cincinnati";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Central Access Point Line",
    [keys.URL]: "https://www.strategiestoendhomelessness.org/what-we-do/prevention-and-shelter-diversion/",
    [keys.PHONE]: "5133817233",
    [keys.DATE_CHECKED]: "2022-04-23",
    [keys.DESCRIPTION]: "Call if you are homeless and in need of emergency shelter.",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "City Gospel Mission",
    [keys.URL]: "https://www.citygospelmission.org/get-help",
    [keys.PHONE]: "5132415525",
    [keys.DATE_CHECKED]: "2023-04-23",
    [keys.ADDRESS_1]: "1805 Dalton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45214",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Every day 7pm",
      },
    ],
  },
  {
    [keys.NAME]: "Our Daily Bread",
    [keys.URL]: "https://www.ourdailybread.us",
    [keys.PHONE]: "5136216364",
    [keys.DATE_CHECKED]: "2023-04-27",
    [keys.ADDRESS_1]: "1730 Race St.",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 8:30am-11:45am",
      },
    ],
  },
  {
    [keys.NAME]: "Queen City Kitchen",
    [keys.URL]: "https://www.queencitykitchen.org",
    [keys.PHONE]: "5139611983",
    [keys.DATE_CHECKED]: "2023-04-27",
    [keys.ADDRESS_1]: "2631 Gilbert Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45206",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Tue/Thur 10am, Sat 9:30am & 3pm, Sun noon & 5pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue/Thur 10am",
      },
    ],
  },
  {
    [keys.NAME]: "First Lutheran Church",
    [keys.URL]: "https://www.firstlutherancincy.org/service-1",
    [keys.PHONE]: "5134210065",
    [keys.DATE_CHECKED]: "2023-04-27",
    [keys.ADDRESS_1]: "1208 Race Street",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Last Monday of month - noon",
      },
      {
        [keys.DESCRIPTION]: "Clothing Closet",
        [keys.HOURS]: "2nd Monday of month - noon",
      },
    ],
  },
  {
    [keys.NAME]: "Churches Active in Northside",
    [keys.URL]: "https://www.cainministry.org",
    [keys.PHONE]: "5135912246",
    [keys.DATE_CHECKED]: "2023-06-02",
    [keys.ADDRESS_1]: "4230 Hamilton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45223",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Monday 4pm - 6pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Monday 5pm - 7pm, Tue/Thur 10am - 1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Madisonville Education & Assistance Center",
    [keys.URL]: "https://meaccincinnati.org/gethelp",
    [keys.PHONE]: "5132715501",
    [keys.DATE_CHECKED]: "2023-06-24",
    [keys.ADDRESS_1]: "4600 Erie Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45227",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Free Food Marketplace",
        [keys.HOURS]: "Tuesdays",
      },
      {
        [keys.DESCRIPTION]: "Haircuts",
        [keys.HOURS]: "First Wednesday of Month",
      },
    ],
  },
  {
    [keys.NAME]: "St. Vincent de Paul",
    [keys.URL]: "https://www.svdpcincinnati.org/get-help",
    [keys.PHONE]: "5134210602",
    [keys.DATE_CHECKED]: "2023-06-24",
  },
  {
    [keys.NAME]: "Freestore Foodbank",
    [keys.URL]: "https://freestorefoodbank.org",
    [keys.DATE_CHECKED]: "2023-04-27",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "City Gospel Mission",
    [keys.URL]: "https://www.citygospelmission.org/get-help",
    [keys.PHONE]: "5132415525",
    [keys.DATE_CHECKED]: "2023-04-23",
    [keys.ADDRESS_1]: "1805 Dalton Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45214",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Columbus Free Clinic",
    [keys.URL]: "https://columbusfreeclinic.com",
    [keys.PHONE]: "6144048417",
    [keys.DATE_CHECKED]: "2023-03-17",
    [keys.ADDRESS_1]: "2231 North High Street",
    [keys.CITY]: "Columbus",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "43201",
  },
];

module.exports = data;
