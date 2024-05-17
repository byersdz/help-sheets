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
