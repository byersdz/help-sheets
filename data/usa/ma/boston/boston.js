const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Boston";
data[keys.URL_NAME] = "boston";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Office of Housing Stability",
    [keys.URL]: "https://www.boston.gov/departments/housing/services-those-experiencing-homeless",
    [keys.PHONE]: "6176354200",
    [keys.DATE_CHECKED]: "2022-10-18",
    [keys.DESCRIPTION]: "Call if you are at immediate risk of becoming homeless. Mon - Fri 9am - 5pm",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "St. Francis House",
    [keys.URL]: "https://stfrancishouse.org",
    [keys.PHONE]: "6175424211",
    [keys.DESCRIPTION]: 'Also provides clothing, medical care, mailroom, art therapy',
    [keys.DATE_CHECKED]: "2022-11-13",
    [keys.ADDRESS_1]: "39 Boylston Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02116",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "every day 7:30am - 9am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "every day 11:30am - 1pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon-Fri 7am-10:40am, Sat/Sun 8am-2pm",
      },
    ],
  },
  {
    [keys.NAME]: "Haley House",
    [keys.URL]: "https://haleyhouse.org",
    [keys.PHONE]: "6172368132",
    [keys.DESCRIPTION]: 'Also provides food pantry',
    [keys.DATE_CHECKED]: "2022-11-16",
    [keys.ADDRESS_1]: "23 Dartmouth Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02116 ",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Tue-Fri 8am-9:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Sunday 2pm-3pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tue 6am-9:30am",
      },
    ],
  },
  {
    [keys.NAME]: "Rosie's Place",
    [keys.URL]: "https://www.rosiesplace.org",
    [keys.DATE_CHECKED]: "2022-11-16",
    [keys.PHONE]: '6174429322',
    [keys.SERVES]: [serves.WOMEN],
    [keys.ADDRESS_1]: "889 Harrison Avenue",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02128",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Weekday Meals",
        [keys.HOURS]: "7:30am-9am, 11:30am-1pm, 4:30pm-6:45pm",
      },
      {
        [keys.DESCRIPTION]: "Weekend Meals",
        [keys.HOURS]: "10:30am-noon, 3pm-4:30pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon-Fri 9am-4pm",
      },
    ],
  },
  {
    [keys.NAME]: "Women's Lunch Place",
    [keys.URL]: "https://womenslunchplace.org",
    [keys.DATE_CHECKED]: "2022-11-17",
    [keys.PHONE]: '6172670200',
    [keys.SERVES]: [serves.WOMEN],
    [keys.ADDRESS_1]: "67 Newbury Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02116",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Sat 7am-2pm",
      },
    ],
  },
  {
    [keys.NAME]: "East Boston Community Soup Kitchen",
    [keys.URL]: "https://ebcsk.org",
    [keys.DATE_CHECKED]: "2022-11-16",
    [keys.ADDRESS_1]: "28 Paris St",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02128 ",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Bags",
        [keys.HOURS]: "Tue 9am",
      },
    ],
  },
  {
    [keys.NAME]: "ABCD",
    [keys.URL]: "https://bostonabcd.org/service/food-accesscenters",
    [keys.DATE_CHECKED]: "2022-11-17",
    [keys.PHONE]: "6173486000",
    [keys.DESCRIPTION]: "Operates 5 local food pantries",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Southampton Shelter",
    [keys.URL]:
      "https://www.boston.gov/government/cabinets/boston-public-health-commission/homeless-services/emergency-shelter",
    [keys.PHONE]: "6175345395",
    [keys.ADDRESS_1]: "112 Southampton Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
  {
    [keys.NAME]: "Woods Mullen Shelter",
    [keys.URL]:
      "https://www.boston.gov/government/cabinets/boston-public-health-commission/homeless-services/emergency-shelter",
    [keys.PHONE]: "6175347100",
    [keys.ADDRESS_1]: "794 Massachusetts Ave",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
  {
    [keys.NAME]: "Pine Street Inn",
    [keys.URL]: "https://www.pinestreetinn.org/about-us/find-help-guest",
    [keys.PHONE]: "6178929228",
    [keys.DESCRIPTION]: "Call for triage",
    [keys.ADDRESS_1]: "444 Harrison Ave",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-10-18",
  },
  {
    [keys.NAME]: "New England Center and Home for Veterans",
    [keys.URL]: "https://nechv.org",
    [keys.PHONE]: "6173711800",
    [keys.ADDRESS_1]: "17 Court St",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02108",
    [keys.SERVES]: [serves.VETERANS],
    [keys.DATE_CHECKED]: "2022-11-05",
  },
  {
    [keys.NAME]: "Bridge Over Troubled Waters",
    [keys.URL]: "https://www.bridgeotw.org/gethelp",
    [keys.PHONE]: "6174239575",
    [keys.ADDRESS_1]: "47 West Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02111",
    [keys.SERVES]: [serves.AGE_14_TO_24],
    [keys.DATE_CHECKED]: "2022-11-05",
  },
  {
    [keys.NAME]: "Massachusetts Emergency Family Shelter",
    [keys.URL]: "https://www.mass.gov/how-to/find-emergency-family-shelter",
    [keys.PHONE]: "8665840653",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
    [keys.DATE_CHECKED]: "2022-11-13",
  },
  {
    [keys.NAME]: "Boston Rescue Mission",
    [keys.URL]: "https://www.brm.org",
    [keys.PHONE]: "6173389000",
    [keys.ADDRESS_1]: "39 Kingston St",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02111",
    [keys.SERVES]: [serves.MEN],
    [keys.DATE_CHECKED]: "2022-11-16",
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Boston Health Care for the Homeless",
    [keys.URL]: "https://www.bhchp.org/patients",
    [keys.PHONE]: "8576541600",
    [keys.ADDRESS_1]: "780 Albany Street",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02118",
    [keys.DATE_CHECKED]: "2022-11-17",
  },
  {
    [keys.NAME]: "Boston Night Center",
    [keys.URL]: "https://www.baycovehumanservices.org/homeless-services",
    [keys.PHONE]: "8572960322",
    [keys.DESCRIPTION]: "Overnight drop-in shelter. No beds. 8:30pm - 6:30 am",
    [keys.ADDRESS_1]: "31 Bowker St.",
    [keys.CITY]: "Boston",
    [keys.STATE]: "MA",
    [keys.ZIP_CODE]: "02114",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
    [keys.DATE_CHECKED]: "2022-11-05",
  },
];

module.exports = data;
