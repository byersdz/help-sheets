console.log( 'transform data' );

// transform data from code to json objects for to accomodate the admin tool

const data = require( '../data' );
const { keys } = require( '../constants' );
const fs = require( 'fs' );
const rimraf = require( 'rimraf' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );

const countries = get( data, keys.COUNTRIES );

const newDataPath = './newdata';

rimraf.sync( newDataPath );

if ( !fs.existsSync( newDataPath ) ) {
  fs.mkdirSync( newDataPath );
}

forEach( countries, country => {
  const countryObject = {};
  countryObject[keys.NAME] = country[keys.NAME];
  countryObject[keys.URL_NAME] = country[keys.URL_NAME];
  countryObject[keys.DEFAULT_LANGUAGE] = country[keys.DEFAULT_LANGUAGE];
  countryObject[keys.SUPPORTED_LANGUAGES] = country[keys.SUPPORTED_LANGUAGES];
  countryObject[keys.ACCESS_POINTS] = country[keys.ACCESS_POINTS];
  countryObject[keys.BASIC_NEEDS] = [];
  countryObject[keys.EMERGENCY_SHELTERS] = [];
  countryObject[keys.RESOURCES] = country[keys.RESOURCES];

  for ( let i = 0; i < countryObject[keys.RESOURCES].length; i += 1 ) {
    const item = countryObject[keys.RESOURCES][i];
    if ( !item[keys.ID] ) {
      item[keys.ID] = item[keys.NAME].replace( /[^A-Z0-9]+/ig, '-' ).toLowerCase();
    }
  }

  const countryDirectoryPath = `${ newDataPath }/${ countryObject[keys.URL_NAME] }`;
  fs.mkdirSync( countryDirectoryPath );

  const countryDataString = JSON.stringify( countryObject, null, 2 );
  fs.writeFileSync( `${ countryDirectoryPath }/${ countryObject[keys.URL_NAME] }.json`, countryDataString );

  const states = country[keys.STATES];
  forEach( states, state => {
    const stateObject = {};
    stateObject[keys.NAME] = state[keys.NAME];
    stateObject[keys.URL_NAME] = state[keys.URL_NAME];
    stateObject[keys.DEFAULT_LANGUAGE] = state[keys.DEFAULT_LANGUAGE];
    stateObject[keys.SUPPORTED_LANGUAGES] = state[keys.SUPPORTED_LANGUAGES];
    stateObject[keys.ACCESS_POINTS] = get( state, keys.ACCESS_POINTS, [] );
    stateObject[keys.BASIC_NEEDS] = get( state, keys.BASIC_NEEDS, [] );
    stateObject[keys.EMERGENCY_SHELTERS] = get( state, keys.EMERGENCY_SHELTERS, [] );
    stateObject[keys.RESOURCES] = get( state, keys.RESOURCES, [] );
    stateObject[keys.EXCLUDE_LIST] = get( state, keys.EXCLUDE_LIST, [] );

    for ( let i = 0; i < stateObject[keys.RESOURCES].length; i += 1 ) {
      const item = stateObject[keys.RESOURCES][i];
      if ( !item[keys.ID] ) {
        item[keys.ID] = item[keys.NAME].replace( /[^A-Z0-9]+/ig, '-' ).toLowerCase();
      }
    }

    const stateDirectoryPath = `${ countryDirectoryPath }/${ stateObject[keys.URL_NAME] }`;
    fs.mkdirSync( stateDirectoryPath );
    const stateDataString = JSON.stringify( stateObject, null, 2 );
    fs.writeFileSync( `${ stateDirectoryPath }/${ stateObject[keys.URL_NAME] }.json`, stateDataString );

    const cities = state[keys.CITIES];
    forEach( cities, city => {
      const cityObject = {};
      cityObject[keys.NAME] = city[keys.NAME];
      cityObject[keys.URL_NAME] = city[keys.URL_NAME];
      cityObject[keys.DEFAULT_LANGUAGE] = city[keys.DEFAULT_LANGUAGE];
      cityObject[keys.SUPPORTED_LANGUAGES] = city[keys.SUPPORTED_LANGUAGES];
      cityObject[keys.ACCESS_POINTS] = get( city, keys.ACCESS_POINTS, [] );
      cityObject[keys.BASIC_NEEDS] = get( city, keys.BASIC_NEEDS, [] );
      cityObject[keys.EMERGENCY_SHELTERS] = get( city, keys.EMERGENCY_SHELTERS, [] );
      cityObject[keys.RESOURCES] = get( city, keys.RESOURCES, [] );
      cityObject[keys.EXCLUDE_LIST] = get( city, keys.EXCLUDE_LIST, [] );

      for ( let i = 0; i < cityObject[keys.ACCESS_POINTS].length; i += 1 ) {
        const item = cityObject[keys.ACCESS_POINTS][i];
        if ( !item[keys.ID] ) {
          item[keys.ID] = item[keys.NAME].replace( /[^A-Z0-9]+/ig, '-' ).toLowerCase();
        }
      }

      for ( let i = 0; i < cityObject[keys.BASIC_NEEDS].length; i += 1 ) {
        const item = cityObject[keys.BASIC_NEEDS][i];
        if ( !item[keys.ID] ) {
          item[keys.ID] = item[keys.NAME].replace( /[^A-Z0-9]+/ig, '-' ).toLowerCase();
        }
      }

      for ( let i = 0; i < cityObject[keys.EMERGENCY_SHELTERS].length; i += 1 ) {
        const item = cityObject[keys.EMERGENCY_SHELTERS][i];
        if ( !item[keys.ID] ) {
          item[keys.ID] = item[keys.NAME].replace( /[^A-Z0-9]+/ig, '-' ).toLowerCase();
        }
      }

      for ( let i = 0; i < cityObject[keys.RESOURCES].length; i += 1 ) {
        const item = cityObject[keys.RESOURCES][i];
        if ( !item[keys.ID] ) {
          item[keys.ID] = item[keys.NAME].replace( /[^A-Z0-9]+/ig, '-' ).toLowerCase();
        }
      }

      const cityDirectoryPath = `${ stateDirectoryPath }/${ cityObject[keys.URL_NAME] }`;
      fs.mkdirSync( cityDirectoryPath );
      const cityDataString = JSON.stringify( cityObject, null, 2 );
      fs.writeFileSync( `${ cityDirectoryPath }/${ cityObject[keys.URL_NAME] }.json`, cityDataString );
    } );
  } );
} );
