const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Miami";
data[keys.URL_NAME] = "miami";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
  {
    [keys.NAME]: "Homeless Assistance HELPLINE",
    [keys.URL]: "https://www.miami.gov/My-Government/Departments/Human-Services/Homeless-Assistance",
    [keys.PHONE]: "8779944357",
    [keys.ADDRESS_1]: "111 NW 1st Street",
    [keys.ADDRESS_2]: "1st Floor",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33128",
    [keys.DATE_CHECKED]: "2025-02-25",
  },
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Camillus House Day Center",
    [keys.URL]: "https://www.camillus.org/need-help",
    [keys.PHONE]: "3053741065",
    [keys.DATE_CHECKED]: "2025-02-26",
    [keys.ADDRESS_1]: "1603 NW 7th Avenue",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33136",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 8:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Thur 12:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Miami Rescue Mission",
    [keys.URL]: "https://caringplace.org",
    [keys.PHONE]: "3055712211",
    [keys.DATE_CHECKED]: "2025-02-28",
    [keys.ADDRESS_1]: "2020 NW 1st Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri 3pm-5pm",
      },
    ],
  },
  {
    [keys.NAME]: "Homestead Soup Kitchen",
    [keys.URL]: "https://www.homesteadsoupkitchen.com",
    [keys.PHONE]: "3052457448",
    [keys.DATE_CHECKED]: "2025-03-03",
    [keys.ADDRESS_1]: "105 S.W. 3rd Ave",
    [keys.CITY]: "Homestead",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33030",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon/Wed/Fri noon-1:30pm",
      },
    ],
  },
  {
    [keys.NAME]: "Central Christian Church",
    [keys.URL]: "https://www.cccgables.org/en",
    [keys.PHONE]: "3054466132",
    [keys.DATE_CHECKED]: "2025-02-28",
    [keys.ADDRESS_1]: "222 Menores Ave",
    [keys.CITY]: "Coral Gables",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33134",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "2nd and 4th Sat 9am-10am",
      },
    ],
  },
  {
    [keys.NAME]: "City Reach Ministries",
    [keys.URL]: "https://cityreachministries.com",
    [keys.PHONE]: "3052597677",
    [keys.DATE_CHECKED]: "2025-03-02",
    [keys.ADDRESS_1]: "12236 SW 128th St",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33186",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Bread and Pastries",
        [keys.HOURS]: "Mon/Tue/Wed/Fri 9:30am-4pm",
      },
      {
        [keys.DESCRIPTION]: "Food Pantry",
        [keys.HOURS]: "Tue 5:30pm-6:30pm, Wed 10am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "Curley's House Food Bank",
    [keys.URL]: "https://curleyshousefoodbank.com",
    [keys.PHONE]: "3057599805",
    [keys.DATE_CHECKED]: "2025-03-02",
    [keys.ADDRESS_1]: "6025 NW 6th Ct",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food",
        [keys.HOURS]: "Tue-Fri 10am-3pm",
      },
    ],
  },
  {
    [keys.NAME]: "Open Arms Community Center",
    [keys.URL]: "https://openarmscommunitycenter.org",
    [keys.PHONE]: "3052633259",
    [keys.DATE_CHECKED]: "2025-03-09",
    [keys.ADDRESS_1]: "5556 SW 8 th St.",
    [keys.CITY]: "Coral Gables",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33134",
    [keys.DESCRIPTION]: "SNAP, Medicaid, Temporary Cash Assistance",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Food Distribution",
        [keys.HOURS]: "2nd and 4th Thursday 9am",
      },
    ],
  },
  {
    [keys.NAME]: "JCS Kosher Food Bank",
    [keys.URL]: "https://jcsfl.org/programs/kosher-food-bank",
    [keys.PHONE]: "3059478093",
    [keys.DATE_CHECKED]: "2025-03-03",
    [keys.DESCRIPTION]: "Appointment only, please call",
  },
  {
    [keys.NAME]: "Food For Life",
    [keys.URL]: "https://www.foodforlifenetwork.org/services",
    [keys.PHONE]: "3055763663",
    [keys.ADDRESS_1]: "3510 Biscayne Boulevard",
    [keys.ADDRESS_2]: "Suite 109",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33137",
    [keys.DATE_CHECKED]: "2025-04-06",
    [keys.DESCRIPTION]: "Food Pantry, Grocery Delivery, Social Service Referrals",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Miami Rescue Mission",
    [keys.URL]: "https://caringplace.org",
    [keys.PHONE]: "3055712211",
    [keys.DATE_CHECKED]: "2025-03-11",
    [keys.ADDRESS_1]: "2020 NW 1st Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "Camillus House",
    [keys.URL]: "https://www.camillus.org/need-help",
    [keys.PHONE]: "3053741065",
    [keys.DATE_CHECKED]: "2025-03-11",
    [keys.ADDRESS_1]: "1603 NW 7th Avenue",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33136",
    [keys.SERVES]: [serves.MEN],
  },
  {
    [keys.NAME]: "The Missionaries of Charity of Mother Theresa Shelter",
    [keys.URL]: "https://www.miamiarch.org/CatholicDiocese.php?op=Missionaries_of_Charity",
    [keys.PHONE]: "3055455699",
    [keys.DATE_CHECKED]: "2025-03-14",
    [keys.ADDRESS_1]: "724 N.W. 17th St",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33136",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Lotus House",
    [keys.URL]: "https://lotushouse.org",
    [keys.PHONE]: "3054380556",
    [keys.DATE_CHECKED]: "2025-03-19",
    [keys.ADDRESS_1]: "217 NW 15th Street",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33136",
    [keys.SERVES]: [serves.WOMEN, serves.YOUTH],
  },
  {
    [keys.NAME]: "New Life Family Center",
    [keys.URL]: "https://www.ccadm.org/sh_projects/the-new-life-family-center",
    [keys.PHONE]: "3055733333",
    [keys.DATE_CHECKED]: "2025-03-27",
    [keys.ADDRESS_1]: "3620 NW 1st Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.SERVES]: [serves.FAMILIES],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Catholic Charities Homeless Prevention and Rapid Re-Housing",
    [keys.URL]: "https://www.ccadm.org/sh_projects/homeless-prevention-and-rapid-re-housing-miami-dade-county",
    [keys.PHONE]: "3055733333",
    [keys.DATE_CHECKED]: "2025-03-14",
    [keys.ADDRESS_1]: "3620 NW 1st Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33127",
    [keys.DESCRIPTION]: "Provides assistance and referrals to individuals and families to prevent homelessness",
  },
  {
    [keys.NAME]: "Caring for Miami",
    [keys.URL]: "https://caringformiami.org/",
    [keys.PHONE]: "7864301051",
    [keys.DATE_CHECKED]: "2025-03-05",
    [keys.DESCRIPTION]: "Mobile dental clinic"
  },
  {
    [keys.NAME]: "Miami-Dade County Community Action and Human Services",
    [keys.URL]: "https://www.miamidade.gov/global/socialservices/home.page",
    [keys.PHONE]: "7864694600",
    [keys.DATE_CHECKED]: "2025-03-05",
    [keys.DESCRIPTION]: "Provides one-time crisis assitance to pay utility bills, rent, mortgage or secure necessary food"
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://miami.salvationarmyflorida.org/",
    [keys.PHONE]: "3054565850",
    [keys.DATE_CHECKED]: "2025-04-05",
    [keys.ADDRESS_1]: "1907 NW 38th Street",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33142",
  },
  {
    [keys.NAME]: "Concept House",
    [keys.URL]: "https://www.concepthouse.org",
    [keys.PHONE]: "3057516501",
    [keys.PHONE_EXTENSION]: "6405",
    [keys.DATE_CHECKED]: "2025-04-06",
    [keys.ADDRESS_1]: "4850 NE 2nd Ave",
    [keys.CITY]: "Miami",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33137",
    [keys.DESCRIPTION]: "Substance Abuse Treatment",
  },
];

module.exports = data;
