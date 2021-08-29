const { keys, build, templates } = require( '../../constants' );
const fs = require( 'fs' );
const get = require( 'lodash/get' );
const forEach = require( 'lodash/forEach' );
const buildState = require( './buildState' );
const addAssetsToTemplate = require( './addAssetsToTemplate' );

function buildCountry( country ) {
  const urlName = get( country, keys.URL_NAME );
  const name = get( country, keys.NAME );
  const states = get( country, keys.STATES );

  const countryDirectoryPath = `${ build.DIST_PATH }/${ urlName }`;
  const countryPagePath = `${ countryDirectoryPath }/index.html`;

  fs.mkdirSync( countryDirectoryPath );

  const pageTitle = `Help Sheets - ${ name }`;
  const pageContent = name;

  const pageTemplate = fs.readFileSync( templates.PAGE_PATH );

  let pageHTML = `${ pageTemplate }`;

  pageHTML = addAssetsToTemplate( build.ASSETS_COUNTRY_PREFIX, pageHTML );

  pageHTML = pageHTML.replace( templates.PAGE_TITLE, pageTitle );
  pageHTML = pageHTML.replace( templates.PAGE_CONTENT, pageContent );

  fs.writeFileSync( countryPagePath, pageHTML );

  if ( states ) {
    forEach( states, state => {
      buildState( state, country );
    } );
  }
}

module.exports = buildCountry;
