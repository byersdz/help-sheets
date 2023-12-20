const data = require( '../data' );
const { keys, build } = require( '../constants' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const fs = require( 'fs' );
const { rimrafSync } = require( 'rimraf' );
const ncp = require( 'ncp' );
const buildFrontPage = require( './page-builders/buildFrontPage' );
const buildCountry = require( './page-builders/buildCountry' );

const countries = get( data, keys.COUNTRIES );

rimrafSync( build.DIST_PATH );

if ( !fs.existsSync( build.DIST_PATH ) ) {
  fs.mkdirSync( build.DIST_PATH );
}

ncp( build.ASSETS_SOURCE_PATH, build.ASSETS_DESTINTAION_PATH, err => {
  if ( err ) {
    console.error( err );
  }

  buildFrontPage( data );

  forEach( countries, country => {
    buildCountry( country );
  } );
} );
