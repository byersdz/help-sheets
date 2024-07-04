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
    [keys.NAME]: "Community Care Fellowship",
    [keys.URL]: "https://www.ccfnashville.org/get-help",
    [keys.PHONE]: "6152271953",
    [keys.DATE_CHECKED]: "2024-02-03",
    [keys.ADDRESS_1]: "511 South 8th Street",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37206",
    [keys.DESCRIPTION]: "Also provides showers, laundry, mail, phone, wifi",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Breakfast",
        [keys.HOURS]: "Mon-Fri 9am - 9:30am",
      },
      {
        [keys.DESCRIPTION]: "Lunch",
        [keys.HOURS]: "Tue/Thur/Fri 11:30am - 12:30pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Mon-Fri 1pm - 3pm",
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
    [keys.DATE_CHECKED]: "2024-05-16",
    [keys.ADDRESS_1]: "3160 Directors Row",
    [keys.CITY]: "Memphis",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "38131",
    [keys.DESCRIPTION]: "Serves homeless women, pregnant women, and mothers with up to 3 children with transitional housing and support.",
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
];

module.exports = data;
