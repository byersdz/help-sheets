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
    [keys.NAME]: "Mary Magdalen House",
    [keys.URL]: "https://www.marymagdalenhouse.org",
    [keys.PHONE]: "5137214811",
    [keys.DATE_CHECKED]: "2023-06-24",
    [keys.ADDRESS_1]: "1629 Republic Street",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Fri 8:30am - 4pm, Sat 8:30am - noon",
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
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Shelterhouse Men's Center",
    [keys.URL]: "https://www.shelterhousecincy.org/mens-center",
    [keys.PHONE]: "5137210643",
    [keys.DATE_CHECKED]: "2023-06-26",
    [keys.ADDRESS_1]: "411 Gest Street",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45203",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Shelterhouse Women's Center",
    [keys.URL]: "https://www.shelterhousecincy.org/womens-center",
    [keys.PHONE]: "5135621980",
    [keys.DATE_CHECKED]: "2023-06-26",
    [keys.ADDRESS_1]: "2499 Reading Road",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Lighthouse Mecum House",
    [keys.DESCRIPTION]: "The Mecum House provides a safe haven for youth ages 10-17",
    [keys.URL]: "https://www.lys.org/services/safeshelter/",
    [keys.PHONE]: "5139614080",
    [keys.DATE_CHECKED]: "2023-06-26",
    [keys.ADDRESS_1]: "2522 Highland Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45219",
    [keys.SERVES]: [serves.YOUTH],
  },
  {
    [keys.NAME]: "Lighthouse Sheakley Center",
    [keys.URL]: "https://www.lys.org/services/shelter-and-resources-for-homeless-young-adults-18-24/",
    [keys.PHONE]: "5135699500",
    [keys.DATE_CHECKED]: "2023-06-26",
    [keys.ADDRESS_1]: "2314 Iowa Avenue",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45206",
    [keys.SERVES]: [serves.AGE_18_TO_24],
  },
  {
    [keys.NAME]: "Off the Streets",
    [keys.DESCRIPTION]: "Services and shelter for women with histories of sex trafficking and exploitation",
    [keys.URL]: "https://hercincinnati.org/pages/off-the-streets",
    [keys.PHONE]: "5137686928",
    [keys.DATE_CHECKED]: "2023-06-27",
    [keys.ADDRESS_1]: "2401 Reading Rd.",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Cincinnati Health Network / McMicken Integrated Care Clinic",
    [keys.DESCRIPTION]: "Healthcare for the homeless",
    [keys.URL]: "https://cincinnatihealthnetwork.org/index.php?page=programs-services",
    [keys.PHONE]: "5133867899",
    [keys.DATE_CHECKED]: "2023-07-06",
    [keys.ADDRESS_1]: "40 E McMicken Ave",
    [keys.ADDRESS_2]: "2nd floor",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45202",
  },
  {
    [keys.NAME]: "Warmline",
    [keys.URL]: "https://www.cincywarmline.org/",
    [keys.PHONE]: "5139319276",
    [keys.DATE_CHECKED]: "2023-07-02",
    [keys.DESCRIPTION]: "Peer operated call in service for assistance in recovery from mental health issues",
  },
  {
    [keys.NAME]: "Health Resource Center",
    [keys.DESCRIPTION]: "Provides affordable health care for low-income, indigent, and homeless adults",
    [keys.URL]: "https://www.hrcci.org",
    [keys.PHONE]: "5133574602",
    [keys.DATE_CHECKED]: "2023-07-05",
    [keys.ADDRESS_1]: "2347 Vine Street",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45221",
  },
  {
    [keys.NAME]: "First Step Home",
    [keys.DESCRIPTION]: "Addiction recovery for women",
    [keys.URL]: "https://firststephome.org/get-help-now",
    [keys.PHONE]: "5139614663",
    [keys.DATE_CHECKED]: "2023-07-11",
    [keys.ADDRESS_1]: "2203 Fulton Ave",
    [keys.CITY]: "Cincinnati",
    [keys.STATE]: "OH",
    [keys.ZIP_CODE]: "45206",
  },
];

module.exports = data;
