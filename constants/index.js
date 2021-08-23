const constants = {};

const keys = {};

keys.URL_NAME = 'urlName';
keys.ID = 'id';
keys.DEFAULT_LANGUAGE = 'defaultLanguage';
keys.SUPPORTED_LANGUAGES = 'supportedLanguages';
keys.ACCESS_POINTS = 'accessPoints';
keys.RESOURCES = 'resources';
keys.EMERGENCY_SHELTERS = 'emergencyShelters';
keys.BASIC_NEEDS = 'basicNeeds';
keys.NAME = 'name';
keys.DESCRIPTION = 'description';
keys.PHONE = 'phone';
keys.URL = 'url';
keys.ADDRESS_1 = 'address1';
keys.ADDRESS_2 = 'address2';
keys.CITY = 'city';
keys.STATE = 'state';
keys.ZIP_CODE = 'zipCode';
keys.PROVIDES = 'provides';
keys.HOURS = 'hours';
keys.CITIES = 'cities';
keys.STATES = 'states';
keys.COUNTRIES = 'countries';

const languageCodes = {};

languageCodes.ENGLISH = 'en';

const build = {};

build.DIST_PATH = './dist';
build.ASSETS_SOURCE_PATH = './assets';
build.ASSETS_DESTINTAION_PATH = './dist/assets';
build.ASSETS_COUNTRY_PREFIX = '../assets/';
build.ASSETS_STATE_PREFIX = '../../assets/';
build.ASSETS_CITY_PREFIX = '../../../assets/';
build.NORMALIZE_CSS_PATH = 'css/normalize.css';
build.STYLES_CSS_PATH = 'css/styles.css';

const templates = {};

templates.PAGE_PATH = './templates/page.html';
templates.PAGE_TITLE = '{{pageTitle}}';
templates.PAGE_CONTENT = '{{pageContent}}';
templates.NORMALIZE_CSS = '{{normalizeCss}}';
templates.STYLES_CSS = '{{stylesCss}}';

constants.keys = keys;
constants.languageCodes = languageCodes;
constants.build = build;
constants.templates = templates;

module.exports = constants;
