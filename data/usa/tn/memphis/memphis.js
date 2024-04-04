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
    [keys.NAME]: "Nashville Rescue Mission",
    [keys.URL]: "https://nashvillerescuemission.org",
    [keys.PHONE]: "6152552475",
    [keys.DATE_CHECKED]: "2023-12-08",
    [keys.ADDRESS_1]: "639 Lafayette Street",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "The Next Door",
    [keys.DESCRIPTION]: "Treatment program for women struggling with addiction",
    [keys.URL]: "https://thenextdoor.org",
    [keys.PHONE]: "6152518805",
    [keys.DATE_CHECKED]: "2024-01-06",
    [keys.ADDRESS_1]: "402 22nd Avenue N.",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
  },
];

module.exports = data;
