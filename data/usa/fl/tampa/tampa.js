const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Tampa";
data[keys.URL_NAME] = "tampa";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Daily Bread - Downtown",
    [keys.URL]: "https://www.christianservicecenter.org/dailybread",
    [keys.PHONE]: "4074252523",
    [keys.DATE_CHECKED]: "2025-04-19",
    [keys.ADDRESS_1]: "808 W. Central Blvd.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32805",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Meals",
        [keys.HOURS]: "Mon-Fri noon-1pm, Sun 11am-noon",
      },
    ],
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Orlando Rescue Mission Project Hope",
    [keys.URL]: "https://www.ourm.org/need-help",
    [keys.PHONE]: "4074233596",
    [keys.DATE_CHECKED]: "2025-04-09",
    [keys.ADDRESS_1]: "3300 W. Colonial Dr.",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32808",
    [keys.SERVES]: [serves.MEN],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Orange County Energy Bill Assistance",
    [keys.URL]: "https://www.orangecountyfl.net/FamiliesHealthSocialSvcs/EnergyBillAssistance.aspx",
    [keys.DATE_CHECKED]: "2025-05-03",
    [keys.PHONE]: "4078367429",
    [keys.ADDRESS_1]: "2100 E Michigan Street",
    [keys.CITY]: "Orlando",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "32806",
  },
];

module.exports = data;
