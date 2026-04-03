const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Las Vegas";
data[keys.URL_NAME] = "las-vegas";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Courtyard Homeless Resource Center",
    [keys.URL]: "https://www.lasvegasnevada.gov/Residents/Resident-Services/Homeless-Services",
    [keys.PHONE]: "7022296117",
    [keys.DESCRIPTION]: "A starting point where homeless individuals can go to access resources all in one place",
    [keys.DATE_CHECKED]: "2026-03-17",
    [keys.ADDRESS_1]: "314 Foremaster Lane",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89101",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Las Vegas Rescue Mission",
    [keys.URL]: "https://vegasrescue.org/meals",
    [keys.PHONE]: "7023821766",
    [keys.DATE_CHECKED]: "2026-03-18",
    [keys.ADDRESS_1]: "480 West Bonanza Rd",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89106",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Daily 5pm-6pm",
      },
    ],
  },
  {
    [keys.NAME]: "Catholic Charities",
    [keys.URL]: "https://www.catholiccharities.com/programs/community-meal-st-vincent-lied-dining-facility",
    [keys.PHONE]: "7023852662",
    [keys.DATE_CHECKED]: "2026-03-20",
    [keys.ADDRESS_1]: "1501 Las Vegas Blvd North",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89101",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Community Meal",
        [keys.HOURS]: "Daily 10am-11am",
      },
    ],
  },
  {
    [keys.NAME]: "CARE Complex",
    [keys.URL]: "https://carecomplex.org/essential-services",
    [keys.PHONE]: "7024833055",
    [keys.DATE_CHECKED]: "2026-03-26",
    [keys.ADDRESS_1]: "200 Foremaster Lane",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89101",
    [keys.DESCRIPTION]: "Meals, showers, haircuts, bus passes, mail, lockers, internet access",
  },
  {
    [keys.NAME]: "Casa de Luz",
    [keys.URL]: "https://www.casadeluzlv.com/programs",
    [keys.PHONE]: "7026845866",
    [keys.DATE_CHECKED]: "2026-03-30",
    [keys.ADDRESS_1]: "2412 Tam St.",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89102",
    [keys.DESCRIPTION]: "Food Pantry, primary medical care, children's dentistry, diapers, case management",
  },
  {
    [keys.NAME]: "Lutheran Social Services of Nevada",
    [keys.URL]: "https://lutheransocialservicesofnevada.org",
    [keys.PHONE]: "7028339580",
    [keys.DATE_CHECKED]: "2026-03-31",
    [keys.ADDRESS_1]: "4323 Boulder Highway",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89121",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Mon-Thur 9am-1pm",
      },
    ],
  },
  {
    [keys.NAME]: "The WASH Foundation",
    [keys.URL]: "https://thewashfoundation.org/freshstart",
    [keys.PHONE]: "4075748353",
    [keys.DATE_CHECKED]: "2026-04-01",
    [keys.DESCRIPTION]: "Mobile shower program",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Las Vegas Rescue Mission",
    [keys.URL]: "https://vegasrescue.org/emergencyshelter",
    [keys.PHONE]: "7023821766",
    [keys.DATE_CHECKED]: "2026-03-18",
    [keys.ADDRESS_1]: "480 West Bonanza Rd",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89106",
    [keys.SERVES]: [serves.MEN, serves.WOMEN, serves.FAMILIES],
  },
  {
    [keys.NAME]: "Catholic Charities",
    [keys.URL]: "https://www.catholiccharities.com/programs/mens-emergency-night-shelter",
    [keys.PHONE]: "7023852662",
    [keys.DATE_CHECKED]: "2026-03-20",
    [keys.ADDRESS_1]: "1501 Las Vegas Blvd North",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89101",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "The Shade Tree",
    [keys.URL]: "https://theshadetree.org/get-help/",
    [keys.PHONE]: "8553850072",
    [keys.DATE_CHECKED]: "2026-03-21",
    [keys.ADDRESS_1]: "1 W. Owens Ave North",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89030",
    [keys.DESCRIPTION]: "Domestic violence shelter",
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://www.salvationarmysouthernnevada.org/homeless-services",
    [keys.PHONE]: "7027015347",
    [keys.DATE_CHECKED]: "2026-03-23",
    [keys.ADDRESS_1]: "35 W Owens Ave",
    [keys.ADDRESS_2]: "#103",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89030",
  },
  {
    [keys.NAME]: "Nevada Partnership for Homeless Youth",
    [keys.URL]: "https://nphy.org",
    [keys.PHONE]: "8668273723",
    [keys.DATE_CHECKED]: "2026-03-24",
    [keys.ADDRESS_1]: "4981 Shirley Street",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89119",
    [keys.DESCRIPTION]: "For youth Ages 12 - 24. Drop in Center provides food, clothing, resources.",
  },
  {
    [keys.NAME]: "Family Promise",
    [keys.URL]: "https://familypromiselv.com",
    [keys.PHONE]: "7026388806",
    [keys.DATE_CHECKED]: "2026-04-03",
    [keys.ADDRESS_1]: "1410 S. Maryland Parkway",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89121",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "HELP of Southern Nevada",
    [keys.URL]: "https://www.helpsonv.org",
    [keys.PHONE]: "7023694357",
    [keys.DATE_CHECKED]: "2026-03-25",
    [keys.ADDRESS_1]: "1640 E. Flamingo Rd.",
    [keys.ADDRESS_2]: "#100",
    [keys.CITY]: "Las Vegas",
    [keys.STATE]: "NV",
    [keys.ZIP_CODE]: "89119",
    [keys.DESCRIPTION]: "Housing programs, referrals, and support services",
  },
  {
    [keys.NAME]: "Nevada Health Centers",
    [keys.URL]: "https://www.nevadahealthcenters.org/healthcare-for-the-homeless",
    [keys.PHONE]: "8007872568",
    [keys.DATE_CHECKED]: "2026-03-27",
    [keys.DESCRIPTION]: "Healthcare for the homeless",
  },
  {
    [keys.NAME]: "Clark County Cooling Stations",
    [keys.URL]: "https://www.clarkcountynv.gov/government/departments/fire/cooling-stations",
    [keys.DATE_CHECKED]: "2026-03-29",
  },
  {
    [keys.NAME]: "Stay Cool Clark County",
    [keys.URL]: "https://allin.clarkcountynv.gov/Initiative/StayCool",
    [keys.DATE_CHECKED]: "2026-03-29",
  },
];

module.exports = data;
