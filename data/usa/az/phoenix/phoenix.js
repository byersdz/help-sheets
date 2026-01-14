const { keys, languageCodes, serves } = require( "../../../../constants" );

const data = {};

data[keys.NAME] = "Phoenix";
data[keys.URL_NAME] = "phoenix";
data[keys.DEFAULT_LANGUAGE] = languageCodes.ENGLISH;
data[keys.SUPPORTED_LANGUAGES] = [languageCodes.ENGLISH];

data[keys.EXCLUDE_LIST] = [
  "usa-shelter-directory",
];

data[keys.ACCESS_POINTS] = [
];

data[keys.BASIC_NEEDS] = [
  {
    [keys.NAME]: "Andre House",
    [keys.URL]: "https://andrehouse.org/what-we-do",
    [keys.PHONE]: "6022550580",
    [keys.DATE_CHECKED]: "2026-01-13",
    [keys.ADDRESS_1]: "213 S. 11th Ave",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85007",
    [keys.DESCRIPTION]: "Also provides showers, hygiene kits",
    [keys.PROVIDES]: [
      {
        [keys.DESCRIPTION]: "Dinner",
        [keys.HOURS]: "Sat-Thur 5pm-6pm",
      },
      {
        [keys.DESCRIPTION]: "Clothing",
        [keys.HOURS]: "Tue/Thur 12:30pm-3pm, Sat 1pm-3pm",
      },
      {
        [keys.DESCRIPTION]: "Laundry",
        [keys.HOURS]: "Mon-Wed 8:30am-noon",
      },
    ],
  },
  {
    [keys.NAME]: "St. Mary's Food Bank",
    [keys.URL]: "https://www.stmarysfoodbank.org",
    [keys.PHONE]: "6022423663",
    [keys.DATE_CHECKED]: "2026-01-14",
  },
];

data[keys.EMERGENCY_SHELTERS] = [
  {
    [keys.NAME]: "Central Arizona Shelter Services",
    [keys.URL]: "https://www.cassaz.org/get-help",
    [keys.PHONE]: "6042566945",
    [keys.DATE_CHECKED]: "2025-12-30",
    [keys.ADDRESS_1]: "204 S 12th Ave",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85007",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "HomeBase",
    [keys.URL]: "https://www.nativeconnections.org/housing/youth/homebase-youth-services",
    [keys.PHONE]: "6022635531",
    [keys.DATE_CHECKED]: "2026-01-01",
    [keys.ADDRESS_1]: "931 E. Devonshire Ave.",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85014",
    [keys.SERVES]: [serves.AGE_18_TO_24],
  },
  {
    [keys.NAME]: "Phoenix Dream Center",
    [keys.URL]: "https://phoenixdreamcenter.org",
    [keys.PHONE]: "6023468700",
    [keys.DATE_CHECKED]: "2026-01-02",
    [keys.ADDRESS_1]: "3210 Grand Ave",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85017",
    [keys.SERVES]: [serves.MEN, serves.WOMEN],
  },
  {
    [keys.NAME]: "UMOM Halle Women's Center",
    [keys.URL]: "https://www.umom.org/find-help",
    [keys.PHONE]: "6023625833",
    [keys.DATE_CHECKED]: "2026-01-06",
    [keys.ADDRESS_1]: "3424 E Van Buren St",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85008",
    [keys.SERVES]: [serves.WOMEN],
  },
  {
    [keys.NAME]: "Vista Colina Family Shelter",
    [keys.URL]: "https://www.cassaz.org/services",
    [keys.PHONE]: "6042566945",
    [keys.DATE_CHECKED]: "2025-12-30",
    [keys.ADDRESS_1]: "1050 W. Mountain View Rd",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85021",
    [keys.SERVES]: [serves.FAMILIES_WITH_CHILDREN],
  },
  {
    [keys.NAME]: "The Haven",
    [keys.URL]: "https://www.cassaz.org/services",
    [keys.PHONE]: "6042566945",
    [keys.DATE_CHECKED]: "2025-12-30",
    [keys.ADDRESS_1]: "I-17 and Northern",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85051",
    [keys.SERVES]: [serves.AGE_55_PLUS],
  },
];

data[keys.RESOURCES] = [
  {
    [keys.NAME]: "Native American Connections",
    [keys.URL]: "https://www.nativeconnections.org",
    [keys.PHONE]: "6022543247",
    [keys.DATE_CHECKED]: "2025-12-31",
    [keys.ADDRESS_1]: "3216 N 3rd St",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85012",
    [keys.DESCRIPTION]: "Addiction recovery, medical services, housing resources",
  },
  {
    [keys.NAME]: "Homeward Bound",
    [keys.URL]: "https://turnanewleaf.org/services/housing-and-shelter/homeward-bound",
    [keys.PHONE]: "6028998089",
    [keys.DATE_CHECKED]: "2026-01-02",
    [keys.ADDRESS_1]: "2302 West Colter Street",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85015",
    [keys.DESCRIPTION]: "Affordable housing",
  },
  {
    [keys.NAME]: "U.S. Veteran Community Resource & Referral Center (CRRC)",
    [keys.URL]: "https://www.va.gov/HOMELESS/Crrc.asp",
    [keys.PHONE]: "6022486040",
    [keys.DATE_CHECKED]: "2026-01-08",
    [keys.ADDRESS_1]: "1500 E. Thomas Road",
    [keys.ADDRESS_2]: "Suite 106",
    [keys.CITY]: "Phoenix",
    [keys.STATE]: "AZ",
    [keys.ZIP_CODE]: "85014",
  },
];

module.exports = data;
