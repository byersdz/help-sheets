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
  {
    [keys.NAME]: "Nashville Community Fridge",
    [keys.URL]: "https://linktr.ee/nashvillecommunityfridge",
    [keys.DATE_CHECKED]: "2024-03-01",
    [keys.ADDRESS_1]: "1411 Buchanan Street",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37208",
  },
  {
    [keys.NAME]: "The Store",
    [keys.URL]: "https://www.thestore.org/need-assistance.html",
    [keys.DESCRIPTION]: "Free grocery store",
    [keys.PHONE]: "6154608331",
    [keys.DATE_CHECKED]: "2024-03-01",
    [keys.ADDRESS_1]: "2009 12th Avenue South",
    [keys.CITY]: "Nashville",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37204",
  },
  {
    [keys.NAME]: "Adventist Community Services",
    [keys.URL]: "https://www.acsgreaternashville.com",
    [keys.DESCRIPTION]: "Food Pantry, Clothing, Hygiene Kits",
    [keys.PHONE]: "6158606001",
    [keys.DATE_CHECKED]: "2024-03-13",
    [keys.ADDRESS_1]: "403 Gallatin Pike S. ",
    [keys.CITY]: "Madison",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37115",
  },
  {
    [keys.NAME]: "Madison Church of Christ Benevolence Center",
    [keys.URL]: "https://madisonchurchtn.org/benevolence/",
    [keys.DESCRIPTION]: "Food Pantry, Clothing, Meals on Wheels",
    [keys.PHONE]: "6158683360",
    [keys.DATE_CHECKED]: "2024-03-13",
    [keys.ADDRESS_1]: "106 Gallatin Pike North",
    [keys.CITY]: "Madison",
    [keys.STATE]: "TN",
    [keys.ZIP_CODE]: "37115",
  },
  {
    [keys.NAME]: "One Generation Away",
    [keys.URL]: "https://onegenaway.com/mobile-pantry/",
    [keys.DESCRIPTION]: "Mobile Pantry",
    [keys.PHONE]: "8446424673",
    [keys.DATE_CHECKED]: "2024-03-13",
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
  {
    [keys.NAME]: "Bridges Domestic Violence Shelter",
    [keys.URL]: "https://www.bridgesdvc.org",
    [keys.PHONE]: "6155995777",
    [keys.DATE_CHECKED]: "2024-02-16",
  },
  {
    [keys.NAME]: "The Mary Parrish Center",
    [keys.URL]: "https://www.maryparrish.org",
    [keys.PHONE]: "6159550620",
    [keys.DATE_CHECKED]: "2024-02-16",
    [keys.DESCRIPTION]:
      "Providing survivors of interpersonal violence and their children safe, accessible and compassionate housing",
  },
  {
    [keys.NAME]: "AGAPE",
    [keys.URL]: "https://agapenashville.org/domestic-violence-care/get-help/",
    [keys.PHONE]: "6158600003",
    [keys.DATE_CHECKED]: "2024-03-15",
    [keys.DESCRIPTION]: "Domestic violence helpline, emergency shelter",
  },
  {
    [keys.NAME]: "YWCA Domestic Violence Center",
    [keys.URL]: "https://www.ywcanashville.com/domestic-violence",
    [keys.PHONE]: "8003344628",
    [keys.DATE_CHECKED]: "2024-03-15",
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
  {
    [keys.NAME]: "Neighborhood Health",
    [keys.DESCRIPTION]: "serving as a healthcare home without regard to the ability to pay.",
    [keys.URL]: "https://www.neighborhoodhealthtn.org",
    [keys.PHONE]: "6152273000",
    [keys.DATE_CHECKED]: "2024-03-18",
  },
  {
    [keys.NAME]: "Hope Station",
    [keys.URL]: "https://www.hopestationtn.org/",
    [keys.PHONE]: "6154802765",
    [keys.DATE_CHECKED]: "2024-03-15",
    [keys.DESCRIPTION]: "Temporary rent and utility assistance for single mothers",
  },
  {
    [keys.NAME]: "Where to turn in Nashville",
    [keys.URL]: "https://www.wttin.org",
    [keys.DATE_CHECKED]: "2024-03-19",
    [keys.DESCRIPTION]: "Directory of resources",
  },
];

module.exports = data;
