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
    [keys.NAME]: "Catholic Charities Tampa Hope",
    [keys.URL]: "https://www.ccdosp.org/tampa-hope",
    [keys.PHONE]: "8133942881",
    [keys.DATE_CHECKED]: "2025-05-14",
    [keys.ADDRESS_1]: "3704 E. 3rd Avenue",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33605",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "The Spring",
    [keys.URL]: "https://thespring.org/get-help/shelter",
    [keys.PHONE]: "8132477233",
    [keys.DATE_CHECKED]: "2025-05-14",
    [keys.DESCRIPTION]: "Shelter for survivors of domestic violence and their children",
  },
  {
    [keys.NAME]: "The Community Housing Solutions Center",
    [keys.URL]: "https://www.covebh.org/community-housing-solutions-center",
    [keys.PHONE]: "8136218781",
    [keys.DATE_CHECKED]: "2025-05-15",
    [keys.ADDRESS_1]: "3630 N. 50th Street",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33619",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "Metropolitan Ministries",
    [keys.URL]: "https://www.metromin.org/get-help",
    [keys.PHONE]: "8132091000",
    [keys.DATE_CHECKED]: "2025-05-15",
    [keys.ADDRESS_1]: "2002 N. Florida Ave",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
    [keys.SERVES]: [serves.WOMEN, serves.FAMILIES_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "Salvation Army",
    [keys.URL]: "https://southernusa.salvationarmy.org/florida",
    [keys.PHONE]: "8135490641",
    [keys.DATE_CHECKED]: "2025-05-16",
    [keys.ADDRESS_1]: "1514 N. Florida Avenue",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33602",
  },
  {
    [keys.NAME]: "St. Vincent de Paul CARE Center",
    [keys.URL]: "https://www.svdpsp.org/programs/homeless-services/care-center",
    [keys.PHONE]: "7279548676",
    [keys.DATE_CHECKED]: "2025-05-20",
    [keys.ADDRESS_1]: "401 15th St N",
    [keys.CITY]: "St. Petersburg",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33705",
  },
  {
    [keys.NAME]: "Dawning Family Services",
    [keys.URL]: "https://www.dawningfamilyservices.org/get-help",
    [keys.PHONE]: "8138752024",
    [keys.DATE_CHECKED]: "2025-05-22",
    [keys.ADDRESS_1]: "6718 N Armenia Ave",
    [keys.CITY]: "Tampa",
    [keys.STATE]: "FL",
    [keys.ZIP_CODE]: "33604",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
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
