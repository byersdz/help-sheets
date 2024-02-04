const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Nashville";
data[keys.URL_NAME] = "nashville";
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
  {
    [keys.NAME]: "Harvest Sound",
    [keys.URL]: "https://harvestsoundinternational.com",
    [keys.PHONE]: "6153271200",
    [keys.DATE_CHECKED]: "2023-12-19",
    [keys.ADDRESS_1]: "1419 Clinton St.",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "Thursday 5pm-7pm",
      },
    ],
  },
  {
    [keys.NAME]: "City Road Chapel",
    [keys.URL]: "https://cityroadchapel.org",
    [keys.PHONE]: "6158681673",
    [keys.DATE_CHECKED]: "2024-01-10",
    [keys.ADDRESS_1]: "701 Gallatin Pike S",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37115",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meal",
        [keys.HOURS]: "4th Sunday 5pm",
      },
      {
        [keys.DESCRIPTION]: "Showers",
        [keys.HOURS]: "Mon / Wed 9am - 1pm",
      },
    ],
  },
  {
    [keys.NAME]: "Second Harvest Food Bank",
    [keys.URL]: "https://www.secondharvestmidtn.org",
    [keys.PHONE]: "6153293491",
    [keys.DATE_CHECKED]: "2024-01-06",
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
  {
    [keys.NAME]: "Room in the Inn",
    [keys.URL]: "https://www.roomintheinn.org",
    [keys.DESCRIPTION]: "Winter Shelter, Transitional Housing",
    [keys.PHONE]: "6152519791",
    [keys.DATE_CHECKED]: "2023-12-08",
    [keys.ADDRESS_1]: "705 Drexel Street",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37203",
  },
  {
    [keys.NAME]: "Cold weather overflow shelter",
    [keys.URL]:
      "https://www.nashville.gov/departments/office-homeless-services/initiatives-and-programs/extreme-weather",
    [keys.PHONE]: "6158626391",
    [keys.DATE_CHECKED]: "2023-12-15",
    [keys.ADDRESS_1]: "3230 Brink Church Pike",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37207",
  },
  {
    [keys.NAME]: "Nashville Launch Pad",
    [keys.URL]: "https://www.nashvillelaunchpad.com",
    [keys.DATE_CHECKED]: "2024-01-06",
    [keys.SERVES]: [serves.AGE_18_TO_24],
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
