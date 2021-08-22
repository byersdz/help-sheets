const data = require( '../data' );
const { keys, build } = require( '../constants' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const fs = require( 'fs' );
const rimraf = require( 'rimraf' );
const buildCountry = require( './buildCountry' );

const countries = get( data, keys.COUNTRIES );

rimraf.sync( build.DIST_PATH );

if ( !fs.existsSync( build.DIST_PATH ) ) {
  fs.mkdirSync( build.DIST_PATH );
}

forEach( countries, country => {
  buildCountry( country );
} );
